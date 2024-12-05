import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import S from "./style";
import { Link } from "react-router-dom";

const PetList = () => {
  const [pets, setPets] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getPets = async () => {
      try {
        const response = await fetch("http://localhost:10000/my-pet/write"); 
        if (!response.ok) {
          return console.error(`데이터가 없습니다.`)
        }
        const data = await response.json();
        setPets(data);
      } catch (error) {
        console.error(error);
        alert("펫 데이터를 가져오는 중 오류가 발생했습니다.");
      }
    };

    getPets();
  }, []);

  useEffect(() => {
    if (pets.length === 0) {
      alert("펫을 등록해주세요");
      navigate("/my-pet/pet-not");
    }
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
            <Link to={"/my-pet/pet-update"}>
            <S.EditButton2 type="button">편집</S.EditButton2>
            </Link>
            <S.DeleteButton>삭제</S.DeleteButton>
          </S.PetCard2>
      </S.PetList>
    </div>
  );
};

export default PetList;
