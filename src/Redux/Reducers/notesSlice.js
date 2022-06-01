import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { SuccessToast,AlertToast } from "../../components/toasts";
import axios from "axios";
const initialState = {
  userProfile: {},
  modalOpen: false,
  notes: [],
  archive: [],
  trash: [],
  isFetching:false,
};

export const getUserNotes = createAsyncThunk(
  "/notes/getUserNotes",
  async (mockParams,{rejectWithValue}) => {
    const encodedToken = localStorage.getItem("token");
    try {
      const response = await axios.get("/api/notes", {
        headers: {
          authorization: encodedToken,
        },
      });
      return response.data;
    } catch (error) {
      rejectWithValue(error.response.data);
    }
  }
);

const getUserProfile = createAsyncThunk(
  "notes/getUserProfile",
  async (mockParams, { rejectWithValue }) => {
    const encodedToken = localStorage.getItem("token");
    try {
      const response = await axios.get(
        "/api/user",
        {},
        {
          headers: {
            authorization: encodedToken,
          },
        }
      );
    } catch (error) {
      rejectWithValue(error.response.data);
    }
  }
);

export const createNoteHandler = createAsyncThunk(
  "notes/createNoteHandler",
  async (note, { rejectWithValue }) => {
    const encodedToken = localStorage.getItem("token");
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
      rejectWithValue(error.response.data);
    }
  }
);

export const editNoteHandler = createAsyncThunk(
  "notes/editNoteHandler",
  async (note, { rejectWithValue }) => {
    const encodedToken = localStorage.getItem("token");
    try {
      const response = await axios.post(
        `/api/notes:${note._id}`,
        { note },
        {
          headers: {
            authorization: encodedToken,
          },
        }
      );
      return response.data;
    } catch (error) {
      rejectWithValue(error.response.data);
    }
  }
);

export const deleteNoteHandler = createAsyncThunk(
  "notes/deleteNoteHandler",
  async (id, { rejectWithValue }) => {
    console.log(id);
    const encodedToken = localStorage.getItem("token");
    try {
      const response = await axios.delete(`/api/notes/${id}`, {
        headers: { authorization: encodedToken },
      });
      SuccessToast("Note Deleted Successfully");
      return response.data;
    } catch (error) {
      rejectWithValue(error.response.data);
    }
  }
);

//  Archive Route

export const getArchiveNotes = createAsyncThunk(
  "notes/getArchiveNotes",
  async (mockParams, { rejectWithValue }) => {
    const encodedToken = localStorage.getItem("token");
    try {
      const response = await axios.get("/api/archives", {
        headers: { authorization: encodedToken },
      });

      return response.data;
    } catch (error) {
      rejectWithValue(error.response.data);
    }
  }
);

export const archiveNote = createAsyncThunk(
  "notes/archiveNote",
  async (note, { rejectWithValue }) => {
    const encodedToken = localStorage.getItem("token");
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
      rejectWithValue(error.response.data);
    }
  }
);
export const unarchiveNote = createAsyncThunk(
  "notes/unarchiveNote",
  async (note, { rejectWithValue }) => {
    const encodedToken = localStorage.getItem("token");
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
      rejectWithValue(error.response.data);
    }
  }
);

export const deleteArchiveNote = createAsyncThunk(
  "notes/deleteArchiveNote",
  async (id, { rejectWithValue }) => {
    const encodedToken = localStorage.getItem("token");
    try {
      const response = await axios.delete(`/api/archives/delete/${id}`, {
        headers: { authorization: encodedToken },
      });
      AlertToast("Archive Note Deleted Successfully");
      return response.data;
    } catch (error) {
      rejectWithValue(error.response.data);
    }
  }
);

//  Trash Route

export const getTrashNotes = createAsyncThunk(
  "notes/getTrashNotes",
  async (mockParams, { rejectWithValue }) => {
    const encodedToken = localStorage.getItem("token");
    try {
      const response = await axios.get("/api/trash", {
        headers: { authorization: encodedToken },
      });

      return response.data;
    } catch (error) {
      rejectWithValue(error.response.data);
    }
  }
);

export const trashNote = createAsyncThunk(
  "notes/trashNote",
  async (note, { rejectWithValue }) => {
    const encodedToken = localStorage.getItem("token");
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
      console.log(error)
      rejectWithValue(error.response.data);
    }
  }
);
export const restoreNote = createAsyncThunk(
  "notes/restoreNote",
  async (note, { rejectWithValue }) => {
    const encodedToken = localStorage.getItem("token");
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
      console.log(error)
      rejectWithValue(error.response.data);
    }
  }
);

