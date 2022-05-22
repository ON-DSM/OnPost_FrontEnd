import { developerInfo } from "../../utils/constant/Introduce";
import { useRecoilState } from "recoil";
import { ProfileState } from "../../recoil/proflie";
import ExplainContainer from "./Explain";
import Profile from "./Profile";
import styled from "@emotion/styled";

function IntroduceDeveloper() {
  const [ChooseProfile, SetChooseProfile] =
    useRecoilState<number>(ProfileState);
  return (
    <IntroduceDeveloperContainer>
      <MemberText>MEMBER</MemberText>
      <DeveloperContainer>
        <div>
          {developerInfo.map((UserName, i) => (
            <Profile
              SetChooseProfile={SetChooseProfile}
              key={i}
              i={i}
              UserName={UserName.Name}
            />
          ))}
        </div>
      </DeveloperContainer>
      <ExplainContainer UserInfo={developerInfo[ChooseProfile]} />;
    </IntroduceDeveloperContainer>
  );
}

export const IntroduceDeveloperContainer = styled.div`
  margin-top: 90px;
`;

export const DeveloperContainer = styled.div`
  margin-top: 60px;
  display: flex;
  justify-content: center;
  > div {
    display: flex;
    justify-content: space-between;
    text-align: center;
    width: 1260px;
    > div {
      cursor: pointer;
    }
  }
`;

export const MemberText = styled.p`
  text-align: center;
  font-size: 42px;
  font-weight: bold;
  background: repeating-linear-gradient(#303d9f, #8f66d1, #b668db);
  color: transparent;
  background-clip: text;
`;

export default IntroduceDeveloper;
