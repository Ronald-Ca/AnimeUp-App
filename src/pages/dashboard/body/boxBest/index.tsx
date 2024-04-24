import { useEffect } from "react";
import CardGlass from "../../../../components/cardGlass";
import Divider from "../../../../components/divider";
import TitleTop from "../../../../components/titleTop";
import { useQueryBestAnime } from "../../../../queries/anime";
import "./style.css";
export default function BoxBest() {
    const { data, refetch } = useQueryBestAnime()

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
                            width="150px"
                            height="220px"
                            title={anime.title}
                            image={anime.image}
                            rating={anime.rating}
                            publicRating={anime.publicRating}
                        />
                    ))}
                </div>
                <Divider color="#8a8888" margin="10px 0 20px 0" />
            </div>
        </>
    )
}