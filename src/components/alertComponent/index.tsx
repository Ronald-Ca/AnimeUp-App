import React from 'react';

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

const AlertComponent: React.FC<AlertProps> = ({ message, type, show, setShow }) => {
    const handleClose = () => setShow(false);

    return (
        <div className={`alert alert-${type} ${show ? 'show' : 'hide'}`} onClick={handleClose}>
            <span>{message}</span>
            <button onClick={(e) => { e.stopPropagation(); handleClose(); }}>X</button>
        </div>
    );
};

AlertComponent.defaultProps = defaultProps;

export default AlertComponent;
