import {Outlet} from "react-router";

function ProductIndexPage() {
    return (
        <div>
            <div>Product Index Page</div>
            <div>
                Product Sub Menu
            </div>
            <div>
                <Outlet></Outlet>
            </div>

        </div>
    );
}

export default ProductIndexPage;