import { useState } from "react";
import "./style.css";

type SwitchComponentProps = {
    value: boolean;
    onChange: (value: boolean) => void;
    label: string;
}

export default function Switch(props: SwitchComponentProps) {
    const [isOn, setIsOn] = useState<boolean>(props.value)

    const handleToggle = () => {
        const newValue = !isOn
        setIsOn(newValue)
        props.onChange(newValue)
    }

    return (
        <div className="switch-container">
            <label>{props.label}</label>
            <div className={`switch-component ${isOn ? "on" : "off"}`} onClick={handleToggle}>
                <div className="switch-ball" />
            </div>
        </div>
    )
}