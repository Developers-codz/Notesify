import React from "react";
import {
  NoteCard,
  Title,
  NoteText,
  CreationTime,
  Priority,
  Footer,
  IconWrapper,
  IconContainer,
} from "./eachNoteComponent";
import {
  EditIcon,
  ArchiveIcon,
  TrashIcon,
  UnArchive,
  RestoreIcon,
} from "../../assets/icons";
import { useSelector, useDispatch } from "react-redux";
import {
  archiveNote,
  unarchiveNote,
  deleteArchiveNote,
  trashNote,
  restoreNote,
  deleteTrashNote,
  handleToggleEditModal,
  setNoteToEdit,
} from "../../Redux/Reducers/notesSlice";

export const EachNote = ({ note, flag }) => {
  const dispatch = useDispatch();
  const { title, content, timestamp, priority, _id, tags } = note;

  return (
    <NoteCard style={{ backgroundColor: note.bgcolor }}>
      <Title>{title}</Title>
      <NoteText>{content}</NoteText>
      <CreationTime>Created at: {timestamp}</CreationTime>
      <Footer>
        <Priority>{priority}</Priority>
        {tags.map((tag, i) => {
          return <Priority key={i}>{tag}</Priority>;
        })}
        <IconContainer>
          {flag === "home" && (
            <IconWrapper
              onClick={() => {
                dispatch(handleToggleEditModal());
                dispatch(setNoteToEdit(note))
              }}
            >
              <EditIcon />
            </IconWrapper>
          )}
          {flag === "archive" ? (
            <IconWrapper onClick={() => dispatch(unarchiveNote(note))}>
              <UnArchive width="1.5rem" height="1.5rem" />
            </IconWrapper>
          ) : flag === "home" ? (
            <IconWrapper onClick={() => dispatch(archiveNote(note))}>
              <ArchiveIcon width="1.5rem" height="1.5rem" />
            </IconWrapper>
          ) : (
            ""
          )}
          {flag === "trash" && (
            <IconWrapper onClick={() => dispatch(restoreNote(note))}>
              <RestoreIcon />
            </IconWrapper>
          )}
          <IconWrapper
            onClick={() => {
              if (flag === "archive") {
                dispatch(deleteArchiveNote(_id));
              }
              if (flag === "home") {
                dispatch(trashNote(note));
              }

              if (flag === "trash") {
                dispatch(deleteTrashNote(note));
              }
            }}
          >
            <TrashIcon width="1.5rem" height="1.5rem" />
          </IconWrapper>
        </IconContainer>
      </Footer>
    </NoteCard>
  );
};
