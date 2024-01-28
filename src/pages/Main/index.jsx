import React from "react";
import * as s from "../../styles/IndexPageStyle";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <>
      <s.HeaderContainer>
        <s.NavItemUl>
          <s.NavItemLi>
            <Link
              style={{
                textDecoration: "none",
                color: "#fff",
              }}
              to="/region"
            >
              지역
            </Link>
          </s.NavItemLi>
          <s.NavItemLi>
            <Link
              style={{
                textDecoration: "none",
                color: "#fff",
              }}
              to="/property"
            >
              부동산
            </Link>
          </s.NavItemLi>
          <s.NavItemLi>
            <Link
              style={{
                textDecoration: "none",
                color: "#fff",
              }}
              to="/service"
            >
              서비스
            </Link>
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
