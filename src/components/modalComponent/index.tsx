import { IoClose } from "react-icons/io5";

type modalProps = {
    show: boolean;
    onClose: () => void;
    component?: JSX.Element;
}

export default function ModalComponent({ show, onClose, component }: modalProps) {
    return (
        <div className={`modal ${show ? 'show' : ''}`}>
            <div className="modal-content">
                <span className="close" onClick={onClose}><IoClose /></span>
                {component}
            </div>
        </div>
    );
}