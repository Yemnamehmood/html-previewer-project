'use client'
import { useState } from "react";

export default function Home() {
  // State to hold the HTML code input by the user
  const [htmlCode, setHtmlCode] = useState(`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Hello, World!</h1>
    <p>This is a demo HTML template.</p>
</body>
</html>
`); // Default demo HTML code

  // Function to handle changes in the textarea
  const handleCodeChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setHtmlCode(e.target.value); // Update state with user input
  };

  return (
    <div className="container">
      <h1 className="title">HTML Previewer</h1>
      <div className="editor-container">
        <textarea
          className="textarea"
          value={htmlCode} // Bind value to state
          onChange={handleCodeChange} // Set onChange to update state
          placeholder="Type your HTML code here..."
        />
        <div className="preview">
          <iframe
            srcDoc={htmlCode} // Use srcDoc to show live preview
            title="HTML Preview"
            style={{ width: "100%", height: "100%", border: "none" }}
          />
        </div>
      </div>
      <h2 className="preview-title">Preview</h2>
      <footer className="footer">
        &copy; All rights reserved. HTML Previewer by Yemna Memood
      </footer>
    </div>
  );
}
