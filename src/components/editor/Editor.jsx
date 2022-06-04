import React from 'react'
import ReactQuill,{Quill} from "react-quill";
import "react-quill/dist/quill.snow.css";
import "quill-emoji/dist/quill-emoji.css";


const modules = {
    toolbar: [
      [{ font: [] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ size: ["small", false, "large", "huge"] }],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"],
      [{ color: [] }, { align: [] }],
      ["emoji"],
      ["clean"],
    ],

    'emoji-toolbar': true,
    "emoji-shortname": true,
  };
  


export const Editor = ({note,setNote}) => {
  return (
    <ReactQuill
          placeholder={"Add notes......"}
          modules={ modules}
          height={"100px"}
          value={note.content}
          onChange={(e) => setNote((prev) => ({ ...prev, content: e }))}
        />
  )
}
