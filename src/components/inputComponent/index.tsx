import "./style.css"

type InputComponentProps = {
    type: string
    placeholder?: string
    onChange?: (e: any) => void
    label?: string
    id: string
    name: string
    required?: boolean
    width?: string
    value?: string
}
export default function Input(props: InputComponentProps) {
    return (
        <div className="input-component" style={{ width: props.width }}>
            <label htmlFor={props.label}>{props.label}</label>
            <input
                type={props.type}
                placeholder={props.placeholder}
                onChange={props.onChange}
                id={props.id}
                name={props.name}
                required={props.required}
                value={props.value}
            />
        </div>
    )
}