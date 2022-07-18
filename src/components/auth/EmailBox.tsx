import { ChangeEvent, useState } from 'react';
import { ECheck } from '../../apis/auth/login';
import { customToast } from '../../utils/toast';
import * as S from './BoxStyle';

interface Props1Type {
  InputName: string;
  InputPlaceholder: string;
  setgone: (gone: string) => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  gone: string;
  setRight: (Right: boolean) => void;
  Right: boolean;
}

function EmailBox({
  InputName,
  InputPlaceholder,
  setgone,
  gone,
  handleChange,
  setRight,
  Right,
}: Props1Type) {
  const [check, setc] = useState<boolean>(false);
  const [code, setcode] = useState<string>('');
  const [right, thatright] = useState<string>('');
  const Check = () => {
    setc(!check);
    if (!check) {
      if (right === '') {
        ECheck(gone).then((data) => thatright(data.data));
        customToast('이메일을 확인해 주세요.', 'Success');
      }
      setcode('');
    } else {
      if (right === code && code !== '' && right !== '') {
        setRight(true);
        customToast('인증이 완료되었습니다.', 'Success');
      } else {
        console.log(right);
        customToast('인증번호를 다시 확인해 주세요.', 'Error');
      }
    }
  };

  const Change = (e: ChangeEvent<HTMLInputElement>) => {
    check ? setcode(e.target.value) : setgone(e.target.value);
    if (!check) {
      handleChange(e);
      setRight(false)
    }
  };
  return (
    <S.InputLabelBox>
      <S.LabelBox>
        <S.LabelText>
          {InputPlaceholder === '이메일' ? (check ? 'Code' : 'Email') : 'Name'}
        </S.LabelText>
        <S.LabelLine />
      </S.LabelBox>
      <S.EmailNameInputBox
        name={InputName}
        type="text"
        value={check ? code : gone}
        onChange={Change}
        placeholder={
          InputPlaceholder === '이메일'
            ? check
              ? '인증코드'
              : '이메일'
            : '이름'
        }
      />
      <S.ChangeButton
        onClick={!Right ? Check : () => 1}
        src={`/svg/Postin/${Right ? 'CHeck.svg' : 'Convert.svg'}`}
      />
    </S.InputLabelBox>
  );
}

export default EmailBox;
