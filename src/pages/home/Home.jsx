import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "./home.css";
import {
  ButtonToNote,
  NotesWrapper,
  NoNotesMsg,
  ButtonToNoteNow,
} from "./homeComponents";
import { handleToggleModal, getUserNotes } from "Redux/Reducers/notesSlice";
import { useDispatch } from "react-redux";
import { EachNote } from "components/eachNote/EachNote";
import { Logo } from "assets/icons";
import {
  getPrioritySorted,
  getTagsSortedData,
  getSortedData,
  useDocumentTitle,
  getSearchSortedData
} from "functions";

export const Home = () => {
  const dispatch = useDispatch();
  const { notes, byPriority, byTags, byDate ,bySearch} = useSelector(
    (store) => store.notes
  );
  const [isLoading, setLoading] = useState(true);
  const searchSortedNotes = getSearchSortedData(notes,bySearch)
  const priorityNotes = getPrioritySorted(searchSortedNotes, byPriority);
  const tagSortedNotes = getTagsSortedData(priorityNotes, byTags);
  const sortedData = getSortedData(tagSortedNotes, byDate);
  useDocumentTitle("Home");
  useEffect(() => {
    dispatch(getUserNotes());
  }, []);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 800);
  }, []);
  return (
    <>
      {isLoading ? (
        <div className="section"> Loading.....</div>
      ) : (
        <div className="section">
          <ButtonToNote addNotes onClick={() => dispatch(handleToggleModal())}>
            Add Note
          </ButtonToNote>
          {notes.length !== 0 ? (
            <NotesWrapper>
              {sortedData.map((note) => (
                <EachNote key={note._id} flag={"home"} note={note} />
              ))}
            </NotesWrapper>
          ) : (
            <NotesWrapper noNote>
              <Logo width="5rem" height="5rem" />
              <NoNotesMsg>No notes yet, Start creating Now</NoNotesMsg>
              <ButtonToNoteNow onClick={() => dispatch(handleToggleModal())}>
                Add Now
              </ButtonToNoteNow>
            </NotesWrapper>
          )}
        </div>
      )}
    </>
  );
};
