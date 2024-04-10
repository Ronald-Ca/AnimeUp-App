type AlertProps = {
    message: string;
    type: string;
    show: boolean;
    setShow: (show: boolean) => void;
}

export default function AlertComponent({ message, type, show, setShow }: AlertProps) {
    return (
        <div className={`alert alert-${type} ${show ? 'show' : 'hide'}`}>
            <span>{message}</span>
            <button onClick={() => setShow(false)}>X</button>
        </div>
    )
}