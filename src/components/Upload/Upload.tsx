import React, { useState } from 'react';
import UploadCatImage from '../../network/uploadCatImage.service'
import Loader from '../Loader/Loader'
import { useHistory } from "react-router-dom";

import ImageUploader from "react-images-upload";

const Upload = () => {
    const history = useHistory();
    const [pic, setPic] = useState<File>();
    const [error, setError] = useState(undefined);
    const [isUploading, setIsUploading] = useState('');

    const onDrop = (files: File[], pictures: string[]) => {
        setPic(files[0]);
    };

    const handleImageUpload = async (file: File) => {
        try {
            setIsUploading('true');
            await UploadCatImage({ file });
            setIsUploading('success');
            history.push("/");
        } catch (err) {
            if (err.response) {
                setIsUploading('false');
                console.log(err.response)
                setError(err.response.data.message)
            }
        }
    }
    return (
        <div>
            <ImageUploader
                withPreview={true}
                withIcon={true}
                onChange={onDrop}
                singleImage={true}
                imgExtension={[".jpg", ".gif", ".png", ".gif"]}
                maxFileSize={5242880}
            />
            { pic &&
                <div>
                    <div className="relative flex justify-center">
                        <button onClick={() => handleImageUpload(pic)} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex object-center place-self-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                            </svg>
                            <span>Upload</span>
                        </button>

                    </div>
                    {isUploading === 'true' &&
                        <div className="flex mt-3 justify-center">
                            <Loader />
                        </div>
                    }
                </div>
            }

            { error &&
                <div className="flex justify-center">
                    <span className="text-red-600">{error}</span>
                </div>
            }
            {isUploading === 'success' &&
                <div className="flex justify-center">
                    <span className="text-green-600">Image uploaded successfully</span>
                </div>
            }
        </div>
    );



};

export default Upload;