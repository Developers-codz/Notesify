import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import { AlertToast,SuccessToast } from "../../components/toasts";
interface CurrentUserAttr {
currentUser:{
    _id?:string
} 
}
const initialState:CurrentUserAttr = {
    currentUser:{
        _id:""
    },
};

export const login = createAsyncThunk("/auth/login", async (userDetail) =>{
    try {
        const response = await axios.post(`api/auth/login`,JSON.stringify(userDetail));
        SuccessToast("Login Successful")
        return response.data;
        
    } catch (error) {
        console.log(error)
        AlertToast(`${error}`)
    }
})

export const signup = createAsyncThunk("/auth/signup", async (userDetail) => {
    try{
        const response = await axios.post("/api/auth/signup",JSON.stringify(userDetail))
        SuccessToast("SignIn Successful")
        return response.data
    }
    catch(error){
        AlertToast(`${error}`)

    }
})

export const checkToken = createAsyncThunk("auth/checkToken", async (_,{rejectWithValue}) => {
    const encodedToken = localStorage.getItem("token");
    if (encodedToken) {
      try {
        const response = await axios.post("/api/auth/verify", {
          encodedToken: encodedToken,
        });
        return response.data;
      } catch (error) {
        rejectWithValue(error)
      }
    }
  });


const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
        logout : (state,action) =>{
            state.currentUser={};
            SuccessToast("Successfully Logged Out");
            localStorage.removeItem("token")
        }
    },
    extraReducers(builder) {
        builder.addCase(login.fulfilled,(state,action) =>{
            localStorage.setItem("token",action.payload.encodedToken)
            console.log(action.payload.foundUser)
            localStorage.setItem("userDetail",JSON.stringify(action.payload.foundUser))
            state.currentUser = action.payload.foundUser
        })
        .addCase(login.rejected, (state, action) => {
            AlertToast(`${action.payload}`);
          })
        .addCase(signup.fulfilled,(state,action) => {
            localStorage.setItem("token",action.payload.encodedToken)
            state.currentUser = action.payload.createdUser
        })
        .addCase(signup.rejected,(state,action) =>{
            AlertToast(`${action.payload}`);
        })
        .addCase(checkToken.fulfilled,(state,action)=>{
            if(action.payload){
                state.currentUser = action.payload.user
            }
        })
    }
})

export default authSlice.reducer
export const { logout } = authSlice.actions;
