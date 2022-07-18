import styled from "@emotion/styled";

export const ChangeButton = styled.img`
  position:absolute;
  margin-top:16px;
  margin-left:365px;
`;

export const EmailNameInputBox = styled.input`
  margin-bottom: 30px;
  width: 400px;
  height: 50px;
  border-radius: 7px;
  padding-left: 15px;
  padding-right: 40px;
  border: 2px solid ${({ theme }) => theme.lightMode.main};
  font-size: 18px;
`;

export const InputLabelBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
`;

export const LabelBox = styled.div`
  display: flex;
  flex-direction: column;
  height: 20px;
  width: 120px;
  position: absolute;
  margin-top: -13px;
  margin-left: 10px;
`;

export const LabelText = styled.span`
  color: #a9a9a9;
  padding-left: 10px;
  position: relative;
  z-index: 1;
  font-size: 14px;
`;

export const LabelLine = styled.span`
  z-index: 0;
  border-top: 4px solid white;
  width: 60px;
  height: 4px;
  position: absolute;
  margin-top: 12px;
`;