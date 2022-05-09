import styled from "@emotion/styled";
import Image from "next/image";

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
      <ProfileImg width={100} height={100} src={`/images/Introduce/${Img[i]}.png`} />
      <ProfileName>{UserName}</ProfileName>
    </div>
  );
}

const ProfileName = styled.p`
  font-size: 24px;
  font-weight: bold;
`;

const ProfileImg = styled(Image)`
  > span {
    -webkit-user-drag: none;
  }
  > img {
    -webkit-user-drag: none;
  }
`;

export default Profile;
