import useCustomParam from "../../hooks/useCustomParam.tsx";
import {useEffect, useState} from "react";
import {getProductsList} from "../../api/productsApi.tsx";
import LoadingComponent from "../common/loadingComponent.tsx";

const initState:PageResponse2<ProductListDTO>={
    dtoList:[],
    next:false,
    prev:false,
    current:0,
    nextPage:0,
    pageNumList:[],
    prevPage:0,
    totalPage:0
}


function ListComponent() {
    const {page, size, loading, setLoading,refresh,moveRead,movePage}=useCustomParam()

    const [serverData, setServerData] = useState(initState)

    useEffect(() => {
        getProductsList(page,size).then(data=>{
            setServerData(data)
        })
    }, [page,size,refresh]);


    return (
        <div>
            <div className="border-2 border-blue-100 mt-10 mr-2 ml-2">

                <LoadingComponent isLoading={loading}/>

                <div className="flex flex-wrap mx-auto justify-center p-6">
                    List Component
                </div>

                <div>
                    <ul className="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden m-2">
                        {serverData.dtoList.map(product =>
                            <li key={product.pno} onClick={()=>moveRead(product.pno)}>
                                <img src={`http://122.34.51.94:8090/api/products/view/s_${product.uploadFileNames[0]}`}/>
                                {product.pno} - {product.pname}
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default ListComponent;