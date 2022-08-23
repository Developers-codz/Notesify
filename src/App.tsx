import "./App.css";
import * as React from "react"
import { useEffect } from "react";
// eslint-disable-next-line
import GlobalStyle from "globalStyles";
import { ToastContainer } from "react-toastify";
import { Landing, Login, SignUp, Home, Trash, Archive } from "./pages";
import {
  Navbar,
  RequireAuth,
  RestrictAuth,
  Aside,
  CreateModal,
  EditModal,
} from "./components";
// import MockMan from "mockman-js";
import { Routes, Route } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "./Redux/hooks";
import { checkToken, login } from "Redux/Reducers/authSlice";

function App():JSX.Element {
  const { modalOpen, editModalOpen } = useAppSelector((store) => store.notes);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(checkToken());
  }, []);

  return (
    <>
      {modalOpen && <CreateModal />}
      {editModalOpen && <EditModal />}
      <ToastContainer />
      <div
        className="App"
        style={
          modalOpen
            ? { pointerEvents: "none", opacity: ".1" }
            : { pointerEvents: "auto", opacity: "1" }
        }
      >
        <GlobalStyle />
        <Navbar />
        <Aside />
        <Routes>
          <Route path="/landing" element={<Landing />} />
          <Route element={<RequireAuth />}>
            <Route path="/" element={<Home />} />
            <Route path="/trash" element={<Trash />} />
            <Route path="/archive" element={<Archive />} />
          </Route>
          <Route element={<RestrictAuth />}>
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
          </Route>
          {/* <Route path="/mockman" element={<MockMan />} /> */}
        </Routes>
      </div>
    </>
  );
}

export default App;
