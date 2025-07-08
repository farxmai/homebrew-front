import React, { FC } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import {
  ClassicEditor,
  Essentials,
  Paragraph,
  Bold,
  Italic,
  Superscript,
  Subscript,
  Heading,
  Underline,
  Strikethrough,
  List,
  Table,
  TableToolbar,
  ImageBlock,
  ImageInline,
  ImageInsert,
  ImageResize,
  ImageToolbar,
  ImageUpload,
  Link,
  FontColor,
  FontBackgroundColor,
  Alignment,
  Undo,
} from "ckeditor5";

import "ckeditor5/ckeditor5.css";

export interface TextEditorProps {
  value?: string;
  onChange?: (value: string) => void;
  defaultValue?: string;
}

const TextEditor: FC<TextEditorProps> = ({ value, onChange, defaultValue }) => {
  return (
    <CKEditor
      editor={ClassicEditor}
      data={value}
      onChange={(event, editor) => {
        const data = editor.getData();
        onChange && onChange(data);
      }}
      config={{
        initialData: defaultValue || value,
        licenseKey: "GPL",
        plugins: [
          Essentials,
          Paragraph,
          Heading,
          Bold,
          Italic,
          Underline,
          Strikethrough,
          Superscript,
          Subscript,
          FontColor,
          FontBackgroundColor,
          Alignment,
          List,
          Table,
          TableToolbar,
          ImageBlock,
          ImageInline,
          ImageInsert,
          ImageResize,
          ImageToolbar,
          ImageUpload,
          Link,
          Undo,
        ],
        toolbar: [
          "heading",
          "|",
          "bold",
          "italic",
          "underline",
          "strikethrough",
          "superscript",
          "subscript",
          "|",
          "fontColor",
          "fontBackgroundColor",
          "|",
          "alignment:left",
          "alignment:right",
          "alignment:center",
          "alignment:justify",
          "|",
          "bulletedList",
          "numberedList",
          "|",
          "insertTable",
          "insertImage",
          "|",
          "link",
          "|",
          "undo",
          "redo",
        ],
      }}
    />
  );
};

export default TextEditor;
