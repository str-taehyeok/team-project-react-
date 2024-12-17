import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import S from './style';

const PetWrite = () => {
  const { currentUser } = useSelector((state) => state.user)
  // console.log("멤버아이디", currentUser && currentUser.id)

  const { register, handleSubmit, formState: { isSubmitting } } = useForm({ mode: 'onChange' });
  const [petName, setPetName] = useState(""); // 마이펫 이름
  const [petKind, setPetKind] = useState(""); // 마이펫 종류
  const [petGender, setPetGender] = useState(""); // 마이펫 성별
  const [petBreed, setPetBreed] = useState(""); // 마이펫 품종
  const [petNeuter, setPetNeuter] = useState(""); // 마이펫 중성화
  const [petImagePreview, setPetImagePreview] = useState(null);
  const navigate = useNavigate();
  const localJwtToken = localStorage.getItem("jwtToken");

  useEffect(() => {
    if (!localJwtToken) {
      alert("로그인 후 이용해주시길 바랍니다.")
      navigate('/login');
    }
  }, [navigate, localJwtToken]);


  const handleChange = (e) => {
    const value = e.target.value;
    setPetName(value);
  };

  const handleNextClick = (e) => {
    if (!petName || !petKind || !petGender || !petNeuter) {
      e.preventDefault();
      return alert("모든 항목을 입력해주세요.");
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPetImagePreview(reader.result); 
      };
      reader.readAsDataURL(file); // 파일을 Data URL로 읽기 시작
    }
  };

  return (
    <form encType="multipart/form-data" onSubmit={handleSubmit(async (data) => {
      const formData = new FormData();

      const { petName, petKind, petGender, petBreed, petBirth, petWeight, petNeuter, petVet, petImage } = data;

      // formData에 PetVO 데이터 추가
      formData.append("memberId", currentUser.id); // 현재 로그인한 사용자 ID
      formData.append("petName", petName); // 반려동물 이름
      formData.append("petKind", petKind); // 반려동물 종류
      formData.append("petGender", petGender); // 성별
      formData.append("petBreed", petBreed); // 품종
      formData.append("petBirth", petBirth); // 생년월일
      formData.append("petWeight", petWeight); // 체중
      formData.append("petNeuter", petNeuter); // 중성화 여부
      formData.append("petVet", petVet); // 병원 여부
      formData.append("uploadFile", data.petImage[0]);

      // 서버로 데이터 전송
      await fetch("http://localhost:10000/my-pet/upload", {
        method: "POST",
        body: formData,
      })
      .then((res) => res.json())
      .then(async (res) => {
          formData.append("uuid", res.uuid);
          await fetch("http://localhost:10000/my-pet/write", {
            method: "POST",
            body: formData,
          })
            .then((res) => res.json())
            .then((res) => {
              alert(res.message);
              navigate("/my-pet");
              return;
            })
          })
          .catch(console.error)
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
              {/* 이미지 미리보기 */}
              {petImagePreview ? (
                <img src={petImagePreview} alt="펫 이미지" />
              ) : (
                <img src="/assets/images/layout/petimg.png" alt="펫 이미지" />
              )}
            </S.Profilepic>
            <S.Name>{petName || "이름"}</S.Name>
            <S.EditButton as="label" htmlFor="petImageInput">
              이미지 편집
              </S.EditButton>
            <input
              id="petImageInput"
              type="file"
              style={{ display: 'none' }} // 숨겨진 파일 입력
              {...register("petImage", { required: true })}
              onChange={handleImageChange}
            />
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
                onChange={handleChange}
              />
            </S.InputGroup>
            {/* 반려 종류 */}
            <S.RadioGroup>
              <S.PetKind>반려종류</S.PetKind>
              <S.RadioWrap>
                <S.Gap>
                  <input type="radio" {...register("petKind", { required: true })} value="반려견" onChange={(e) => setPetKind(e.target.value)} />
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
