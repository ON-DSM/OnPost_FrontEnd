import styled from '@emotion/styled';
import ModalInfo from './modalInfo/ModalInfo';
import ModalFollow from './ModalFollow';
import ModalWithdrawal from './MadalWithdrawal';
import React, { useEffect,useState } from 'react';

interface PropsType {
  setSet: (Set: boolean) => void;
}

export default function ProfileSetting({ setSet }: PropsType) {
  const [Isclick, setclick] = useState<number>(1);
  const Setting = () => {
    setSet(!Set);
  };

  const ClickColor1 = () => {
    return Isclick === 1 ? '#C9C9C9' : 'white';
  };
  const ClickColor2 = () => {
    return Isclick === 2 ? '#C9C9C9' : 'white';
  };

  useEffect(() => {
    document.body.style.cssText = `
      position:fixed;
      top: -${window.scrollY}px;
      overflow-y: scroll;
      width:100%`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = '';
      window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
    };
  }, []);

  

  const PageSeleter = () =>{
    switch(Isclick){
      case 1:
        return <ModalInfo />
      case 2:
        return <ModalFollow />
      case 0:
        return <ModalWithdrawal />
    }
  }
  return (
    <>
      <DialogBox>
        <Backspace onClick={Setting} src='/images/Modal/ModalBack.png'/>
        <TapBar>
          <div>
            <TapButton onClick={() => setclick(1)} color={ClickColor1()}>
              <TapbuttonName>계정 정보</TapbuttonName>
            </TapButton>
            <TapButton2 onClick={() => setclick(2)} color={ClickColor2()}>
              <TapbuttonName>유저 팔로우</TapbuttonName>
            </TapButton2>
          </div>
          <Withdrawal onClick={() => setclick(0)}>계정 삭제</Withdrawal>
        </TapBar>
        <Information>
          {
            PageSeleter()
          }
        </Information>
      </DialogBox>
        <Backdrop
          onClick={(e: React.MouseEvent) => {
            e.preventDefault();
            if (Setting) {
              
              Setting();
            }
          }}
        />
     </>
  );
}

const Backspace = styled.img`
  position:absolute;
  margin-left:95%;
  margin-top:-72%;
`

const ModalContainer = styled.div`
  z-index: 9999;
`;

const DialogBox = styled.dialog`
  width: 800px;
  height: 640px;
  top: 50%;
  left: 50%;
  position: fixed;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: row;
  align-items: center;
  border: none;
  border-radius: 3px;
  box-shadow: 0 0 30px rgba(30, 30, 30, 0.185);
  box-sizing: border-box;
  background-color: white;
  z-index: 10000;
  box-shadow: 2px 8px 4px rgb(0,0,0,25%);
`;

const Backdrop = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  background-color: rgba(0, 0, 0, 0.2);
`;

const TapBar = styled.div`
  width: 20%;
  height: 95%;
  margin-left: 3%;
  border-right: 2px solid #999999;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const TapButton = styled.div`
  width: 150px;
  height: 40px;
  border: none;
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  background-color: ${(Props) => Props.color && Props.color};
  border-radius: 5px;
  :hover {
    background-color: #e4e4e4;
  }
`;

const TapButton2 = styled.div`
  width: 150px;
  height: 40px;
  border: none;
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  background-color: ${(Props) => Props.color && Props.color};
  border-radius: 5px;
  :hover {
    background-color: #e4e4e4;
  }
`;

const TapbuttonName = styled.span`
  height: 30px;
  font-size: 20px;
  margin-left: 10px;
`;

const Withdrawal = styled.span`
  font-size: 16px;
`;

const Information = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 25px;
  width: 100%;
`;
