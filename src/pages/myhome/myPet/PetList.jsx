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
        const response = await fetch("http://localhost:10000/my-pet/List"); 
        if (!response.ok) {
          console.error("데이터가 없습니다.");
          return;
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
    if (pets.length === 1) {
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
        {pets.map(({ id, petName, petImage, petBirth }) => (
          <S.PetCard2 key={id}>
            <S.Profilepic>
              <img
                src={petImage || "/assets/images/layout/petimg.png"}
                alt={`${petName} 이미지`}
              />
            </S.Profilepic>
            <S.Name>{petName}</S.Name>
            <a>{petBirth}</a>
            <Link to={`/my-pet/pet-update/`}>
              <S.EditButton2 type="button">편집</S.EditButton2>
            </Link>
            <S.DeleteButton>삭제</S.DeleteButton>
          </S.PetCard2>
        ))}
      </S.PetList>
    </div>
  );
};

export default PetList;