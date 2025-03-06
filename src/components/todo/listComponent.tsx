

// const initState:PageResponse<Todo> = {
//     dtoList: [],
//     total:0,
//     size: 0,
//     end : 0,
//     next: false,
//     prev: false,
//     page: 0,
//     start: 0
// }

function ListComponent() {

    return (
        <div className="border-2 border-blue-100 mt-10 mr-2 ml-2">

            <div className="flex flex-wrap mx-auto justify-center p-6">
                List Component
            </div>

            <div>
                <ul className="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden m-2">
                </ul>
            </div>
        </div>
    );
}

export default ListComponent;