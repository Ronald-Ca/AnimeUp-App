import "./style.css"
import { FaHome } from "react-icons/fa";
import { FaAddressCard } from "react-icons/fa";
import { IoIosInformationCircle } from "react-icons/io";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { CgGhostCharacter } from "react-icons/cg";
import { LuLogOut } from "react-icons/lu";
import { CiEdit } from "react-icons/ci";
export default function Configuration() {
    return (
        <div className="page-config">
            <div className="header-config">
                <h2>< CiEdit />Editor Mode</h2>
                <a href="">Logout<LuLogOut /></a>
            </div>
            <div className="config">
                <div className="menu-config">
                    <a href="">< FaHome /> Home</a>
                    <a href="">< FaAddressCard /> Anime</a>
                    <a href="">< IoIosInformationCircle /> About</a>
                    <a href="">< BiSolidCategoryAlt /> Category</a>
                    <a href="">< CgGhostCharacter /> Character</a>
                </div>
                <div className="content-config">
                    <h1>Configuration</h1>
                    <p>Here you can configure your site</p>
                </div>
            </div>

        </div >
    );
}