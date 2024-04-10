import "./style.css"
import { FaHome } from "react-icons/fa";
import { FaAddressCard } from "react-icons/fa";
import { IoIosInformationCircle } from "react-icons/io";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { CgGhostCharacter } from "react-icons/cg";
import { LuLogOut } from "react-icons/lu";
import { CiEdit } from "react-icons/ci";
import { FaBookOpen } from "react-icons/fa";
import { SiOpenjdk } from "react-icons/si";
import { useState } from "react";
import Building from "../building";
import Anime from "./anime";
import Season from "./season";
import Opening from "./opening";
export default function Configuration() {
    const [selectedMenu, setSelectedMenu] = useState<string | null>(null)

    const handleMenu = (menu: JSX.Element) => {
        return (
            <div className="content-config">
                {menu}
            </div>
        )
    }

    return (
        <div className="page-config">
            <div className="header-config">
                <h2>< CiEdit />Editor Mode</h2>
                <a href="/">Logout<LuLogOut /></a>
            </div>
            <div className="config">
                <div className="menu-config">
                    <a onClick={() => setSelectedMenu('home')}>< FaHome size={20} /> Home</a>
                    <a onClick={() => setSelectedMenu('anime')}>< FaAddressCard /> Anime</a>
                    <a onClick={() => setSelectedMenu('season')}>< FaBookOpen /> Season</a>
                    <a onClick={() => setSelectedMenu('opening')}>< SiOpenjdk /> Opening</a>
                    <a onClick={() => setSelectedMenu('about')}>< IoIosInformationCircle /> About</a>
                    <a onClick={() => setSelectedMenu('category')}>< BiSolidCategoryAlt /> Category</a>
                    <a onClick={() => setSelectedMenu('character')}>< CgGhostCharacter /> Character</a>
                </div>
                {selectedMenu && handleMenu(
                    selectedMenu === 'home' ? <Building /> :
                        selectedMenu === 'anime' ? <Anime /> :
                            selectedMenu === 'season' ? <Season /> :
                                selectedMenu === 'opening' ? <Opening /> :
                                    selectedMenu === 'about' ? <Building /> :
                                        selectedMenu === 'category' ? <Building /> :
                                            selectedMenu === 'character' ? <Building /> :
                                                <></>
                )}

            </div>

        </div >
    );
}