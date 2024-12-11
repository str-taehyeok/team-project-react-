import React, { useState } from 'react';
import S from './style';

// 더미데이터
const payMemos = [
  {
    payMent : "부재중이면 전화 주세요"
  },
  {
    payMent : "집 앞에 높고 문자 주세요"
  },
  {
     payMent : "문 앞에 두고 가주세요"
  },
  {
    payMent : "부재중이면 전화 주세요"
  },
  {
    payMent : "집 앞에 높고 문자 주세요"
  }
  
]

const PayMemo = () => {

  const [isActive, setIsActive] = useState(false);
 
  const handleClick = () => {
    isActive ? setIsActive(false) : setIsActive(true);
}

  const payMemoList = payMemos.map((payMemo, i) => (
    <S.payMemoList key={i}>
      <p>{payMemo.payMent}</p>
    </S.payMemoList>
  ))

  return (
    <S.PayMemoWrap onClick={handleClick}>
      <S.MemoBtn>배송 메모를 선택해주세요<img src={`${process.env.PUBLIC_URL}/assets/images/cart/arrow-down-bold.png`} alt="아래 아이콘"/></S.MemoBtn>
      <S.BtnWrap className= {isActive ? "active" : ""}>
        {payMemoList}
      </S.BtnWrap>
    </S.PayMemoWrap>
  );
};

export default PayMemo;