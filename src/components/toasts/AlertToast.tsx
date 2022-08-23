import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css";

export const AlertToast = (msg:string) =>{
    toast.error(msg,{
    position: "top-right",
    autoClose: 2000,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    })
}