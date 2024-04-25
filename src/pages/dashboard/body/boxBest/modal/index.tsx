type ModalBoxBestProps = {
    anime: any;
}

export default function ModalBoxBest({ anime }: ModalBoxBestProps) {
    return (
        <div className="modal-content">
            <h2>{anime.title}</h2>
            <img src={anime.image} alt={anime.title} />
            <p>Rating: {anime.rating}</p>
            <p>Public Rating: {anime.publicRating}</p>
        </div>
    );
}

