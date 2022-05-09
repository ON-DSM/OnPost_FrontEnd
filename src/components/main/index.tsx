import Image from "next/image";
import styled from "@emotion/styled";

function Main() {
  return (
    <MainContainer>
      <Image
        width={1920}
        height={776}
        src='/images/main/MainImage.png'
        alt='메인배너'
      />
    </MainContainer>
  );
}

const MainContainer = styled.div`
  position: relative;
  margin-bottom: 220px;
  height: 776px;
`;

export default Main;
