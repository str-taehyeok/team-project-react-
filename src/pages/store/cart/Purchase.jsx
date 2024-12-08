import React from 'react';

// 데이터 
const delivery = 
  {
    memberName : "문세연",
    memberPhone : "010-2457-9870",
    memberAddress : "경기도 수원시 장안구 장안로 385번길 95(이목동, 수원 장안 STX KAN 2단지 앞파트) 111동 604호 (16342)"
  }

const Purchase = () => {


  return (
    <>
    <S.PurchaseTitle>
      <p>배송지</p>
    </S.PurchaseTitle>
      <S.PurchaseInfo>
        <p>{delivery.memberName}</p>
        <p>{delivery.memberPhone}</p> 
        {/* 안심번호 사용 */}
        <input
          value={false} type='checkbox'
          >
        </input>
        {/* 배송 메모를 선택하세요 모달 */}
        {/* 다음에도 사용할게요 */}
      </S.PurchaseInfo>
    
    </>
    
  );
};

export default Purchase;