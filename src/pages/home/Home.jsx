import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./home.css";
import { ButtonToNote, NotesWrapper } from "./homeComponents";
import { handleToggleModal } from "../../Redux/Reducers/notesSlice";
import { useDispatch } from "react-redux";
import { EachNote } from "../../components/eachNote/EachNote";

export const Home = () => {
  const dispatch = useDispatch();
  const { modalOpen, notes } = useSelector((store) => store.notes);
  console.log(notes);
  return (
    <>
      <div className="section">
        <ButtonToNote addNotes onClick={() => dispatch(handleToggleModal())}>
          Add Note
        </ButtonToNote>
        {notes ? (
          <NotesWrapper>
            {notes.map((note) => (
              <EachNote key={note._id} note={note} />
            ))}
          </NotesWrapper>
        ) : (
          ""
        )}
      </div>
    </>
  );
};
