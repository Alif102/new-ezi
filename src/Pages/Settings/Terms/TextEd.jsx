import React, { useState, useRef } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Import Quill styles
import "quill-table-ui/dist/index.css"; // Import Quill Table UI styles
import { Quill } from "react-quill";
import Table from "quill-table-ui"; // Import table module


// Register the table module
Quill.register(
    {
      "modules/table": Table,
    },
    true // Register globally
  );

const RichTextEditor = () => {
  const [editorValue, setEditorValue] = useState("");
  const quillRef = useRef(null); // Create a ref to access the Quill instance

  const handleEditorChange = (value) => {
    setEditorValue(value); // Save editor content in the state
  };

  // Insert a table (e.g., 2 rows, 3 columns)
  const insertTable = () => {
    const quill = quillRef.current.getEditor(); // Get Quill instance
    const range = quill.getSelection(); // Get current cursor position
    if (range) {
      quill.insertEmbed(range.index, "table", { rows: 2, columns: 3 }); // Insert a 2x3 table
    }
  };

  return (
    <div className="editor-container">
   
    
      <ReactQuill className=" h-28 pb-9"
        ref={quillRef} // Bind the ref to Quill
        value={editorValue} // Bind the editor value to state
        onChange={handleEditorChange} // Handle editor changes
        modules={{
          toolbar: [
            [{ header: "1" }, { header: "2" },{ header: "3" }, { font: [] }],
            [{ list: "ordered" }, { list: "bullet" }],
            ["bold", "italic", "underline", "strike"],
            ["link", "image"],
            [{ align: [] }],
            ["blockquote", "code-block"],
            [{ color: [] }, { background: [] }],
            // ["clean"], 
            
          ],
          table: true, // Enable table module
        }}
      /> 
    </div>
  );
};

export default RichTextEditor;
