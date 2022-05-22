import styled from '@emotion/styled';
import { ProfileState } from '../../recoil/proflie';
import { useRecoilState } from 'recoil';
import { developerInfoType } from '../../utils/constant/Introduce';

type PropsType = {
  UserInfo: developerInfoType;
};

function Explain({ UserInfo }: PropsType) {
  const [ChooseProfile, SetChooseProfile] =
    useRecoilState<number>(ProfileState);

  return (
    <ExplainContainer>
      <div>
        <TriangleContainer ChooseProfile={ChooseProfile}>
          <div>
            <Triangle />
          </div>
        </TriangleContainer>
        <ExplainBackground>
          <div>
            <ExplainContentBox>
              <div>
                <h1>{UserInfo.Field}</h1>
                <DeveloperWord>{UserInfo.Word}</DeveloperWord>
                <a href={UserInfo.Githuburl}>{UserInfo.Githuburl}</a>
              </div>
            </ExplainContentBox>
          </div>
        </ExplainBackground>
      </div>
    </ExplainContainer>
  );
}

const TriangleContainer = styled.div<{ ChooseProfile: number }>`
  display: flex;
  justify-content: center;
  > div {
    transition: 0.7s;
    margin-right: ${(props) => props.ChooseProfile == 0 && 1160}px;
    margin-right: ${(props) => props.ChooseProfile == 1 && 601}px;
    margin-left: ${(props) => props.ChooseProfile == 3 && 600}px;
    margin-left: ${(props) => props.ChooseProfile == 4 && 1160}px;
  }
`;

const ExplainContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
  margin-bottom: 100px;
`;

const Triangle = styled.div`
  width: 0px;
  height: 0px;
  border-bottom: calc(12px * 1.732) solid #303f9f;
  border-left: 12px solid transparent;
  border-right: 12px solid transparent;
`;

const ExplainBackground = styled.div`
  width: 1260px;
  height: 400px;
  display: flex;
  align-items: center;
  background: linear-gradient(to right, #303f9f 30%, #666ad1 70%);
`;

const ExplainContentBox = styled.div`
  width: 1260px;
  height: 306px;
  background-color: #ffffff;
  text-align: center;
  display: flex;
  justify-content: center;
  padding-top: 50px;
`;

const DeveloperWord = styled.div`
  color: #303f9f;
  font-size: 16px;
  margin-top: 10px;
  margin-bottom: 5px;
`;

export default Explain;
