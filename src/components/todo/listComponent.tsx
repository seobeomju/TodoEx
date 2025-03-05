import {useSearchParams} from "react-router";

function ListComponent() {

    const [searchParams] = useSearchParams()

    const pageStr:string | null = searchParams.get("page")
    const page: number = !pageStr ? 1 : Number(pageStr)

    const sizeStr:string | null = searchParams.get("size")
    const size: number = !sizeStr ? 10 : Number(pageStr)

    console.log(page, size)



    return (
        <div className="border-2 border-blue-100 mt-10 mr-2 ml-2">

            <div className="flex flex-wrap mx-auto justify-center p-6">
                List Component
            </div>
        </div>
    );
}

export default ListComponent;