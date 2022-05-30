import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./Reducers/authSlice"
import notesReducer from "./Reducers/notesSlice"

const reducer ={
    auth:authReducer,
    notes:notesReducer
}

const store = configureStore({
    reducer:reducer
});
export default store;