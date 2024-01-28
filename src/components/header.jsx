import styled from "styled-components";
import { Link } from "react-router-dom";
import * as S from "../styles/Header";
import returnicon from "../images/returnlogo.svg";

const HeaderContainer = styled.div`
  background-color: transparent;
  box-sizing: border-box;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 61px;
  height: 94px;
`;

const NavItemUl = styled.ul`
  display: flex;
`;

const NavItemLi = styled.li`
  color: #04c974;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  &:not(:last-child) {
    margin-right: 72px;
  }

  &:hover {
    color: #04c974;
    cursor: pointer;
  }
`;

function Header() {
  return (
    <HeaderContainer>
      <S.Return src={returnicon} />
      <S.LogoText>
        <Link to="/">다시</Link>
      </S.LogoText>
      <NavItemUl>
        <NavItemLi>
          <Link
            style={{
              textDecoration: "none",
              color: "#04C974",
            }}
            to="/"
          >
            지역
          </Link>
        </NavItemLi>
        <NavItemLi>
          <Link
            style={{
              textDecoration: "none",
              color: "#04C974",
            }}
            to="/property"
          >
            부동산
          </Link>
        </NavItemLi>
        <NavItemLi>
          <Link
            style={{
              textDecoration: "none",
              color: "#04C974",
            }}
            to="/service"
          >
            서비스
          </Link>
        </NavItemLi>
        <NavItemLi>
          <Link to="/property">부동산</Link>
        </NavItemLi>
        <NavItemLi>
          <Link to="/service">서비스</Link>
        </NavItemLi>
      </NavItemUl>
    </HeaderContainer>
  );
}

export default Header;
