import React from 'react';
import S from "./style";
import { Link } from 'react-router-dom';

const PetNot = () => {
  return (
    <div>
      <S.NoPetWrapper>
        <S.NoPet>반려동물이 없습니다.</S.NoPet>
        <S.NoPet>프로필을 등록해주세요.</S.NoPet>
        <Link to={"/my-pet/pet-write"}>
          <S.NoPetButtonSubmit id="submit-button" type="button">등록하기</S.NoPetButtonSubmit>
        </Link>
      </S.NoPetWrapper>
    </div>
  );
};

export default PetNot;