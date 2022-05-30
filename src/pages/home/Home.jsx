import React, { useState } from "react";

import { EditorModal } from "../../components/modal/EditorModal";
import { useSelector } from "react-redux";
import "./home.css";
import { ButtonToNote } from "./homeComponents";
import {handleToggleModal} from "../../Redux/Reducers/notesSlice"
import { useDispatch } from "react-redux";

export const Home = () => {
  const dispatch = useDispatch();
  const {modalOpen} = useSelector(store => store.notes)
  return (
    <>
      <div className="section">
        <ButtonToNote addNotes onClick={() => dispatch(handleToggleModal())}>
          Add Note
        </ButtonToNote>
      </div>
    </>
  );
};
