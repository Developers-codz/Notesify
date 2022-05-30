import "./App.css";
// eslint-disable-next-line
import logo from "./logo.png";
import GlobalStyle from "./globalStyles";
import { ToastContainer, toast } from 'react-toastify';
import {Landing, Login, SignUp,Home, Trash, Archive} from "./pages"
import {Navbar,RequireAuth,RestrictAuth,Aside} from "./components"
import MockMan from "mockman-js";
import {Routes,Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <GlobalStyle />
       <Navbar />
       <Aside />
     <Routes>
       <Route path="/landing" element={ <Landing />} />
       <Route element={<RequireAuth />}>
        <Route path="/" element={<Home />} />
        <Route path="/trash" element={<Trash />} />
        <Route path="/archive" element={<Archive />} />
       </Route>
     <Route element={<RestrictAuth />}>
     <Route path="/signup" element={<SignUp />} />
       <Route path="/login" element={<Login />} />
     </Route>
     <Route path="/mockman" element={<MockMan />} />
     </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
