import styled from "@emotion/styled";

function SearchResult() {
  return <SearchResultContainer></SearchResultContainer>;
}

const SearchResultContainer = styled.div`
  width: 200px;
  background-color: ${({ theme }) => theme.lightMode.white};
`;

export default SearchResult;
