import { ChangeEvent, FormEvent, useState } from 'react';
import * as S from './styled';
import CreatePost from '../../apis/post/crud/post/create';
import { PostRequestType } from '../../apis/Interface';
import { useNavigate } from 'react-router';
import { customToast } from '../../utils/toast';

interface PropsType {
  SetOpenModal: (OpenModal: boolean) => void;
  Text: PostRequestType;
  handleChange: (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => void;
  SetText: (Text: PostRequestType) => void;
  seturl: (url: string) => void;
  url: string;
  id: string | undefined;
}

function SubmitModal({
  handleChange,
  SetOpenModal,
  Text,
  SetText,
  seturl,
  url,
  id,
}: PropsType) {
  const Submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    CreatePost(Text, id).then(() => Navi('/')).catch(() =>
    customToast("게시물 작성 형식이 맞지 않습니다","Error"));
  };
  const Navi = useNavigate();

  const handleChangeFile = (event: ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64 = reader.result;
      if (base64) seturl(base64.toString());
    };
    if (event.target.files !== null) {
      reader.readAsDataURL(event.target.files[0]);
      SetText({ ...Text, profile: event.target.files[0] });
    }
  };

  return (
    <S.Background onClick={() => SetOpenModal(false)}>
      <S.SubmitModalBox onSubmit={Submit} onClick={(e) => e.stopPropagation()}>
        <S.ImgBox>
          {url !== '' || Text.profile !== '' ? (
            <S.FileImg
              src={typeof Text.profile === 'string' ? Text.profile : url}
            />
          ) : (
            <>
              <S.ImgUplord />
              <S.ImgCamara src="/svg/Camara.svg"/>
            </>
          )}
        </S.ImgBox>

        <input
          style={{ display: 'none' }}
          accept=".gif, .jpg, .png"
          id="FileInput"
          type="file"
          onChange={handleChangeFile}
        />
        <S.InputLabel htmlFor="FileInput">파일 업로드</S.InputLabel>
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
