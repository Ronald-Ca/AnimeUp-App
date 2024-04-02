import "./style.css"
import { IoIosAdd } from "react-icons/io";

export default function CardGlass() {
    return (
        <>
            <div className="card-container">
                <div className="card-glass">
                    <IoIosAdd className="icon" size={100} />
                </div>
                <div className="card-glass">
                    <IoIosAdd className="icon" size={100} />
                </div>
                <div className="card-glass">
                    <IoIosAdd className="icon" size={100} />
                </div>
            </div>
        </>
    )
}