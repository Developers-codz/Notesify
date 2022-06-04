import { useEffect } from "react"

export const useDocumentTitle = (titleText) =>{
useEffect(()=>{
    document.title = `${titleText} | Notesify `;
},[titleText])
}