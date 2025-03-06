import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { getTodo } from "../../api/todoApi.tsx";

const initState: Todo = {
    tno: 0,
    title: '',
    writer: '',
    regDate: '',
    modDate: ''
};

function ReadComponent() {

    const [todo, setTodo] = useState<Todo>(initState);

    const params = useParams(); // useParams에서 가져옴

    const tnoStr = params.tno

    useEffect(() => {

        const tno = Number(tnoStr);

        console.log("tno:" , tno)

        getTodo(tno)
            .then(data => {
                console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA")
                setTodo(data)
            })
            .catch(error => console.error("Error fetching todo:", error));
    }, [tnoStr]);

    return (
        <div>
            <h2>Todo Read Component</h2>
            <p><strong>번호:</strong> {todo.tno}</p>
            <p><strong>제목:</strong> {todo.title}</p>
            <p><strong>작성자:</strong> {todo.writer}</p>
            <p><strong>등록일:</strong> {todo.regDate}</p>
            <p><strong>수정일:</strong> {todo.modDate}</p>
        </div>
    );
}

export default ReadComponent;
