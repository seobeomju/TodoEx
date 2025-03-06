import {useNavigate, useSearchParams} from "react-router";
import {useState} from "react";


export default function useCustomMove () {

    const [searchParams] = useSearchParams()

    const pageStr:string | null = searchParams.get("page")
    const page: number = !pageStr ? 1 : Number(pageStr)

    const sizeStr:string | null = searchParams.get("size")
    const size: number = !sizeStr ? 10 : Number(sizeStr)


    const [loading, setLoading] = useState(false)
    const [refresh, setRefresh] = useState(false)

    const navigate = useNavigate()

    const moveListPage = (pageParam:number) => {
        //주소창의 page값
        console.log(page , pageParam)
        //동일한 페이지를 호출한다면
        if (page === pageParam) {
            setRefresh(prev => !prev);
        }
        navigate(`/todo/list?page=${pageParam}&size=${size}`)
    }

    const moveRead  = (tno:number|string) => {

        navigate(`/todo/read/${tno}?page=${page}&size=${size}`)
    }


    return {loading,setLoading, refresh, page,size, moveListPage, moveRead}



}