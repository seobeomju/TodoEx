import {Navigate, Route} from "react-router";
import ProductIndexPage from "../pages/products/indexPage.tsx";
import {lazy, Suspense} from "react";

const Loading = <div>Loading..............</div>
const ProductsList = lazy(() =>
    import('../pages/products/listPage.tsx'))
const ProductsRead = lazy(() =>
    import('../pages/products/readPage.tsx'))


export default function productsRouter() {
    return(
        <Route path='/products' element={<ProductIndexPage/>}>
            /*list로 튕겨내기*/
            <Route index element={<Navigate to={'list'} replace />}></Route>
            <Route path='list'
                   element={<Suspense fallback={Loading}><ProductsList/></Suspense>}></Route>
            <Route path='read/:pno'
                   element={<Suspense fallback={Loading}><ProductsRead/></Suspense>}></Route>
        </Route>
    )
}