import "./file-item.scss";
import {cs, State} from "cs-react";

const FileItem = ({label, file, next}) => cs(
    ['f', (_, next) => State({initValue: file, next})],
    ({f}) => {
        const error = f.value ? null : "This field is required";
        return next({
            render: ({showErrors} = {}) => (<>
                <p>{label}</p>
                {showErrors && error && (
                    <p className="fs-6 text-danger">
                        {error}
                    </p>
                )}
                {f.value ? (
                    <div className="image-container">
                        <img
                            src={f.value.type?.startsWith("image/") ? URL.createObjectURL(f.value) : f.value}
                            alt={label} className="image"/>
                        <button className="delete-button" onClick={(e) => {
                            e.preventDefault();
                            f.onChange(null)
                        }}>
                            <span>-</span>
                        </button>
                    </div>
                ) : (
                    <div className="file-upload border rounded p-3 text-center">
                        <i className="fa fa-upload fa-2x"></i>
                        <p>Drag and drop <br/> OR</p>
                        <label htmlFor={label}> Choose file</label>
                        <input
                            {...{
                                type: "file",
                                id: label,
                                onChange: (e) => {
                                    f.onChange(e.target.files[0])
                                },
                            }}
                        />

                    </div>
                )
                }
            </>),
            value: f.value
        })
    }
);

export default FileItem;
