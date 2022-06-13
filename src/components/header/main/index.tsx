import { useEffect, useState } from 'react';
import * as S from './style';
import { clearStorege, getToken } from '../../../utils/token';
import MyPage from '../MyPage';
import ProfileDropDown from '../dropdown/ProfileDropdown';
import ProfileSetting from '../../ProfileSetting/ProfileSetting';
import Belling from '../Belling/Belling';
import Search from '../search/SearchReuslt';
import { Link } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import { ProfileState, TokenClock } from '../../../recoil/proflie';
import { getinfo } from '../../../apis/user/get/getinfo';

function Header() {
  const [height, setHeight] = useState<number>(60);
  const [Modal, SetModal] = useState<boolean>(false);
  const [DropDown, SetDropDown] = useState<boolean>(false);
  const [Set, setSet] = useState<boolean>(false);
  const [Bell, setbell] = useState<boolean>(false);
  const [input, setinput] = useState<boolean>(false);
  const [remain, setmain] = useState<boolean>(false);
  const [data, newdata] = useRecoilState(ProfileState);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 500) setHeight(50);
      else setHeight(60);
    });

      getinfo()
        .then((data) => {
          sessionStorage.setItem('email', data.email);
          newdata(data);
          console.log(data)
        })
        .catch((e) => console.log(e));

  }, []);

  return (
    <S.OverFlowBox>
      <>
        <S.HeaderContainer height={height}>
          <S.HeaderLogo>
            <Link to="/">온포스트</Link>
          </S.HeaderLogo>

          <S.HeaderNavBar>
            {getToken().accessToken && getToken().refreshToken ? (
              <>
                <Link to="/post/CreatePostPage">글작성하기</Link>
                <S.BallImg
                  onClick={() => setbell(!Bell)}
                  src="/svg/alarmIcon.svg"
                />
                <S.ProfileImg
                  onClick={() => SetDropDown(true)}
                  src={typeof data.profile === 'string' ? data.profile : ''}
                />
              </>
            ) : (
              <Link to="/auth/Login">로그인/회원가입</Link>
            )}
            <S.SearchImage
              onClick={() => {
                setinput(true);
                setmain(true);
                clearStorege;
              }}
              src="/images/Header/SearchIcon.png"
              alt="검색"
            />
          </S.HeaderNavBar>
        </S.HeaderContainer>

        {remain && <Search setinput={setinput} input={input} />}
        {Modal && <MyPage SetModal={SetModal} />}
        {DropDown && (
          <ProfileDropDown
            SetDropDown={SetDropDown}
            setSet={setSet}
            data={data}
          />
        )}
        {Set && <ProfileSetting setSet={setSet} />}
        {Bell && <Belling setbell={setbell} />}
      </>
    </S.OverFlowBox>
  );
}

export default Header;
