import {useParams} from "react-router";
import {useEffect, useState} from "react";
import {getProduct} from "../../api/productsApi.tsx";

const initState:ProductListDTO = {
    pno: 0,
    pname: '',
    pdesc: '',
    price: 0,
    delFlag: false,
    uploadFileNames: [],
    files: []
}


function ModifyComponent() {

    const {pno} = useParams()

    const [product, setProduct] = useState<ProductListDTO>(initState)

    useEffect(() => {

        getProduct(Number(pno)).then(data => {
            setProduct(data)
        })

    }, [pno]);

    const hideImage=(fileName: string)=>{
        const oldImages = product.uploadFileNames

        const renewalImages = oldImages.filter(img => img !==fileName)

        setProduct(prevState => ({...prevState,uploadFileNames:renewalImages}))

    }

    return (
        <div>
                <p>{product.pno}</p>
                <p>{product.pname}</p>
                <p>{product.price}</p>

                <ul>
                    {product.uploadFileNames.map(fileName => {

                        return (
                            <li key={fileName}>
                                <div>
                                <img src={`http://122.34.51.94:8090/api/products/view/s_${fileName}`}/>
                                <button className={'border-1 m-2 p-2'}
                                        onClick={()=>hideImage(fileName)}
                                >DEL</button>
                                </div>
                            </li>
                        )

                    })}
                </ul>
        </div>
    );
}

export default ModifyComponent;