import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import S from "./style";
import { Link } from "react-router-dom";

const PetTestList = () => {
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(true); // 로딩 상태 추가
  const navigate = useNavigate();
  
  useEffect(() => {
    const getPets = async () => {
      try {
        const response = await fetch("http://localhost:10000/my-pet/list"); 
        if (!response.ok) {
          console.error("데이터가 없습니다.");
          return;
        }
        const data = await response.json();
        setPets(data);
      } catch (error) {
        console.error(error);
        alert("펫 데이터를 가져오는 중 오류가 발생했습니다.");
      }finally{
        setLoading(false); 
      }
    };

    getPets();
  }, []);
  
  useEffect(() => {
    console.log("Pets updated:", pets);
    if (!loading && pets.length === 0) {
      alert("펫을 등록해주세요");
      navigate("/my-pet/pet-not");
    }
  }, [pets, navigate, loading]);


  return (
    <div>
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
            <span>{petBirth}</span>
              <S.GoToTestButton type="button">
                <Link to={`/petsonal/test/${id}`}>
                  테스트 하러가기
                </Link>
              </S.GoToTestButton> 
          </S.PetCard2>
        ))}
      </S.PetList>
    </div>
  );
};

export default PetTestList;