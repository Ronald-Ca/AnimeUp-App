import CardGlass from "../../../../components/cardGlass";
import Divider from "../../../../components/divider";
import TitleTop from "../../../../components/titleTop";
import "./style.css";

export default function BoxBest() {
    return (
        <>
            <div className="">
                <TitleTop text="Top 10 Animes" />
                <Divider height="2px" margin="0 0 10px 0 " />
                <CardGlass width="140px" height="220px" />
                <Divider color="#8a8888" margin="10px 0 20px 0" />
            </div>
        </>
    )
}