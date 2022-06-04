import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import {
  NotesWrapper,
  NoNotesMsg,
  ButtonToNoteNow,
} from "../home/homeComponents";
import { TrashIcon } from "../../assets/icons";
import { Link } from "react-router-dom";
import { EachNote } from "../../components";
import {useDocumentTitle} from "../../functions"

export const Trash = () => {
  useDocumentTitle("Trash")
  const { trash } = useSelector((store) => store.notes);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);
  return (
    <div className="section">
      {isLoading ? (
        "Loading...."
      ) : trash.length !== 0 ? (
        <NotesWrapper>
          {trash.map((eachTrash) => (
            <EachNote note={eachTrash} flag={"trash"} key={eachTrash._id} />
          ))}
        </NotesWrapper>
      ) : (
        <NotesWrapper noNote>
          <TrashIcon width="5rem" height="5rem" />
          <NoNotesMsg>Trash is empty. Wanna Trash any Note ?</NoNotesMsg>
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
