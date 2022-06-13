import { ChangeEvent, useState } from 'react';
import * as S from '../styled';
import { DataInfoType } from '../../../../apis/Interface';

interface PropType {
  setvalue: (value: DataInfoType) => void;
  value: DataInfoType;
}

export default function ModalImg({ setvalue, value }: PropType) {
  const [imgBase64, setImgBase64] = useState(typeof value.profile === 'string' ? value.profile : '');
  const handleChangeFile = (event: ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64 = reader.result;
      if (base64) setImgBase64(base64.toString());
    };
    if (event.target.files !== null) {
      reader.readAsDataURL(event.target.files[0]);
      setvalue({ ...value, profile: event.target.files[0] });
    }
  };
  return (
    <>
      <S.ProfileImg src={imgBase64} />
      <S.ImgUplordBox>
        <input
          id="image-input"
          accept=".gif, .jpg, .png, .svg"
          type="file"
          style={{ display: 'none' }}
          onChange={handleChangeFile}
        />
        <S.ImgRemove onClick={() => setImgBase64('/images/Modal/Standard.svg')}>
          이미지 삭제
        </S.ImgRemove>
        <S.ImgUplord htmlFor="image-input">이미지 업로드</S.ImgUplord>
      </S.ImgUplordBox>
    </>
  );
}
