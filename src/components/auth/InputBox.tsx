import styled from "@emotion/styled";
import React from "react";

interface PropsType {
  InputName: string;
  InputPlaceholder: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function InputBox({ InputName, InputPlaceholder, handleChange }: PropsType) {
  return (
    <InputLabelBox>
      <LabelBox>
        <LabelText>{InputPlaceholder == "이메일" ? "Email" : "Name"}</LabelText>
        <LabelLine />
      </LabelBox>
      <EmailNameInputBox
        name={InputName}
        type='text'
        onChange={handleChange}
        placeholder={InputPlaceholder}
      />
    </InputLabelBox>
  );
}

const EmailNameInputBox = styled.input`
  margin-bottom: 30px;
  width: 400px;
  height: 50px;
  border-radius: 7px;
  padding-left: 15px;
  padding-right: 40px;
  border: 2px solid ${({ theme }) => theme.lightMode.main};
  font-size: 18px;
`;

const InputLabelBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
`;

const LabelBox = styled.div`
  display: flex;
  flex-direction: column;
  height: 20px;
  width: 120px;
  position: absolute;
  margin-top: -13px;
  margin-left: 10px;
`;

const LabelText = styled.span`
  color: #a9a9a9;
  padding-left: 10px;
  position: relative;
  z-index: 1;
  font-size: 14px;
`;

const LabelLine = styled.span`
  z-index: 0;
  border-top: 4px solid white;
  width: 60px;
  height: 4px;
  position: absolute;
  margin-top: 12px;
`;

export default InputBox;