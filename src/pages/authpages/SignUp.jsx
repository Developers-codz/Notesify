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
import { useDispatch,useSelector } from "react-redux";
import { signup } from "Redux/Reducers/authSlice";
import { AlertToast } from "components/toasts";
import {useDocumentTitle} from "functions"

export const SignUp = () => {
  useDocumentTitle("Signup")
  const dispatch = useDispatch();
  const {isFetching} = useSelector(store => store.notes)
  const [userDetail, setUserDetail] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });
  const [passMatch, setPassMatch] = useState("");



  const clickHandler = (e) => {
    const { firstname, email, lastname, password } = userDetail;
    if (
      firstname &&
      email &&
      lastname &&
      password !== "" &&
      password === passMatch
    ) {
      dispatch(signup(userDetail));
      setUserDetail((prev) => ({
        ...prev,
        firstname: "",
        lastname:"",
        email: "",
        password: "",
      }));
      setPassMatch("");
    } else if (password !== passMatch) {
      AlertToast("Password do not match");
    } else {
      AlertToast("Please Enter All the field");
    }
  };

  const changeHandler = (e)=> {
    setUserDetail(prev => ({...prev,[e.target.name]:e.target.value}))
  }
  

  const { firstname, email, lastname, password } = userDetail;
  return (
    <div className="section">
      <Wrapper>
        <Form>
          <Header>SignUp</Header>
          <FormInput
            type="text"
            name="firstname"
            value={firstname}
            onChange={changeHandler}
            placeholder="Enter Your firstname"
          />
            <FormInput
              type="text"
              name="lastname"
              value={lastname}
              onChange={changeHandler}
              placeholder="Enter a lastname"
            />
          <FormInput
            type="text"
            name="email"
            value={email}
            onChange={changeHandler}
            placeholder="Enter Your Email"
          />
          <FormInput
            type="password"
            placeholder="Enter Your Password"
            name="password"
            value={password}
            onChange={changeHandler}
          />
          <FormInput
            type="password"
            placeholder="Re-Enter Your Password"
            value={passMatch}
            onChange={(e) => setPassMatch(e.target.value)}
          />

          <PrimaryButton primary onClick={(e) => clickHandler(e)} disabled={isFetching}>
            SignUp
          </PrimaryButton>
          <Para>
            Already Have an account ? <Link to="/login">Login now</Link>
          </Para>
        </Form>
      </Wrapper>
    </div>
  );
};
