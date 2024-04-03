import "./style.css"
import { IoIosAdd } from "react-icons/io";

interface Props {
    width?: string;
    height?: string;
    flexDirection?: 'row' | 'column' | 'row-reverse' | 'column-reverse' | undefined;
    alignItems?: 'center' | 'flex-start' | 'flex-end' | 'baseline' | 'stretch' | undefined;
}

export default function CardGlass({ width, height, flexDirection, alignItems }: Props) {
    return (
        <>
            <div className="card-container" style={{ flexDirection, alignItems }}>
                <div className="card-glass" style={{ width, height }}>
                    <IoIosAdd className="icon" size={100} />
                </div>
                <div className="card-glass" style={{ width, height }}>
                    <IoIosAdd className="icon" size={100} />
                </div>
                <div className="card-glass" style={{ width, height }}>
                    <IoIosAdd className="icon" size={100} />
                </div>
            </div>
        </>
    )
}