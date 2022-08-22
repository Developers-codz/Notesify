import React from "react";
import parse from "html-react-parser";
import {
  NoteCard,
  Title,
  NoteText,
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
} from "assets/icons";
import { useAppDispatch } from "../../Redux/hooks";
import {
  archiveNote,
  unarchiveNote,
  deleteArchiveNote,
  trashNote,
  restoreNote,
  deleteTrashNote,
  handleToggleEditModal,
  setNoteToEdit,
} from "Redux/Reducers/notesSlice";
import {NotesType} from "../../types/notesType"


type EachNoteProp = {
  note:NotesType;
  flag:string;
}

export const EachNote = ({ note, flag }:EachNoteProp) => {
  const dispatch = useAppDispatch();
  const { title, content,  priority, _id, tags,date,time } = note;



  const options = {
    replace: (domNode:any) => {
      if (domNode.attribs && domNode.attribs.class === 'remove') {
        return <></>;
      }
    },
  };

  return (
    <NoteCard style={{ backgroundColor: note.bgcolor }}>
      <Title>{title}</Title>
      <NoteText>{parse(content,options)}</NoteText>
      <p>
        Created at: <>{date} {time} </>
      </p>
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
