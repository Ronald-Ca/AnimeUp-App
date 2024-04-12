type RadioComponentProps = {
    value: string
    label: string
    onChange: (value: string) => void
}

export default function Radio(props: RadioComponentProps) {
    const handleOptionChange = (value: string) => {
        props.onChange(value);
    };

    return (
        <div className="radio-component">
            <label>{props.label}</label>
            <div>
                <input
                    type="radio"
                    value="yes"
                    checked={props.value === "yes"}
                    onChange={() => handleOptionChange("yes")}
                    disabled
                />
                <label>Yes</label>
            </div>
            <div>
                <input
                    type="radio"
                    value="no"
                    checked={props.value === "no"}
                    onChange={() => handleOptionChange("no")}
                    disabled
                />
                <label>No</label>
            </div>
        </div>
    )
}
