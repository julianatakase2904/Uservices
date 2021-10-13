import React, { useState, useEffect } from "react";
import AuthService from "../services/auth.service";

import UploadService from "../services/FileUploadService";

const UploadFiles = () => {
    const [selectedFiles, setSelectedFiles] = useState(undefined);
    const [currentFile, setCurrentFile] = useState(undefined);
    const [progress, setProgress] = useState(0);
    const [message, setMessage] = useState("");
    const [fileInfos, setFileInfos] = useState([]);
    const currentUser = AuthService.getCurrentUser();


    useEffect(() => {
        UploadService.getFiles().then((response) => {
            setFileInfos(response.data);
        });
    }, []);

    const selectFile = (event) => {
        setSelectedFiles(event.target.files);
    };

    const upload = () => {
        let currentFile = selectedFiles[0];

        setProgress(0);
        setCurrentFile(currentFile);

        UploadService.upload(currentFile, (event) => {
            setProgress(Math.round((100 * event.loaded) / event.total));
        })
            .then((response) => {
                setMessage(response.data.message);
                return UploadService.getFiles();
            })
            .then((files) => {
                setFileInfos(files.data);
            })
            .catch(() => {
                setProgress(0);
                setMessage("Could not upload the file!");
                setCurrentFile(undefined);
            });

        setSelectedFiles(undefined);
    };

    return (

        <div>

            <div className="w3-container w3-black w3-padding-32 ">
                <h1>
                    {currentUser.firstName}'s Identification Documents
                </h1>
            </div>
            <br />
            <p>In order for you to become a Service Provider, Uservices
                needs to perform a background check. <br />
                Please provide the following documents:<br /><br />
                <ul>
                    <li>Driver's license</li>
                    <li>Official Identification document</li>
                </ul><br />
                <b>Please note: </b> you need to provide an image of good quality of <b>each </b>
                side of each the document. File size limit: <b>2MB</b><hr />

            </p>
            {currentFile && (
                <div className="progress">
                    <div
                        className="progress-bar progress-bar-info progress-bar-striped"
                        role="progressbar"
                        aria-valuenow={progress}
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: progress + "%" }}
                    >
                        {progress}%
                    </div>
                </div>
            )}

            <label className="btn btn-default">
                <input type="file" onChange={selectFile} />
            </label>

            <button
                className="btn btn-success"
                disabled={!selectedFiles}
                onClick={upload}
            >
                Upload
            </button>

            <div className="alert alert-light" role="alert">
                {message}
            </div>

            <div className="card">
                <div className="card-header">List of Files</div>
                <ul className="list-group list-group-flush">
                    {fileInfos &&
                        fileInfos.map((file, index) => (
                            <li className="list-group-item" key={index}>
                                <a href={file.url}>{file.name}</a>
                            </li>
                        ))}
                </ul>
            </div>
        </div>
    );
};

export default UploadFiles;