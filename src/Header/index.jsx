import React from "react";
import * as s from "../styles/Header";
import returnicon from "../images/return.svg";
import { Link } from "react-router-dom";

const index = () => {
  return (
    <div>
      <s.HeaderContainer>
        <s.Return src={returnicon} />
        <s.LogoText>다시</s.LogoText>
        <s.NavItemUl>
          <s.NavItemLi>
            <Link to="/region">지역</Link>
          </s.NavItemLi>
          <s.NavItemLi>부동산</s.NavItemLi>
          <s.NavItemLi>
            <Link to="/service">서비스</Link>
          </s.NavItemLi>
        </s.NavItemUl>
      </s.HeaderContainer>
    </div>
  );
};

export default index;
