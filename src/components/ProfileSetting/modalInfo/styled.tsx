import styled from "@emotion/styled";
///styled 분리

export const ProfileImgBox = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ProfileImg = styled.img`
  object-fit: cover;
    width: 200px;
    height: 200px;
    display: block;
`;

export const ImgUplordBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  margin-top: 140px;
`;

export const ImgRemove = styled.label`
  width: 80px;
  height: 25px;
  background-color: white;
  border: 2px solid gray;
  font-size: 14px;
  text-align: center;
  margin-top: 5px;
  border-radius: 5px;
  :hover {
    background-color: #e4e4e4;
  }
`;

export const ImgUplord = styled.label`
  width: 95px;
  height: 25px;
  background-color: white;
  border: 2px solid gray;
  font-size: 14px;
  text-align: center;
  margin-top: 5px;
  border-radius: 5px;
  :hover {
    background-color: #e4e4e4;
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

export const ProfileInfo = styled.div`
  width: 350px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 13px; ;
`;

export const ProfileInfoLine = styled.span`
  width: 2px;
  height: 10px;
  background-color: black;
  margin-left: 20px;
  margin-top: 2px;
`;

export const Profilebutton = styled.button`
  width: 40px;
  height: 25px;
  border-radius: 5px;
  background-color: white;
  font-size: 13px;
  :hover {
    background-color: #e4e4e4;
  }
`;

export const Buttonin = styled.button`
  width: 40px;
  height: 25px;
  background-color: white;
  border: none;
`;

export const ProfilebuttonBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 13px;
  height: 102%;
  margin-top: -1px;
`;

export const UserInfoInput = styled.input`
  font-size: 13px;
  border-radius: 3px;
  border: 1px solid #666ad1;
  padding-left: 5px;
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 150px;
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
