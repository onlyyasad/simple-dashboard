import { HiOutlineMail } from "react-icons/hi";
import { BiBell } from "react-icons/bi";

const NavBar = () => {
    return (
        <div className="navbar p-4 bg-base-100">
            <div className="navbar-start">
                <input type="text" placeholder="Search Dashboard" className="input input-bordered border-none py-1 bg-base-200 rounded-3xl w-full" />
            </div>
            <div className="navbar-end gap-3">
                <button className="btn btn-ghost bg-base-200 btn-circle">
                    <div className="indicator">
                        <HiOutlineMail className="text-xl" />
                        <span className="badge badge-xs badge-primary indicator-item"></span>
                    </div>
                </button>
                <button className="btn btn-ghost bg-base-200 btn-circle">
                    <div>
                        <BiBell className="text-xl" />
                    </div>
                </button>
                <div className="btn-circle">
                    <img className="rounded-full" src="https://i.ibb.co/dr63wjd/Dark-DPSquare.jpg" alt="" />
                </div>

            </div>
        </div>
    );
};

export default NavBar;