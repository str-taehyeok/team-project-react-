import React, { useState } from 'react';
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
    couponTitle1: "25% 할인!",
    couponCategory: "용품",
    couponCode: "illdjfi",
    couponContent: "15퍼센트 할인해줄게요⭐",
    couponDiscountRate: 15
  },
  {
    couponTitle1: "35% 할인!",
    couponCategory: "장난감",
    couponCode: "illdjfi",
    couponContent: "15퍼센트 할인해줄게요⭐",
    couponDiscountRate: 15
  },
  {
    couponTitle1: "5% 할인!",
    couponCategory: "음식",
    couponCode: "illdjfi",
    couponContent: "15퍼센트 할인해줄게요⭐",
    couponDiscountRate: 15
  },
  {
    couponTitle1: "5% 할인!",
    couponCategory: "음식",
    couponCode: "illdjfi",
    couponContent: "15퍼센트 할인해줄게요⭐",
    couponDiscountRate: 15
  },
  {
    couponTitle1: "5% 할인!",
    couponCategory: "음식",
    couponCode: "illdjfi",
    couponContent: "15퍼센트 할인해줄게요⭐",
    couponDiscountRate: 15
  }
]

const Coupon = () => {

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

        <S.CouponBtn>
          <select>
            <option value="" disabled selected>적용할 쿠폰</option>
            <option value="사용안함">사용안함</option>
            <option value={couponList}>{couponList}</option>
          </select>

          {/*적용할 쿠폰<img src={`${process.env.PUBLIC_URL}/assets/images/cart/drop-down-icon.png`}*/}
        {/*  /!*           alt="아래 아이콘"/>*!/*/}
        </S.CouponBtn>
        {/*<S.CouponWrap className={isActive ? "active" : ""}>*/}
        {/*  {couponList}*/}
        {/*</S.CouponWrap>*/}
      </S.CouponBtnWrap>
    </>

  );
};

export default Coupon;