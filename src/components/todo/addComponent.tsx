import { useState} from "react";
import {postTodo} from "../../api/todoApi.tsx";
import useCustomMove from "../../hooks/useCustomMove.tsx";

function AddComponent() {

    const [todo, setTodo] = useState<Todo>({title:'',writer:''})

    const { moveListPage} = useCustomMove()

    const handleClick = () => {

        postTodo(todo).then(todoNum => {
            alert(todoNum)
            moveListPage(1)
        })

    }


    return (
        <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg">

            <h2 className="text-xl font-semibold text-gray-800 mb-4">📌 Todo Add Component</h2>

            <div className="space-y-3">

                <div>
                    <label className="block text-gray-600 text-sm font-medium">제목</label>
                    <input type="text" value={todo.title}
                           className="w-full p-2 border rounded bg-gray-100 text-gray-700"
                           onChange={e => {
                               todo.title = e.target.value
                               setTodo({...todo})
                           }}
                    />
                </div>

                <div>
                    <label className="block text-gray-600 text-sm font-medium">작성자</label>
                    <input type="text" value={todo.writer}
                           className="w-full p-2 border rounded bg-gray-100 text-gray-700"
                           onChange={e => {
                               todo.writer = e.target.value
                               setTodo({...todo})
                           }}
                    />
                </div>

                <div className="flex justify-end space-x-4">
                    <button
                        className="px-4 py-2 bg-green-500 text-white rounded"
                        onClick={handleClick}
                    >Add</button>
                </div>
            </div>
        </div>

    );
}

export default AddComponent;