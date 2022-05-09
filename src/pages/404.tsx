import styled from "@emotion/styled";
import Image from "next/image";

function PageNotFound() {
  return (
    <PageNotFoundContainer>
      <div>
        <Image
          alt='404'
          width='494px'
          height='328px'
          src='/images/notFound/NotFoundImage.png'
        />
        <h1>Not Found...</h1>
      </div>
    </PageNotFoundContainer>
  );
}

const PageNotFoundContainer = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  margin-top: 190px;
  > div {
    > h1 {
      margin-top: 30px;
    }
  }
`;

export default PageNotFound;
