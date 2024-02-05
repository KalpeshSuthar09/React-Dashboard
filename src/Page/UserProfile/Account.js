import React, { useState, useCallback } from "react";
import { useDropzone } from 'react-dropzone';
import UserProfile from "./UserProfile";

function Account() {
  const [fileUrl, setFileUrl] = useState(null);

  const onDrop = useCallback(async (acceptedFiles) => {
    setFileUrl(URL.createObjectURL(acceptedFiles[0]));
  }, []);

  const {getRootProps, getInputProps} = useDropzone({
    onDrop,
    accept: 'image/*',
    maxSize: 5000000,
  });

  return (
    <div className="account">
      <div className="account-info">
        <h1>Profile Settings</h1>
      </div>
      <div className="account-box">
        <div className="account-box-img" {...getRootProps()}>
          <input {...getInputProps()} />
          <img src={fileUrl} alt="account upload" className='account-img' />
          <p className='account-para'>Change Image</p>
        </div>
        <div className="account-form">
          <UserProfile />
        </div>
      </div>
    </div>
  );
}

export default Account;
