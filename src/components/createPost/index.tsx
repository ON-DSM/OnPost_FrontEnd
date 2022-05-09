import styled from "@emotion/styled";
import { PostRequestType } from "../../apis/post/create";
import useForm from "../../hooks/useForm";
import Image from "next/image";
import SubmitModal from "./SubmitModal";
import { useState } from "react";

function CreatePost() {
  const [OpenModal, SetOpenModal] = useState<boolean>(false);
  const { Text, handleChange } = useForm<PostRequestType>({
    title: "",
    context: "",
    id: "",
    images: "",
    introduce: "",
  });
  return (
    <CreatePostBox>
      <InputText>
        <TitleInput
          name='title'
          onChange={handleChange}
          placeholder='제목을 입력해주세요'
        />
        <ContentInput
          name='context'
          onChange={handleChange}
          placeholder='내용을 입력해주세요'
        />
        <OperationBar>
          <span>
            <Image width='12' height='13.71' src='/svg/BackSpaceArrow.svg' />
            뒤로가기
          </span>
          <span>
            <TempButton>임시저장</TempButton>
            <SubmitContent onClick={() => SetOpenModal(true)}>
              제출하기
            </SubmitContent>
          </span>
        </OperationBar>
      </InputText>
      <PreviewText>
        <h1>{Text.title}</h1>
        <pre>{Text.context}</pre>
      </PreviewText>
      {OpenModal && (
        <SubmitModal
          handleChange={handleChange}
          Text={Text}
          SetOpenModal={SetOpenModal}
        />
      )}
    </CreatePostBox>
  );
}

const TempButton = styled.button`
  all: unset;
  color: #666ad1;
  cursor: pointer;
  font-size: 18px;
  margin-right: 40px;
`;

const SubmitContent = styled.button`
  all: unset;
  background-color: #666ad1;
  width: 100px;
  text-align: center;
  border-radius: 7px;
  height: 40px;
  color: white;
  font-size: 18px;
  margin-right: 40px;
  cursor: pointer;
`;

const CreatePostBox = styled.div`
  display: flex;
  height: 100vh;
`;

const PreviewText = styled.div`
  width: 50%;
  padding: 70px;
  background-color: #f2f2f8;
`;

const InputText = styled.div`
  width: 50%;
  padding: 70px;
`;

const TitleInput = styled.input`
  all: unset;
  display: block;
  font-size: 30px;
  font-weight: bold;
  padding: 10px;
  border-bottom: 6px solid ${({ theme }) => theme.lightMode.main};
`;

const ContentInput = styled.textarea`
  all: unset;
  width: 100%;
  height: 60vh;
  padding-top: 20px;
`;

const OperationBar = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 50%;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: rgb(0 0 0 / 10%) 0px -12px 12px -6px;
  > :first-child {
    margin-left: 20px;
    cursor: pointer;
  }
`;

export default CreatePost;
