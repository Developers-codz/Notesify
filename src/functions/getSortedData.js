export const getSortedData = (notes, byDate) => {
  if (byDate === "old") {
    return notes.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
  } else {
    return notes.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  }
};
