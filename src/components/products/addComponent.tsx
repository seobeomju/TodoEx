import {ChangeEvent, useRef, useState} from "react";

const initState: ProductAdd = {
    pname:'',
    pdesc:'',
    price:0
}



function AddComponent() {

    const [product, setProduct] = useState<ProductAdd>(initState)

    //리액트 컴포넌트내에서 식별하기 위해서
    const uploadRef = useRef<HTMLInputElement | null>(null);

    const change =(e:ChangeEvent<HTMLInputElement>)=>{
        const {name,value} = e.target
        setProduct(prevState=>({...prevState,[name]:value}))
    }

    return (
        <div>

            <div>
                Product Name
                <input type={'text'} name={'pname'}
                       className={'m-2 border-1 p-2'}
                       value={product.pname}
                       onChange={change}
                />
            </div>

            <div>
                Product Desc
                <input type={'text'} name={'pdesc'}
                       className={'m-2 border-1 p-2'}
                       value={product.pdesc}
                       onChange={change}
                />
            </div>

            <div>
                Product Price
                <input type={'text'} name={'price'}
                       className={'m-2 border-1 p-2'}
                       value={product.price}
                       onChange={change}
                />
            </div>
            <div>
                Product Files
                <input type={'file'} name={'files'}
                       multiple={true}
                       className={'m-2 border-1 p-2'}
                       ref={uploadRef}
                />
            </div>
        </div>
    );
}

export default AddComponent;