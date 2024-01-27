import React from "react";
import * as s from "../../styles/IndexPageStyle";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <>
      <s.HeaderContainer>
        <s.NavItemUl>
          <s.NavItemLi>
            <Link to="/region">지역</Link>
          </s.NavItemLi>
          <s.NavItemLi>부동산</s.NavItemLi>
          <s.NavItemLi>서비스</s.NavItemLi>
        </s.NavItemUl>
      </s.HeaderContainer>
      <s.MainSection>
        <s.MainSectionTitle>
          귀농하시나요?
          <br />
          A부터 Z까지 맡겨만 주세요!
        </s.MainSectionTitle>
        <s.ScrollDown />
      </s.MainSection>
    </>
  );
};

export default Main;
