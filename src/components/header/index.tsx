
import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { getToken } from "../../utils/token";
import MyPage from "./MyPage";
import ProfileDropDown from "./ProfileDropdown";
import ProfileSetting from "../ProfileSetting/ProfileSetting";
import Belling from "./Belling";
import Search from "./SearchReuslt";
import {Link} from 'react-router-dom';

function Header() {
  const [height, setHeight] = useState<number>(60);
  const [Modal, SetModal] = useState<boolean>(false);
  const [DropDown, SetDropDown] = useState<boolean>(false);
  const [Set,setSet] = useState<boolean>(false);
  const [Bell,setbell] = useState<boolean>(false);
  const [input,setinput] = useState<boolean>(false);
  const [remain,setmain] = useState<boolean>(false);
  
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 500) setHeight(45);
      else setHeight(60);
    });
  }, []);
  
  

  return (
    <OverFlowBox>
      <>
        <HeaderContainer height={height}>
          <Link to='/'>
            <HeaderLogo>온포스트</HeaderLogo>
          </Link>
          <HeaderNavBar>
            <Link to='/IntroducePage' >개발자 소개</Link>
            {getToken().accessToken && getToken().refreshToken ? (
              <>
                <Link to='/post/CreatePostPage'>글작성하기</Link>
                <BallImg onClick={() => setbell(!Bell)} src='/svg/alarmIcon.svg' />
                <ProfileImg
                  onClick={() => SetDropDown(true)}
                  src='/images/Introduce/JosanghyeonProfile.png'
                />
                
              </>
            ) : (
              <Link to='/auth/Login'>로그인/회원가입</Link>
            )}
            <SearchImage
              onClick={() => {
                setinput(true)
                setmain(true);
              }}
              src='/images/Header/SearchIcon.png'
              alt='검색'
            />
            
          </HeaderNavBar>
        </HeaderContainer>

        { remain && <Search  setinput={setinput} input={input}/>}
        {Modal && <MyPage SetModal={SetModal} />}
        {DropDown && <ProfileDropDown SetDropDown={SetDropDown} setSet={setSet} />}
        {Set && <ProfileSetting setSet={setSet}/>}
        {Bell && <Belling setbell={setbell} />}
      </>
      </OverFlowBox>
  );
}

const OverFlowBox = styled.div`
  position:relative;
  overflow:hidden;
`

const BallImg = styled.img`
  width:16px;
  height:20px;
`


const HeaderContainer = styled.header<{ height: number }>`
  display: flex;
  justify-content: space-around;
  position: fixed;
  z-index:1000;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  align-items: center;
  height: ${props => props.height}px;
  border-bottom: 1px solid ${({ theme }) => theme.lightMode.border_gray};
  transition: 0.15s;
  background-color: ${({ theme }) => theme.lightMode.white};
`;

const HeaderLogo = styled.div`
  font-weight: bold;
  margin-right: 600px;
  cursor: pointer;
  font-size: 20px;
`;

const HeaderNavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 420px;
  > a {
    all: unset;
    cursor: pointer;
  }
`;

const SearchImage = styled.img`
  width:22px;
  height:22px;
  cursor: pointer;
`;

const ProfileImg = styled.img`
  width:2rem;
  height:2rem;
  border-radius:1rem;
`

export default Header;
