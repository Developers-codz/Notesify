import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { SuccessToast } from "../../components/toasts";
import axios from "axios";
const initialState = {
  userProfile: {},
  modalOpen: false,
  notes: [],
  archive:[],
  trash:[]
};

export const getUserNotes = createAsyncThunk(
  "/notes/getUserNotes",
  async () => {
    const encodedToken = localStorage.getItem("token");
    try {
      const response = await axios.get("/api/notes", {
        headers: {
          authorization: encodedToken,
        },
      });
      return response.data;
    } catch (error) {
      console.log(error);
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
      console.log(response.data);
    } catch (error) {
      rejectWithValue(error);
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
      return response.data;
    } catch (error) {
      rejectWithValue(error);
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
      rejectWithValue(error);
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
      return response.data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

//  Archive Route 

export const getArchiveNotes = createAsyncThunk("notes/getArchiveNotes", async (mockParams,{rejectWithValue})=>{
  const encodedToken = localStorage.getItem("token");
  try{
    const response = await axios.get("/api/archives",{headers:{authorization:encodedToken}})
    return response.data
  }
  catch(error){
    rejectWithValue(error)
  }

})

export const archiveNote = createAsyncThunk("notes/archiveNote", async (note,{rejectWithValue}) =>{
  const encodedToken = localStorage.getItem("token");
  const {_id} = note
  try{
    const response =await axios.post(`/api/notes/archives/${_id}`,{note},{headers:{authorization:encodedToken}});
    return response.data
  }
  catch(error){
    rejectWithValue(error)
  }
})
export const unarchiveNote = createAsyncThunk("notes/unarchiveNote", async (note,{rejectWithValue}) =>{
  const encodedToken = localStorage.getItem("token");
  const {_id} = note
  try{
    const response =await axios.post(`/api/archives/restore/${_id}`,{},{headers:{authorization:encodedToken}});
    return response.data
  }
  catch(error){
    rejectWithValue(error)
  }
})

export const deleteArchiveNote = createAsyncThunk("notes/deleteArchiveNote", async (id,{rejectWithValue}) =>{
  const encodedToken = localStorage.getItem("token");
  try{
    const response =await axios.delete(`/api/archives/delete/${id}`,{headers:{authorization:encodedToken}});
    return response.data
  }
  catch(error){
    rejectWithValue(error)
  }
})
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
        console.log(action.payload);
      })

      .addCase(getUserNotes.fulfilled, (state, action) => {
        state.notes = action.payload.notes;
      })
      .addCase(getUserNotes.rejected, (state, action) => {})

      .addCase(createNoteHandler.fulfilled, (state, action) => {
        state.notes = action.payload.notes;
      })
      .addCase(createNoteHandler.rejected, (state, action) => {
        console.log(action.payload);
      })
      .addCase(editNoteHandler.fulfilled, (state, action) => {
        state.notes = action.payload.notes;
      })
      .addCase(editNoteHandler.rejected, (state, action) => {
        console.log(action.payload);
      })
      .addCase(deleteNoteHandler.fulfilled, (state, action) => {
        SuccessToast("Deleted SuccessFully");
        console.log(action);
        state.notes = action.payload.notes;
      })
      .addCase(deleteNoteHandler.rejected, (state, action) => {
        console.log(action.payload);
      })
      // Archive reducers
      .addCase(getArchiveNotes.fulfilled,(state,action) => {
        state.archive = action.payload.archives
      })
      .addCase(getArchiveNotes.rejected,(state,action) => {
        console.log(action.payload)
      })
      .addCase(archiveNote.fulfilled,(state,action) =>{
        state.notes = action.payload.notes
        state.archive = action.payload.archives
      })
      .addCase(archiveNote.rejected,(state,action) => {
        console.log(action.payload);
      })
      .addCase(unarchiveNote.fulfilled,(state,action) =>{
        state.notes = action.payload.notes
        state.archive = action.payload.archives
      })
      .addCase(unarchiveNote.rejected,(state,action) => {
        console.log(action.payload);
      })
      .addCase(deleteArchiveNote.fulfilled,(state,action) =>{
        state.archive = action.payload.archives
      })
      .addCase(deleteArchiveNote.rejected,(state,action) => {
        console.log(action.payload);
      })
  },
});
export default notesSlice.reducer;
const { actions } = notesSlice;
export const { handleToggleModal } = actions;
