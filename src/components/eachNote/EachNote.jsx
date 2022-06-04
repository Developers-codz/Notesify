import React from "react";
import parse from "html-react-parser";
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
import { useDispatch } from "react-redux";
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
  const { title, content,  priority, _id, tags,date,time } = note;

  const options = {
    replace: (domNode) => {
      if (domNode.attribs && domNode.attribs.class === 'remove') {
        return <></>;
      }
    },
  };

  return (
    <NoteCard style={{ backgroundColor: note.bgcolor }}>
      <Title>{title}</Title>
      <NoteText>{parse(content,options)}</NoteText>
      <CreationTime>Created at: {date}{" "}{time}  </CreationTime>
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
