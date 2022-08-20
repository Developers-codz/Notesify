export const getSearchSortedData = (notes:any[], searchText:string) => {
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
