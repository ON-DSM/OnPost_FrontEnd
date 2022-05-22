import Link from "next/link";
import { useEffect, useState } from "react";
import SearchResult from "./SearchReuslt";
import styled from "@emotion/styled";
import Image from "next/image";
import { getToken } from "../../utils/token";
import MyPage from "./MyPage";
import ProfileDropDown from "./ProfileDropdown";
import ProfileSetting from "../ProfileSetting/ProfileSetting";

function Header() {
  const [height, setHeight] = useState<number>(60);
  const [Modal, SetModal] = useState<boolean>(false);
  const [DropDown, SetDropDown] = useState<boolean>(false);
  const [Set,setSet] = useState<boolean>(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 500) setHeight(45);
      else setHeight(60);
    });
  }, []);
  

  return (
    <>
      {Set && <ProfileSetting setSet={setSet}/>}
      <HeaderContainer height={height}>
        <Link href='/'>
          <HeaderLogo>온포스트</HeaderLogo>
        </Link>
        <HeaderNavBar>
          <Link href='/IntroducePage'>개발자 소개</Link>
          {false ? ( ///getToken().accessToken && getToken().refreshToken
            <>
              <Link href='/post/CreatePostPage'>글작성하기</Link>
              <Image width={16} height={20} src='/svg/alarmIcon.svg' />
              <Image
                onClick={() => SetDropDown(true)}
                width={30}
                height={30}
                src='/images/Introduce/JosanghyeonProfile.png'
              />

            </>
          ) : (
            <Link href='/auth/Login'>로그인/회원가입</Link>
          )}
          <SearchImage
            width={22}
            height={22}
            src='/images/Header/SearchIcon.png'
            alt='검색'
          />
          
        </HeaderNavBar>
      </HeaderContainer>
      
      {Modal && <MyPage SetModal={SetModal} />}
      {DropDown && <ProfileDropDown SetDropDown={SetDropDown} setSet={setSet} />}
      <SearchResult />
    </>
  );
}




const HeaderContainer = styled.header<{ height: number }>`
  display: flex;
  justify-content: space-around;
  position: fixed;
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

const SearchImage = styled(Image)`
  cursor: pointer;
`;

const ProfileImg = styled(Image)`
  width:2rem;
  height:2rem;
  border-radius:1rem;
`

const writePost = styled.span`
  
`

export default Header;
