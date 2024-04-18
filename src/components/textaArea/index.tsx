import "./style.css";

type TextAreaProps = {
    value?: string;
    onChange: (e: any) => void;
    placeholder?: string;
    disabled?: boolean;
    rows?: number;
    cols?: number;
    width?: string;
    name?: string;
    label?: string;
    id?: string;
    required?: boolean;
}

export default function TextArea({ value, onChange, placeholder, disabled, rows, cols, width, name, label, id, required }: TextAreaProps) {
    return (
        <div className="input-group" style={{ width }}>
            {label && <label htmlFor={name}>{label}</label>}
            <textarea
                className="input-textarea"
                id={id}
                name={name}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder}
                disabled={disabled}
                rows={rows}
                cols={cols}
                required={required}
            />
        </div>
    );
}