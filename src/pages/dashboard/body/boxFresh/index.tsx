import CardGlass from "../../../../components/cardGlass";
import Divider from "../../../../components/divider";
import "./style.css";

export default function BoxFresh() {
    return (
        <>
            <div className="fresh-animes">
                <p>Recent</p>
                <CardGlass width="80%" height="80px" flexDirection="column" alignItems="center" />
                <Divider color="#8a8888" margin="10px 0 20px 0" />
            </div>
        </>
    )
}