import {NotesType} from "../types/notesType"
export const getSearchSortedData = (notes:NotesType[], searchText:string) => {
  if (searchText === "") return notes;
  else {
    let searchedNotes:any[] = [...notes];
    searchedNotes = searchedNotes.filter((note) => {
      return (
        note.title.toLowerCase().includes(searchText) ||
        note.content.toLowerCase().includes(searchText)
      );
    });
    return searchedNotes
  }
};
