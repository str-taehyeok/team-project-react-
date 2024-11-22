import React from "react";
import S from "./style";

const Footer = () => {
  return (
    <S.Footer>
        <S.FooterContainer>
            <S.FooterLogo>
              <img src="assets/images/layout/powpow-logo.png"></img>
            </S.FooterLogo>
            
              <S.FooterContent>
               <S.FooterInfo>
                    <strong><a href="/notice">공지사항</a></strong>
                    <p>
                      <strong>MON - FRI</strong><br />09:00 - 18:00 <br />
                      매주 수요일 휴무
                    </p>
                    <p>
                      <strong>(주)포포</strong> | 공동 제작 김세환 류재은 이진아 김태혁 문세연 이소연 최도윤 신민철<br />
                      서울 강남구 테헤란로 146 현익빌딩 3층, 4층<br />
                      <a href="mailto:contact@powpow.com">contact@powpow.com</a>
                    </p>
              </S.FooterInfo>
              <S.FooterDisclaimer>
                <p>
                  (주)포포는 통신판매중개자로 거래 당사자가 아니므로, 판매자가
                  등록한 상품정보 및 거래 등에 대해 책임을 지지 않습니다. <br />
                  단, (주)포포가 판매자로 등록판매한 상품은 판매자로서 책임을 부담합니다.
                </p>
              </S.FooterDisclaimer>
              <div>
                <p>Copyright(c) 2024 POWPOW, Co., Ltd. All rights reserved</p>
              </div>
            </S.FooterContent>
        </S.FooterContainer>
    </S.Footer>
  );
};

export default Footer;
