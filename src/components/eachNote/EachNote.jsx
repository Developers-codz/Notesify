import React from "react";
import {
  NoteCard,
  Title,
  NoteText,
  CreationTime,
  Priority,
  Footer,
  IconWrapper,
  IconContainer
} from "./eachNoteComponent";
import { EditIcon,ArchiveIcon,TrashIcon } from "../../assets/icons";
import {useSelector,useDispatch} from "react-redux"
import {handleToggleModal,deleteNoteHandler,archiveNote} from "../../Redux/Reducers/notesSlice";
 

export const EachNote = ({ note }) => {
    const dispatch = useDispatch();
    const { title, content, timestamp, priority,_id } = note;
    console.log(_id)

  return (
    <NoteCard style={{ backgroundColor: note.bgcolor }}>
      <Title>{title}</Title>
      <NoteText>{content}</NoteText>
      <CreationTime>Created at: {timestamp}</CreationTime>
      <Footer>
        <Priority>{priority}</Priority>
        <IconContainer>
          <IconWrapper onClick={()=>dispatch(handleToggleModal())}><EditIcon /></IconWrapper>
          <IconWrapper onClick={()=>dispatch(archiveNote(note))}><ArchiveIcon width="1.5rem" height="1.5rem" /></IconWrapper>
          <IconWrapper onClick={()=>dispatch(deleteNoteHandler(_id))}><TrashIcon width="1.5rem" height="1.5rem" /></IconWrapper>

        </IconContainer>
      </Footer>
    </NoteCard>
  );
};
