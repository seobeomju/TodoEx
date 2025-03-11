import {Route} from "react-router";
import ProductIndexPage from "../pages/products/indexPage.tsx";
import {lazy, Suspense} from "react";

const Loading = <div>Loading..............</div>
const ProductsList = lazy(() =>
    import('../pages/products/listPage.tsx'))


export default function productsRouter() {
    return(
        <Route path='/products' element={<ProductIndexPage/>}>
            <Route path='list'
                   element={<Suspense fallback={Loading}><ProductsList/></Suspense>}></Route>
        </Route>
    )
}