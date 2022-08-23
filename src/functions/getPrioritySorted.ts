import {NotesType} from "../types/notesType"
export const getPrioritySorted= (notes:NotesType[],priorityBy:string|null) => {
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