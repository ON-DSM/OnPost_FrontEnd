import { ChangeEvent, FormEvent, useState } from "react";
import styled from "@emotion/styled";
import CreatePost from "../../apis/post/create";
import { PostRequestType } from "../../apis/apiType";
import Image from "next/image";

interface PropsType {
  SetOpenModal: (OpenModal: boolean) => void;
  Text: PostRequestType;
  handleChange: (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => void;
}

function SubmitModal({ handleChange, SetOpenModal, Text }: PropsType) {
  const [imgBase64, setImgBase64] = useState("");
  const [imgFile, setImgFile] = useState<null | File>(null);

  const Submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const a = CreatePost(Text);
    console.log(a);
  };

  const handleChangeFile = (event: ChangeEvent<HTMLInputElement>) => {
    let reader = new FileReader();
    reader.onloadend = () => {
      const base64 = reader.result;
      if (base64) setImgBase64(base64.toString());
    };
    if (event.target.files !== null) {
      reader.readAsDataURL(event.target.files[0]);
      setImgFile(event.target.files[0]);
    }
  };

  return (
    <Background onClick={() => SetOpenModal(false)}>
      <SubmitModalBox onSubmit={Submit} onClick={e => e.stopPropagation()}>
        <div>
          <div>{imgFile && <img width={200} src={imgBase64} />}</div>
          <input type='file' onChange={handleChangeFile} />
        </div>
        <InputBox>
          <Simplecontent
            name='introduce'
            onChange={handleChange}
            placeholder='당신의 게시글을 간단하게 소개해주세요'
            rows={5}
            cols={33}
            maxLength={150}
            value={Text.introduce}
          />
          <div>{Text.introduce.length}/150</div>
        </InputBox>
        <div>
          <CancleBtn type='button'>취소</CancleBtn>
          <SubmitBtn type='submit'>작성하기</SubmitBtn>
        </div>
      </SubmitModalBox>
    </Background>
  );
}

const InputBox = styled.div`
  text-align: center;
`;

const SubmitBtn = styled.button`
  all: unset;
  background-color: #303f9f;
  color: white;
  cursor: pointer;
  border-radius: 7px;
  width: 80px;
  text-align: center;
  height: 25px;
`;

const Background = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 2;
`;

const SubmitModalBox = styled.form`
  background-color: #ffffff;
  text-align: center;
  border-radius: 6px;
  width: 500px;
  height: 400px;
`;

const CancleBtn = styled.button`
  all: unset;
  color: #303f9f;
  cursor: pointer;
  font-weight: bold;
`;

const Simplecontent = styled.textarea`
  resize: none;
`;

export default SubmitModal;
