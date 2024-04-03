import ButtonView from "../buttonView";
import "./style.css";

interface Props {
    text: string;
}
export default function TitleTop(props: Props) {
    return (
        <div className="content-title">
            <div className="title">
                <span className="markup"></span>
                <h2>{props.text}</h2>
            </div>
            <ButtonView text="View more..." width="110px" />
        </div>
    )
}