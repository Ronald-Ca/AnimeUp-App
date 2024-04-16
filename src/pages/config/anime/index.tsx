import { useState } from "react";
import Input from "../../../components/inputComponent";
import { useCreateAnimeMutation } from "../../../queries/anime";
import AlertComponent, { AlertType } from "../../../components/alertComponent";
import Switch from "../../../components/switchComponent";
import SelectComponent from "../../../components/selectComponent";
import UploadComponent from "../../../components/uploadComponent";

export default function Anime() {
    const animeMutation = useCreateAnimeMutation()

    const [alertMessage, setAlertMessage] = useState('')
    const [alertType, setAlertType] = useState<AlertType>(null)
    const [showAlert, setShowAlert] = useState(false)

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [image, setImage] = useState<FileList | null>(null)
    const [episodes, setEpisodes] = useState(0)
    const [year, setYear] = useState(0)
    const [rating, setRating] = useState(0)
    const [publicRating, setPublicRating] = useState(0)
    const [status, setStatus] = useState('')
    const [trailer, setTrailer] = useState('')
    const [opinion, setOpinion] = useState('')
    const [favorite, setFavorite] = useState(false)
    const [following, setFollowing] = useState(false)

    const handleFilesUploaded = (uploadedFiles: FileList) => {
        setImage(uploadedFiles);
    }

    const handleSave = async () => {
        try {
            const requiredFields = ['title', 'description', 'image', 'episodes', 'year', 'rating']
            const emptyFields = requiredFields.filter(field => {
                if (field === 'episodes' || field === 'year' || field === 'rating') {
                    return !Number(eval(field))
                } else {
                    return !eval(field)
                }
            })

            if (emptyFields.length === 0) {
                await animeMutation.mutateAsync({
                    title, description, image, episodes: Number(episodes), year, rating, publicRating, status, trailer, opinion, favorite, following
                })
                setAlertMessage('Anime created successfully')
                setAlertType('success')
                setShowAlert(true)
            } else {
                setAlertMessage(`Fields ${emptyFields.join(', ')} are required`)
                setAlertType('danger')
                setShowAlert(true)
            }
        } catch (error) {
            setAlertMessage('Failed to create anime')
            setAlertType('danger')
            setShowAlert(true)
        }
    }

    return (
        <div className="content-config">
            <div className="title-config">
                <h3>Anime</h3>
                <button onClick={handleSave}>Save</button>
            </div>
            <div className="flex-anime">
                <div className="grid-anime">
                    <Input label="Title Anime" id="title" name="title" type="text" placeholder="Name anime" onChange={(e) => setTitle(e.target.value)} required />
                    <Input label="Description" id="description" name="description" type="text" placeholder="Description anime" onChange={(e) => setDescription(e.target.value)} required />
                    <Input label="Episodes" id="episodes" name="episodes" type="number" onChange={(e) => setEpisodes(Number(e.target.value))} required />
                    <Input label="Year" id="year" name="year" type="number" onChange={(e) => setYear(+e.target.value)} required />
                    <Input label="Rating" id="rating" name="rating" type="number" onChange={(e) => setRating(+e.target.value)} required />
                    <Input label="Public Rating" id="publicRating" name="publicRating" type="number" onChange={(e) => setPublicRating(+e.target.value)} />
                    <SelectComponent label="Status" placeholder="Choose an option" id="status" name="status" value={status} options={['Watching', 'Completed', 'On Hold', 'Dropped', 'Plan to Watch']} onChange={(e) => setStatus(e)} />
                    <Input label="Trailer" id="trailer" name="trailer" type="text" placeholder="Url Video anime" onChange={(e) => setTrailer(e.target.value)} />
                    <Input label="Opinion" id="opinion" name="opinion" type="text" placeholder="Opinion anime" onChange={(e) => setOpinion(e.target.value)} />
                    <Switch label="Favorite?" value={false} onChange={(e) => setFavorite(e)} />
                    <Switch label="Following?" value={false} onChange={(e) => setFollowing(e)} />
                </div>
                <UploadComponent label="Upload Image" onFilesUploaded={handleFilesUploaded} />
            </div>
            <AlertComponent message={alertMessage} type={alertType} show={showAlert} setShow={setShowAlert} />
        </div>
    )
}