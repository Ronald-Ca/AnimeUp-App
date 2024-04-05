import CardGlass from "../../../../components/cardGlass";
import Divider from "../../../../components/divider";
import TitleTop from "../../../../components/titleTop";
import "./style.css";

export default function BoxWatch() {
    return (
        <>
            <div className="watch-animes">
                <TitleTop text="Animes Watching" />
                <Divider height="2px" margin="0 0 10px 0 " />
                <CardGlass width="140px" height="220px" />
            </div>
        </>
    )
}