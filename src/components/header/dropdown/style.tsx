import styled from "@emotion/styled";

export const UserInfoBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 4px;
  padding-bottom: 4px;
`;

export const Name = styled.p`
  font-size: 16px;
  font-weight: bold;
`;

export const Email = styled.p`
  font-size: 12px;
`;

export const XImgBox = styled.p`
  text-align: end;
  height: 20px;
`;

export const Background = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

export const DropDownBox = styled.div`
  position: fixed;
  top: 50px;
  border-radius: 5px;
  right: 60px;
  width: 300px;
  height: 130px;
  background-color: #ffffff;
  padding-right: 18px;
  padding-left: 18px;
  box-shadow: 0px 0px 4px 2px rgb(0,0,0,25%);
`;

export const Button = styled.button`
  all: unset;
  padding: 4px;
  font-size: 12px;
  border: 1px solid #cacacc;
  border-radius: 5px;
  cursor: pointer;
`;

export const BtnBox = styled.div`
  display: flex;
  justify-content: space-between;
  > div {
    width: 140px;
    display: flex;
    justify-content: space-between;
  }
`;
