import styled from "@emotion/styled";

export default function RelateFollow(){
    return(
        <FollowtwoBox>
            <FollowItemBox>
                <FollowImg  src="/images/main/Followimg.png" />
                <FollowNameBox>
                    <FollowName>금강찬안안안아낭낭나안안안아낭나안</FollowName>
                    <FolowSubName>
                        Hello i'm your favorite your self ask me what
                    </FolowSubName>
                </FollowNameBox>
                <FollowerButton>Follower</FollowerButton>
            </FollowItemBox>
        </FollowtwoBox>
    );
}

const FollowtwoBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const FollowItemBox = styled.div`
  width: 450px;
  height: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
  margin-top:20px;
`;

const FollowImg = styled.img`
  width: 45px;
  height: 45px;
  border-radius: 20px;
`;

const FollowNameBox = styled.div`
  width: 290px;
  margin-left: 15px;
  display: flex;
  flex-direction: column;
`;

const FollowName = styled.span`
  font-size: 18px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

const FolowSubName = styled.span`
  font-size: 12px;
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
  height: 28px;
  width: 85px;
  font-size: 12px;
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