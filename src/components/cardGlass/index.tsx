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

export default function CardGlass({ width, height, flexDirection, alignItems, onClick }: Props) {
    return (
        <>
            <div className="card-container" style={{ flexDirection, alignItems }}>
                <div className="card-glass" style={{ width, height }} onClick={onClick}>

                </div>
            </div>
        </>
    )
}