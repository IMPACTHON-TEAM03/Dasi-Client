import styled from "styled-components";
import { Link } from "react-router-dom";

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
`;

function Header() {
  return (
    <HeaderContainer>
      <NavItemUl>
        <NavItemLi>
          <Link to="/region">지역</Link>
        </NavItemLi>
        <NavItemLi>부동산</NavItemLi>
        <NavItemLi>서비스</NavItemLi>
      </NavItemUl>
    </HeaderContainer>
  );
}

export default Header;
