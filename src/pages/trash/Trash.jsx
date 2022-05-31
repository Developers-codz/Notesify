import React from 'react'
import { useSelector } from 'react-redux'
import {NotesWrapper,NoNotesMsg,ButtonToNoteNow} from "../home/homeComponents"
import {TrashIcon} from "../../assets/icons"
import {Link} from "react-router-dom"

export const Trash = () => {
  const {trash} = useSelector(store => store.notes)
  return (
    <div className='section'>
       {
        trash.length !== 0 ? "" : (
          <NotesWrapper noNote>
          <TrashIcon width="5rem" height="5rem" />
        <NoNotesMsg>Trash is empty. Wanna Trash any Note ?</NoNotesMsg>
        <ButtonToNoteNow >
       <Link to="/" style={{textDecoration:"none",color:"white"}}>Go to Home</Link>
      </ButtonToNoteNow>
       </NotesWrapper>
        )
      }
    </div>
  )
}
