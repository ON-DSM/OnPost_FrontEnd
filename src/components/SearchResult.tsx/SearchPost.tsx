import styled from '@emotion/styled';
import PostItem from '../Post/PostItem';

export default function SearchPost() {
  return (
    <MainContainer>
      <Result>
        검색결과<ResultSum>총 3개의 포스트를 찾았습니다</ResultSum>
      </Result>
      <ResultPostBox>
        {true ? (
          <ReadContainer>
            <PostContainer>
              <PostItem />
              <PostItem />
              <PostItem />
              <PostItem />
              <PostItem />
              <PostItem />
            </PostContainer>
          </ReadContainer>
        ) : (
          <Box>
            <NotFound src="/images/notFound/PostNotFound.png" />
            <Title>찾을 수 없습니다...</Title>
          </Box>
        )}
      </ResultPostBox>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 60px;
`;

const Result = styled.span`
  font-size: 18px;
  color: #666ad1;
  margin: 50px 0 50px 0;
  display: flex;
  align-items: center;
`;

const ResultSum = styled.span`
  font-size: 16px;
  color: #777777;
  margin-left: 10px;
`;

const ResultPostBox = styled.div`
  width: 100%;
  min-height: 568px;
  padding-top: 80px;
  border-top: 1px solid #bababa;
  background-color: #fcfcfc;
  display: flex;
  flex-direction: column;
`;

const PostContainer = styled.div`
  width: 1340px;
  @media (max-width: 1353px) {
    justify-content: center;
  }
  display: flex;
  flex-wrap: wrap;
`;

const ReadContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const NotFound = styled.img`
  width: 250px;
`;

const Title = styled.span`
  font-size: 24px;
`;

const Box = styled.div`
  width: 100%;
  height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
