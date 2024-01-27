import * as S from "./style";

const Header = () => {
  return (
    <S.HeaderContainer>
      <S.NavItemUl>
        <S.NavItemLi href="/locate">지역</S.NavItemLi>
        <S.NavItemLi href="/realestate">부동산</S.NavItemLi>
        <S.NavItemLi href="/community">귀농 모임</S.NavItemLi>
        <S.NavItemLi href="/expert">전문가 연계</S.NavItemLi>
      </S.NavItemUl>
    </S.HeaderContainer>
  );
};

export default Header;
