import styled from '@emotion/styled';
import ModalInfo from './modalInfo/ModalInfo';
import React, { useEffect } from 'react';

interface PropsType {
  setSet: (Set: boolean) => void;
}

export default function ProfileSetting({ setSet }: PropsType) {
  const Setting = () => {
    setSet(!Set);
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

  

  
  return (
    <>
      <DialogBox>
        <Backspace onClick={Setting} src='/images/Modal/ModalBack.png'/>
        <Information>
          <ModalInfo />
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
  margin-top:-100%;
`

const DialogBox = styled.dialog`
  width: 600px;
  height: 650px;
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
  z-index: 5000;
  box-shadow: 2px 8px 4px rgb(0,0,0,25%);
`;

const Backdrop = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 4999;
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
  border-radius: 5px;
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
    background-color: ${(Props) => Props.color === 'white' && '#e4e4e4'} ;
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
  justify-content:space-evenly;
  margin-left: 25px;
  width: 100%;
  height:100%
`;
