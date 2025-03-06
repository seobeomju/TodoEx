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

    const {tno} = useParams()

    useEffect(() => {

        getTodo(tno).then(data => {
            setTodo(data)
        })

    },[tno])

    return (
        <div>
            <div>Todo Read Component</div>
        </div>
    );
}

export default ReadComponent;