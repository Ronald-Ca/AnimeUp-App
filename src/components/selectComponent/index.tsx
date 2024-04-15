import "./style.css";

type SelectComponentProps = {
    options: string[];
    onChange: (value: string) => void;
    value: string;
    id: string;
    label: string;
    placeholder: string;
    disabled?: boolean;
    name: string;
}

export default function SelectComponent({ options, onChange, value, id, label, placeholder, disabled, name }: SelectComponentProps) {
    return (
        <div className="form-group">
            <label htmlFor={id}>{label}</label>
            <select
                className="form-control"
                id={id}
                name={name}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                disabled={disabled}
            >
                <option value="">{placeholder}</option>
                {options.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    );
}