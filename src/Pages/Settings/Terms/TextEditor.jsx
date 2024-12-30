import React, { useState } from "react";
import {
  FaBold,
  FaItalic,
  FaUnderline,
  FaAlignLeft,
  FaAlignCenter,
  FaAlignRight,
  FaListUl,
  FaListOl,
  FaUndo,
  FaImage,
  FaTable,
} from "react-icons/fa";

const TextEditor = ({ isDarkMode }) => {
  const [fontSize, setFontSize] = useState("16px");
  const [fontFamily, setFontFamily] = useState("Arial");
  const [backgroundColor, setBackgroundColor] = useState(isDarkMode ? "#000000" : "000000"); 

  const [textColor, setTextColor] = useState("gray");
  const editorRef = React.useRef(null);

  const applyStyle = (command, value = null) => {
    if (editorRef.current) {
      editorRef.current.focus();
      document.execCommand(command, false, value);
    }
  };

  const toggleList = (type) => {
    const selection = window.getSelection();
    const selectedElement = selection.anchorNode ? selection.anchorNode.parentElement : null;
    
    if (selectedElement && (selectedElement.tagName === "UL" || selectedElement.tagName === "OL")) {
      applyStyle("insertHTML", "<p>" + selectedElement.innerHTML + "</p>");
      selectedElement.remove();
    } else {
      if (type === "unordered") {
        applyStyle("insertUnorderedList");
      } else {
        applyStyle("insertOrderedList");
      }
    }
  };

  const insertImage = (file) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      if (editorRef.current) {
        const img = document.createElement("img");
        img.src = e.target.result;
        img.style.maxWidth = "100%";
        img.style.height = "auto";

        const range = window.getSelection().getRangeAt(0);
        range.insertNode(img);
      }
    };
    reader.readAsDataURL(file);
  };

  const insertTable = () => {
    const table = document.createElement("table");
    table.style.width = "100%";
    table.style.height = "150px";
    table.style.border = "1px solid #ddd";
    table.style.borderCollapse = "collapse";

    for (let i = 0; i < 3; i++) {
      const row = table.insertRow();
      for (let j = 0; j < 3; j++) {
        const cell = row.insertCell();
        cell.style.border = "1px solid #ddd";
        cell.style.padding = "8px";
      }
    }

    const range = window.getSelection().getRangeAt(0);
    range.insertNode(table);
  };

  return (
    <div
      className={`py-6 ${isDarkMode ? 'bg-[#30334e]' : 'bg-gray-100'} transition-all duration-300`}
    >
      <div
        className={`shadow-lg p-4 rounded-xl flex flex-wrap items-center justify-between space-x-4 mb-4 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}
      >
        <div className="flex items-center space-x-4">
          <select
            className={`border border-gray-300 rounded-md px-2 py-1 ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-50 text-black'}`}
            value={fontFamily}
            onChange={(e) => {
              setFontFamily(e.target.value);
              applyStyle("fontName", e.target.value);
            }}
          >
            <option value="Arial">Arial</option>
            <option value="Georgia">Georgia</option>
            <option value="Times New Roman">Times New Roman</option>
            <option value="Verdana">Verdana</option>
          </select>

          <select
            className={`border border-gray-300 rounded-md px-2 py-1 ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-50 text-black'}`}
            value={fontSize}
            onChange={(e) => {
              setFontSize(e.target.value);
              applyStyle("fontSize", e.target.value);
            }}
          >
            <option value="1">12px</option>
            <option value="2">14px</option>
            <option value="3">16px</option>
            <option value="4">18px</option>
            <option value="5">20px</option>
          </select>

          <input
            type="color"
            className="border border-gray-300 rounded-md"
            onChange={(e) => {
              setTextColor(e.target.value);
              applyStyle("foreColor", e.target.value);
            }}
            value={textColor}
          />
        </div>

        <div className="flex items-center space-x-4">
          <button
            className="p-2 rounded-md hover:bg-gray-200 transition"
            onClick={() => applyStyle("bold")}
          >
            <FaBold />
          </button>
          <button
            className="p-2 rounded-md hover:bg-gray-200 transition"
            onClick={() => applyStyle("italic")}
          >
            <FaItalic />
          </button>
          <button
            className="p-2 rounded-md hover:bg-gray-200 transition"
            onClick={() => applyStyle("underline")}
          >
            <FaUnderline />
          </button>
        </div>

        <div className="flex items-center space-x-4">
          <button
            className="p-2 rounded-md hover:bg-gray-200 transition"
            onClick={() => applyStyle("justifyLeft")}
          >
            <FaAlignLeft />
          </button>
          <button
            className="p-2 rounded-md hover:bg-gray-200 transition"
            onClick={() => applyStyle("justifyCenter")}
          >
            <FaAlignCenter />
          </button>
          <button
            className="p-2 rounded-md hover:bg-gray-200 transition"
            onClick={() => applyStyle("justifyRight")}
          >
            <FaAlignRight />
          </button>
        </div>

        <div className="flex items-center space-x-4">
          <button
            className="p-2 rounded-md hover:bg-gray-200 transition"
            onClick={() => toggleList("unordered")}
          >
            <FaListUl />
          </button>
          <button
            className="p-2 rounded-md hover:bg-gray-200 transition"
            onClick={() => toggleList("ordered")}
          >
            <FaListOl />
          </button>
          <button
            className="p-2 rounded-md hover:bg-gray-200 transition"
            onClick={insertTable}
          >
            <FaTable />
          </button>
       
        </div>

        <div className="flex items-center space-x-4">
          <input
            type="color"
            className="border border-gray-300 rounded-md"
            onChange={(e) => {
              setBackgroundColor(e.target.value);
              applyStyle("backColor", e.target.value);
            }}
            value={backgroundColor}
          />
       
          <button
            className="p-2 rounded-md hover:bg-gray-200 transition"
            onClick={() => applyStyle("undo")}
          >
            <FaUndo />
          </button>
        </div>
      </div>

      <div
  ref={editorRef}
  contentEditable
  className={`w-full shadow-lg border border-gray-300 rounded-xl p-6 mt-4 min-h-[200px] ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}
  style={{
    fontSize,
    fontFamily,
    backgroundColor,
    color: textColor,
  }}
>
</div>

    </div>
  );
};

export default TextEditor;
