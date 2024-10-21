import React from "react";
import "./file-upload.scss";
const FileUpload = ({ onFileChange }) => {
    return (
        <div className="file-upload border rounded p-3 text-center">
            <i className="fa fa-upload fa-2x"></i>
            <p>Drag and drop <br /> OR</p>
            <label htmlFor="file-upload"> Choose file</label>
            <input
                type="file"
                name="file-upload"
                id="file-upload"
                onChange={onFileChange}
            />
        </div>
    );
};

export default FileUpload;
