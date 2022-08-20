export const getTagsSortedData = (notes:any[],tagsBy:any[]) =>{
    const tagSortedData = notes.filter(note =>tagsBy.every(tag => note.tags.includes(tag)))
    return tagSortedData
}