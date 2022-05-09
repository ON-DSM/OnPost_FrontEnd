import Image from 'next/image';
import { FunctionComponent, FormEvent } from 'react';
import styled from '@emotion/styled';

interface PropsType {
  AuthSubmit: (e: FormEvent<HTMLFormElement>) => void;
  login: boolean;
  children: React.ReactNode;
}

const FormBox: FunctionComponent<PropsType> = ({
  login,
  AuthSubmit,
  children,
}) => {
  return (
    <div>
      <ImgBox>
        <Image
          layout="responsive"
          width="1920"
          height="1080"
          src="/images/Auth/BackgroundLoginImg.png"
        />
      </ImgBox>
      <LoginContainer>
        <LoginContainerBox>
          <h1>{login ? 'LOGIN' : 'SignUp'}</h1>
          <LoginContainerTitle onSubmit={AuthSubmit}>
            {children}
          </LoginContainerTitle>
        </LoginContainerBox>
      </LoginContainer>
    </div>
  );
};

const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

const LoginContainerBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  box-shadow: 2px 6px 8px 0px rgba(0, 0, 0, 0.25);
  width: 500px;
  height: 600px;
  border-radius: 10px;
`;

const ImgBox = styled.div`
  z-index: -1;
  position: absolute;
  width: 100%;
  height: 100%;
  min-width: 1419.93px;
  min-height: 753px;
  overflow: hidden;
`;

const LoginContainerTitle = styled.form`
  margin-top: 50px;
`;

export default FormBox;
