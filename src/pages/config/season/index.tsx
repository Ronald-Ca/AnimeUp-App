import { useState } from "react";
import Input from "../../../components/inputComponent";
import SelectComponent from "../../../components/selectComponent";
import TextArea from "../../../components/textaArea";
import UploadComponent from "../../../components/uploadComponent";
import { useQueryAnime } from "../../../queries/anime";

export default function Season() {
    const [anime, setAnime] = useState('')
    const [description, setDescription] = useState('')
    const [opinion, setOpinion] = useState('')
    const [status, setStatus] = useState('')
    const [image, setImage] = useState<FileList | null>(null)
    const [episodes, setEpisodes] = useState(0)
    const [year, setYear] = useState(0)
    const [rating, setRating] = useState(0)
    const [publicRating, setPublicRating] = useState(0)

    const { data, refetch } = useQueryAnime()
    console.log('data', data)

    const handleImageUploaded = (uploadedFiles: FileList) => {
        setImage(uploadedFiles.item(0) as any)
    }

    return (
        <div className="content-config">
            <div className="title-config">
                <h3>Season</h3>
                <button>Save</button>
            </div>
            <div className="flex-anime">
                <div className="grid-anime">
                    <SelectComponent width="49%" label="Status" placeholder="Choose an anime" id="status" name="status" value={status} options={[]} onChange={(e) => setAnime(e)} />
                    <Input width="49%" label="Name Season" id="name" name="name" type="text" placeholder="Name season" />
                    <SelectComponent width="19%" label="Status" placeholder="Choose an option" id="status" name="status" value={status} options={['Watching', 'Completed', 'On Hold', 'Dropped', 'Plan to Watch']} onChange={(e) => setStatus(e)} />
                    <Input width="18%" label="Episodes" id="episodes" name="episodes" type="number" placeholder="385" onChange={(e) => setEpisodes(Number(e.target.value))} required />
                    <Input width="18%" label="Year" id="year" name="year" type="number" placeholder="2010" onChange={(e) => setYear(+e.target.value)} required />
                    <Input width="18%" label="Rating" id="rating" name="rating" type="number" placeholder="8.1" onChange={(e) => setRating(+e.target.value)} required />
                    <Input width="18%" label="Public Rating" id="publicRating" name="publicRating" type="number" placeholder="6.5" onChange={(e) => setPublicRating(+e.target.value)} />
                </div>
                <div style={{ display: 'flex', gap: '50px' }}>
                    <TextArea width="49%" label="Description" id="description" name="description" placeholder="Description anime" onChange={(e) => setDescription(e)} required />
                    <TextArea width="49%" label="Opinion" id="opinion" name="opinion" placeholder="Opinion anime" onChange={(e) => setOpinion(e)} />
                </div>

                <div className="upload-area">
                    <UploadComponent label="Upload Image" acceptedTypes='image/' onFilesUploaded={handleImageUploaded} />
                </div>
            </div>
        </div>
    );
}