import {useSearchParams} from "react-router";
import {useEffect} from "react";
import {getTodoList} from "../../api/todoApi.tsx";

function ListComponent() {

    const [searchParams] = useSearchParams()

    const pageStr:string | null = searchParams.get("page")
    const page: number = !pageStr ? 1 : Number(pageStr)

    const sizeStr:string | null = searchParams.get("size")
    const size: number = !sizeStr ? 10 : Number(pageStr)

    useEffect(() => {

        getTodoList(page,size).then(data => {
            console.log(data)
        })

    },[page,size])




    return (
        <div className="border-2 border-blue-100 mt-10 mr-2 ml-2">

            <div className="flex flex-wrap mx-auto justify-center p-6">
                List Component
            </div>
        </div>
    );
}

export default ListComponent;