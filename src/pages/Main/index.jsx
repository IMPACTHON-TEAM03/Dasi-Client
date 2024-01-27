import React from "react";
import * as s from "../../styles/IndexPageStyle";

const Main = () => {
  return (
    <>
      <s.HeaderContainer>
        <s.NavItemUl>
          <s.NavItemLi>지역</s.NavItemLi>
          <s.NavItemLi>부동산</s.NavItemLi>
          <s.NavItemLi>귀농 모임</s.NavItemLi>
          <s.NavItemLi>전문가 연계</s.NavItemLi>
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
