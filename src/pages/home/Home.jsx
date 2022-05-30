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
  WhiteButton,
  ButtonToNote,
  CloseButton,
  EditorFooter
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
  const [bgColor, setbgColor] = useState("white");
  const [isNotesOpen,setOpen] = useState(false)
  return (
    <div className="section">
      {isNotesOpen && <EditorWrapper style={{ backgroundColor: bgColor }}>
      
          <CloseButton onClick={()=>setOpen(false)}>  X</CloseButton>
      
   
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
        <EditorFooter>
        <Pallatte>
          <PinkButton onClick={() => setbgColor("lightpink")}></PinkButton>
          <BlueButton onClick={() => setbgColor("lightblue")}></BlueButton>
          <GreenButton onClick={() => setbgColor("lightgreen")}></GreenButton>
          <YellowButton onClick={() => setbgColor("yellow")}></YellowButton>
          <WhiteButton onClick={() => setbgColor("white")}></WhiteButton>
        </Pallatte>
        <div>
      <select>
        <option>Priority</option>
        <option>Low</option>
        <option>High</option>
        <option>Medium</option>
      </select>
        <ButtonToNote>Add</ButtonToNote>
        </div>
        </EditorFooter>
      </EditorWrapper>}
    
        <ButtonToNote addNotes onClick={()=>setOpen(true)}>Add Note</ButtonToNote>
      
    </div>
  );
};
