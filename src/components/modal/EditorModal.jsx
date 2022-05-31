import React, { useState,useRef } from "react";
import "../../pages/home/home.css";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import parse from "html-react-parser";
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
  EditorFooter,
} from "../../pages/home/homeComponents";

import { handleToggleModal ,postNoteHandler} from "../../Redux/Reducers/notesSlice";
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

const noModules = {
  toolbar: false,
};

export const EditorModal = () => {
  const dispatch = useDispatch();

  const [bgColor, setbgColor] = useState("white");
  const [note, setNote] = useState({ title: "", content: "" });
  const [enable, setEnable] = useState(true);

  const inputRef = useRef();

  const changeHandler = (e) => {
    setNote((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const clickHandler = () => {
    setEnable(false)
  const parsedData = parse(`${note.content}`).props.children
    dispatch(postNoteHandler({title:note.title,content:parsedData}))
    dispatch(handleToggleModal())

  };

  return (
    <>
      <EditorWrapper style={{ backgroundColor: bgColor }}>
        <CloseButton onClick={() => dispatch(handleToggleModal())}>
          {" "}
          X
        </CloseButton>

        <TitleBox
          type="text"
          placeholder="Add title ....."
          style={{ backgroundColor: bgColor }}
          value={note.title}
          name="title"
          onChange={changeHandler}
        />
        <ReactQuill
          placeholder={"Add notes......"}
          modules={enable ? modules : noModules}
          height={"100px"}
          value={note.content}
          readOnly={!enable}
          ref={inputRef}
          onChange={(e) =>
            setNote((prev) => ({ ...prev, content: e }))
          }
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
            <ButtonToNote onClick={clickHandler}>Add</ButtonToNote>
          </div>
        </EditorFooter>
      </EditorWrapper>
    </>
  );
};
