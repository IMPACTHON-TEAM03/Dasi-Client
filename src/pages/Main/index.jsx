import React from "react";
import * as S from "../../styles/IndexPageStyle";

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
          처음부터 끝까지 맡겨만 주세요!
        </s.MainSectionTitle>
      </s.MainSection>
    </>
  );
};

export default Main;
