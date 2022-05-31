import React from 'react'
import { useSelector } from 'react-redux'
import {NotesWrapper,NoNotesMsg,ButtonToNoteNow} from "../home/homeComponents"
import {ArchiveIcon} from "../../assets/icons"
import {Link} from "react-router-dom"

export const Archive = () => {
  const {archive} = useSelector(store => store.notes)

  return (
    <div className='section'>
      {
        archive.length !== 0 ? "" : (
          <NotesWrapper noNote>
          <ArchiveIcon width="5rem" height="5rem" />
        <NoNotesMsg>No notes archived yet, Wanna Archive ?</NoNotesMsg>
        <ButtonToNoteNow >
       <Link to="/" style={{textDecoration:"none",color:"white"}}>Go to Home</Link>
      </ButtonToNoteNow>
       </NotesWrapper>
        )
      }
    </div>
  )
}
