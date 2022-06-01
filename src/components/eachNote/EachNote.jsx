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
} from "../../assets/icons";
import { useSelector, useDispatch } from "react-redux";
import {
  handleToggleModal,
  deleteNoteHandler,
  archiveNote,
  unarchiveNote,
  deleteArchiveNote,
} from "../../Redux/Reducers/notesSlice";

export const EachNote = ({ note, flag }) => {
  const dispatch = useDispatch();
  const { title, content, timestamp, priority, _id,tags } = note;

  return (
    <NoteCard style={{ backgroundColor: note.bgcolor }}>
      <Title>{title}</Title>
      <NoteText>{content}</NoteText>
      <CreationTime>Created at: {timestamp}</CreationTime>
      <Footer>
        <Priority>{priority}</Priority>
        {tags.map((tag,i )=> {
          return (
            <Priority key={i}>{tag}</Priority>
          )
        })}
        <IconContainer>
          <IconWrapper onClick={() => dispatch(handleToggleModal())}>
            <EditIcon />
          </IconWrapper>
          {flag === "archive" ? (
            <IconWrapper onClick={() => dispatch(unarchiveNote(note))}>
              <UnArchive width="1.5rem" height="1.5rem" />
            </IconWrapper>
          ) : (
            <IconWrapper onClick={() => dispatch(archiveNote(note))}>
              <ArchiveIcon width="1.5rem" height="1.5rem" />
            </IconWrapper>
          )}
          <IconWrapper
            onClick={() => flag === "archive" ? 
              dispatch(deleteArchiveNote(_id))
              : dispatch(deleteNoteHandler(_id))
            }
          >
            <TrashIcon width="1.5rem" height="1.5rem" />
          </IconWrapper>
        </IconContainer>
      </Footer>
    </NoteCard>
  );
};
