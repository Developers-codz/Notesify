import { Link } from "react-router-dom";
import {
  Wrapper,
  Form,
  FormInput,
  Header,
  PrimaryButton,
  Para,
} from "./AuthFormComponent";
import { useState } from "react";
import {useDispatch} from "react-redux"
import { signup } from "../../Redux/Reducers/authSlice";
import {AlertToast} from "../../components/toasts"

export const SignUp = () => {
  const dispatch = useDispatch();

  const [userDetail, setUserDetail] = useState({
    fullname: "",
    email: "",
    username: "",
    password: "",
  });
  const [passMatch,setPassMatch] = useState("");

  const changeHandler = (e) =>{
    console.log(e.target.name)
    setUserDetail(prevDetail => ({...prevDetail,[e.target.name]:e.target.value}))
  }

  const clickHandler = (e) => {
    e.preventDefault();
    const {fullname,email,username,password} = userDetail;
    console.log(userDetail,passMatch)
    if(fullname && email && username && password !== "" && password === passMatch ){
      dispatch(signup(userDetail))
      setUserDetail(prev => ({...prev,fullname:"",email:"",username:"",password:""}))
      setPassMatch("")
    }
    else if(password !== passMatch){
      AlertToast("Password do not match");
    }
    else {
      AlertToast("Please Enter Alll the field");
    }
  }

  const {fullname,email,username,password} = userDetail;
  return (
    <div className="section">
      <Wrapper>
        <Form>
          <Header>SignUp</Header>
          <FormInput
            type="text"
            placeholder="Enter Your Fullname"
            name="fullname"
            value={fullname}
            onChange={(e) => changeHandler(e)}
           />
          <FormInput
            type="text"
            placeholder="Enter Your Email"
            name="email"
            value={email}
            onChange={(e) => changeHandler(e)}
          />
          <FormInput
            type="text"
            placeholder="Enter a UserName"
            name="username"
            value={username}
            onChange={(e) => changeHandler(e)}
          />
          <FormInput
            type="password"
            placeholder="Enter Your Password"
            name="password"
            value={password}
            onChange={(e) => changeHandler(e)}
          />
          <FormInput
            type="password"
            placeholder="Re-Enter Your Password"
            value={passMatch}
            onChange={(e) => setPassMatch(e.target.value)}
          />

          <PrimaryButton primary onClick={(e)=>clickHandler(e)}>SignUp</PrimaryButton>
          <Para>
            Already Have an account ? <Link to="/login">Login now</Link>
          </Para>
        </Form>
      </Wrapper>
    </div>
  );
};
