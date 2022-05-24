import styled from '@emotion/styled';
import Follow from './Follow';

export default function ModalFollow() {
  return (
    <MainContainer>
        <FollowLine />
      <FollowFollower>
        <FollowFollowerName>
          Follow
          <FollowFollowerLine className="80" />
        </FollowFollowerName>
        <FollowFollowerName>
          Follower
          <FollowFollowerLine className="100" />
        </FollowFollowerName>
      </FollowFollower>

      <FollowContain>
        <FollowtwoBox>
          <Follow />
        </FollowtwoBox>



        <FollowtwoBox>
          <Follow />
          <Follow />
          <Follow />
          <Follow />
          <Follow />
          <Follow />
          <Follow />
          <Follow />
          <Follow />
          <Follow />
          <Follow />
          <Follow />
          <Follow />
        </FollowtwoBox>
      </FollowContain>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left:-25px;
`;

const FollowFollower = styled.div`
  width: 66%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 50px;
`;

const FollowFollowerName = styled.div`
  font-size: 20px;
  font-weight: bold;
  width: 100px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const FollowFollowerLine = styled.span`
  width: ${(Props) => Props.className && Props.className}px;
  height: 2px;
  margin-top: 3px;
  background-color: black;
`;

const FollowContain = styled.div`
  height: 450px;
  width: 100%;
  display: flex;
  flex-direction: row;
  overflow: auto;
  ::-webkit-scrollbar{
    width:10px;
  }
  ::-webkit-scrollbar-track{
      background-color:#E4E4E4;
  }
  ::-webkit-scrollbar-thumb{
      background-color:#303F9F;
  }
`;

const FollowLine = styled.span`
  position:absolute;
  width: 2px;
  height: 70%;
  background-color: #999999;
  margin-right: 10px;
  margin-top:90px;
`;

const FollowtwoBox = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
