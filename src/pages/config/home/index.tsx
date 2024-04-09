import Input from "../../../components/inputComponent";
import "./style.css";

export default function Home() {
    return (
        <div className="content-config">
            <div className="title-config">
                <h3>Anime</h3>
                <button>Save</button>
            </div>
            <form className="grid-anime">
                <Input label="Title Anime" id="title" name="title" type="text" placeholder="Name anime" />
                <Input label="Description" id="description" name="description" type="text" placeholder="Description anime" />
                <Input label="Image" id="image" name="image" type="text" placeholder="Url Image anime" />
                <Input label="Episodes" id="episodes" name="episodes" type="number" />
                <Input label="Year" id="year" name="year" type="number" />
                <Input label="Rating" id="rating" name="rating" type="number" />
                <Input label="Public Rating" id="publicRating" name="publicRating" type="number" />
                <Input label="Status" id="status" name="status" type="text" />
                <Input label="Trailer" id="trailer" name="trailer" type="text" placeholder="Url Video anime" />
                <Input label="Opinion" id="opinion" name="opinion" type="text" placeholder="Opinion anime" />
            </form>
            <div className="title-config">
                <h3>Opening</h3>
            </div>
            <form className="grid-anime">
                <Input label="Title Opening" id="title" name="title" type="text" placeholder="Name opening" />
                <Input label="audio" id="audio" name="audio" type="text" placeholder="Url audio opening" />
                <Input label="video" id="video" name="video" type="text" placeholder="Url video opening" />
            </form>
            <div className="title-config">
                <h3>Season</h3>
            </div>
            <form className="grid-anime">
                <Input label="Name Season" id="name" name="name" type="text" placeholder="Name season" />
                <Input label="Description" id="description" name="description" type="text" placeholder="Description season" />
                <Input label="Year" id="year" name="year" type="number" />
                <Input label="Episodes" id="episodes" name="episodes" type="number" />
                <Input label="Rating" id="rating" name="rating" type="number" />
                <Input label="Image" id="image" name="image" type="text" placeholder="Url Image season" />
                <Input label="Status" id="status" name="status" type="text" />
                <Input label="Opinion" id="opinion" name="opinion" type="text" placeholder="Opinion season" />
            </form>
        </div>
    );
}