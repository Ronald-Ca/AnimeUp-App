import React, { useState } from "react";
import { TiUploadOutline } from "react-icons/ti";
import { MdDeleteForever } from "react-icons/md";
import "./style.css";

interface UploadComponentProps {
    onFilesUploaded: (files: FileList) => void;
    label: string;
}

export default function UploadComponent({ onFilesUploaded, label }: UploadComponentProps): JSX.Element {
    const [isDragging, setIsDragging] = useState(false);
    const [imagePreview, setImagePreview] = useState<string | null>(null);
    const [videoPreview, setVideoPreview] = useState<string | null>(null);

    function handleDrop(event: React.DragEvent<HTMLDivElement>): void {
        event.preventDefault();
        setIsDragging(false);
        const files = event.dataTransfer.files;
        handleFiles(files);
    }

    function handleFiles(files: FileList): void {
        onFilesUploaded(files);
        const file = files[0]; // Assuming only one file is being uploaded
        const imageExtensions = ['.png', '.jpg', '.jpeg', '.gif', '.svg'];
        const videoExtensions = ['.mp4', '.avi', '.mov', '.mkv', '.webm'];
        const extension = file.name.substring(file.name.lastIndexOf('.')).toLowerCase();
        if (file.type.startsWith('image/') && imageExtensions.includes(extension)) {
            setImagePreview(URL.createObjectURL(file));
            setVideoPreview(null); // Limpa a pré-visualização de vídeo, se houver
        } else if (file.type.startsWith('video/') && videoExtensions.includes(extension)) {
            setVideoPreview(URL.createObjectURL(file));
            setImagePreview(null); // Limpa a pré-visualização de imagem, se houver
        }
    }

    function handleDragOver(event: React.DragEvent<HTMLDivElement>): void {
        event.preventDefault();
        setIsDragging(true);
    }

    function handleDragLeave(event: React.DragEvent<HTMLDivElement>): void {
        event.preventDefault();
        setIsDragging(false);
    }

    function handleClearPreview(): void {
        setImagePreview(null);
        setVideoPreview(null);
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
                        <label className="upload-label">
                            <TiUploadOutline size={30} />
                            <input type="file" className="upload-input" onChange={(e) => handleFiles(e.target.files as FileList)} />
                        </label>
                        {isDragging && <p className="drop-here">Drop Here</p>}
                    </>
                )}
            </div>
        </div>
    );
}
