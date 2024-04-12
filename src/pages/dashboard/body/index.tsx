import Divider from "../../../components/divider";
import BoxBest from "./boxBest";
import BoxFresh from "./boxFresh";
import BoxView from "./boxView";
import BoxWatch from "./boxWatch";
import BoxYear from "./boxYear";
import "./style.css";

export default function Body() {

    return (
        <>
            <div className="body-animes">
                <div className="colum-left">
                    <BoxBest />
                    <BoxView />
                    <BoxWatch />
                </div>
                <div className="colum-center">
                    <Divider height="100vh" width="1px" />
                </div>
                <div className="colum-right">
                    <BoxFresh />
                    <BoxYear />
                </div>
            </div>
        </>
    )
}