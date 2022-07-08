import styled from "@emotion/styled";
import { Link } from "react-router-dom";

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

export const HeaderLogo = styled.a`
  font-weight: bold;
  margin-right: 100px;
  cursor: pointer;
  font-size: 20px;
`;
export const StyledLink = styled(Link)`

    text-decoration: none;
    color: inherit;
`;

export const HeaderNavBar = styled.nav`
  display: flex;
  justify-content:end;

  align-items: center;
  width: 250px;
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
  margin-left:100px;
  border-radius:1rem;
`