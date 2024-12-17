import React, {useEffect, useState} from 'react';
import S from './style';
import PayMemo from './PayMemo';
import Checkbox from './Checkbox';
import PayCoupon from './PayCoupon';
import PayBtn from './PayBtn';
import Card from "./Card";
import InsertedCard from "./InsertedCard";
import {useParams} from "react-router-dom";

// 더미데이터
const payList = 
  {
    payMethod : "신한카드",
    payDate : "2012-05-18",
    productCoupon : 0,
    couponCode: "illdjfi",
    couponContent: "15퍼센트 할인해줄게요⭐",
    couponDiscountRate: 15,
    couponTitle: "15% 할인!",
    productImage : "/assets/images/cart/cart-product.png",
    productName : "오쥬 바이 로우즈 독 치킨가슴살&호박 파우치 강아지 간식 69g (유통기한 2025-02225까지)",
    productStock : 1,
    productPrice : 4_500,
    productDiscountPrice : 4_050,
    productCount: 1,
    deliveryFee : 0,
    memberName : "문세연",
    memberPhone : "010-1111-2222",
    memberAddress : "서울시 역삼역 1번출구 어쩌고저쩌고 배고프고 힘들고 지치고 배고프다 점심에 뭐먹어야"
  }


const Pay = () => {

    const [isInsert, setIsInsert] = useState(true);

    const {id} = useParams();
    const [member, setMember] = useState({});

    useEffect(() => {
        const getMember = async () => {
            const response = await fetch(``)
        }
    }, []);

  const delivery = (
    <S.DeliveryPlaceWrap>
      <S.DeliveryPlaceTitle>배송지</S.DeliveryPlaceTitle>
      <S.DeliveryInfoBox>
        <S.MemberName>{payList.memberName}</S.MemberName>
        <S.MemberPhone>
          <p>{payList.memberPhone}</p><S.AnnonimusPhone><Checkbox /><p>안심번호 사용</p></S.AnnonimusPhone>
        </S.MemberPhone>
        <S.MemberAddress>{payList.memberAddress}</S.MemberAddress>
          <S.PayMemo>
            <PayMemo />
          </S.PayMemo>
          <S.NextTimeCheck>
            <Checkbox />
            <p>다음에도 사용할게요</p>
          </S.NextTimeCheck>
      </S.DeliveryInfoBox>
    </S.DeliveryPlaceWrap>
  )

  const order = (
    <S.OrderBox>
      <S.OrderTitle>주문상품</S.OrderTitle>
      <S.OrderDeliveryStart>
        <S.OrderDeliveryTitle>
        <p>&#60;오늘 출발&#62;</p><p>마감(15:00) 10. 01(화) 발송예정</p><p>{payList.deliveryFee} 원</p>
        </S.OrderDeliveryTitle>
        <S.DeliveryProductBox>
          <img src={`${process.env.PUBLIC_URL}${payList.productImage}`} alt='상품 이미지'/>
          <S.DeliveryProductInfo>
            <p>{payList.productName}</p>
            <S.ProductInfoPrice>
              <p>{payList.productDiscountPrice} 원</p><p>{payList.productPrice} 원</p>
            </S.ProductInfoPrice>
          </S.DeliveryProductInfo>
          <S.PayCoupon>
            <PayCoupon />
          </S.PayCoupon>
        </S.DeliveryProductBox>
      </S.OrderDeliveryStart>
    </S.OrderBox>


  )

  const paymentBox = (
    <S.PayBoxWrap>
      <S.PayBoxTitle>결제 수단</S.PayBoxTitle>
      <S.PayBox>
        <S.PayAccountCategory>
          <S.PayAccountTitle>
            <input type="radio" name="pay" id="account" />
            <p>계좌 간편결제</p>
          </S.PayAccountTitle>
        </S.PayAccountCategory>
        <S.PayCardCategory>
          <S.PayCardTitle>
            <input type="radio" name="pay" id="card" />
            <p>카드 간편결제</p>
          </S.PayCardTitle>
            {isInsert ? (
                <Card/>
            ) : (
                <InsertedCard/>
            )}
        </S.PayCardCategory>
        <S.PayNormalCategory>
          <input type="radio" name="pay" id="normal" />
          <p>일반결제</p>
        </S.PayNormalCategory>
        <S.PayNotice>
          <p>결제/할인혜택 안내</p>
          <p>등록 카드는 설정&#62;카드정보 에서 변경 가능합니다.</p>
        </S.PayNotice>
      </S.PayBox>
    </S.PayBoxWrap>

  )


  return (
    <S.DeliveryWrap>
      <S.Delivery>
        {delivery} 
        {order}
        {paymentBox}
      </S.Delivery>
      <PayBtn />
    </S.DeliveryWrap>
  );
};

export default Pay;