import axios from "axios";


const HOST:string = import.meta.env.VITE_API_SERVER

export async function getProductsList ( page:number = 1 , size: number = 10  ): Promise<PageResponse2<ProductListDTO>> {

    const param = {page:page, size:size}

    const res =
        await axios.get(`${HOST}/products/list`, {params: param})

    return res.data
}