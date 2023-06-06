import { NavLink, Outlet } from "react-router-dom";
import { AiOutlineHome, AiOutlineSound, AiOutlinePieChart } from "react-icons/ai";
import { BiDiamond, BiStats, BiBell } from "react-icons/bi";
import { HiOutlineClipboardList, HiOutlineMail } from "react-icons/hi";
import { IoMdBusiness } from "react-icons/io";
import { BsBoundingBox } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import NavBar from "../../components/NavBar";


const Dashboard = () => {
    const activeClass = "text-white bg-blue-700 shadow-lg py-2 hover:bg-blue-700 hover:text-white hover:shadow-lg hover:shadow-blue-200 shadow-blue-300 duration-300 focus:bg-blue-700";
    const inactiveClass = "py-2 hover:bg-blue-700 hover:text-white hover:shadow-lg hover:shadow-blue-200 shadow-blue-300 duration-300 focus:bg-blue-700";
    return (
        <div className="font-poppins container mx-auto">
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center">
                    {/* Page content here */}
                    <div className="w-full">
                        <NavBar></NavBar>
                    </div>
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side border-r">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu flex-nowrap my-6 px-4 w-52 h-full space-y-2 text-base-content">
                        {/* Sidebar content here */}
                        <h2 className="text-xl font-bold mb-4">Clean<span className="text-blue-700">Board</span></h2>
                        <p className="px-3 py-2 text-xs">Admin Panel</p>
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive }) => isActive ? activeClass : inactiveClass}>
                                <AiOutlineHome />
                                Dashboard
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/listings"
                                className={({ isActive }) => isActive ? activeClass : inactiveClass}>
                                <BiDiamond />
                                Listings
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/orders"
                                className={({ isActive }) => isActive ? activeClass : inactiveClass}>
                                <HiOutlineClipboardList />
                                Orders & Delivery
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/stats"
                                className={({ isActive }) => isActive ? activeClass : inactiveClass}>
                                <BiStats />
                                Stats
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/finances"
                                className={({ isActive }) => isActive ? activeClass : inactiveClass}>
                                <IoMdBusiness />
                                Finances
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/marketing"
                                className={({ isActive }) => isActive ? activeClass : inactiveClass}>
                                <AiOutlineSound />
                                Marketing
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/integrations"
                                className={({ isActive }) => isActive ? activeClass : inactiveClass}>
                                <BsBoundingBox />
                                Integrations
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/reports"
                                className={({ isActive }) => isActive ? activeClass : inactiveClass}>
                                <AiOutlinePieChart />
                                Reports
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/settings"
                                className={({ isActive }) => isActive ? activeClass : inactiveClass}>
                                <FiSettings />
                                Settings
                            </NavLink>
                        </li>
                        <hr />
                        <p className="px-3 py-2 text-xs">Insights</p>
                        <li>
                            <NavLink
                                to="/inbox"
                                className={({ isActive }) => isActive ? activeClass : inactiveClass}>
                                <HiOutlineMail />
                                Inbox
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/notifications"
                                className={({ isActive }) => isActive ? activeClass : inactiveClass}>
                                <BiBell />
                                Notifications
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;