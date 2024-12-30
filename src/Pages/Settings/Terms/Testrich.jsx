import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Import the default styles for react-quill
import { Button } from "daisyui"; // Import DaisyUI button component for UI

const Testrich = () => {
  const [editorContent, setEditorContent] = useState("");

  // Handle content change in the editor
  const handleChange = (value) => {
    setEditorContent(value);
  };

  // Handle save action (e.g., log the content to console)
  const handleSave = () => {
    console.log(editorContent);
  };

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-6">
      <div className="bg-white p-4 shadow-lg rounded-lg">
        <ReactQuill
          value={editorContent}
          onChange={handleChange}
          theme="snow"
          className="h-64" // Adjust height as needed
        />
      </div>
      
      <div className="flex justify-end space-x-4">
        <Button onClick={handleSave} color="primary">Save</Button>
        <Button onClick={() => setEditorContent("")} color="secondary">Clear</Button>
      </div>
    </div>
  );
};

export default Testrich;
