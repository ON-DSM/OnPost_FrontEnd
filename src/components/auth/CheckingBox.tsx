import Image from "next/image";
import { useState } from "react";
import styled from "@emotion/styled";

function CheckingBox() {
  const [CheckBox, SetCheckBox] = useState<boolean>(false);
  return (
    <CheckingContainer onClick={() => SetCheckBox(!CheckBox)}>
      <Image
        width={20}
        height={20}
        src={
          CheckBox ? "/images/Auth/Checking.png" : "/images/Auth/Unchecking.png"
        }
      />
      <CheckLogin>로그인저장</CheckLogin>
    </CheckingContainer>
  );
}

const CheckingContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
`;

const CheckLogin = styled.span`
  margin-left: 7px;
  cursor: pointer;
`;

export default CheckingBox;
