import {useSearchParams} from "react-router";
import {useEffect, useState} from "react";
import {getTodoList} from "../../api/todoApi.tsx";
import LoadingComponent from "../common/loadingComponent.tsx";

const initState:PageResponse<Todo> = {
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

    const [searchParams] = useSearchParams()

    const pageStr:string | null = searchParams.get("page")
    const page: number = !pageStr ? 1 : Number(pageStr)

    const sizeStr:string | null = searchParams.get("size")
    const size: number = !sizeStr ? 10 : Number(pageStr)

    const [serverData, setServerData] = useState(initState)
    const [loading, setLoading] = useState(false)

    useEffect(() => {

        setLoading(true)

        setTimeout(() => {
            getTodoList(page,size).then(data => {
                setServerData(data)
                setLoading(false)
            })
        }, 2000)
    },[page,size])

    return (
        <div className="border-2 border-blue-100 mt-10 mr-2 ml-2">

            <LoadingComponent isLoading={loading}/>

            <div className="flex flex-wrap mx-auto justify-center p-6">
                List Component
            </div>
            <div>
                <ul className="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden m-2">
                {serverData.dtoList.map(todo =>
                    <li
                     key={todo.tno}
                     className="flex justify-between items-center p-4 border-b last:border-none hover:bg-gray-100"
                    >
                        <span className="font-medium text-gray-900">{todo.tno}</span>
                        <span className="text-gray-600">{todo.title}</span>
                        <span className="text-gray-600">{todo.writer}</span>
                        <span className="text-gray-500 text-sm">{todo.regDate}</span>
                    </li>
                )}
                </ul>
            </div>
        </div>
    );
}

export default ListComponent;