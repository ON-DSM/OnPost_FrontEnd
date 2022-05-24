import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { clearStorege } from "../../utils/token";

interface PropsType {
  SetDropDown: (DropDown: boolean) => void;
  setSet: (Set: boolean) => void;
}

function ProfileDropDown({ SetDropDown,setSet}: PropsType) {
  return (
    <Background onClick={() => SetDropDown(false)}>
      <DropDownBox onClick={e => e.stopPropagation()}>
        <XImgBox>
          <img
            onClick={() => SetDropDown(false)}
            width={10}
            height={10}
            src='/svg/CloseIcon.svg'
          />
        </XImgBox>
        <UserInfoBox>
          <div>
            <Name>나아키인베</Name>
            <Email>lokijoji2@gmail.com</Email>
          </div>
          <div>
            <img
              width={50}
              height={50}
              src='/images/Introduce/JosanghyeonProfile.png'
            />
          </div>
        </UserInfoBox>
        <BtnBox>
          <div>
            <Button onClick={() => setSet(true)}>계정설정</Button>
            <Button >
              <Link to="/ProfilePage">
                마이페이지
              </Link>
            </Button>
          </div>
          <Button onClick={clearStorege}>로그아웃</Button>
        </BtnBox>
      </DropDownBox>
    </Background>
  );
}

const BtnBox = styled.div`
  display: flex;
  justify-content: space-between;
  > div {
    width: 140px;
    display: flex;
    justify-content: space-between;
  }
`;

const UserInfoBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 4px;
  padding-bottom: 4px;
  
`;

const Name = styled.p`
  font-size: 16px;
  font-weight: bold;
`;

const Email = styled.p`
  font-size: 12px;
`;

const XImgBox = styled.p`
  text-align: end;
  height: 20px;
`;

const Background = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 2;
`;

const DropDownBox = styled.div`
  position: absolute;
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

const Button = styled.button`
  all: unset;
  padding: 4px;
  font-size: 12px;
  border: 1px solid #cacacc;
  border-radius: 5px;
  cursor: pointer;
`;

export default ProfileDropDown;
