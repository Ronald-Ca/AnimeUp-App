import React, { useState } from "react";
import { TiUploadOutline } from "react-icons/ti";
import { MdDeleteForever } from "react-icons/md";
import "./style.css";
import AlertComponent from "../alertComponent";

interface UploadComponentProps {
    onFilesUploaded: (files: FileList) => void;
    label: string;
    acceptedTypes: string;
}

export default function UploadComponent({ onFilesUploaded, label, acceptedTypes }: UploadComponentProps): JSX.Element {
    const [isDragging, setIsDragging] = useState(false)
    const [imagePreview, setImagePreview] = useState<string | null>(null)
    const [videoPreview, setVideoPreview] = useState<string | null>(null)
    const [showAlert, setShowAlert] = useState(false)
    const [alertMessage, setAlertMessage] = useState('')

    function handleDrop(event: React.DragEvent<HTMLDivElement>): void {
        event.preventDefault()
        setIsDragging(false)
        const files = event.dataTransfer.files
        handleFiles(files)
    }

    function handleFiles(files: FileList): void {
        onFilesUploaded(files)
        const file = files[0]
        const imageExtensions = ['.png', '.jpg', '.jpeg', '.gif', '.svg']
        const videoExtensions = ['.mp4', '.avi', '.mov', '.mkv', '.webm']
        const extension = file.name.substring(file.name.lastIndexOf('.')).toLowerCase()

        if (file && acceptedTypes === 'image/' && imageExtensions.includes(extension)) {
            setImagePreview(URL.createObjectURL(file))
            setVideoPreview(null)
        } else if (file && acceptedTypes === 'video/' && videoExtensions.includes(extension)) {
            setVideoPreview(URL.createObjectURL(file))
            setImagePreview(null)
        } else {
            setAlertMessage('Invalid Type')
            setShowAlert(true)
        }
    }

    function handleDragOver(event: React.DragEvent<HTMLDivElement>): void {
        event.preventDefault()
        setIsDragging(true)
    }

    function handleDragLeave(event: React.DragEvent<HTMLDivElement>): void {
        event.preventDefault()
        setIsDragging(false)
    }

    function handleClearPreview(): void {
        setImagePreview(null)
        setVideoPreview(null)
    }

    function handleAlertClose(): void {
        setShowAlert(false)
    }

    return (
        <div className="upload">
            <p>{label}</p>
            <div
                className={`upload-container ${isDragging ? 'drag-over' : ''}`}
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
            >
                {imagePreview && (
                    <div className="preview-container">
                        <img src={imagePreview} alt="Preview" className="preview" />
                        <button className="delete-button" onClick={handleClearPreview}>
                            <MdDeleteForever size={20} color="red" />
                        </button>
                    </div>
                )}
                {videoPreview && (
                    <div className="preview-container">
                        <video src={videoPreview} controls className="preview"></video>
                        <button className="delete-button" onClick={handleClearPreview}>
                            <MdDeleteForever size={20} color="red" />
                        </button>
                    </div>
                )}
                {!imagePreview && !videoPreview && (
                    <>
                        <label className="upload-label" >
                            <TiUploadOutline size={40} style={{ cursor: 'pointer' }} />
                            <input type="file" className="upload-input" onChange={(e) => handleFiles(e.target.files as FileList)} />
                        </label>
                        {isDragging && <p className="drop-here">Drop Here</p>}
                    </>
                )}
            </div>
            <AlertComponent message={alertMessage} type={'danger'} show={showAlert} setShow={handleAlertClose} />
        </div>
    )
}
