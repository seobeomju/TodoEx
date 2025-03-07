import {useNavigate, useSearchParams} from "react-router";
import {useState} from "react";

function getNumber(str : string|null, defaultValue:number):number {
    if(!str) {
        return defaultValue
    }

    if(Number.isNaN(str)){
        return defaultValue
    }

    return Number(str)
}



export default function useCustomParam(){

    //const params = useParams()
    const [searchParams] = useSearchParams()
    const navigate = useNavigate()

    const page:number = getNumber(searchParams.get("page"),1)

    const size:number = getNumber(searchParams.get("size"),10)

    const [refresh, setRefresh] = useState(false)
    const movePage = (pageNum:number):void=>{

        navigate(`/todo/list?page=${pageNum}&size=${size}`)
    }

    return {page,size,refresh,setRefresh, movePage}

}