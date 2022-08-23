import * as React from 'react';
import {Navigate,Outlet,useLocation} from "react-router-dom"
import { useAppSelector } from "../../Redux/hooks";

export const RequireAuth = ():JSX.Element => {
  interface UserProps{
    _id?:string
  }
    const currentUser:UserProps = useAppSelector((state)=>state.auth.currentUser)
    const location = useLocation();
  return currentUser._id ?<Outlet />: (<Navigate to="/landing"  state={{from: location}} replace/>)
}
