import React from "react";
import S from "./style";
import { Link } from "react-router-dom";
import Footer from "../layout/Footer";

const Unsubscribe = () => {
  return (
    <div>
      <S.Frame>
        <S.UnsubscribeContainer>
          <S.TextWrap>
            <S.P1>회원탈퇴 안내</S.P1>
            <S.P2>회원탈퇴를 신청 하기 전에 안내 사항을 꼭 확인해주세요.</S.P2>
          </S.TextWrap>
          <S.ListBox>
            <S.InBoxWrap>
              <p>포포 반려동물 용품점 탈퇴안내</p>
              <p>
                회원님께서 회원 탈퇴를 원하신다니 저희 쇼핑몰의 서비스가 많이
                부족하고 미흡했나 봅니다.
                <br />
                불편하셨던 점이나 불만사항을 알려주시면 적극 반영해서 고객님의
                불편함을 해결해 드리도록 노력하겠습니다.
              </p>
              <S.Ol>
                ■ 아울러 회원 탈퇴시의 아래 사항을 숙지하시기 바랍니다.
                <S.Li>
                  회원 탈퇴 시 회원님의 정보는 상품 반품 및 A/S를 위해
                  전자상거래 등에서의 소비자 보호에 관한 법률에 의거한 고객정보
                  보호 정책에 따라 관리 됩니다.
                </S.Li>
                <S.Li>탈퇴 시 회원님께서 보유하셨던 마일리지는 삭제 됩니다.</S.Li>
              </S.Ol>
            </S.InBoxWrap>
          </S.ListBox>
          <S.Buttons>
            <Link to={"/"}>
                <S.GoBackButton>이전으로</S.GoBackButton>
            </Link>
            <S.GoUnscribeButton>탈퇴</S.GoUnscribeButton>
          </S.Buttons>
        </S.UnsubscribeContainer>
      </S.Frame>
      <Footer />
    </div>
  );
};

export default Unsubscribe;