import React, { useState } from 'react';
import axios from "axios";
 
const api = axios.create({
  // Make sure you use the correct URL for your server
  baseURL: "http://localhost:5005/photos",
  // withCredentials: true // => You might need this option if using cookies and sessions
});

function PhotoUpload() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append("file", selectedFile);

      return api.post("/upload", formData)
        .then(res => res.data)
        .catch(errorHandler);
    }
  };

  const errorHandler = (err) => {
    throw err;
  };

  return (
    <div>
      <h3>Upload Your Photo</h3>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
}

export default PhotoUpload;

