import styled from '@emotion/styled/macro';

export const MainContainer = styled.div`
  margin-top: 60px;
  padding-left: 300px;
  padding: 0;
  overflow-x:hidden;
`;

export const MainCenter = styled.div`
  padding-top: 50px;
  max-width: 1000px;
  min-height: 100vh;
  width: 100%;
  margin: 0 auto;
`;
export const PostName = styled.div`
  font-size: 32px;
  font-weight: bold;
`;

export const PostTime = styled.a`
  font-size: 14px;
  color: #686868;
  margin-left: 7px;
`;

export const PostTagBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 800px;
  width: 100%;
  margin-top: 20px;
`;

export const PostTag = styled.div`
  margin: 7px;
  font-size: 12px;
  padding-left: 12px;
  padding-right: 12px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #666ad1;
  color: white;
  border-radius: 55px;
`;

export const PostImg = styled.img`
  max-width: 800px;
  max-height: 400px;
  margin-top: 10px;
`;

export const PostInfo = styled.pre`
  width: 800px;
  white-space:pre-wrap;
  min-height: 50vh;
  margin: 50px 0 100px 0;
  padding-left:20px;
`;

export const PostButtonBar = styled.div`
  display: flex;
  max-width: 800px;
  width: 100%;
  justify-content: space-between;
  padding-bottom: 10px;
`;

export const ButtonCombine = styled.div`
  display: flex;
`;

export const PostButtonName = styled.span`
  margin-left: 5px;
  margin-right: 5px;
`;

export const PostButtonIcon = styled.img`
  width: 16px;
  height:16px;
  opacity: 50%;
`;

export const PostButtonBox = styled.div`
  padding: 0 10px 0 10px;
  margin-left: 5px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  font-size: 14px;
  border: 1px solid #999999;
  color: #999999;
  :hover {
    border: 1px solid #444444;
    color: #444444;
    background-color: #D1D1D1;
  }
  &:hover ${PostButtonIcon}{
    opacity:90%;
  }
  cursor: pointer;
`;

export const OtherButtonBox = styled.div`
  padding: 0 10px 0 10px;
  margin-left: 5px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  font-size: 14px;
  border: 1px solid #777777;
  color: white;
  background-color:#6C63FF;
  :hover {
    border: 1px solid #444444;
    color: white;
    background-color: #666AD1;
  }
`

export const ProfileContainer = styled.div`
  background-color: #f8f8f8;
  padding-bottom:50px;
`;

export const CenterBox = styled.div`
  max-width: 1000px;
  width: 100%;
  margin: auto;
`;

export const CenterInfoBox = styled.div`
  max-width: 800px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const ProfileBox = styled.div`
  display: flex;
  flex-direction: row;
  padding-left: 50px;
  padding-top: 100px;
  padding-bottom: 100px;
`;

export const ProfileImg = styled.img`
  width: 100px;
  border-radius: 50px;
  object-fit: cover;
  height: 100px;
`;

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin-left: 20px;
  width: 700px;
`;

export const ProfileName = styled.span`
  font-size: 22px;
  font-weight: bold;
`;

export const ProfileSubName = styled.span`
  font-size: 14px;
  width:350px;
`;

export const ProfileFollow = styled.button`
  width: 100px;
  height: 28px;
  border-radius: 5px;
  color: white;
  background-color: #1a73eb;
  :hover {
    background-color: #1458b5;
  }
  border: none;
  margin-left: 530px;
`;

export const Line = styled.span`
  height: 1px;
  margin-bottom: 10px;
  margin-top: 50px;
  background-color: #999999;
`;

export const Num = styled.span`
  color: #303f9f;
`;

export const CommentSum = styled.span`
  font-size: 16px;
  font-weight: bold;
  margin: 30px 0 10px 30px;
`;

export const CommentInput = styled.textarea`
  min-height: 200px;
  width: 100%;
  border-radius: 10px;
  border: 2px solid #303f9f;
  padding: 20px;
  resize: none;
  font-size: 14px;
`;

export const ButtonBox = styled.div`
  display: flex;
  -webkit-box-pack: end;
  justify-content: flex-end;
`;

export const CommentButton = styled.button`
  width: 120px;
  height: 35px;
  float: right;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  border-radius: 8px;
  background-color: #e4eaff;
  color: #303f9f;
  border: 2px solid #303f9f;
  :hover {
    background-color: #c3d0fe;
  }
`;

export const TrendBar = styled.div`
  position: absolute;
  top: 245px;
  right: 50px;
`;
