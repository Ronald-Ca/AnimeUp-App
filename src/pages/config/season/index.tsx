import Input from "../../../components/inputComponent";

export default function Season() {
    return (
        <div className="content-config">
            <div className="title-config">
                <h3>Season</h3>
                <button>Save</button>
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