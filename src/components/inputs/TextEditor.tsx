import React from "react";

export interface TextEditorProps {}

const TextEditor: React.FC<TextEditorProps> = ({}) => {
  return (
    <>
      <div className="text-editor">
        <textarea
          placeholder="Type your text here..."
          style={{
            width: "100%",
            height: "300px",
            padding: "10px",
            fontSize: "16px",
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}
        />
      </div>
    </>
  );
};

export default TextEditor;
