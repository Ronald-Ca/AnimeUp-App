import "./style.css"
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaDiscord } from "react-icons/fa";

export default function Footer() {
    return (
        <footer>
            <p>Ronald Camargo © 2024</p>
            <div className="contact">
                <a href="" target="_new"> <FaGithub size={20} /></a>
                <a href="" target="_new"> <FaInstagram size={20} /></a>
                <a href="" target="_new"> <AiOutlineLinkedin size={20} /></a>
                <a href="" target="_new"> <FaWhatsapp size={20} /></a>
                <a href="" target="_new"> <SiGmail size={20} /></a>
                <a href="" target="_new"> <FaDiscord size={20} /></a>
            </div>
        </footer>
    );
}