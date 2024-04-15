import "./style.css"
import { FaStar } from "react-icons/fa";
import { GiCursedStar } from "react-icons/gi";

interface Props {
    width?: string;
    height?: string;
    flexDirection?: 'row' | 'column' | 'row-reverse' | 'column-reverse' | undefined;
    alignItems?: 'center' | 'flex-start' | 'flex-end' | 'baseline' | 'stretch' | undefined;
    onClick?: () => void;
    image?: string;
    title?: string;
    rating?: string;
    publicRating?: string;
}

export default function CardGlass({ width, height, flexDirection, alignItems, onClick, image, title, rating, publicRating }: Props) {
    return (
        <>
            <div className="card-container" style={{ flexDirection, alignItems }}>
                <div className="card-glass" style={{ width, height, backgroundImage: `url(${image})`, backgroundSize: 'cover', objectFit: 'cover' }} onClick={onClick}>
                    <p className="card-title">{title}</p>
                    <p className="card-rating"><FaStar style={{ marginTop: '2px' }} size={10} color="yellow" />{rating}</p>
                    <p className="card-public-rating">{publicRating}<GiCursedStar style={{ marginTop: '3px' }} size={10} color="red" /></p>
                </div>
            </div>
        </>
    )
}