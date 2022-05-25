import styled from '@emotion/styled';
import { PostRequestType } from '../../apis/post/create';
import useForm from '../../hooks/useForm';
import SubmitModal from './SubmitModal';
import { useState, useEffect, useRef } from 'react';
import ReturnTag from './ReturnTag';

function CreatePost() {
  const [OpenModal, SetOpenModal] = useState<boolean>(false);
  const { Text, handleChange } = useForm<PostRequestType>({
    title: '',
    context: '',
    id: '',
    images: '',
    introduce: '',
  });

  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const textareaInputRef = useRef<HTMLDivElement | null>(null);
  const [value, setValue] = useState<string>('');

  const textAreaChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    handleChange(e);
  };

  useEffect(() => {
    if (textareaRef && textareaRef.current) {
      textareaRef.current.style.height = '0px';
      const scrollHeight = textareaRef.current.scrollHeight;
      textareaRef.current.style.height = scrollHeight + 'px';
    }
  }, [value]);

  return (
    <CreatePostBox>
      <InputText ref={textareaInputRef}>
        <TitleInput
          name="title"
          placeholder="제목을 입력해주세요"
          onChange={textAreaChange}
        />
        <ReturnTag />
        <ContentInput
          name="context"
          placeholder="내용을 입력해주세요"
          ref={textareaRef}
          onChange={textAreaChange}
        />
        <OperationBar>
          <span style={{ marginLeft: '30px' }}>
            <img width="12" height="13.71" src="/svg/BackSpaceArrow.svg" />
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
        <h1 style={{ display: 'flex', flexWrap: 'wrap' }}>{Text.title}</h1>
        <span style={{ display: 'flex', flexWrap: 'wrap' }}>
          {Text.context}
        </span>
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
  z-index: 0;
  position: relative;
  all: unset;
  color: #666ad1;
  cursor: pointer;
  font-size: 18px;
  margin-right: 40px;
`;

const SubmitContent = styled.button`
  z-index: 0;
  position: relative;
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
  z-index: 0;
  position: relative;
  display: flex;
  min-height: 100vh;
`;

const PreviewText = styled.div`
  z-index: 0;
  position: relative;
  height:100vh;
  width: 50%;
  padding: 70px;
  background-color: #f2f2f8;
  white-space: pre-wrap;
  display: flex;
  flex-direction: column;
  overflow-y:scroll;
  flex: 1 1 0%;
  overflow-y: scroll;
`;

const InputText = styled.div`
  z-index: 0;
  position: relative;
  width: 50%;
  height: 760px;
  padding: 70px;
  
`;

const TitleInput = styled.input`
  z-index: 0;
  position: relative;
  all: unset;
  width: 100%;
  min-height: 80px;
  height: auto;
  font-size: 30px;
  font-weight: bold;
  padding: 10px 0 0 0;
  border-bottom: 6px solid #303f9f;
  resize: none;
  word-wrap: break-word;
`;

const ContentInput = styled.textarea`
  z-index: 0;
  position: relative;
  all: unset;
  width: 100%;
  min-height: 450px;
  padding-top: 20px;
  resize: none;
`;

const OperationBar = styled.div`
  position: fixed;
  z-index: 2;
  bottom: 0;
  left: 0;
  width: 50%;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: rgb(0 0 0 / 10%) 0px -12px 12px -6px;
`;

export default CreatePost;
