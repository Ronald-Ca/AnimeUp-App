import { useEffect } from 'react';
import "./style.css";
import { FaWindowClose } from "react-icons/fa";

export type AlertType = 'success' | 'info' | 'warning' | 'danger' | null;

interface AlertProps {
    message: string;
    type: AlertType;
    show: boolean;
    setShow: (show: boolean) => void;
}

const defaultProps: Partial<AlertProps> = {
    type: 'info',
    show: false,
};

export default function AlertComponent({ message, type, show, setShow }: AlertProps) {

    const handleClose = () => setShow(false);

    useEffect(() => {
        let timer: ReturnType<typeof setTimeout>
        if (show) {
            timer = setTimeout(() => {
                handleClose()
            }, 5000)
        }
        return () => clearTimeout(timer)
    }, [show])

    return (
        <div className={`alert alert-${type} ${show ? 'show' : 'hide'} fixed-top-right`} onClick={handleClose}>
            <span>{message}</span>
            <a onClick={(e) => { e.stopPropagation(); handleClose(); }}> < FaWindowClose size={25} /> </a>
        </div>
    );
};

AlertComponent.defaultProps = defaultProps;

