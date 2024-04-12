import "./style.css"

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
                    <div className="card-glass-content">
                        <h1>{title}</h1>
                        <p>{rating}</p>
                        <p>{publicRating}</p>
                    </div>
                </div>
            </div>
        </>
    )
}