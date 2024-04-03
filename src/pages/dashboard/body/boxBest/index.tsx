import CardGlass from "../../../../components/cardGlass";
import Divider from "../../../../components/divider";
import TitleTop from "../../../../components/titleTop";
import YearButton from "../../../../components/yearButton";
import "./style.css";

export default function BoxBest() {
    return (
        <>
            <div className="best-animes">
                <div className="colum-left">
                    <TitleTop text="Top 10 Animes" />
                    <Divider height="2px" margin="0 0 10px 0 " />
                    <CardGlass width="140px" height="220px" />
                    <Divider color="#8a8888" margin="10px 0 20px 0" />
                    <TitleTop text="Animes Watched" />
                    <Divider height="2px" margin="0 0 10px 0 " />
                    <CardGlass width="220px" height="120px" />
                    <Divider color="#8a8888" margin="10px 0 20px 0" />
                    <TitleTop text="Animes Watching" />
                    <Divider height="2px" margin="0 0 10px 0 " />
                    <CardGlass width="140px" height="220px" />
                </div>
                <hr style={{
                    backgroundColor: "#f8cf2bf3",
                    border: "none",
                    width: "1px",
                    height: "calc(100vh + 90px)",
                    margin: "0 10px",

                }} />
                <div className="colum-right">
                    <p>Recent</p>
                    <CardGlass width="80%" height="80px" flexDirection="column" alignItems="center" />
                    <Divider color="#8a8888" margin="10px 0 20px 0" />
                    <p>Year</p>
                    <YearButton />
                </div>
            </div>
        </>
    )
}