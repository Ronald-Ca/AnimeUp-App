import Input from "../../../components/inputComponent";

export default function Anime() {
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
        </div>
    );
}