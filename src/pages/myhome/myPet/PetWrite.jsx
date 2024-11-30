import React, { useState } from 'react';
import S from "./style";

const PetWrite = () => {
  const [formData, setFormData] = useState({
    petName: "",
    kind: "",
    gender: "",
    breed: "",
    birth: "",
    weight: "",
    neutered: "",
    vet: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    console.log("input 데이터 전송: ", formData);
    alert("데이터가 전송되었습니다!");
  };

  return (
    <div>
      <S.Button id="submit-button" type="button" onClick={handleSubmit}>완료</S.Button>
      <S.Mydog>
        <S.PetCard>
          <S.Profilepic>
            <img src="/assets/images/layout/petimg.png" alt="펫 이미지" />
          </S.Profilepic>
          <S.Name>{formData.petName || "이름"}</S.Name>
          <S.EditButton>이미지 편집</S.EditButton>
        </S.PetCard>
        <S.Title as="h5">
          {/* 이름 입력 */}
          <S.InputGroup>
            <S.PetName>이름</S.PetName>
            <input type="text" name="petName" placeholder="이름을 입력하세요" value={formData.petName} onChange={handleChange} />
          </S.InputGroup>
          {/* 반려 종류 */}
          <S.Form>
          <S.RadioGroup>
            <S.PetKind>반려종류</S.PetKind>
            <S.PetDogCat>
              <S.Gap>
                <input type="radio" id="petKind1" name="kind" value="반려견" checked={formData.kind === "반려견"} onChange={handleChange} />
                <label htmlFor="petKind1">반려견</label>
              </S.Gap>
              <S.Gap>
                <input type="radio" id="petKind2" name="kind" value="반려묘" checked={formData.kind === "반려묘"} onChange={handleChange} />
                <label htmlFor="petKind2">반려묘</label>
              </S.Gap>
            </S.PetDogCat>
          </S.RadioGroup>
          </S.Form>
          {/* 성별 */}
          <S.RadioGroupGender>
            <S.PetGender>성별</S.PetGender>
            <S.PetDogCat>
              <S.Gap>
                <input type="radio" id="male" name="gender" value="수컷" checked={formData.gender === "수컷"} onChange={handleChange} />
                <label htmlFor="male">수컷</label>
              </S.Gap>
              <S.Gap>
                <input type="radio" id="male" name="gender" value="암컷" checked={formData.gender === "암컷"} onChange={handleChange} />
                <label htmlFor="male">암컷</label>
              </S.Gap>
            </S.PetDogCat>
          </S.RadioGroupGender>
          {/* 품종 */}
          <S.InputGroup2>
            <S.PetBreed>품종</S.PetBreed>
            <input type="text" name="breed" placeholder="품종을 입력하세요" value={formData.breed} onChange={handleChange} />
          </S.InputGroup2>
          {/* 생일 */}
          <S.InputGroup3>
            <S.PetBrith>생일</S.PetBrith>
            <input type="date" name="birth" value={formData.birth} onChange={handleChange} />
          </S.InputGroup3>
          {/* 몸무게 */}
          <S.InputGroup4>
            <S.PetBreed>몸무게(kg)</S.PetBreed>
            <input type="number" name="weight" placeholder="몸무게를 입력하세요" value={formData.weight} onChange={handleChange} />
            <S.Kg>kg</S.Kg>
          </S.InputGroup4>
          {/* 중성화 */}
          <S.RadioGroupGender2>
            <S.PetNeuter>중성화</S.PetNeuter>
            <S.PetDogCat>
              <S.Gap>
                <input type="radio" name="neutered" value="했어요" checked={formData.neutered === "했어요"} onChange={handleChange} />
                <label>했어요</label>
              </S.Gap>
              <S.Gap>
                <input type="radio" name="neutered" value="안했어요" checked={formData.neutered === "안했어요"} onChange={handleChange} />
                <label>안했어요</label>
              </S.Gap>
            </S.PetDogCat>
          </S.RadioGroupGender2>
          {/* 동물병원 */}
          <S.InputGroup5>
            <S.PetVet>동물병원</S.PetVet>
            <input type="text" name="vet" placeholder="병원명을 입력하세요" value={formData.vet} onChange={handleChange} />
          </S.InputGroup5>
          {/* 안내문 */}
          <S.Description>
            *위 내용(몸무게, 중성화)을 사실과 다르게 기재한 경우, 약관에 따라 서비스 이용이 거부될 수 있습니다.
          </S.Description>
        </S.Title>
      </S.Mydog>
    </div>
  );
};

export default PetWrite;
