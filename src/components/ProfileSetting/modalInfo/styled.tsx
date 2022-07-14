import styled from '@emotion/styled/macro';
///styled 분리

export const ProfileImgBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ImgCamara = styled.img`
  position: absolute;
  display: none;
  cursor: pointer;
  top: 51px;
  left: 51px;
  width: 19.2px;
`;

export const ImgUplord = styled.label`
  position: absolute;
  cursor: pointer;
  display: none;
  width: 120px;
  height: 120px;
  font-size: 14px;
  text-align: center;
  border-radius: 100px;
  background-color: #000000;
  opacity: 50%;
`;

export const ProfileImg = styled.img`
  object-fit: cover;
  width: 120px;
  height: 120px;
  border-radius: 100px;
  display: block;
  
`;

export const ImgUplordBox = styled.div`
  display: flex;
  flex-direction: column;
  position:absolute;
  top: 50px;
  width:120px;
  height:120px;
  &:hover ${ImgUplord} {
    display: block;
  }
  &:hover ${ImgCamara} {
    display: block;
  }
`;

export const SizeName = styled.span`
  font-size: 12px;
  color: #777777;
`;

export const UserInfoBox = styled.div`
  height: 250px;
  display: flex;
  flex-direction: row;
  margin-top: 50px;
`;

export const ProfileInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 13px;
`;

export const ExitName = styled.span`
  font-size: 14px;
  color: #d30000;
  margin-left: 60px;
`;

export const ExitButton = styled.button`
  font-size: 12px;
  border: 1px solid #777777;
  border-radius: 5px;
  background-color: white;
  padding: 1px 7px 1px 7px;
  margin-right: 30px;
  :hover {
    background-color: #f9d2d2;
    border: 1px solid #d30000;
    color: #d30000;
  }
`;

export const ExitFormdiv = styled.div`
  width: 550px;
  position: absolute;
  z-index: -1;
  top: 78.5%;
`;

export const ProfileInfo = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 14px; ;
`;

export const ProfileInfoLine = styled.span`
  width: 2px;
  height: 10px;
  background-color: black;
`;

export const Profilebutton = styled.button`
  width: 70px;

  border: 1px solid ${(props) => (props.color ? '#666ad1' : '#777777')};
  padding: 1px 15px 1px 15px;
  border-radius: 5px;
  color: ${(props) => (props.color ? '#666ad1' : 'black')};
  background-color: white;
  font-size: 13px;
  :hover {
    background-color: #dadaff;
  }
`;

export const PasswordButton = styled.button`
  width: 110px;
  border: 1px solid ${(props) => (props.color ? '#666ad1' : '#777777')};
  padding: 1px 15px 1px 15px;
  border-radius: 5px;
  color: ${(props) => (props.color ? '#666ad1' : 'black')};
  background-color: white;
  font-size: 13px;
  :hover {
    background-color: #dadaff;
  }
`;

export const Buttonin = styled.button`
  width: 40px;
  height: 25px;
  background-color: white;
  border: none;
`;

export const ProfilebuttonBox = styled.div`
  width: 120px;
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 13px;
  height: 100%;
`;

export const NameInfoInput = styled.input`
  width: 100%;
  height: 36px;
  margin: 20px 0 20px 0;
  padding-left: 5px;
  font-size: 19.2px;
  border-radius: 8px;
  border: 1px solid #666ad1;
  :focus {
    outline: none;
  }
`;

export const NameInfodiv = styled.div`
  width: 100%;
  height: 36px;
  margin: 25px 0 25px 0;
  padding-left: 5px;
  font-size: 19.2px;
  color: #666ad1;
  border-radius: 8px;
`;

export const IntroInfoInput = styled.textarea`
  width: 100%;
  height: 160px;
  padding: 10px 0 0 8px;
  margin: 10px 0 30px 0;
  font-size: 12px;
  border-radius: 8px;
  border: 1px solid #666ad1;
  resize: none;
  :focus {
    outline: none;
  }
`;

export const IntroInfodiv = styled.div`
  width: 100%;
  height: 160px;
  word-wrap: break-word; 
  padding: 10px 4px 0 8px;
  margin: 10px 0 30px 0;
  font-size: 12px;
  color: #666ad1;
  border-radius: 8px;
  border: 1px solid #C4C4C4;

`;

export const UserInfoInput = styled.input`
  height: 24px;
  width: 100%;
  padding-left: 5px;
  margin-bottom: 10px;
  font-size: 12px;
  border-radius: 8px;
  border: 1px solid #666ad1;
  :focus {
    outline: none;
  }
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100px;
  margin-right: 50px;
  height: 25px;
`;

export const PublicProfile = styled.div`
  width: 40px;
  height: 20px;
  padding: 0 5px 0 5px;
  display: flex;
  align-items: center;
  border-radius: 10px;
  background-color: #c9c9c9;
  animation-name: none;
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
  @keyframes backcolor {
    to {
      background-color: #11bc03;
    }
    from {
      background-color: #c9c9c9;
    }
  }
  @keyframes white {
    from {
      background-color: #11bc03;
    }
    to {
      background-color: #c9c9c9;
    }
  }
`;

export const PublicProfileBall = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 6px;
  background-color: white;
  animation-name: none;
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
  @keyframes left {
    to {
      margin-left: 0%;
    }
    from {
      margin-left: 60%;
    }
  }
  @keyframes right {
    from {
      margin-left: 0%;
    }
    to {
      margin-left: 60%;
    }
  }
`;

export const PublicProfilefalse = styled.div`
  width: 40px;
  height: 20px;
  padding: 0 5px 0 5px;
  display: flex;
  align-items: center;
  border-radius: 10px;
  background-color: #11bc03;
  animation-name: none;
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
  @keyframes backcolor {
    to {
      background-color: #11bc03;
    }
    from {
      background-color: #c9c9c9;
    }
  }
  @keyframes white {
    from {
      background-color: #11bc03;
    }
    to {
      background-color: #c9c9c9;
    }
  }
`;

export const PublicProfileBallFalse = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 6px;
  margin-left: 60%;
  background-color: white;
  animation-name: none;
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
  @keyframes left {
    to {
      margin-left: 0%;
    }
    from {
      margin-left: 60%;
    }
  }
  @keyframes right {
    from {
      margin-left: 0%;
    }
    to {
      margin-left: 60%;
    }
  }
`;

export const Block = styled.span`
  height: 25px;
`;

export const Text = styled.span`
  height: 25px;
`;
