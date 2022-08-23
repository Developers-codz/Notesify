import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { SuccessToast, AlertToast } from "../../components/toasts";
import axios from "axios";
import {StateProps,NoteAttr, NotesType,CreateNotesType,NoteToEdit} from "../../types/notesType"

const initialState :StateProps = {
  userProfile:{},
  modalOpen: false,
  editModalOpen: false,
  notes: [],
  archive: [],
  trash: [],
  isFetching: false,
  noteToEdit: null,
  byPriority: null,
  byTags: [],
  byDate: null,
  bySearch:""
};

export const getUserNotes = createAsyncThunk(
  "/notes/getUserNotes",
  async (mockParams, { rejectWithValue }) => {
    const encodedToken:string= localStorage.getItem("token") || "";
    try {
      const response = await axios.get("/api/notes", {
        headers: {
          authorization: encodedToken,
        },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const getUserProfile = createAsyncThunk(
  "notes/getUserProfile",
  async (mockParams, { rejectWithValue }) => {
    const encodedToken:string = localStorage.getItem("token") || "";
    try {
      const response = await axios.get(
        "/api/user",
        // {},
        {
          headers: {
            authorization: encodedToken,
          },
        }
      );
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const createNoteHandler = createAsyncThunk(
  "notes/createNoteHandler",
  async (note:CreateNotesType, { rejectWithValue }) => {
    const encodedToken:string = localStorage.getItem("token") || "";
    try {
      const response = await axios.post(
        "/api/notes",
        { note },
        {
          headers: {
            authorization: encodedToken,
          },
        }
      );
      SuccessToast("Note Created Successfully");
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);


export const editNoteHandler = createAsyncThunk<any,NoteAttr>(
  "notes/editNoteHandler",
  async (note, { rejectWithValue }) => {
    const encodedToken:string = localStorage.getItem("token") || "";
    try {
      const response = await axios.post(
        `/api/notes/${note._id}`,
        { note },
        {
          headers: {
            authorization: encodedToken,
          },
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteNoteHandler = createAsyncThunk(
  "notes/deleteNoteHandler",
  async (id, { rejectWithValue }) => {
    const encodedToken:string = localStorage.getItem("token") || "";
    try {
      const response = await axios.delete(`/api/notes/${id}`, {
        headers: { authorization: encodedToken },
      });
      SuccessToast("Note Deleted Successfully");
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

//  Archive Route

export const getArchiveNotes = createAsyncThunk(
  "notes/getArchiveNotes",
  async (mockParams, { rejectWithValue }) => {
    const encodedToken:string = localStorage.getItem("token") || "";
    try {
      const response = await axios.get("/api/archives", {
        headers: { authorization: encodedToken },
      });

      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const archiveNote = createAsyncThunk<any, NoteAttr>(
  "notes/archiveNote",
  async (note, { rejectWithValue }) => {
    const encodedToken:string= localStorage.getItem("token") || "";
    const { _id } = note;
    try {
      const response = await axios.post(
        `/api/notes/archives/${_id}`,
        { note },
        { headers: { authorization: encodedToken } }
      );
      SuccessToast("Note Archived Successfully");
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const unarchiveNote = createAsyncThunk<any ,NoteAttr>(
  "notes/unarchiveNote",
  async (note, { rejectWithValue }) => {
    const encodedToken:string = localStorage.getItem("token") || "";
    const { _id } = note;
    try {
      const response = await axios.post(
        `/api/archives/restore/${_id}`,
        {},
        { headers: { authorization: encodedToken } }
      );
      SuccessToast("Note unarchived Successfully");
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteArchiveNote = createAsyncThunk<any,string>(
  "notes/deleteArchiveNote",
  async (id, { rejectWithValue }) => {
    const encodedToken:string = localStorage.getItem("token") || "";
    try {
      const response = await axios.delete(`/api/archives/delete/${id}`, {
        headers: { authorization: encodedToken },
      });
      AlertToast("Archive Note Deleted Successfully");
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

//  Trash Route

export const getTrashNotes = createAsyncThunk(
  "notes/getTrashNotes",
  async (mockParams, { rejectWithValue }) => {
    const encodedToken:string= localStorage.getItem("token") || "";
    try {
      const response = await axios.get("/api/trash", {
        headers: { authorization: encodedToken },
      });

      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const trashNote = createAsyncThunk<any,NoteAttr>(
  "notes/trashNote",
  async (note, { rejectWithValue }) => {
    const encodedToken:string = localStorage.getItem("token") || "";
    const { _id } = note;
    try {
      const response = await axios.post(
        `/api/notes/trash/${_id}`,
        {},
        { headers: { authorization: encodedToken } }
      );
      SuccessToast("Note Trash Successfully");
      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error);
    }
  }
);
export const restoreNote = createAsyncThunk<any, NoteAttr>(
  "notes/restoreNote",
  async (note, { rejectWithValue }) => {
    const encodedToken :string = localStorage.getItem("token") || "";
    const { _id } = note;
    try {
      const response = await axios.post(
        `/api/trash/restore/${_id}`,
        {},
        { headers: { authorization: encodedToken } }
      );
      SuccessToast("Note Restored Successfully");
      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error);
    }
  }
);

export const deleteTrashNote = createAsyncThunk<any,NoteAttr,{rejectValue:Error}>(
  "notes/deleteTrashNote",
  async (note, { rejectWithValue }) => {
    const encodedToken:string = localStorage.getItem("token") || "";
    const { _id } = note;
    try {
      const response = await axios.delete(`/api/trash/delete/${_id}`, {
        headers: { authorization: encodedToken },
      });
      AlertToast("Note deleted permanently");
      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error as Error);
    }
  }
);

export const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    handleToggleModal: (state) => {
      state.modalOpen = !state.modalOpen;
    },
    handleToggleEditModal: (state) => {
      state.editModalOpen = !state.editModalOpen;
    },
    setNoteToEdit: (state, action) => {
      state.noteToEdit = action.payload;
    },
    setByPriority: (state, action) => {
      state.byPriority = action.payload;
    },
    setByTags:(state,action) =>{
      if(state.byTags.find(item => item === action.payload)){
        state.byTags = state.byTags.filter(i => i!==action.payload)
      }
      else {
        state.byTags = [...state.byTags,action.payload]
      }
    },
    setByDate:(state,action) =>{
      state.byDate = action.payload;
    },
    setBySearch:(state,action) =>{
      state.bySearch = action.payload
    },
    clearFilters:(state) =>{
      state.byPriority = null;
      state.byTags = [];
      state.byDate = null;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(getUserProfile.fulfilled, (state, action) => {
       if(action && action.payload) state.userProfile = action.payload;
      })

      .addCase(getUserNotes.fulfilled, (state, action) => {
        state.isFetching = false;
        state.notes = action.payload.notes;
      })
      .addCase(getUserNotes.rejected, (state,action) => {
       console.log(action.payload) 
      })
      .addCase(getUserNotes.pending, (state) => {
        state.isFetching = true;
      })

      .addCase(createNoteHandler.fulfilled, (state, action) => {
        state.isFetching = false;
        state.notes = action.payload.notes;
      })
      .addCase(createNoteHandler.rejected, (state,action) => {
       
        console.log(action.payload);
        
      })
      .addCase(createNoteHandler.pending, (state) => {
        state.isFetching = true;
      })

      .addCase(editNoteHandler.fulfilled, (state, action) => {
        state.notes = action.payload.notes;
      })
      .addCase(editNoteHandler.rejected, (state, action) => {
        console.log(action.payload);
      })

      .addCase(deleteNoteHandler.fulfilled, (state, action) => {
        state.isFetching = false;
        state.notes = action.payload.notes;
      })
      .addCase(deleteNoteHandler.rejected, (state,action) => {
        console.log(action.payload);
      })
      .addCase(deleteNoteHandler.pending, (state) => {
        state.isFetching = true;
      })
      // Archive reducers
      .addCase(getArchiveNotes.fulfilled, (state, action) => {
        state.isFetching = false;
        console.log(action.payload.archives)
        state.archive = action.payload.archives;
      })
      .addCase(getArchiveNotes.rejected, (state,action) => {
       console.log(action.payload);
      })
      .addCase(getArchiveNotes.pending, (state) => {
        state.isFetching = true;
      })

      .addCase(archiveNote.fulfilled, (state, action) => {
        state.isFetching = false;
        state.notes = action.payload.notes;
        state.archive = action.payload.archives;
      })
      .addCase(archiveNote.rejected, (state,action) => {
        console.log(action.payload);
      })
      .addCase(archiveNote.pending, (state) => {
        state.isFetching = true;
      })
      .addCase(unarchiveNote.fulfilled, (state, action) => {
        state.isFetching = false;
        state.notes = action.payload.notes;
        state.archive = action.payload.archives;
      })
      .addCase(unarchiveNote.rejected, (state,action) => {
        console.log(action.payload);
      })
      .addCase(unarchiveNote.pending, (state) => {
        state.isFetching = true;
      })
      .addCase(deleteArchiveNote.fulfilled, (state, action) => {
        state.isFetching = false;
        state.archive = action.payload.archives;
      })
      .addCase(deleteArchiveNote.rejected, (state,action) => {
        console.log(action.payload);
      })
      .addCase(deleteArchiveNote.pending, (state) => {
        state.isFetching = true;
      })
      // Trash Reducers

      .addCase(getTrashNotes.fulfilled, (state, action) => {
        state.isFetching = false;
        state.trash = action.payload.trash;
      })
      .addCase(getTrashNotes.rejected, (state,action) => {
        console.log(action.payload);
      })
      .addCase(getTrashNotes.pending, (state) => {
        state.isFetching = true;
      })
      .addCase(trashNote.fulfilled, (state, action) => {
        state.isFetching = false;
        state.notes = action.payload.notes;
        state.trash = action.payload.trash;
      })
      .addCase(trashNote.rejected, (state,action) => {
        console.log(action.payload);
      })
      .addCase(trashNote.pending, (state) => {
        state.isFetching = true;
      })
      .addCase(restoreNote.fulfilled, (state, action) => {
        state.isFetching = false;
        state.notes = action.payload.notes;
        state.trash = action.payload.trash;
      })
      .addCase(restoreNote.rejected, (state,action) => {
        console.log(action.payload);
      })
      .addCase(restoreNote.pending, (state) => {
        state.isFetching = true;
      })
      .addCase(deleteTrashNote.fulfilled, (state, action) => {
        state.isFetching = false;
        state.trash = action.payload.trash;
      })
      .addCase(deleteTrashNote.rejected, (state,action) => {
        console.log(action.payload);
      })
      .addCase(deleteTrashNote.pending, (state) => {
        state.isFetching = true;
      });
  },
});
export default notesSlice.reducer;
const { actions } = notesSlice;
export const {
  handleToggleModal,
  handleToggleEditModal,
  setNoteToEdit,
  setByPriority,
  setByTags,
  clearFilters,
  setByDate,
  setBySearch
} = actions;
