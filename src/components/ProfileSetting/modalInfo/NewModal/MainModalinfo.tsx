import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { DataInfoType, PasswordType } from '../../../../apis/Interface';
import { DeleteUser } from '../../../../apis/user/delete/delete';
import DataInfo from '../../../../apis/user/post/data';
import { SetPassword } from '../../../../apis/user/post/password';
import { ProfileState } from '../../../../recoil/proflie';
import { customToast } from '../../../../utils/toast';
import { clearStorege } from '../../../../utils/token';
import ModalImg from '../modalChange/ModalImg';
import * as S from '../styled';
import ReturnChangeInput from './InputCom';

const clearpass = {
  newPassword: '',
  originPassword: '',
};

export default function NewModalInfo() {
  const [data, setdata] = useRecoilState(ProfileState);
  const [value, setvalue] = useState<DataInfoType>(data);
  const [Infochange, setchange] = useState<boolean>(false);
  const [pass, setpass] = useState<PasswordType>({ ...clearpass });

  const FT = async () => {
    setchange(!Infochange);

    if (Infochange) {
      if (
        Object.entries(data).toString() !== Object.entries(value).toString()
      ) {
        await DataInfo(value,'T').then((Data) => Data && setdata(Data));
      }
      if (pass.newPassword !== '' && pass.originPassword !== '') {
        if(pass.newPassword !== pass.originPassword){
            await SetPassword(pass); 
        }else{
           customToast("비밀번호가 같습니다",'Error')
        }
      } 
      setdata(value);
      setpass({...clearpass})
    }
  };

  const Deleteacountuser = () =>{
    if (confirm('계정을 삭제하시겠습니까?')) {
        DeleteUser();
        clearStorege();
        window.location.reload();
      }
    }

  return (
    <>
      <MainModal>
        <ModalImgPo>
          <ModalImg />
          <span style={{ fontSize: '12px', marginTop: '10px' }}>{data.email}</span>
        </ModalImgPo>

        <Line />
        <div>
          {Infochange ? (
            <ReturnChangeInput
              setpass={setpass}
              pass={pass}
              setvalue={setvalue}
              value={value}
            />
          ) : (
            <div style={{ width: '300px' }}>
              <S.NameInfodiv>{data.name}</S.NameInfodiv>
              <S.IntroInfodiv>{data.introduce}</S.IntroInfodiv>
            </div>
          )}
        </div>
      </MainModal>
      <ButtonBox>
        <OutButton onClick={Deleteacountuser}>계정 탈퇴</OutButton>
        <ChangeButton onClick={FT}>
          {Infochange ? '정보 변경 완료' : '계정 정보 변경'}
        </ChangeButton>
      </ButtonBox>
      <div style={{ fontSize: '12px', marginLeft: '20px', color: '#A9A9A9' }}>
        *회원탈퇴후 모든 정보는 삭제됩니다
      </div>
    </>
  );
}

const MainModal = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  height: 360px;
`;

const ModalImgPo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px 40px 0 20px;
`;

const OutButton = styled.button`
  all: unset;
  cursor: pointer;
  background-color: #d9d9d9;
  color: #888888;
  :hover {
    background-color: #ff4848;
    color: white;
  }
  font-size: 12px;
  padding: 6px 12px 6px 12px;
  border-radius: 15px;
`;

const ChangeButton = styled.button`
  all: unset;
  cursor: pointer;
  background-color: #666ad1;
  color: #ffffff;
  :hover {
    background-color: #303f9f;
  }
  font-size: 12px;
  padding: 6px 12px 6px 12px;
  border-radius: 15px;
`;

const Line = styled.span`
  width: 1px;
  background-color: #999999;
`;
