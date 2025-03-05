import {NavLink} from "react-router";

type SidebarProps = {
    isOpen: boolean;
    toggleSidebar: () => void;
};

const CustomSidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => (
    <aside
        className={`fixed inset-y-0 left-0 w-64 bg-gray-800 text-white transform ${
            isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform lg:translate-x-0 lg:relative lg:w-64 p-4`}
    >
        <button className="lg:hidden mb-4" onClick={toggleSidebar}>
            ✕
        </button>
        <nav>
            <ul>
                <li className="py-2">
                    <NavLink to="/" style={({ isActive }) => ({ color: isActive ? "red" : "white" })}>
                        홈
                    </NavLink>
                </li>
                <li className="py-2">
                    <NavLink to="/about" className={({ isActive }) => (isActive ? "active-link" : "")}>
                        소개
                    </NavLink>
                </li>
                <li className="py-2">Settings</li>
            </ul>
        </nav>
    </aside>
);

export default CustomSidebar