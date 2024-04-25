import React, { ReactNode } from "react";
import { IoClose } from "react-icons/io5";
import "./style.css";

type ModalProps = {
    show: boolean;
    onClose: () => void;
    width?: string;
    height?: string;
    children?: ReactNode;
}

const ModalComponent: React.FC<ModalProps> = ({ show, onClose, width = "700px", height = "500px", children }: ModalProps) => {
    return (
        <div className={`modal ${show ? 'show' : ''}`}>
            <div className="modal-content" style={{ width, height }}>
                <span className="close" onClick={onClose}><IoClose style={{ cursor: 'pointer', color: 'red' }} /></span>
                {children}
            </div>
        </div>
    )
}

export default ModalComponent
