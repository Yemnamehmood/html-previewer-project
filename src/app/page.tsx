'use client'
import { useEffect, useState } from "react";

export default function Home() {
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
`);

  const handleCodeChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setHtmlCode(e.target.value);
  };

  return (
    <div className="container">
      <h1 className="title">HTML Previewer</h1>
      <div className="editor-container">
        <textarea
          className="textarea"
          value={htmlCode}
          onChange={handleCodeChange}
          placeholder="Type your HTML code here..."
        />
        <div className="preview">
          <iframe
            srcDoc={htmlCode}
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
