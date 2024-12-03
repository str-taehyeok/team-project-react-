import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import S from "./style";
import { Link } from "react-router-dom";

const PetList = ({ pets = [] }) => {
  const navigate = useNavigate();

  useEffect(() => {
    // if (pets.length === 0) {
    //   alert("펫을 등록해주세요");
    //   navigate("/my-pet");
    // }
  }, [pets, navigate]);

  return (
    <div>
      <Link to={"/my-pet/pet-write"}>
        <S.NoPetButton id="submit-button" type="button">
          +추가 등록하기
        </S.NoPetButton>
      </Link>
      <S.PetList>
          <S.PetCard2>
            <S.Profilepic>
              <img src="/assets/images/layout/petimg.png" alt="펫 이미지" />
            </S.Profilepic>
            <S.Name>이름</S.Name>
            <a>2019년 08월 17일생</a>
            <S.EditButton2>편집</S.EditButton2>
            <S.DeleteButton>삭제</S.DeleteButton>
          </S.PetCard2>
      </S.PetList>
    </div>
  );
};

export default PetList;
