import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import {useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import S from './style';

const PetWrite = () => {
  const { currentUser } = useSelector((state) => state.user)
  console.log("멤버아이디", currentUser && currentUser.id)
  console.log(currentUser)

  const { register, handleSubmit, formState: { isSubmitting }} = useForm({ mode: 'onChange' });
  const [petName, setPetName] = useState(""); // 마이펫 이름
  const [petKind, setPetKind] = useState(""); // 마이펫 종류
  const [petGender, setPetGender] = useState(""); // 마이펫 성별
  const [petBreed, setPetBreed] = useState(""); // 마이펫 품종
  const [petNeuter, setPetNeuter] = useState(""); // 마이펫 중성화
  const navigate = useNavigate();


  const handleChange = (e) => {
    const value = e.target.value;
    setPetName(value); 
  };

  const handleNextClick = (e) => {
    // 입력 값 확인
    if (!petName) {
      e.preventDefault();
      return alert("이름을 입력해주세요.");
    }
    if (!petKind) {
      e.preventDefault();
      return alert("종류를 입력해주세요.");
    }
    if (!petGender) {
      e.preventDefault();
      return alert("성별을 체크해주세요.");
    }
    if (!petNeuter) {
      e.preventDefault();
      return alert("중성화 여부를 입력해주세요.");
    }
  };

  return (
    <form onSubmit={handleSubmit(async (data) => {
      console.log(data)
      await fetch(`http://localhost:10000/my-pet/write`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          memberId: currentUser.id,
          petName: data.petName,
          petKind: data.petKind,
          petImage : "1234",
          petGender: data.petGender,
          petBreed: data.petBreed,
          petBirth: data.petBirth,
          petWeight: data.petWeight,
          petNeuter: data.petNeuter,
          petVet: data.petVet,
        })
      })
        .then((res) => res.json())
        .then((res) => {
          alert('데이터가 성공적으로 전송되었습니다!');
          navigate(`/my-pet`)
        })
        .catch((error) => {
          console.error('에러발생 :', error);
          alert('데이터 전송 중 오류가 발생하였습니다.');
        })

    })}>

   
        {/* 완료 버튼 */}
        <S.PetWapper>
        <div className='button-postion'>
          <S.Button onClick={handleNextClick} id="submit-button" type="submit" disabled={isSubmitting}>
            완료
          </S.Button>
        </div>
          <S.Mydog>
            <S.PetCard>
              <S.Profilepic>
                <img src="/assets/images/layout/petimg.png" alt="펫 이미지" />
              </S.Profilepic>
              <S.Name>{petName || "이름"}</S.Name>
              <S.EditButton>이미지 편집</S.EditButton>
            </S.PetCard>
            <S.Title as="h5">
              {/* 이름 입력 */}
              <S.InputGroup>
                <S.PetName>이름</S.PetName>
                <input
                  type="text"
                  name='petName'
                  placeholder="이름을 입력하세요"
                  {...register("petName", { required: "이름은 필수 입력 항목입니다." })}
                  value={petName}
                  onChange= {handleChange}
                />
              </S.InputGroup>
              {/* 반려 종류 */}
              <S.RadioGroup>
                <S.PetKind>반려종류</S.PetKind>
                <S.RadioWrap>
                  <S.Gap>
                    <input type="radio" {...register("petKind", { required: true })} value="반려견"  onChange={(e) => setPetKind(e.target.value)} />
                    <label>반려견</label>
                  </S.Gap>
                  <S.Gap>
                    <input type="radio"  {...register("petKind", { required: true })} value="반려묘" onChange={(e) => setPetKind(e.target.value)} />
                    <label>반려묘</label>
                  </S.Gap>
                </S.RadioWrap>
              </S.RadioGroup>
              {/* 성별 */}
              <S.RadioGroupGender>
                <S.PetGender>성별</S.PetGender>
                <S.RadioWrap>
                  <S.Gap>
                    <input type="radio" {...register("petGender", { required: true })} value="수컷" onChange={(e) => setPetGender(e.target.value)} />
                    <label>수컷</label>
                  </S.Gap>
                  <S.Gap>
                    <input type="radio" {...register("petGender", { required: true })} value="암컷" onChange={(e) => setPetGender(e.target.value)} />
                    <label>암컷</label>
                  </S.Gap>
                </S.RadioWrap>
              </S.RadioGroupGender>
              {/* 품종 */}
              <S.InputGroup2>
                <S.PetBreed>품종</S.PetBreed>
                <input
                  type="text"
                  placeholder="품종을 입력하세요"
                  {...register("petBreed", { required: "품종은 필수 입력 항목입니다." })}
                  value={petBreed}
                  onChange={(e) => setPetBreed(e.target.value)}
                />
              </S.InputGroup2>
              {/* 생일 */}
              <S.InputGroup3>
                <S.PetBrith>생일</S.PetBrith>
                <input type="date" {...register("petBirth", { required: "생일을 선택하세요." })} />
              </S.InputGroup3>
              {/* 몸무게 */}
              <S.InputGroup4>
                <S.PetBreed>몸무게(kg)</S.PetBreed>
                <input type="number" placeholder="몸무게를 입력하세요" {...register("petWeight")} />
              </S.InputGroup4>
              {/* 중성화 */}
              <S.RadioGroupGender2>
                <S.PetNeuter>중성화</S.PetNeuter>
                <S.RadioWrap>
                  <S.Gap>
                    <input type="radio" value="했어요" {...register("petNeuter")} onChange={(e) => setPetNeuter(e.target.value)} />
                    <label>했어요</label>
                  </S.Gap>
                  <S.Gap>
                    <input type="radio" value="안했어요" {...register("petNeuter")} onChange={(e) => setPetNeuter(e.target.value)} />
                    <label>안했어요</label>
                  </S.Gap>
                </S.RadioWrap>
              </S.RadioGroupGender2>
              {/* 동물병원 */}
              <S.InputGroup5>
                <S.PetVet>동물병원</S.PetVet>
                <input type="text" placeholder="병원명을 입력하세요" {...register("petVet")} />
              </S.InputGroup5>
            </S.Title>
          </S.Mydog>
        </S.PetWapper>
    </form>
  );
};

export default PetWrite;
