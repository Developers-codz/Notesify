export const getSortedData = (notes:any[], byDate:string) => {
  interface DateProps {
    createdAt:Date
  }
  if (byDate === "old"){
    return notes.sort((a:DateProps, b:DateProps) => 
    // Unary plus (+) converts an operand ( new Date() ) into a number.
    +new Date(a.createdAt.valueOf()) - +new Date(b.createdAt.valueOf()))
  } else {
    return notes.sort((a:DateProps, b:DateProps) =>
     +new Date(b.createdAt.valueOf()) - +new Date(a.createdAt.valueOf()))
  }
}
