import { useEffect, useState } from "react";
import CardGlass from "../../../../components/cardGlass";
import Divider from "../../../../components/divider";
import TitleTop from "../../../../components/titleTop";
import { useQueryBestAnime } from "../../../../queries/anime";
import "./style.css";
import ModalComponent from "../../../../components/modalComponent";
import ModalBoxBest from "./modal";

export default function BoxBest() {
    const { data, refetch } = useQueryBestAnime()
    const [showModal, setShowModal] = useState(false)
    const [selectedAnime, setSelectedAnime] = useState<any>(null)

    const openModal = (anime: any) => {
        setSelectedAnime(anime)
        setShowModal(true)
    };

    useEffect(() => {
        refetch()
    }, [])

    return (
        <>
            <div className="">
                <TitleTop text="Top 10 Animes" />
                <Divider height="2px" margin="0 0 10px 0 " />
                <div className="card-best-anime">
                    {data?.data.map((anime: any) => (
                        <CardGlass
                            key={anime.id}
                            width="150px"
                            height="220px"
                            title={anime.title}
                            image={anime.image}
                            rating={anime.rating}
                            publicRating={anime.publicRating}
                            onClick={() => openModal(anime)}
                        />
                    ))}
                </div>
                <Divider color="#8a8888" margin="10px 0 20px 0" />
            </div>
            <ModalComponent height="700px" show={showModal} onClose={() => setShowModal(false)}>
                {selectedAnime && <ModalBoxBest anime={selectedAnime} />}
            </ModalComponent>
        </>
    )
}
