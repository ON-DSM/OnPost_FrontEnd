import * as S from './BoxStyle'

interface PropsType {
  InputName: string;
  InputPlaceholder: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}


function InputBox({ InputName, InputPlaceholder, handleChange}: PropsType) {
  return (
    <S.InputLabelBox>
      <S.LabelBox>
        <S.LabelText>{InputPlaceholder}</S.LabelText>
        <S.LabelLine />
      </S.LabelBox>
      <S.EmailNameInputBox
        name={InputName}
        type="text"
        onChange={handleChange}
        placeholder={InputPlaceholder}
      />
    </S.InputLabelBox>
  );
}


export default InputBox;
