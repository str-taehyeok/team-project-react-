import React, {useState} from 'react';
import S from './style';


// 더미데이터
const coupons = [
  {
    couponTitle: "15% 할인!",
    couponCategory: "음식",
    couponCode: "illdjfi",
    couponContent: "15퍼센트 할인해줄게요⭐",
    couponDiscountRate: 15
  },
  {
    couponTitle: "25% 할인!",
    couponCategory: "용품",
    couponCode: "illdjfi",
    couponContent: "15퍼센트 할인해줄게요⭐",
    couponDiscountRate: 15
  },
  {
    couponTitle: "35% 할인!",
    couponCategory: "장난감",
    couponCode: "illdjfi",
    couponContent: "15퍼센트 할인해줄게요⭐",
    couponDiscountRate: 15
  },
  {
    couponTitle: "5% 할인!",
    couponCategory: "음식",
    couponCode: "illdjfi",
    couponContent: "15퍼센트 할인해줄게요⭐",
    couponDiscountRate: 15
  }
]



const PayCoupon = () => {

  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    isActive ? setIsActive(false) : setIsActive(true);
}

  const couponList = coupons.map((coupon, i) => (
    <S.CouponList key={i}>
      <p>{coupon.couponTitle}</p>
    </S.CouponList>
  ))

  return (
    <>
      <S.CouponBtnWrap onClick={handleClick}>
        <S.CouponBtn>적용할 쿠폰<img src={`${process.env.PUBLIC_URL}/assets/images/cart/arrow-down-bold.png`} alt="아래 아이콘"/></S.CouponBtn>
        <S.CouponWrap className={ isActive ? "active" : "" }>
          {couponList}
        </S.CouponWrap>   
      </S.CouponBtnWrap>
    </>
  );
};

export default PayCoupon;