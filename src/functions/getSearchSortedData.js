export const getSearchSortedData = (notes, searchText) => {
  if (searchText === "") return notes;
  else {
    let searchedNotes = [...notes];
    searchedNotes = searchedNotes.filter((note) => {
      return (
        note.title.toLowerCase().includes(searchText) ||
        note.content.toLowerCase().includes(searchText)
      );
    });
    return searchedNotes
  }
};
