import {useParams} from "react-router";
import useCustomParam from "./useCustomParam.tsx";
import {useEffect, useState} from "react";
import {getTodo} from "../api/todoApi.tsx";

//비동기 처리를 위해 임시로 만듬
const initState: todoDTO = {
    tno: 0,
    title: '',
    writer: '',
    regDate: '',
    modDate: ''
};
export default function useCustomRead(){
    const {tno} = useParams() //useParams()의 값은 모두 문자열
    const {moveRead,moveList} = useCustomParam()

    const [loading, setLoading] = useState(false)

    const [todo, setTodo] = useState(initState)
    useEffect(()=>{
        setLoading(true)
        getTodo(Number(tno)).then(data=>{
            setTodo(data)
            setLoading(false)
        })
    },[tno])

    return {tno, moveRead, moveList ,todo,setTodo,loading}
}