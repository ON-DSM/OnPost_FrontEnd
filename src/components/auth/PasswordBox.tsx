import styled from "@emotion/styled";
import { useState } from "react";
import Image from "next/image";

interface PropsType {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  passwordCheck: boolean;
}

function PasswordBox({ handleChange, passwordCheck }: PropsType) {
  const [HidePassword, SetHidePassword] = useState<boolean>(false);
  return (
    <PasswordContainer>
      <PassWordBox>
        <PassWordText>{passwordCheck ? "Re-Enter" : "PassWord"}</PassWordText>
        {passwordCheck ? <PassWordLine /> : <ReEnterLine />}
      </PassWordBox>
      {passwordCheck ? (
        <PassWordReTryInputBox
          type={HidePassword ? "text" : "password"}
          name='password'
          placeholder='비밀번호 확인'
        />
      ) : (
        <PassWordReTryInputBox
          type={HidePassword ? "text" : "password"}
          name='password'
          placeholder='비밀번호'
          onChange={handleChange}
        />
      )}
      <EyeImgContainer>
        <Image
          width={20}
          height={20}
          onClick={() => SetHidePassword(!HidePassword)}
          src={
            HidePassword
              ? "/images/Auth/CloseEye.png"
              : "/images/Auth/OpenEye.png"
          }
        />
      </EyeImgContainer>
    </PasswordContainer>
  );
}

const PassWordReTryInputBox = styled.input`
  margin-bottom: 30px;
  width: 400px;
  height: 50px;
  border-radius: 7px;
  padding-left: 15px;
  padding-right: 40px;
  border: 2px solid ${({ theme }) => theme.lightMode.main};
  font-size: 18px;
`;

const PasswordContainer = styled.div`
  position: relative;
`;

const EyeImgContainer = styled.div`
  position: absolute;
  top: 15px;
  right: 15px;
`;

const PassWordBox = styled.div`
  display: flex;
  flex-direction: column;
  height: 20px;
  width: 120px;
  position: absolute;
  margin-top: -13px;
  margin-left: 10px;
`;

const PassWordText = styled.span`
  color: #a9a9a9;
  padding-left: 10px;
  position: relative;
  z-index: 1;
  font-size: 14px;
`;

const PassWordLine = styled.span`
  z-index: 0;
  border-top: 4px solid white;
  width: 90px;
  height: 4px;
  position: absolute;
  margin-top: 12px;
`;

const ReEnterLine = styled.span`
  z-index: 0;
  border-top: 4px solid white;
  width: 80px;
  height: 4px;
  position: absolute;
  margin-top: 12px;
`;

export default PasswordBox;
