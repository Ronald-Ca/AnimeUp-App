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
            <hr />
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
                    <div className="best-details-title-two">
                        <p>Description</p>
                    </div>
                    <div className="area-text">
                        <p>{anime.description}</p>
                    </div>
                    <div className="best-details-title-two">
                        <p>Opinion</p>
                    </div>
                    <div className="area-text" style={{ borderRadius: '0 0 5px 5px' }}>
                        <p>{anime.opinion}</p>
                    </div>
                </div>
            </div>
            <hr />
            <div className="seasons">
                <h2>Seasons</h2>
                <div className="seasons-list">
                    <div className="season-item" style={{ backgroundImage: "url(https://i.pinimg.com/564x/91/3e/3f/913e3fbf46a72424e37ff1b82031287d.jpg)" }}>
                        <p className="season-title">Title</p>
                        <p className="season-episodes">EP: 230</p>
                        <p className="season-year">2001</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

