import { Link } from "react-router-dom";
import * as React from "react"
import { ChangeEvent,MouseEvent } from 'react';
import {
  Wrapper,
  Form,
  FormInput,
  Header,
  Button,
  PrimaryButton,
  Para,
} from "./AuthFormComponent";
import { useAppDispatch, useAppSelector } from "../../Redux/hooks";
import { login } from "Redux/Reducers/authSlice";
import { useState } from "react";
import {useDocumentTitle} from "functions"


export const Login = ():JSX.Element => {
  useDocumentTitle("Login")
  const dispatch = useAppDispatch();
  const {isFetching} = useAppSelector(store => store.notes)
  const [userDetail, setUserDetail] = useState({ email: "", password: "" });
  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setUserDetail((prevDetail) => ({
      ...prevDetail,
      [e.target.name]: e.target.value,
    }));
  };

  const clickHandler = (e: MouseEvent<HTMLButtonElement>) => {
    dispatch(login(userDetail));
    setUserDetail((prev) => ({ ...prev, email: "", password: "" }));
  };
  const credentialHandler = () => {
    setUserDetail((prev) => ({
      ...prev,
      email: "kajal123@gmail.com",
      password: "kajalkumari123",
    }));
  };
  const { email, password } = userDetail;
  return (
    <div className="section">
      <Wrapper>
        <Form>
          <Header>Login</Header>
          <FormInput
            type="text"
            placeholder="email"
            name="email"
            value={email}
            onChange={(e) => changeHandler(e)}
          ></FormInput>
          <FormInput
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={(e) => changeHandler(e)}
          ></FormInput>
          <Header small>OR</Header>
          <Button value="credentialLogin" onClick={credentialHandler}>
            Login with Test Credential
          </Button>
          <PrimaryButton  onClick={(e)=>clickHandler(e)} disabled={isFetching}>
            Login
          </PrimaryButton>
          <Para>
            Don't Have an account ? <Link to="/signup">Create now</Link>
          </Para>
        </Form>
      </Wrapper>
    </div>
  );
};
