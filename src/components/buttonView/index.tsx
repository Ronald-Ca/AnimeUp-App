import "./style.css"
interface ButtonViewProps {
    text: string;
    width?: string;
    height?: string;
    color?: string;
}
export default function ButtonView({ text, width = "auto", height = "30px" }: ButtonViewProps) {
    return (
        <button
            className="button-view"
            style={{
                width,
                height,
                backgroundColor: '#131212',
            }}
        >{text}</button>
    )
}
