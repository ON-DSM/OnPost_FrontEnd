import { ChangeEvent, useState } from 'react';
import * as S from '../styled';
import { ProfileState } from '../../../../recoil/proflie';
import { useRecoilState } from 'recoil';
import DataInfo from '../../../../apis/user/post/data';


export default function ModalImg() {
  const [data,setdata] = useRecoilState(ProfileState)
  const [imgBase64, setImgBase64] = useState(
    typeof data.profile === 'string' ? data.profile : ''
  );
  const handleChangeFile = (event: ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64 = reader.result;
      if (base64) setImgBase64(base64.toString());
    };
    if (event.target.files !== null) {
      reader.readAsDataURL(event.target.files[0]);
      setdata({ ...data, profile: event.target.files[0] });
      DataInfo(data,event.target.files[0]).then((Data) => Data && setdata(Data));
    }
  };
  return (
    <div>
      <S.ProfileImg src={imgBase64} />
      <S.ImgUplordBox>
        <input
          id="image-input"
          accept=".gif, .jpg, .png, .svg"
          type="file"
          style={{ display: 'none' }}
          onChange={handleChangeFile}
        />
        <S.ImgUplord htmlFor="image-input" />
        <S.ImgCamara src="/svg/Camara.svg" />
      </S.ImgUplordBox>
    </div>
  );
}
