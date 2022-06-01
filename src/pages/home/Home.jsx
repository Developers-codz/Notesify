import React, { useState,useEffect } from "react";
import { useSelector } from "react-redux";
import "./home.css";
import { ButtonToNote, NotesWrapper,NoNotesMsg,ButtonToNoteNow } from "./homeComponents";
import { handleToggleModal,getUserNotes } from "../../Redux/Reducers/notesSlice";
import { useDispatch } from "react-redux";
import { EachNote } from "../../components/eachNote/EachNote";
import { Logo } from "../../assets/icons";

export const Home = () => {
  const [isLoading,setLoading] = useState(true)
  const dispatch = useDispatch();
  const { modalOpen, notes } = useSelector((store) => store.notes);
  useEffect(()=>{
    dispatch(getUserNotes())
  },[])
  useEffect(()=>{
    setTimeout(()=>{
      setLoading(false)
    },1000)
  },[])
  return (
    <>
     {isLoading ?<div className="section"> Loading.....</div>: <div className="section">
        <ButtonToNote addNotes onClick={() => dispatch(handleToggleModal())}>
          Add Note
        </ButtonToNote>
        {notes.length !== 0 ? (
          <NotesWrapper>
            {notes.map((note) => (
              <EachNote key={note._id} flag={"home"} note={note} />
            ))}
          </NotesWrapper>
        ) : (
         <NotesWrapper noNote>
            <Logo width="5rem" height="5rem" />
          <NoNotesMsg>No notes yet, Start creating Now</NoNotesMsg>
          <ButtonToNoteNow   onClick={() => dispatch(handleToggleModal())}>
          Add Now
        </ButtonToNoteNow>
         </NotesWrapper>
        )}
      </div>}
    </>
  );
};
