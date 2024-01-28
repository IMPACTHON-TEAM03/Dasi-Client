import React from "react";
import * as s from "../../styles/IndexPageStyle";
import { Link } from "react-router-dom";
import returnicon from "../../images/returnwhite.svg";

const Main = () => {
  return (
    <>
      <s.HeaderContainer>
        <s.Return src={returnicon} />
        <s.LogoText>다시</s.LogoText>
        <s.NavItemUl>
          <s.NavItemLi>
            <Link to="/region">지역</Link>
          </s.NavItemLi>
          <s.NavItemLi>
            <Link to="/property">부동산</Link>
          </s.NavItemLi>
          <s.NavItemLi>
            <Link to="/service">서비스</Link>
          </s.NavItemLi>
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
