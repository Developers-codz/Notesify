import React,{useState} from 'react'
import ReactQuill from 'react-quill';
import  "react-quill/dist/quill.snow.css";
import {EditorWrapper,TitleBox} from "./homeComponents"
const  modules  = {
    toolbar: [
        [{ font: [] }],
        ["bold", "italic", "underline", "strike", "blockquote"],
        [{ size: ["small", false, "large", "huge"] }],
        [{ list: "ordered" }, { list: "bullet" }],
        ["link", "image"],
        [{ color: [] }, { align: [] }],
    ],
};
export const Home = () => {
    const [notetext,setText] = useState("")
    const [notetitle,setTitle] = useState("")
  return (
    <div className='section'>  
    <EditorWrapper>
        <TitleBox type="text" placeholder='Add title .....' />
     <ReactQuill theme="snow" modules={modules} placeholder={"Add notes......"} />
    </EditorWrapper>
    </div>
  )
}
