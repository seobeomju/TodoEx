import useCustomRead from "../../hooks/useCustomRead.tsx";
import {ChangeEvent} from "react";
import {deleteTodo} from "../../api/todoApi.tsx";

function ModifyComponent() {

    const {todo,setTodo, moveList, moveRead} = useCustomRead()

    const changeTitle = (e:ChangeEvent<HTMLInputElement>):void=>{
        const value = e.target.value
        setTodo(prevState => ({...prevState,title:value}))
    }
    const clickDelete=()=>{
        deleteTodo(todo.tno).then(result=>{
            console.log("delete "+ result)
            moveList()
        })
    }

    return (
        <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg">


            <h2 className="text-xl font-semibold text-gray-800 mb-4">📌 Todo Modify Component</h2>

            <div className="space-y-3">
                    <div>
                        <label className="block text-gray-600 text-sm font-medium">번호</label>
                        <input type="text"  readOnly value={todo.tno}
                               className="w-full p-2 border rounded bg-gray-100 text-gray-700"/>
                    </div>

                    <div>
                        <label className="block text-gray-600 text-sm font-medium">제목</label>
                        <input type="text"  value={todo.title}
                               onChange={changeTitle}
                               className="w-full p-2 border rounded bg-gray-100 text-gray-700"/>
                    </div>

                    <div>
                        <label className="block text-gray-600 text-sm font-medium">작성자</label>
                        <input type="text"  readOnly value={todo.writer}
                               className="w-full p-2 border rounded bg-gray-100 text-gray-700"/>
                    </div>

                    <div>
                        <label className="block text-gray-600 text-sm font-medium">등록일</label>
                        <input type="text" readOnly value={todo.regDate}
                               className="w-full p-2 border rounded bg-gray-100 text-gray-700"/>
                    </div>

                    <div>
                        <label className="block text-gray-600 text-sm font-medium">수정일</label>
                        <input type="text" readOnly value={todo.modDate}
                               className="w-full p-2 border rounded bg-gray-100 text-gray-700"/>
                    </div>
                    <div className="flex justify-end space-x-4">
                        <button
                            className="px-4 py-2 bg-blue-500 text-white rounded"
                            onClick={moveList}
                        >List</button>
                        <button
                            className="px-4 py-2 bg-red-500 text-white rounded"
                            onClick={clickDelete}
                        >Delete</button>
                        <button
                            className="px-4 py-2 bg-green-500 text-white rounded"
                            onClick={()=> moveRead(todo.tno)}
                        >Cancel</button>
                    </div>
            </div>
        </div>
    );
}

export default ModifyComponent;