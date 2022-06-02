export const getTagsSortedData = (notes,tagsBy) =>{
    const tagSortedData = notes.filter(note =>tagsBy.every(tag => note.tags.includes(tag)))
    return tagSortedData
}