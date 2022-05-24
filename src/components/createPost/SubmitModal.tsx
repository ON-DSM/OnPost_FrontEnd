import { ChangeEvent, FormEvent, useState } from "react";
import styled from "@emotion/styled";
import CreatePost from "../../apis/post/create";
import { PostRequestType } from "../../apis/post/create";

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
  };

  const handleChangeFile = (event: ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader();
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
          <ImgBox>{imgFile && <FileImg src={imgBase64} />}</ImgBox>
          <input accept=".gif, .jpg, .png" type='file' onChange={handleChangeFile} />
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
          <CancleBtn onClick={() => SetOpenModal(false)} type='button'>취소</CancleBtn>
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
  display:flex;
  flex-direction:column;
  align-items:center;
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

const ImgBox = styled.div`
  width:200px;
  height:200px;
`

const FileImg = styled.img`
    object-fit: cover;
    width: 200px;
    height: 200px;
    display: block;
    margin-bottom: 1.25rem;
`


export default SubmitModal;
