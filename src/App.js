import React, { useState } from "react";
import marked from "marked";
import ReactMarkdown from "react-markdown";
import "./App.css";

export default function App() {
  const [markdown, setMarkdown] = useState("");
  // previewing changes on text area
  const handleChange = (e) => {
    setMarkdown(e.target.value);
  };
  return (
    <div className="app">
      <textarea value={markdown} onChange={handleChange} />
      {/* markdown with complex syntax */}
      {/* <div
        className="preview"
        dangerouslySetInnerHTML={{ __html: marked(markdown) }}
      /> */}
      {/* markdown with react pre made component */}
      <ReactMarkdown className="preview" source={markdown} />
    </div>
  );
}
