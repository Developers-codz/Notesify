import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  userProfile: {},
  modalOpen: false,
  notes:[]
};

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

export const postNoteHandler = createAsyncThunk("notes/postNoteHandler", async (note,{rejectWithValue}) => {
  const encodedToken = localStorage.getItem("token");
  try {
    const response = await axios.post(
      "/api/notes",
      {note},
      {
        headers: {
          authorization: encodedToken,
        },
      }
    );
    return response.data;
  } catch (error) {
    rejectWithValue(error)
  }
});

const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    handleToggleModal: (state, action) => {
      state.modalOpen = !state.modalOpen;
    },
  },
  extraReducers(builder) {
    builder.addCase(getUserProfile.fulfilled, (state, action) => {
      state.userProfile = action.payload;
      console.log(action.payload);
    });

    builder.addCase(postNoteHandler.fulfilled,(state,action) =>{
      console.log(action.payload)
      state.notes = action.payload
    })
    builder.addCase(postNoteHandler.rejected,(state,action)=>{
      console.log(action.payload)
    })
  },
});
export default notesSlice.reducer;
const { actions } = notesSlice;
export const { handleToggleModal } = actions;
