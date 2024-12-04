import React from 'react';
import S from "./style";
import { Link } from 'react-router-dom';

const PetNo = () => {
  return (
    <div>
      <S.NoPetWrapper>
        <S.NoPet>반려동물이 없습니다.</S.NoPet>
        <S.NoPet>프로필을 등록해주세요.</S.NoPet>
        <Link to={"/my-pet/pet-write"}>
          <S.NoPetButton id="submit-button" type="button">완료</S.NoPetButton>
        </Link>
      </S.NoPetWrapper>
    </div>

  );
};

export default PetNo;