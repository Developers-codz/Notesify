import React from 'react'
import ReactQuill,{Quill} from "react-quill";
import quillEmoji from 'quill-emoji';
import "react-quill/dist/quill.snow.css";
import "quill-emoji/dist/quill-emoji.css";


const { EmojiBlot, ShortNameEmoji, ToolbarEmoji, TextAreaEmoji } = quillEmoji;

Quill.register({
  'formats/emoji': EmojiBlot,
  'modules/emoji-shortname': ShortNameEmoji,
  'modules/emoji-toolbar': ToolbarEmoji,
  'modules/emoji-textarea': TextAreaEmoji
}, true);
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
  
type Props = {
  note:{
    content?:string
  },
  setNote : any
}
type PrevObj = {
  content:string
}

export const Editor = ({note,setNote}:Props) => {
  return (
    <ReactQuill
          placeholder={"Add notes......"}
          modules={ modules}
          // height={"100px"}
          value={note.content}
          onChange={(e) => setNote((prev:PrevObj) => ({ ...prev, content: e }))}
        />
  )
}
