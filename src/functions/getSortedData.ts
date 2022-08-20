export const getSortedData = (notes:any[], byDate:string) => {
  type Props =  {
  createdAt:Date;
  }
  if (byDate === "old") {
    return notes.sort((a:Props, b:Props) => {
      const date1:Date|number = new Date(a.createdAt)
      const date2:Date|number = new Date(b.createdAt)
      return date1 - date2
    };
  } else {
    return notes.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  }
};
