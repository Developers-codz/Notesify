import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    drawerOpen:false
}

const asideSlice = createSlice({
    name:"aside",
    initialState,
    reducers: {
        toggleDrawer: (state)=>{
            state.drawerOpen = !state.drawerOpen
        }
    },
})

export default asideSlice.reducer;
export const {toggleDrawer} = asideSlice.actions
