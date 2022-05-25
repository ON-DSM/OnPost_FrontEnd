import styled from '@emotion/styled';

export const MainPostBar = styled.div`
  width: 400px;
  height: 500px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MainPostBox = styled.div`
  background-color: white;
  width: 300px;
  display: flex;
  margin: 15px;
`;

export const TrendPostTitle = styled.span`
  font-size: 20px;
`;

export const TrendPostInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  padding-top: 3px;
`;

export const TrendPostName = styled.span`
  height: 36px;
  font-size: 14px;
  font-weight: bold;
  display: -webkit-box;
  text-overflow: ellipsis;
  overflow: hidden;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const TrendPostImg = styled.img`
  width: 80px;
  height: 80px;
`;

export const TrendPostHeartBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 8px;
`;

export const TrendPostHeartImg = styled.img`
  margin-right: 10px;
  width: 18px;
  height: 16px;
`;

export const TrendPostHeartSum = styled.span`
  font-size: 14px;
`;

export const TrendPostTagBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 21px;
  font-size: 18px;
  display: -webkit-box;
  text-overflow: ellipsis;
  overflow: hidden;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`;

export const TrendPostTag = styled.span`
  margin-right: 10px;
  font-size: 14px;
  color: #303f9f;
`;
