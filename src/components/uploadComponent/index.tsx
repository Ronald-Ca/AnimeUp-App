import React from "react";
import { TiUploadOutline } from "react-icons/ti";
import "./style.css";

interface UploadComponentProps {
    onFilesUploaded: (files: FileList) => void;
    label: string;
}

export default function UploadComponent({ onFilesUploaded, label }: UploadComponentProps): JSX.Element {
    function handleDrop(event: React.DragEvent<HTMLDivElement>): void {
        event.preventDefault();
        const files = event.dataTransfer.files;
        handleFiles(files);
    }

    function handleFiles(files: FileList): void {
        onFilesUploaded(files);
    }

    function handleDragOver(event: React.DragEvent<HTMLDivElement>): void {
        event.preventDefault();
    }

    return (
        <div className="upload">
            <p>{label}</p>
            <div className="upload-container"
                onDrop={handleDrop}
                onDragOver={handleDragOver}>
                <label className="upload-label">
                    <TiUploadOutline size={30} />
                    <input type="file" className="upload-input" onChange={(e) => handleFiles(e.target.files as FileList)} />
                </label>
            </div>
        </div>
    );
}

