import React from "react";
import * as S from "./style";
import Header from "../../components/header";

const Detail = () => {
  return (
    <>
      <Header />
      <S.Container>
        <S.Contents>
          <S.Wrapper>
            <S.Thumbnail />
            <div style={{ marginBottom: "20px" }}>
              <S.Subtitle>카테고리</S.Subtitle>
              <S.Tags>
                <S.Tag>농촌</S.Tag>
                <S.Tag>리모델링</S.Tag>
              </S.Tags>
            </div>
            <S.Subtitle>상세설명</S.Subtitle>
            <S.Description>오래된 시골집을 하나하니씩 리모델링 해가며 자신만의 집을 꾸려보세요!</S.Description>
          </S.Wrapper>
          <S.Wrapper>
            <S.Title>시골집 리모델링 플렌</S.Title>
            <S.Price>500,000원</S.Price>
            <S.Horizon />
            <S.Detail>
              7일 전까지 결제금액에 대한 취소 수수료 없음.
              <br />
              6일 전 결제금액의 10% 차감.
              <br />
              5일 전 결제금액의 30% 차감.
              <br />
              4일 전 결제금액의 50% 차감.
              <br />
              3일 전 결제금액의 70% 차감.
              <br />
              2일 전~ 당일 결제금액의 100% 차감.
            </S.Detail>
            <S.Button>구매하기</S.Button>
          </S.Wrapper>
        </S.Contents>
      </S.Container>
    </>
  );
};

export default Detail;
