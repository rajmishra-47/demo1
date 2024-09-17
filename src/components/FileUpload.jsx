import React, { useState } from 'react';

export default function FileUpload() {
  const [file, setFile] = useState(null); // File state
  const [fileContent, setFileContent] = useState(''); // File content state

  // Handle file upload
  const handleFile = (e) => {
    const uploadedFile = e.target.files[0];
    setFile(uploadedFile);
    readFile(uploadedFile); // Call the readFile function
  };

  // Read file content
  const readFile = (file) => {
    const reader = new FileReader();
    
    // Event listener for when the file is read
    reader.onload = (e) => {
      setFileContent(e.target.result); // Set the file content state
    };

    // Read the file as text
    console.log(reader.readAsText(file,'UTF-8'));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (file) {
      console.log("File successfully read:");
      console.log(fileContent); // This will log the file's contents
    } else {
      console.log("No file uploaded");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="file" name="file" onChange={handleFile} />
        <button type="submit">Submit</button>
      </form>

      {/* Display file content */}
      {fileContent && (
        <div>
          <h3>File Content:</h3>
          <pre>{fileContent}</pre>
        </div>
      )}
    </div>
  );
}
