import Input from "../../../components/inputComponent";

export default function Opening() {
    return (
        <div className="content-config">
            <div className="title-config">
                <h3>Opening</h3>
            </div>
            <form className="grid-anime">
                <Input label="Title Opening" id="title" name="title" type="text" placeholder="Name opening" />
                <Input label="audio" id="audio" name="audio" type="text" placeholder="Url audio opening" />
                <Input label="video" id="video" name="video" type="text" placeholder="Url video opening" />
            </form>
        </div>
    );
}