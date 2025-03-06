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
        <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">📌 Todo Read Component</h2>

            <div className="space-y-3">
                <div>
                    <label className="block text-gray-600 text-sm font-medium">번호</label>
                    <input type="text" value={todo.tno} readOnly className="w-full p-2 border rounded bg-gray-100 text-gray-700" />
                </div>

                <div>
                    <label className="block text-gray-600 text-sm font-medium">제목</label>
                    <input type="text" value={todo.title} readOnly className="w-full p-2 border rounded bg-gray-100 text-gray-700" />
                </div>

                <div>
                    <label className="block text-gray-600 text-sm font-medium">작성자</label>
                    <input type="text" value={todo.writer} readOnly className="w-full p-2 border rounded bg-gray-100 text-gray-700" />
                </div>

                <div>
                    <label className="block text-gray-600 text-sm font-medium">등록일</label>
                    <input type="text" value={todo.regDate} readOnly className="w-full p-2 border rounded bg-gray-100 text-gray-700" />
                </div>

                <div>
                    <label className="block text-gray-600 text-sm font-medium">수정일</label>
                    <input type="text" value={todo.modDate} readOnly className="w-full p-2 border rounded bg-gray-100 text-gray-700" />
                </div>
            </div>
        </div>
    );
}

export default ReadComponent;
