import "./style.css"

type InputComponentProps = {
    type: string
    placeholder?: string
    onChange?: (e: any) => void
    label?: string
    id: string
    name: string
}
export default function Input(props: InputComponentProps) {
    return (
        <div className="input-component">
            <label htmlFor={props.label}>{props.label}</label>
            <input id={props.id} name={props.name} type={props.type} placeholder={props.placeholder} onChange={props.onChange} />
        </div>
    )

}