import styled from '@emotion/styled';

export default function Follow(){
    return(
        <FollowBox>
            <FollowImg src="/images/main/Followimg.png" />
            <FollowNameBox>
              <FollowName>금강찬안안안아낭낭나안안안아낭나안</FollowName>
              <FolowSubName>
                Hello i'm your favorite your self ask me what
              </FolowSubName>
            </FollowNameBox>
            <FollowerButton>Follower</FollowerButton>
          </FollowBox>
    );
}

const FollowBox = styled.div`
  width: 270px;
  height: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 15px;
  margin-top:15px;
`;

const FollowImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 20px;
`;

const FollowNameBox = styled.div`
  width: 150px;
  margin-left: 15px;
  display: flex;
  flex-direction: column;
`;

const FollowName = styled.span`
  font-size: 16px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

const FolowSubName = styled.span`
  font-size: 11px;
  display: -webkit-box;
  text-overflow: ellipsis;
  overflow: hidden;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const FollowButton = styled.button`
  height: 23px;
  width: 55px;
  font-size: 11px;
  color: white;
  background-color: #1a73eb;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  border: none;
  :hover {
    background-color: #1458b5;
  }
`;

const FollowerButton = styled.button`
  height: 23px;
  width: 65px;
  font-size: 11px;
  color: white;
  background-color: #1a73eb;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  border: none;
  :hover {
    background-color: #1458b5;
  }
`;
