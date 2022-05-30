import React , { useState }from 'react'
import "../../pages/home/home.css";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import {
  EditorWrapper,
  TitleBox,
  Pallette,
  PinkButton,
  BlueButton,
  GreenButton,
  YellowButton,
  WhiteButton,
  ButtonToNote,
  CloseButton,
  EditorFooter
} from "../../pages/home/homeComponents";
import {handleToggleModal} from "../../Redux/Reducers/notesSlice"
import { useDispatch } from "react-redux";



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
export const EditorModal = () => {
    const dispatch = useDispatch();
    const [bgColor, setbgColor] = useState("white");
  return (
    <>
    <EditorWrapper style={{ backgroundColor: bgColor }}>
      
      <CloseButton onClick={()=>dispatch(handleToggleModal())}>  X</CloseButton>
  

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
    <Pallette>
      <PinkButton onClick={() => setbgColor("lightpink")}></PinkButton>
      <BlueButton onClick={() => setbgColor("lightblue")}></BlueButton>
      <GreenButton onClick={() => setbgColor("lightgreen")}></GreenButton>
      <YellowButton onClick={() => setbgColor("yellow")}></YellowButton>
      <WhiteButton onClick={() => setbgColor("white")}></WhiteButton>
    </Pallette>
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
  </EditorWrapper>
    </>
  )
}
