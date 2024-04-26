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
                <div className="">

                </div>
                <p>{anime.description}</p>
            </div>
            <p>Rating: {anime.rating}</p>
            <p>Public Rating: {anime.publicRating}</p>
        </div>
    )
}

