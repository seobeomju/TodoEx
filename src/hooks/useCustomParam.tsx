import {useLocation, useNavigate, useSearchParams} from "react-router";
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
    const location = useLocation()

    //쿼리스트링 유지
    const queryString = location.search

    const page:number = getNumber(searchParams.get("page"),1)

    const size:number = getNumber(searchParams.get("size"),10)

    const [refresh, setRefresh] = useState(false)

    const moveRead = (tnoNumber:number, path ?: string)=>{

        //기본은 read 이동, path 있을 시 path로 이동
        const movePath = !path ? 'read':path

        //todo/path/21?page=1&size=10
        navigate(`/todo/${movePath}/${tnoNumber}${queryString}`)

    }

    const moveList=()=>{
        navigate(`/todo/list${queryString}`)
    }

    const movePage = (pageNum:number):void=>{

        //동일 페이지 클릭
        if(pageNum === page){
            setRefresh(!refresh)
            return
        }

        navigate(`/todo/list?page=${pageNum}&size=${size}`)
    }

    return {page,size,refresh, movePage, moveRead, moveList}

}