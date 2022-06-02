import React, { useState } from "react";
import "../../pages/home/home.css";
import { Editor } from "../editor/Editor";
import parse from "html-react-parser";
import {
  EditorWrapper,
  TitleBox,
  ButtonToNote,
  CloseButton,
  EditorFooter,
  CheckBoxInput,
  Checkboxlabel,
} from "../../pages/home/homeComponents";

import {
  handleToggleModal,
  createNoteHandler,
} from "../../Redux/Reducers/notesSlice";
import { useDispatch } from "react-redux";
import { AlertToast } from "../toasts";
import { ColorPallete } from "../pallete/ColorPallete";


export const CreateModal = () => {

  const dispatch = useDispatch();

  const [bgColor, setbgColor] = useState("whitesmoke");
  const [note, setNote] = useState({ title: "", content: "", priority: "Low" });
  const [tags, setTags] = useState([]);
  const [enable, setEnable] = useState(true);

  const changeHandler = (e) => {
    setNote((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const setTagsHandler = (e) => {
    const include = e.target.checked;
    const value = e.target.value;
    if(include){
      setTags([...tags,value])
    }
    else{
      setTags([...tags.filter((tag) => tag != value)])
    }
  };

  const clickHandler = () => {
    if(note.title === ""){
      AlertToast("Please Enter Note Title")
      return;
    }
    if(note.content === ""){
      AlertToast("Please Enter note text")
      return;
    }
    setEnable(false);
    const parsedData = parse(`${note.content}`).props.children;
    const today = new Date();
    console.log(today)
    var timeStamp =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate() +
      " " +
      today.getHours() +
      ":" +
      today.getMinutes() +
      ":" +
      today.getSeconds();
    dispatch(
      createNoteHandler({
        title: note.title,
        content: parsedData,
        timestamp: timeStamp,
        bgcolor: bgColor,
        priority: note.priority,
        tags:tags,
      })
    );
    dispatch(handleToggleModal());
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
      <Editor note={note} setNote={setNote} enable={enable} />
        <EditorFooter>
         <ColorPallete setbgColor={setbgColor}/>
          <div>
            <CheckBoxInput
              type="checkbox"
              checked={tags.some((tag) => tag === "Office")}
              value="Office"
              id="office"
              onChange={setTagsHandler}
            />
            <Checkboxlabel htmlFor="office">Office</Checkboxlabel>
            <CheckBoxInput
              type="checkbox"
              checked={tags.some((tag) => tag === "Health")}
              value="Health"
              id="health"
              onChange={setTagsHandler}
            />
            <Checkboxlabel htmlFor="health">Health</Checkboxlabel>
            <CheckBoxInput
              type="checkbox"
              checked={tags.some((tag) => tag === "Study")}
              value="Study"
              id="study"
              onClick={setTagsHandler}
            />
            <Checkboxlabel htmlFor="study">Study</Checkboxlabel>
            <select
              value={note.priority}
              onChange={(e) =>
                setNote((prev) => ({ ...prev, priority: e.target.value }))
              }
            >
              <option>Priority</option>
              <option value="Low">Low</option>
              <option value="High">High</option>
              <option value="Medium">Medium</option>
            </select>
            <ButtonToNote onClick={clickHandler}>Add</ButtonToNote>
          </div>
        </EditorFooter>
      </EditorWrapper>
    </>
  );
};
