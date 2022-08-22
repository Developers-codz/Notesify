export type UserProfileType = {
    _id:string;
    firstName:string;
    lastName:string;
    email:string;
    createdAt:string;
    updatedAt:string;

} | object

export type Tag =  string;


export type NotesType = {
    bgcolor:string;
    content:string;
    createdAt:string;
    date:Date;
    tags:Tag[];
    time:string;
    _id:string;
    trash:NotesType[] ,
    archives:NotesType[],
    notes:NotesType[];
    priority:string;
    title:string;
} 

export interface StateProps{
    userProfile:UserProfileType ;
    notes:NotesType[];
    archive:NotesType[];
    modalOpen:boolean;
    editModalOpen:boolean,
    trash: NotesType[],
    isFetching: boolean,
    noteToEdit: null|boolean,
    byPriority: null|boolean,
    byTags: any[],
    byDate: null|string,
    bySearch:string
  }
  export type  NoteAttr = {
    _id:string
  }
