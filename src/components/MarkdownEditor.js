import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import "./MarkdownEditor.css"; // Import custom CSS for styling

const MarkdownEditor = () => {
  const [markdown, setMarkdown] = useState("");

  const handleChange = (event) => {
    setMarkdown(event.target.value);
  };

  return (
    <div className="markdown-editor">
      <textarea
        className="markdown-input"
        value={markdown}
        onChange={handleChange}
        placeholder="Enter your Markdown here..."
      />
      <div className="markdown-preview">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
      </div>
    </div>
  );
};

export default MarkdownEditor;
