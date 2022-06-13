import * as S from './style'
import { Link } from "react-router-dom";
import { clearStorege } from "../../../utils/token";
import { DataInfoType } from '../../../apis/Interface';

interface PropsType {
  SetDropDown: (DropDown: boolean) => void;
  setSet: (Set: boolean) => void;
  data: DataInfoType;
}


function ProfileDropDown({ SetDropDown,setSet,data}: PropsType) {
  const Clear = () =>{
    clearStorege();
    window.location.reload();
  }
  return (
    <S.Background onClick={() => SetDropDown(false)}>
      <S.DropDownBox onClick={e => e.stopPropagation()}>
        <S.XImgBox>
          <img
            onClick={() => SetDropDown(false)}
            width={10}
            height={10}
            src='/svg/CloseIcon.svg'
          />
        </S.XImgBox>
        <S.UserInfoBox>
          <div>
            <S.Name>{data.name}</S.Name>
            <S.Email>{data.email}</S.Email>
          </div>
          <div>
            <img
              width={50}
              height={50}
              style={{borderRadius: "50px"}}
              src={typeof data.profile === 'string' ? data.profile : ''}
            />
          </div>
        </S.UserInfoBox>
        <S.BtnBox>
          <div>
            <S.Button onClick={() => setSet(true)}>계정설정</S.Button>
            <S.Button >
              <Link to="/ProfilePage">
                마이페이지
              </Link>
            </S.Button>
          </div>
          <S.Button onClick={Clear}>로그아웃</S.Button>
        </S.BtnBox>
      </S.DropDownBox>
    </S.Background>
  );
}



export default ProfileDropDown;
