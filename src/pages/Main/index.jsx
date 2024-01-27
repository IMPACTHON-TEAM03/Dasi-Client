import React from "react";
import * as S from "../../styles/IndexPageStyle";
import Header from "../../components/Header";

const Main = () => {
  return (
    <>
      <Header />
      <S.MainSection>
        <S.MainSectionTitle>
          귀농하시나요?
          <br />
          A부터 Z까지 맡겨만 주세요!
        </S.MainSectionTitle>
        <S.ScrollDown />
      </S.MainSection>
    </>
  );
};

export default Main;
