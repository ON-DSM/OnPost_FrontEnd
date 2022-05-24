import styled from '@emotion/styled';
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
    <SearchResultContainer
      style={
        input ? { animationName: 'openinput' } : { animationName: 'closeinput' }
      }
    >
      <SearchBox>
        <SearchImg src="/images/Header/SearchIconwhite.png" />
        <SearchInput onKeyPress={onEnter} />
        <SearchImg
          onClick={() => setinput(false)}
          src="/images/Header/BackPage.png"
        />
      </SearchBox>
    </SearchResultContainer>
  );
}

const SearchResultContainer = styled.div`
  position: fixed;
  z-index: 100;
  width: 100%;
  height: 60px;
  background-color: ${({ theme }) => theme.lightMode.black};
  display: flex;
  justify-content: center;
  align-items: center;
  animation-name: none;
  animation-timing-function: ease;
  animation-direction: reverse;
  animation-duration: 1.2s;
  animation-fill-mode: forwards;

  @keyframes closeinput {
    from {
      width: 0%;
      margin-left: 100%;
    }
    to {
      width: 100%;
    }
  }

  @keyframes openinput {
    from {
      width: 100%;
    }
    to {
      width: 0%;
      margin-left: 100%;
    }
  }
`;

const SearchBox = styled.div`
  width: 600px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const SearchImg = styled.img`
  width: 16px;
  height: 14.98px;
`;

const SearchInput = styled.input`
  width: 100%;
  height: 50px;
  color: white;
  background-color: black;
  border: none;
  outline: none;
  margin: 0 20px 0 20px;
`;

export default Search;
