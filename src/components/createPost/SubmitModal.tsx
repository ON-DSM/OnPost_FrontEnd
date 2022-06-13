import { ChangeEvent, FormEvent, useState } from 'react';
import * as S from './styled';
import CreatePost from '../../apis/post/create';
import { PostRequestType } from '../../apis/Interface';

interface PropsType {
  SetOpenModal: (OpenModal: boolean) => void;
  Text: PostRequestType;
  handleChange: (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => void;
  SetText: (Text: PostRequestType) => void;
  seturl: (url: string) => void;
  url: string;
}

function SubmitModal({
  handleChange,
  SetOpenModal,
  Text,
  SetText,
  seturl,
  url,
}: PropsType) {
  const [imgFile, setImgFile] = useState<null | File>(null);

  const Submit = (e: FormEvent<HTMLFormElement>) => {
    const Email = sessionStorage.getItem('email')
      ? sessionStorage.getItem('email')
      : '';
    e.preventDefault();
    if (Text.email === '' && Email === '') {
      SetText({ ...Text, email: Email });
    }
    CreatePost(Text);
  };

  const handleChangeFile = (event: ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64 = reader.result;
      if (base64) seturl(base64.toString());
    };
    if (event.target.files !== null) {
      reader.readAsDataURL(event.target.files[0]);
      setImgFile(event.target.files[0]);
      SetText({ ...Text, profile: event.target.files[0] });
    }
  };

  return (
    <S.Background onClick={() => SetOpenModal(false)}>
      <S.SubmitModalBox onSubmit={Submit} onClick={(e) => e.stopPropagation()}>
        <S.ImgBox>
          {Text.profile && (
            <S.FileImg src={Text.profile === 'string' ? Text.profile : ''} />
          )}
        </S.ImgBox>
        <input
          accept=".gif, .jpg, .png"
          type="file"
          onChange={handleChangeFile}
        />
        <S.InputBox>
          <S.Simplecontent
            name="introduce"
            onChange={handleChange}
            placeholder="당신의 게시글을 간단하게 소개해주세요"
            rows={5}
            cols={33}
            maxLength={150}
            value={Text.introduce}
          />
          <div>{Text.introduce.length}/150</div>
        </S.InputBox>
        <div>
          <S.CancleBtn onClick={() => SetOpenModal(false)} type="button">
            취소
          </S.CancleBtn>
          <S.SubmitBtn type="submit">작성하기</S.SubmitBtn>
        </div>
      </S.SubmitModalBox>
    </S.Background>
  );
}

export default SubmitModal;
