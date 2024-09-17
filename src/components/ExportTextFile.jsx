import React, { useState } from 'react';

export default function ExportTextFile(props) {
  const [textContent, setTextContent] = useState('');

  // Function to handle the content change in the textarea
  const handleChange = (e) => {
    setTextContent(e.target.value);
  };

  // Function to export the text as a file
  const exportFile = () => {
    const blob = new Blob([textContent], { type: 'text/plain' });
    const fileUrl = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = 'myTextFile.txt'; // Name of the file
    link.click();
    URL.revokeObjectURL(fileUrl); // Clean up the URL object
  };

  return (
    <div>
      <h2>Write Text and Export as File</h2>
      <textarea
        value={textContent}
        onChange={handleChange}
        rows="10"
        cols="50"
        placeholder="Enter some text here..."
      ></textarea>
      <br />
      <button onClick={exportFile}>Export as Text File</button>
    </div>
  );
}
