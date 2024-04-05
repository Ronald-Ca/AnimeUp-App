import CardGlass from "../../../../components/cardGlass";
import Divider from "../../../../components/divider";
import TitleTop from "../../../../components/titleTop";
import "./style.css";

export default function BoxView() {
    return (
        <>
            <div className="view-animes">
                <TitleTop text="Animes Watched" />
                <Divider height="2px" margin="0 0 10px 0 " />
                <CardGlass width="220px" height="120px" />
                <Divider color="#8a8888" margin="10px 0 20px 0" />
            </div>
        </>
    )
}