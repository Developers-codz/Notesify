import React, { useState,ChangeEvent } from "react";
import "pages/home/home.css";
import { Editor } from "../editor/Editor";
import {
  EditorWrapper,
  TitleBox,
  ButtonToNote,
  CloseButton,
  EditorFooter,
  CheckBoxInput,
  Checkboxlabel,
} from "pages/home/homeComponents";

import {
  handleToggleEditModal,
  editNoteHandler
} from "Redux/Reducers/notesSlice";
import { useAppDispatch, useAppSelector } from "../../Redux/hooks";
import { AlertToast } from "../toasts";
import { ColorPallete } from "../pallete/ColorPallete";

export const EditModal = ():JSX.Element => {
  const { noteToEdit  } = useAppSelector((store) => store.notes);

  const dispatch = useAppDispatch();

  const [bgColor, setbgColor] = useState(noteToEdit?.bgcolor);
  const [note, setNote] = useState({
    _id:noteToEdit?._id,
    title: noteToEdit?.title,
    content: noteToEdit?.content,
    priority: noteToEdit?.priority,
  });

  
  const [tags, setTags] = useState(noteToEdit?.tags);

  const changeHandler = (e:ChangeEvent<HTMLInputElement>) => {
    setNote((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const setTagsHandler = (e:ChangeEvent<HTMLInputElement>) => {
    const include = e.target.checked;
    const value = e.target.value;
    if (include) {
      // Providing a fallback of an empty array as tags can be undefined
      setTags([...(tags|| []), value as string]);
    } else {
      setTags([...(tags || [])?.filter((tag) => tag != value)]);
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
        _id:note._id,
        title: note?.title,
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
              checked={tags?.some((tag) => tag === "Office")}
              value="Office"
              id="office"
              onChange={setTagsHandler}
            />
            <Checkboxlabel htmlFor="office">Office</Checkboxlabel>
            <CheckBoxInput
              type="checkbox"
              checked={tags?.some((tag) => tag === "Health")}
              value="Health"
              id="health"
              onChange={setTagsHandler}
            />
            <Checkboxlabel htmlFor="health">Health</Checkboxlabel>
            <CheckBoxInput
              type="checkbox"
              checked={tags?.some((tag) => tag === "Study")}
              value="Study"
              id="study"
              onChange={setTagsHandler}
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
