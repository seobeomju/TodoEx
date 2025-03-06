import {useParams} from "react-router";
import {useEffect, useState} from "react";
import {getTodo} from "../../api/todoApi.tsx";

const initState:Todo = {
    tno:0,
    title:'',
    writer:'',
    regDate:'',
    modDate:''
}

function ReadComponent() {

    const [todo, setTodo] = useState<Todo>(initState)

    const {tnoStr} = useParams()//문자열

    useEffect(() => {

        getTodo(Number(tnoStr)).then(data => {
            setTodo(data)
        })

    },[tnoStr])

    return (
        <div>
            <div>Todo Read Component</div>
        </div>
    );
}

export default ReadComponent;