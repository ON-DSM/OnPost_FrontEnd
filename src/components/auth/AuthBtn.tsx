import styled from "@emotion/styled";
import React from "react";
import { Link } from 'react-router-dom';

interface PropsType {
  login: boolean;
}

function AuthBtn({ login }: PropsType) {
  return (
    <>
      <LoginButton>{login ? "로그인" : "회원가입"}</LoginButton>
      <SignUpBox>
          {login ? "회원가입하려면 " : "돌아가려면 "}
          <Link to={`/auth/${login ? "Signup" : "Login"}`}>
              <SignUpButton>
              여기
            </SignUpButton>
          </Link>
          를 클릭해 주세요
      </SignUpBox>
    </>
  );
}

const LoginButton = styled.button`
  all: unset;
  color: white;
  display: block;
  width: 400px;
  height: 50px;
  font-size: 20px;
  font-weight: bold;
  border-radius: 7px;
  text-align: center;
  cursor: pointer;
  background-color: #303f9f;
`;

const SignUpButton = styled.button`
  all: unset;
  width: 32px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 10px;
  color: #303f9f;
  text-align: center;
  font-weight: bold;
`;

const SignUpBox = styled.div`
  width: 400px;
  text-align:center;
`

export default AuthBtn;
