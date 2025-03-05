import { useState } from "react";

type SidebarProps = {
    isOpen: boolean;
    toggleSidebar: () => void;
};

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => (
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
                <li className="py-2">Dashboard</li>
                <li className="py-2">Users</li>
                <li className="py-2">Settings</li>
            </ul>
        </nav>
    </aside>
);

const MainPage: React.FC = () => {
    const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
    const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

    return (
        <div className="flex h-screen bg-gray-100">
            <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
            <div className="flex-1 flex flex-col">
                <header className="bg-white shadow p-4 flex justify-between">
                    <button className="lg:hidden" onClick={toggleSidebar}>
                        ☰
                    </button>
                    <h1 className="text-xl font-bold">Admin Dashboard</h1>
                </header>
                <main className="p-4 overflow-auto">
                    <div className="bg-white p-4 shadow rounded">
                        <h2 className="text-lg font-semibold">User List</h2>
                        <table className="w-full mt-4 border border-gray-300">
                            <thead>
                            <tr className="bg-gray-200">
                                <th className="p-2 border">ID</th>
                                <th className="p-2 border">Name</th>
                                <th className="p-2 border">Email</th>
                            </tr>
                            </thead>
                            <tbody>
                            {[1, 2, 3].map((id) => (
                                <tr key={id} className="text-center">
                                    <td className="p-2 border">{id}</td>
                                    <td className="p-2 border">User {id}</td>
                                    <td className="p-2 border">user{id}@example.com</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default MainPage;