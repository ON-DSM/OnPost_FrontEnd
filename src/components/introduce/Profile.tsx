import styled from "@emotion/styled";

interface PropsType {
  UserName: string;
  i: number;
  SetChooseProfile: (ChooseProfile: number) => void;
}

function Profile({ UserName, i, SetChooseProfile }: PropsType) {
  const Img = [
    "JosanghyeonProfile",
    "KimtaewanProfile",
    "GithubProfile",
    "ChokyunghyeonProfile",
    "LeeyongjinProfile",
  ];

  return (
    <div onClick={() => SetChooseProfile(i)}>
      <ProfileImg src={`/images/Introduce/${Img[i]}.png`} />
      <ProfileName>{UserName}</ProfileName>
    </div>
  );
}

const ProfileName = styled.p`
  font-size: 24px;
  font-weight: bold;
`;

const ProfileImg = styled.img`
 width:100px;
 height:100px;
 > span {
    -webkit-user-drag: none;
  }
  > img {
    -webkit-user-drag: none;
  }
`;

export default Profile;
