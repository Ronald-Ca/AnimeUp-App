import { FaUserNinja } from "react-icons/fa";
import { FaSearchDollar } from "react-icons/fa";
import "./style.css";

export default function Header() {
    return (
        <div className="header">
            <img src="./src/images/logo/a-fire.png" alt="logo" width={50} height={50} />
            <div className="header-menu">
                <a href="#">Home</a>
                <a href="#">Gender</a>
                <a href="#">About</a>
            </div>
            <div className="header-extra">
                <div className="search">
                    <input type="text" name="search" id="search" placeholder="Search..." />
                    <div className="button-search">
                        <FaSearchDollar color="#f8cf2bf3" size={20} />
                    </div>
                </div>
                <div className="user">
                    <p>Login</p>
                    <div className="user-icon">
                        <FaUserNinja color="#f8cf2bf3" size={20} />
                    </div>
                </div>
            </div>
        </div>
    );
}