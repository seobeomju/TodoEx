import {useActionState} from "react";

async function addProduct(state: unknown, formData: FormData){

    console.log(state,formData)

    return {result:123}

}

function AddComponent19() {
    //배열을 반환
    const [state,action,isPending]=useActionState(addProduct,{result:0})

    return (
        <div>
            <form>
                <div>
                    Product Name
                    <input type={'text'} name={'pname'}
                           className={'m-2 border-1 p-2'}
                    />
                </div>
                <div>
                    Product Desc
                    <input type={'text'} name={'pdesc'}
                           className={'m-2 border-1 p-2'}
                    />
                </div>

                <div>
                    Product Price
                    <input type={'number'} name={'price'}
                           className={'m-2 border-1 p-2'}
                    />
                </div>

                <div>
                    Product Files
                    <input type={'file'} name={'files'}
                           multiple={true}
                           className={'m-2 border-1 p-2'}
                    />
                </div>
            </form>
        </div>
    );
}

export default AddComponent19;