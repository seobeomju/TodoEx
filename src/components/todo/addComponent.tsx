import {ChangeEvent, useState} from "react";
 import {postTodo} from "../../api/todoApi.tsx";
import ResultModal from "../common/resultModal.tsx";
import useCustomResult from "../../hooks/useCustomResult.ts";


const initState: TodoAdd = {
    title: '',
    writer: ''
}


function AddComponent() {

    const [todoAdd, setTodoAdd] = useState<TodoAdd>(initState)

    const {result,closeAddAction,setResult,msg,setMsg}=useCustomResult()

    const changeAdd = (e:ChangeEvent<HTMLInputElement>):void =>{
        const {name,value} = e.target
        //동적으로 처리
        setTodoAdd(prevState => ({...prevState,[name]:value}))
    }

    const clickAdd = () =>{
        postTodo(todoAdd).then(result=>{
            console.log(result)
            setMsg(`New Todo ${result} Added`)
            setResult(true)
        })
    }


    return (
        <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg">

            <ResultModal show={result} closeResultModal={closeAddAction} msg={msg}></ResultModal>

            <h2 className="text-xl font-semibold text-gray-800 mb-4">📌 Todo Add Component</h2>

            <div className="space-y-3">

                <div>
                    <label className="block text-gray-600 text-sm font-medium">제목</label>
                    <input type="text"
                           className="w-full p-2 border rounded bg-gray-100 text-gray-700"
                           name='title'
                           value={todoAdd.title}
                           onChange={changeAdd}
                    />
                </div>

                <div>
                    <label className="block text-gray-600 text-sm font-medium">작성자</label>
                    <input type="text"
                           className="w-full p-2 border rounded bg-gray-100 text-gray-700"
                           name='writer'
                           value={todoAdd.writer}
                           onChange={changeAdd}
                    />
                </div>

                <div className="flex justify-end space-x-4">
                    <button
                        className="px-4 py-2 bg-green-500 text-white rounded"
                        onClick={clickAdd}
                    >Add</button>
                </div>
            </div>
        </div>

    );
}

export default AddComponent;