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
  handleToggleEditModal,
  editNoteHandler
} from "../../Redux/Reducers/notesSlice";
import { useDispatch, useSelector } from "react-redux";
import { AlertToast } from "../toasts";
import { ColorPallete } from "../pallete/ColorPallete";

export const EditModal = () => {
  const { noteToEdit } = useSelector((store) => store.notes);

  const dispatch = useDispatch();

  const [bgColor, setbgColor] = useState(noteToEdit.bgcolor);
  const [note, setNote] = useState({
    title: noteToEdit.title,
    content: noteToEdit.content,
    priority: noteToEdit.priority,
  });
  const [tags, setTags] = useState(noteToEdit.tags);

  const changeHandler = (e) => {
    setNote((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const setTagsHandler = (e) => {
    const include = e.target.checked;
    const value = e.target.value;
    if (include) {
      setTags([...tags, value]);
    } else {
      setTags([...tags.filter((tag) => tag != value)]);
    }
  };

  const clickHandler = () => {
    if (note.title === "") {
      AlertToast("Please Enter Note Title");
      return;
    }
    if (note.content === "") {
      AlertToast("Please Enter note text");
      return;
    }
    const parsedData = note.content
    dispatch(
        editNoteHandler({
        _id:noteToEdit._id,
        title: note.title,
        content: parsedData,
        bgcolor: bgColor,
        priority: note.priority,
        tags: tags,
      })
    );
    dispatch(handleToggleEditModal());
  };

  return (
    <>
      <EditorWrapper style={{ backgroundColor: bgColor }}>
        <CloseButton onClick={() => dispatch(handleToggleEditModal())}>
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
        <Editor note={note} setNote={setNote} />
        <EditorFooter>
        <ColorPallete setbgColor={setbgColor} />
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
            <ButtonToNote onClick={clickHandler}>Update</ButtonToNote>
          </div>
        </EditorFooter>
      </EditorWrapper>
    </>
  );
};
