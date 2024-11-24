import React from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import S from "./style";

const PetsonalMain = () => {
  return (
    <div>
      <Header />
      <S.PetsonalContainer>
        <S.StartImage>
          <S.MainFirst src= {`${process.env.PUBLIC_URL}/assets/images/petsonal/petsonal-main.png`} alt="메인" />
        </S.StartImage>
        <S.MainText>what’s your pet?</S.MainText>
        <S.StartButton>TEST START</S.StartButton>
        <S.SecondImage>
          <S.SecondTextWrap >
            <S.SecondText>New to Pet Personal color? ✨</S.SecondText>
            <S.SecondSubText>
              POW POW에서는 펫스널컬러 검사를 통한 내 반려동물 탐구 서비스를
              지원해드리고 있어요.
            </S.SecondSubText>
          </S.SecondTextWrap >
          <S.BookWrap>
            <img src={`${process.env.PUBLIC_URL}/assets/images/petsonal/yellow-book.png`} alt="펫노랑책" />
            <div>
              <S.Big>펫스널컬러</S.Big>
              <S.Small>를 통해</S.Small>
              <S.Medium>반려동물의 꿀템 찾기!</S.Medium>
            </div>
          </S.BookWrap>
        </S.SecondImage>

        <S.ThirdImage>
          <S.SecondTextWrap>
            <S.SecondText>귀여운 리워드 뱃지들을 모아보세요 🔎</S.SecondText>
            <S.SecondSubText>
              수집한 내 뱃지들은 커뮤니티 메인 홈페이지에서 확인 가능해요.
            </S.SecondSubText>
          </S.SecondTextWrap>
          <S.BookWrap>
            <img src={`${process.env.PUBLIC_URL}/assets/images/petsonal/purple-book.png`} alt="펫보라책" />
            <S.TextButton>
              <div>
                <S.Big>펫스널컬러</S.Big>
                <S.Small>
                  를 <br /> 더 완벽하게 즐기는 방법
                </S.Small>
              </div>
              <S.GoCommunity >POW POW 커뮤니티</S.GoCommunity >
            </S.TextButton>
          </S.BookWrap>
        </S.ThirdImage>
        <S.FinalImage>
          <S.FinalText>지금 바로 POW POW에서 만나보세요!✨</S.FinalText>
          <img src={`${process.env.PUBLIC_URL}/assets/images/petsonal/qr-code.png`} alt="qr" />
        </S.FinalImage>
      </S.PetsonalContainer>
      <Footer />
    </div>
  );
};

export default PetsonalMain;
