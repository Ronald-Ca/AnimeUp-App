import "./style.css";

type ModalBoxBestProps = {
    anime: any;
}

export default function ModalBoxBest({ anime }: ModalBoxBestProps) {
    return (
        <div className="best-modal">
            <div className="best-modal-title">
                <h2>{anime.title}</h2>
            </div>
            <div className="best-modal-header">
                <img src={anime.image} />
                <div className="best-details">
                    <div className="best-details-title">
                        <p>Details</p>
                    </div>
                    <div className="best-details-itens">
                        <p>Episodes: <span>{anime.episodes}</span></p>
                        <p>Year: {anime.year}</p>
                        <p>Rating: {anime.rating}</p>
                        <p>Public Rating: {anime.publicRating}</p>
                    </div>

                    <p>{anime.description}</p>
                </div>
            </div>
        </div>
    )
}

