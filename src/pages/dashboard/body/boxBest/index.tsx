import ButtonView from "../../../../components/buttonView";
import CardGlass from "../../../../components/cardGlass";
import "./style.css";

export default function BoxBest() {
    return (
        <>
            <div className="best-animes">
                <div className="content-title">
                    <div className="title">
                        <span className="markup"></span>
                        <h2>Top 10 Animes</h2>
                    </div>
                    <ButtonView text="View more..." width="110px" />
                </div>
                <hr />
                <CardGlass />
            </div>
        </>
    )
}