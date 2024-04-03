interface DividerProps {
    color?: string;
    width?: string;
    height?: string;
    margin?: string;
}

export default function Divider({ color, width, height, margin }: DividerProps) {
    return (
        <hr style={{
            backgroundColor: color || "#f8cf2bf3",
            border: "none",
            width: width || "100%",
            height: height || "1px",
            margin: margin || "0",
        }} />
    )
}