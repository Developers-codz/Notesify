import * as React from 'react';
import { Navigate, Outlet,useLocation} from "react-router-dom";
import { useAppSelector } from "../../Redux/hooks";




export const RestrictAuth = ():JSX.Element => {
    interface UserProps{
        _id?:string
      }
    interface LocationProps{
        state?:{
            from ?:{
                pathname ?:string
            }
        }
    }
      



    
    const location:LocationProps = useLocation()  
    const currentUser =  useAppSelector((state) => state.auth.currentUser)
    const prevPath = location?.state?.from?.pathname
    return currentUser._id ?<Navigate to={prevPath === undefined ? "/" : prevPath} /> : <Outlet />;
}
