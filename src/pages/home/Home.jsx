import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./home.css";
import {
  EditorWrapper,
  TitleBox,
  Pallatte,
  PinkButton,
  BlueButton,
  GreenButton,
  YellowButton,
  ButtonToNote
} from "./homeComponents";
const modules = {
  toolbar: [
    [{ font: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [{ size: ["small", false, "large", "huge"] }],
    [{ list: "ordered" }, { list: "bullet" }],
    ["link", "image"],
    [{ color: [] }, { align: [] }],
  ],
};
export const Home = () => {
  const [notetext, setText] = useState("");
  const [notetitle, setTitle] = useState("");
  const [bgColor, setbgColor] = useState("");
  const [isNotesOpen,setOpen] = useState(false)
  return (
    <div className="section">
      {isNotesOpen && <EditorWrapper style={{ backgroundColor: bgColor }}>
        <TitleBox
          type="text"
          placeholder="Add title ....."
          style={{ backgroundColor: bgColor }}
        />
        <ReactQuill
          modules={modules}
          placeholder={"Add notes......"}
          height={"100px"}
        />
        <Pallatte>
          <PinkButton onClick={() => setbgColor("lightpink")}></PinkButton>
          <BlueButton onClick={() => setbgColor("lightblue")}></BlueButton>
          <GreenButton onClick={() => setbgColor("lightgreen")}></GreenButton>
          <YellowButton onClick={() => setbgColor("yellow")}></YellowButton>
        </Pallatte>
      </EditorWrapper>}
    
        <ButtonToNote addNotes onClick={()=>setOpen(true)}>Add Note</ButtonToNote>
      
    </div>
  );
};
