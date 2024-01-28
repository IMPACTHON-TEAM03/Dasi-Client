import React from "react";
import * as S from "../../../styles/DetailPageStyle";
import Header from "../../../components/header";
import study from "../../../images/study.png";
const Detail = () => {
  return (
    <>
      <Header />
      <S.Container>
        <S.Contents>
          <S.Wrapper>
            <S.Thumbnail src={study} />
            <div style={{ marginBottom: "20px" }}>
              <S.Subtitle>카테고리</S.Subtitle>
              <S.Tags>
                <S.Tag>농촌</S.Tag>
                <S.Tag>리모델링</S.Tag>
                <S.Tag>스터디모임</S.Tag>
              </S.Tags>
            </div>
            <S.Subtitle>상세설명</S.Subtitle>
            <S.Description>
              하루 단위로 나눠져 있는 일정을 실행함으로써 더 편하고 쉬운 귀농
              생활을 배우고 즐길 수 있습니다
            </S.Description>
          </S.Wrapper>
          <S.Wrapper>
            <S.Title>귀농 스터디 모임 1기</S.Title>
            <S.Price>10,000원</S.Price>
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
