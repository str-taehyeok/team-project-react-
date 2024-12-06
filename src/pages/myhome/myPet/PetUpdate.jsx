import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import S from './style';

const PetUpdate = () => {
  const { register, handleSubmit, formState: { isSubmitting } } = useForm({ mode: 'onChange' });
  const navigate = useNavigate();
  const [pet, setPet] = useState({});
  const { id } = useParams();
  const memberId = 23;

  useEffect(() => {
    const getPet = async () => {
      const response = await fetch(`http://localhost:10000/my-pet/${id}`);
      if (!response.ok) return console.error(`데이터가 없습니다.`)
      const pet = await response.json();
      return pet;
    }
    getPet().then(setPet).catch(console.error);
  }, []);
  console.log(pet)
  const { petName, petKind, petImage, petGender, petBreed, petBirth, petWeight, petNeuter, petVet } = pet;

  return (
    <form onSubmit={handleSubmit(async (data) => {
      console.log(data)
      await fetch(`http://localhost:10000/my-pet/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          petName: data.petName,
          petKind: data.petKind,
          petImage: "1234",
          petGender: data.petGender,
          petBreed: data.petBreed,
          petBirth: data.petBirth,
          petWeight: data.petWeight,
          petNeuter: data.petNeuter,
          petVet: data.petVet,
          memberId: memberId
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
      <S.PetWapper>
        <div className='button-postion'>
          <S.Button id="submit-button" type="submit" disabled={isSubmitting}>
            완료
          </S.Button>
        </div>
        <S.Mydog>
          <S.PetCard>
            <S.Profilepic>
              <img src="/assets/images/layout/petimg.png" alt="펫 이미지" />
            </S.Profilepic>
            <S.Name>{register("petName").value || "이름"}</S.Name>
            <S.EditButton>이미지 편집</S.EditButton>
          </S.PetCard>
          <S.Title as="h5">
            {/* 이름 입력 */}
            <S.InputGroup>
              <S.PetName>이름</S.PetName>
              <input
                type="text"
                {...register("petName", { required: "이름은 필수 입력 항목입니다." })}
                value={petName}
              />
            </S.InputGroup>
            {/* 반려 종류 */}
            <S.RadioGroup>
              <S.PetKind>반려종류</S.PetKind>
              <S.RadioWrap>
                <S.Gap>
                  <input type="radio" value={petKind} checked = {petKind === "반려견"} {...register("petKind")} />
                  <label>반려견</label>
                </S.Gap>
                <S.Gap>
                  <input type="radio" value={petKind} checked = {petKind === "반려묘"} {...register("petKind")} />
                  <label>반려묘</label>
                </S.Gap>
              </S.RadioWrap>
            </S.RadioGroup>
            {/* 성별 */}
            <S.RadioGroupGender>
              <S.PetGender>성별</S.PetGender>
              <S.RadioWrap>
                <S.Gap>
                  <input type="radio" value={petGender} checked = {petGender === "수컷"} {...register("petGender")} />
                  <label>수컷</label>
                </S.Gap>
                <S.Gap>
                  <input type="radio" value={petGender} checked = {petGender === "암컷"} {...register("petGender")} />
                  <label>암컷</label>
                </S.Gap>
              </S.RadioWrap>
            </S.RadioGroupGender>
            {/* 품종 */}
            <S.InputGroup2>
              <S.PetBreed>품종</S.PetBreed>
              <input
                type="text"
                {...register("petBreed", { required: "품종은 필수 입력 항목입니다." })}
                value={petBreed}
              />
            </S.InputGroup2>
            {/* 생일 */}
            <S.InputGroup3>
              <S.PetBrith>생일</S.PetBrith>
              <input type="date" {...register("petBirth", { required: "생일을 선택하세요." })} 
              value={petBirth}
              />
            </S.InputGroup3>
            {/* 몸무게 */}
            <S.InputGroup4>
              <S.PetBreed>몸무게(kg)</S.PetBreed>
              <input type="number" {...register("petWeight")} 
              value={petWeight}
              />
            </S.InputGroup4>
            {/* 중성화 */}
            <S.RadioGroupGender2>
              <S.PetNeuter>중성화</S.PetNeuter>
              <S.RadioWrap>
                <S.Gap>
                  <input type="radio" value="했어요" {...register("petNeuter")} />
                  <label>했어요</label>
                </S.Gap>
                <S.Gap>
                  <input type="radio" value="안했어요" {...register("petNeuter")} />
                  <label>안했어요</label>
                </S.Gap>
              </S.RadioWrap>
            </S.RadioGroupGender2>
            {/* 동물병원 */}
            <S.InputGroup5>
              <S.PetVet>동물병원</S.PetVet>
              <input type="text" {...register("petVet")} 
              value={petVet}
              />
            </S.InputGroup5>
          </S.Title>
        </S.Mydog>
      </S.PetWapper>
    </form>
  );
};

export default PetUpdate;
