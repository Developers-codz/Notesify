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
import {handleToggleModal} from "../../Redux/Reducers/notesSlice";
 

export const EachNote = ({ note }) => {
    const dispatch = useDispatch();
    const { title, content, timestamp, priority } = note;

  return (
    <NoteCard style={{ backgroundColor: note.bgcolor }}>
      <Title>{title}</Title>
      <NoteText>{content}</NoteText>
      <CreationTime>Created at: {timestamp}</CreationTime>
      <Footer>
        <Priority>{priority}</Priority>
        <IconContainer>
          <IconWrapper onClick={()=>dispatch(handleToggleModal())}><EditIcon /></IconWrapper>
          <IconWrapper><ArchiveIcon width="1.5rem" height="1.5rem" /></IconWrapper>
          <IconWrapper><TrashIcon width="1.5rem" height="1.5rem" /></IconWrapper>

        </IconContainer>
      </Footer>
    </NoteCard>
  );
};
