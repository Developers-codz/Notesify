export const getPrioritySorted = (notes,priorityBy) => {
    switch(priorityBy){
        case "Low":{
            return notes.filter(note => note.priority === "Low")
        }
        case "High":{
            return notes.filter(note => note.priority === "High")
        }
        case "Medium":{
            return notes.filter(note => note.priority === "Medium")
        }
        default :{
            return notes;
        }
    }
}