export const deleteTrashNote = createAsyncThunk(
  "notes/deleteTrashNote",
  async (note, { rejectWithValue }) => {
    const encodedToken = localStorage.getItem("token");
    const { _id } = note;
    try {
      const response = await axios.delete(
        `/api/trash/delete/${_id}`,
        { headers: { authorization: encodedToken } }
      );
      AlertToast("Note deleted permanently");
      return response.data;
    } catch (error) {
      console.log(error)
      rejectWithValue(error.response.data);
    }
  }
);



export const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    handleToggleModal: (state, action) => {
      state.modalOpen = !state.modalOpen;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getUserProfile.fulfilled, (state, action) => {
        state.userProfile = action.payload;
      })

      .addCase(getUserNotes.fulfilled, (state, action) => {
        state.isFetching = false;
        state.notes = action.payload.notes;
      })
      .addCase(getUserNotes.rejected, (action) => {
        console.log(action.payload.errors);
      })
      .addCase(getUserNotes.pending,(state)=>{
        state.isFetching = true;
      })

      .addCase(createNoteHandler.fulfilled, (state, action) => {
        state.isFetching = false;
        state.notes = action.payload.notes;
      })
      .addCase(createNoteHandler.rejected, (action) => {
       console.log(action.payload.errors);
      })
      .addCase(createNoteHandler.pending,(state)=>{
        state.isFetching = true;
      })
  
      .addCase(editNoteHandler.fulfilled, (state, action) => {
        state.notes = action.payload.notes;
      })
      .addCase(editNoteHandler.rejected, (state, action) => {
       console.log(action.payload.errors);
      })

      .addCase(deleteNoteHandler.fulfilled, (state, action) => {
        state.isFetching = false;
        state.notes = action.payload.notes;
      })
      .addCase(deleteNoteHandler.rejected, (action) => {
       console.log(action.payload.errors);
      })
      .addCase(deleteNoteHandler.pending,(state)=>{
        state.isFetching = true;
      })
      // Archive reducers
      .addCase(getArchiveNotes.fulfilled, (state, action) => {
        state.isFetching = false;
        state.archive = action.payload.archives;
      })
      .addCase(getArchiveNotes.rejected, (action) => {
        console.log(action.payload.errors);
      })
      .addCase(getArchiveNotes.pending,(state)=>{
        state.isFetching = true;
      })

      .addCase(archiveNote.fulfilled, (state, action) => {
        state.isFetching = false;
        state.notes = action.payload.notes;
        state.archive = action.payload.archives;
      })
      .addCase(archiveNote.rejected, (action) => {
        console.log(action.payload.errors);
      })
      .addCase(archiveNote.pending,(state)=>{
        state.isFetching = true;
      })
      .addCase(unarchiveNote.fulfilled, (state, action) => {
        state.isFetching = false;
        state.notes = action.payload.notes;
        state.archive = action.payload.archives;
      })
      .addCase(unarchiveNote.rejected, (action) => {
        console.log(action.payload.errors);
      })
      .addCase(unarchiveNote.pending,(state)=>{
        state.isFetching = true;
      })
      .addCase(deleteArchiveNote.fulfilled, (state, action) => {
        state.isFetching = false;
        state.archive = action.payload.archives;
      })
      .addCase(deleteArchiveNote.rejected, (action) => {
        console.log(action.payload.errors);
      })
      .addCase(deleteArchiveNote.pending,(state)=>{
        state.isFetching = true;
      })
      // Trash Reducers

      .addCase(getTrashNotes.fulfilled, (state, action) => {
        state.isFetching = false;
        state.trash = action.payload.trash;
      })
      .addCase(getTrashNotes.rejected, (action) => {
        console.log(action.payload.errors);
      })
      .addCase(getTrashNotes.pending,(state)=>{
        state.isFetching = true;
      })
      .addCase(trashNote.fulfilled,(state,action) =>{
        state.isFetching = false;
        state.notes = action.payload.notes;
        state.trash = action.payload.trash;
      })
      .addCase(trashNote.rejected, (action) => {
        console.log(action.payload);
      })
      .addCase(trashNote.pending,(state)=>{
        state.isFetching = true;
      })
      .addCase(restoreNote.fulfilled,(state,action) =>{
        state.isFetching = false;
        state.notes = action.payload.notes;
        state.trash = action.payload.trash;
      })
      .addCase(restoreNote.rejected, (action) => {
        console.log(action.payload);
      })
      .addCase(restoreNote.pending,(state)=>{
        state.isFetching = true;
      })
      .addCase(deleteTrashNote.fulfilled,(state,action) =>{
        state.isFetching = false;
        state.trash = action.payload.trash;
      })
      .addCase(deleteTrashNote.rejected, (action) => {
        console.log(action.payload);
      })
      .addCase(deleteTrashNote.pending,(state)=>{
        state.isFetching = true;
      })
  },
});
export default notesSlice.reducer;
const { actions } = notesSlice;
export const { handleToggleModal } = actions;
