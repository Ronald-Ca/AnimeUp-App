import { useState } from "react"
import "./style.css"

type InputComponentProps = {
    type: string
    placeholder?: string
    onChange?: (e: any) => void
    label?: string
    id: string
    name: string
    required?: boolean
}
export default function Input(props: InputComponentProps) {
    const [isInvalid, setIsInvalid] = useState(false)

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        if (props.required && !e.target.value.trim()) {
            setIsInvalid(true)
        } else {
            setIsInvalid(false)
        }
    }

    return (
        <div className={`input-component ${isInvalid ? 'invalid' : ''}`}>
            <div className="input-component">
                <label htmlFor={props.label}>{props.label}</label>
                <input id={props.id} name={props.name} type={props.type} placeholder={props.placeholder} onChange={props.onChange} onBlur={handleBlur} />
            </div>
            {isInvalid && <span className="error-message">This field is required</span>}
        </div>
    )
}