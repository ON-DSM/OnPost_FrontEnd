import * as S from './style'
import { useNavigate } from "react-router-dom";

interface PropT {
  setinput: (input: boolean) => void;
  input: boolean;
}

function Search({ setinput, input }: PropT) {
  const navigate = useNavigate();
  const onEnter = (e: any) => {
    if (e.key === 'Enter') {
      navigate("/SearchResult")
    }
  };
  return (
    <S.SearchResultContainer
      style={
        input ? { animationName: 'openinput' } : { animationName: 'closeinput' }
      }
    >
      <S.SearchBox>
        <S.SearchImg src="/images/Header/SearchIconwhite.png" />
        <S.SearchInput onKeyPress={onEnter} />
        <S.SearchImg
          onClick={() => setinput(false)}
          src="/images/Header/BackPage.png"
        />
      </S.SearchBox>
    </S.SearchResultContainer>
  );
}


export default Search;
