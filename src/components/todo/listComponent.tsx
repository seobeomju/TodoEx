import useCustomParam from "../../hooks/useCustomParam.tsx";
import {useEffect, useState} from "react";
import {getTodoList} from "../../api/todoApi.tsx";
import PageComponent from "../common/pageComponent.tsx";
import LoadingComponent from "../common/loadingComponent.tsx";

const initState:PageResponse<todoDTO> = {
    dtoList: [],
    total:0,
    size: 0,
    end : 0,
    next: false,
    prev: false,
    page: 0,
    start: 0
}


function ListComponent() {

    const{page, size,movePage,refresh, moveRead, loading,setLoading} = useCustomParam()

    const [serverData, setServerData]= useState<PageResponse<todoDTO>>(initState)
    useEffect(()=>{
        setLoading(true)
        getTodoList(page, size).then(data => {
            setServerData(data)
            setLoading(false)
        });
    },[page,size,refresh])

    return (
        <div className="border-2 border-blue-100 mt-10 mr-2 ml-2">

            <LoadingComponent isLoading={loading}/>

            <div className="flex flex-wrap mx-auto justify-center p-6">
                List Component
            </div>

            <div>
                <ul className="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden m-2">

                    {serverData.dtoList.map(todo =>
                        <li key={todo.tno} onClick={()=>moveRead(todo.tno)}>
                            {todo.tno} - {todo.title}
                        </li>
                    )}

                </ul>
            </div>

            <PageComponent serverData={serverData} moveListPage={movePage}/>
        </div>
    );
}

export default ListComponent;