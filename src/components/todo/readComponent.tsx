
// const initState: Todo = {
//     tno: 0,
//     title: '',
//     writer: '',
//     regDate: '',
//     modDate: ''
// };

function ReadComponent() {


    return (
        <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg">



            <h2 className="text-xl font-semibold text-gray-800 mb-4">📌 Todo Read Component</h2>

            <div className="space-y-3">
                <div>
                    <label className="block text-gray-600 text-sm font-medium">번호</label>
                    <input type="text"  readOnly
                           className="w-full p-2 border rounded bg-gray-100 text-gray-700"/>
                </div>

                <div>
                    <label className="block text-gray-600 text-sm font-medium">제목</label>
                    <input type="text"  readOnly
                           className="w-full p-2 border rounded bg-gray-100 text-gray-700"/>
                </div>

                <div>
                    <label className="block text-gray-600 text-sm font-medium">작성자</label>
                    <input type="text"  readOnly
                           className="w-full p-2 border rounded bg-gray-100 text-gray-700"/>
                </div>

                <div>
                    <label className="block text-gray-600 text-sm font-medium">등록일</label>
                    <input type="text" readOnly
                           className="w-full p-2 border rounded bg-gray-100 text-gray-700"/>
                </div>

                <div>
                    <label className="block text-gray-600 text-sm font-medium">수정일</label>
                    <input type="text" readOnly
                           className="w-full p-2 border rounded bg-gray-100 text-gray-700"/>
                </div>
                <div className="flex justify-end space-x-4">
                    <button
                        className="px-4 py-2 bg-blue-500 text-white rounded"
                    >List</button>
                    <button
                        className="px-4 py-2 bg-green-500 text-white rounded"
                    >Modify</button>
                </div>
            </div>
        </div>
    );
}

export default ReadComponent;
