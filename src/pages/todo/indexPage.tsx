import CustomLayout from "../../layouts/customLayout.tsx";
import {Outlet} from "react-router";

function TodoIndexPage() {
    return (
        <CustomLayout>
            <div>
                LIST  ADD
            </div>
            <div>
                <Outlet></Outlet>
            </div>
        </CustomLayout>
    );
}

export default TodoIndexPage;