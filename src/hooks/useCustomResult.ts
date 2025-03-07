import {useState} from "react";
import {useNavigate} from "react-router";


export default function useCustomResult(){

    const [result, setResult] = useState(false)
    const navigate = useNavigate()
    const closeResultModal=()=>{

        setResult(false)
        navigate(`/todo/list`)
    }
    return {result,closeResultModal,setResult}

}