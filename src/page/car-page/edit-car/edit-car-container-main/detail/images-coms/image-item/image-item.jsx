import React from "react";
import FileUpload from "./file-upload/file-upload.jsx";
import "./image-item.scss";
const ImageItem = ({ label, image, onDelete, onFileChange }) => {
    return (
        <div className={"img-container-123"}>
            <p>{label}</p>
            {image ? (
                <div className="image-container">
                    <img src={image} alt={label} className="image" />
                    <button className="delete-button" onClick={onDelete}>
                        <span>-</span>
                    </button>
                </div>
            ) : (
                <FileUpload onFileChange={onFileChange} />
            )}
        </div>
    );
};

export default ImageItem;
