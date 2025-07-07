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
  Image,
  ImageUpload,
  ImageResize,
  ImageToolbar,
  Link,
  FontColor,
  FontBackgroundColor,
  Alignment,
} from "ckeditor5";

import "ckeditor5/ckeditor5.css";

export interface TextEditorProps {
  value?: string;
  onChange?: (value: string) => void;
}

const TextEditor: FC<TextEditorProps> = ({ value, onChange }) => {
  return (
    <CKEditor
      editor={ClassicEditor}
      data={value}
      onChange={(event, editor) => {
        const data = editor.getData();
        onChange && onChange(data);
      }}
      config={{
        licenseKey: "GPL",
        plugins: [
          Heading,
          List,
          Table,
          TableToolbar,
          Image,
          ImageToolbar,
          Link,
          Essentials,
          Paragraph,
          Bold,
          Italic,
          Superscript,
          Subscript,
          Underline,
          Strikethrough,
          FontColor,
          FontBackgroundColor,
          Alignment,
          ImageUpload,
          ImageResize,
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
          "image",
          "|",
          "link",
          "|",
          "undo",
          "redo",
        ],
        image: {
          toolbar: [
            "imageStyle:full",
            "imageStyle:side",
            "imageTextAlternative",
            "ckboxImageEdit",
          ],
        },
        table: {
          contentToolbar: ["tableColumn", "tableRow", "mergeTableCells"],
        },
      }}
    />
  );
};

export default TextEditor;
