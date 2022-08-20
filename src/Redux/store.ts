import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./Reducers/authSlice"
import notesReducer from "./Reducers/notesSlice"
import asideReducer from "./Reducers/asideSlice"

const reducer ={
    auth:authReducer,
    notes:notesReducer,
    aside:asideReducer,
}

const store = configureStore({
    reducer:reducer
});
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store;