import {NotesType} from "../types/notesType"
export const getTagsSortedData = (notes:NotesType[],tagsBy:string[]) =>{
    const tagSortedData = notes.filter(note =>tagsBy.every(tag => note.tags.includes(tag)))
    return tagSortedData
}