import styled from "@emotion/styled";

export const OverFlowBox = styled.div`
  position:relative;
  overflow:hidden;
`

export const BallImg = styled.img`
  width:16px;
  height:20px;
`


export const HeaderContainer = styled.header<{ height: number }>`
  display: flex;
  justify-content: space-around;
  position: fixed;
  z-index:1000;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  align-items: center;
  height: ${props => props.height}px;
  border-bottom: 1px solid ${({ theme }) => theme.lightMode.border_gray};
  transition: 0.15s;
  background-color: ${({ theme }) => theme.lightMode.white};
`;

export const HeaderLogo = styled.div`
  font-weight: bold;
  margin-right: 20%;
  cursor: pointer;
  font-size: 20px;
`;

export const HeaderNavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 380px;
  > a {
    all: unset;
    cursor: pointer;
  }
`;

export const SearchImage = styled.img`
  width:22px;
  height:22px;
  cursor: pointer;
`;

export const ProfileImg = styled.img`
  width:2rem;
  height:2rem;
  border-radius:1rem;
`