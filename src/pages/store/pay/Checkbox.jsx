import React, { useState } from 'react';
import S from './style';

const Checkbox = () => {

  const [isCheck, setIsCheck] = useState(false)

  const onClickToChangeCheck = () => {
    // insert쿼리
    setIsCheck(!isCheck)
  }


  return (
    <S.Checkingbox>
    {isCheck ? (
      <img 
        className="check-icon"
        onClick={onClickToChangeCheck}
        src={`${process.env.PUBLIC_URL}/assets/images/cart/after-checked.png`} alt="체크버튼 눌림" 
      />
    ) : (
      <img 
        className="check-icon"
        onClick={onClickToChangeCheck}
        src={`${process.env.PUBLIC_URL}/assets/images/cart/before-check.png`} alt="체크버튼" 
      />
    )}
  </S.Checkingbox>
  );
};

export default Checkbox;