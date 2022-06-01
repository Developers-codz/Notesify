import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  NotesWrapper,
  NoNotesMsg,
  ButtonToNoteNow,
} from "../home/homeComponents";
import { ArchiveIcon } from "../../assets/icons";
import { Link } from "react-router-dom";
import { getArchiveNotes } from "../../Redux/Reducers/notesSlice";
import { EachNote } from "../../components";

export const Archive = () => {
  const { archive } = useSelector((store) => store.notes);
  const dispatch = useDispatch();
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 800);
  }, []);
  useEffect(() => {
    dispatch(getArchiveNotes());
  }, []);

  return (
    <div className="section">
      {isLoading ? (
        "loading...."
      ) : archive.length !== 0 ? (
        <NotesWrapper>
          {archive.map((eachnote) => (
            <EachNote note={eachnote} flag={"archive"} key={eachnote._id} />
          ))}
        </NotesWrapper>
      ) : (
        <NotesWrapper noNote>
          <ArchiveIcon width="5rem" height="5rem" />
          <NoNotesMsg>No notes archived yet, Wanna Archive ?</NoNotesMsg>
          <ButtonToNoteNow>
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
              Go to Home
            </Link>
          </ButtonToNoteNow>
        </NotesWrapper>
      )}
    </div>
  );
};
