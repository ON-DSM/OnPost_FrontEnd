import { useEffect, useState } from 'react';
import * as S from './style';
import { getToken } from '../../../utils/token';
import MyPage from '../MyPage';
import ProfileDropDown from '../dropdown/ProfileDropdown';
import ProfileSetting from '../../ProfileSetting/ProfileSetting';
import { useRecoilState, useRecoilValue } from 'recoil';
import { ProfileState, RecentToken } from '../../../recoil/proflie';
import { getinfo } from '../../../apis/user/get/getinfo';

function Header() {
  const [height, setHeight] = useState<number>(60);
  const [Modal, SetModal] = useState<boolean>(false);
  const [DropDown, SetDropDown] = useState<boolean>(false);
  const [Set, setSet] = useState<boolean>(false);
  const [data, newdata] = useRecoilState(ProfileState);
  const Token = useRecoilValue(RecentToken);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 500) setHeight(50);
      else setHeight(60);
    });
    
    getinfo()
      .then((data) => {
        sessionStorage.setItem('email', data.email);
        newdata(data);
      })
      .catch((e) => console.log(e));
  }, [Token.accessToken && Token.refreshToken]);

  return (
    <S.OverFlowBox>
      <>
        <S.HeaderContainer height={height}>
          <S.HeaderLogo>
            <S.StyledLink to="/" style={{ textDecoration: 'none' }}>
                온포스트
            </S.StyledLink>
          </S.HeaderLogo>
          <S.HeaderNavBar>
            {getToken().accessToken && getToken().refreshToken ? (
              <>
                <S.StyledLink to="/post/CreatePostPage/0">
                  글작성하기
                </S.StyledLink>
                <S.ProfileImg
                  onClick={() => SetDropDown(true)}
                  src={typeof data.profile === 'string' ? data.profile : ''}
                />
              </>
            ) : (
              <S.StyledLink to="/auth/Login">로그인/회원가입</S.StyledLink>
            )}
          </S.HeaderNavBar>
        </S.HeaderContainer>

        {Modal && <MyPage SetModal={SetModal} />}
        {DropDown && (
          <ProfileDropDown
            SetDropDown={SetDropDown}
            setSet={setSet}
            data={data}
          />
        )}
        {Set && <ProfileSetting setSet={setSet} />}
      </>
    </S.OverFlowBox>
  );
}

export default Header;
