import CustomLayout from "../../layouts/customLayout.tsx";
import {Outlet} from "react-router";

function TodoIndexPage() {
    return (
        <CustomLayout>
            <div className="flex gap-4 p-4">
                <div className="flex-1 bg-white p-4 shadow rounded">
                    LIST
                </div>
                <div className="flex-1 bg-white p-4 shadow rounded">
                    ADD
                </div>
            </div>
            <div>
                <Outlet></Outlet>
            </div>
        </CustomLayout>
    );
}

export default TodoIndexPage;