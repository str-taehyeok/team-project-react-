import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import S from "./style";

const PetUpdate = () => {
  const { id } = useParams();
  const { currentUser } = useSelector((state) => state.user);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { isSubmitting },
  } = useForm({ mode: "onChange" });

  const [ petData , setPetData] = useState([])
  const [petName, setPetName] = useState("");
  const [petKind, setPetKind] = useState("");
  const [petGender, setPetGender] = useState("");
  const [petBreed, setPetBreed] = useState("");
  const [petNeuter, setPetNeuter] = useState("");
  const [petImagePreview, setPetImagePreview] = useState(null);
  const [petFilePath, setPetFilePath] = useState("");
  const [petFileName, setPetFileName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const getPet = async () => {
      try {
        const response = await fetch(`http://localhost:10000/my-pet/${id}`);
        if (!response.ok) return console.error("데이터가 없습니다.");
        const petData = await response.json();

        // 날짜 포맷팅: petData.petBirth를 'yyyy-MM-dd' 형식으로 변환
        const formattedDate = new Date(petData.petBirth)
          .toISOString()
          .split("T")[0];

        // 초기값 설정
        setPetName(petData.petName);
        setPetKind(petData.petKind);
        setPetGender(petData.petGender);
        setPetBreed(petData.petBreed);
        setPetBreed(petData.petWeight);
        setPetNeuter(petData.petNeuter);
        setPetFilePath(petData.petFilePath);
        setPetFileName(petData.petFileName);

        setPetData(petData)

        // form 값 설정
        setValue("petName", petData.petName);
        setValue("petKind", petData.petKind);
        setValue("petGender", petData.petGender);
        setValue("petBreed", petData.petBreed);
        setValue("petBirth", formattedDate);
        setValue("petWeight", petData.petWeight);
        setValue("petNeuter", petData.petNeuter);
        setValue("petVet", petData.petVet);
        setValue("uploadFile", petData.petImage[0]);
      } catch (error) {
        console.error("데이터 로드 중 오류 발생:", error);
      }
    };
    getPet();
  }, [id, setValue]);


  const handleFormSubmit = async (data) => {
    try {
      const formData = new FormData();
  
      Object.entries(data).forEach(([key, value]) => {
        setPetData({ ...petData, [key]: value })
        if(key === 'petImage'){
            formData.append("uploadFile", value[0])
        }else{
            const emptyImage = new Blob([], { type: 'image/png'})
            formData.append("uploadFile", emptyImage)
        }
    });

      // data에서 직접 값을 추출하여 uploadData 설정
      const uploadData = {
        memberId: currentUser.id,
        petName: data.petName,
        petKind: data.petKind,
        petGender: data.petGender,
        petBreed: data.petBreed,
        petBirth: data.petBirth,
        petWeight: data.petWeight,
        petNeuter: data.petNeuter,
        petVet: data.petVet
      };
  
      // uploadData를 formData에 추가
      Object.entries(uploadData).forEach(([key, value]) => {
        formData.append(key, value);
      });
  
      // 서버에 전송
      const uploadResponse = await fetch("http://localhost:10000/my-pet/upload", {
        method: "POST",
        body: formData,
      });
  
      const updatedResponse = await uploadResponse.json();
            console.log("Update response: ", updatedResponse);

            if(updatedResponse?.uuid){
                // uuid를 append해서 보낸다
                formData.append("uuid", updatedResponse.uuid);
                
            }else{
                // 아니면 그냥 보낸다. uuid없이 보낸다.
                formData.append("uuid", "");
            }
            console.log("여기 로직 실행행")

      const updateResponse = await fetch("http://localhost:10000/my-pet/petEdit", {
        method: "PUT",
        body: formData,
      });
  
      const updateResData = await updateResponse.json();
      console.log(updateResData);
      alert(updateResData.message);
  
      // navigate("/my-pet"); // 수정 후 리다이렉션
    } catch (error) {
      console.error("폼 제출 중 오류 발생:", error);
    }
  };

  return (
    <S.PetWapper>
      <form
        encType="multipart/form-data"
        onSubmit={handleSubmit(handleFormSubmit)}
      >
        <div className="button-postion">
          <S.Button disabled={isSubmitting}>
            수정 완료
          </S.Button>
        </div>
        <S.Mydog>
          <S.PetCard>
            <S.Profilepic>
              {petImagePreview ? (
                <img src={petImagePreview} alt="펫 이미지" />
              ) : (
                <img
                  src={`http://localhost:10000/my-pet/display?fileName=${petFilePath}/${petFileName}`}
                  alt={`${petName} 이미지`}
                />
              )}
            </S.Profilepic>
            <S.Name>{petName || "이름"}</S.Name>
            <S.EditButton as="label" htmlFor="petImageInput">
              이미지 편집
            </S.EditButton>
            <S.NoticeText>jpg, png파일 가능</S.NoticeText>
            <input
              id="petImageInput"
              type="file"
              style={{ display: "none" }}
              {...register("petImage", {
                validate: (e) => {
                  const file = e[0];
                  if (file) {
                    const reader = new FileReader();
                    reader.onloadend = () => setPetImagePreview(reader.result);
                    reader.readAsDataURL(file);
                  }
                },
              })}
            />
          </S.PetCard>
          <S.Title as="h5">
            <S.InputGroup>
              <S.PetName>이름</S.PetName>
              <input
                type="text"
                placeholder="이름을 입력하세요"
                {...register("petName")}
                value={petName}
                onChange={(e) => setPetName(e.target.value)}
              />
            </S.InputGroup>
            <S.RadioGroup>
              <S.PetKind>반려종류</S.PetKind>
              <S.RadioWrap>
                <S.Gap>
                  <input
                    type="radio"
                    {...register("petKind", { required: true })}
                    value="반려견"
                    checked={petKind === "반려견"}
                    onChange={(e) => setPetKind(e.target.value)}
                  />
                  <label>반려견</label>
                </S.Gap>
                <S.Gap>
                  <input
                    type="radio"
                    {...register("petKind", { required: true })}
                    value="반려묘"
                    checked={petKind === "반려묘"}
                    onChange={(e) => setPetKind(e.target.value)}
                  />
                  <label>반려묘</label>
                </S.Gap>
              </S.RadioWrap>
            </S.RadioGroup>
            <S.RadioGroupGender>
              <S.PetGender>성별</S.PetGender>
              <S.RadioWrap>
                <S.Gap>
                  <input
                    type="radio"
                    {...register("petGender", { required: true })}
                    value="수컷"
                    checked={petGender === "수컷"}
                    onChange={(e) => setPetGender(e.target.value)}
                  />
                  <label>수컷</label>
                </S.Gap>
                <S.Gap>
                  <input
                    type="radio"
                    {...register("petGender", { required: true })}
                    value="암컷"
                    checked={petGender === "암컷"}
                    onChange={(e) => setPetGender(e.target.value)}
                  />
                  <label>암컷</label>
                </S.Gap>
              </S.RadioWrap>
            </S.RadioGroupGender>
            <S.InputGroup2>
              <S.PetBreed>품종</S.PetBreed>
              <input
                type="text"
                placeholder="품종을 입력하세요"
                {...register("petBreed")}
                value={petBreed}
                onChange={(e) => setPetBreed(e.target.value)}
              />
            </S.InputGroup2>
            <S.InputGroup3>
              <S.PetBrith>생일</S.PetBrith>
              <input
                type="date"
                {...register("petBirth", { required: "생일을 선택하세요." })}
              />
            </S.InputGroup3>
            <S.InputGroup4>
              <S.PetBreed>몸무게(kg)</S.PetBreed>
              <input
                type="number"
                placeholder="몸무게를 입력하세요"
                {...register("petWeight")}
              />
            </S.InputGroup4>
            <S.RadioGroupGender2>
              <S.PetNeuter>중성화</S.PetNeuter>
              <S.RadioWrap>
                <S.Gap>
                  <input
                    type="radio"
                    value="했어요"
                    {...register("petNeuter")}
                    checked={petNeuter === "했어요"}
                    onChange={(e) => setPetNeuter(e.target.value)}
                  />
                  <label>했어요</label>
                </S.Gap>
                <S.Gap>
                  <input
                    type="radio"
                    value="안했어요"
                    {...register("petNeuter")}
                    checked={petNeuter === "안했어요"}
                    onChange={(e) => setPetNeuter(e.target.value)}
                  />
                  <label>안했어요</label>
                </S.Gap>
              </S.RadioWrap>
            </S.RadioGroupGender2>
            <S.InputGroup5>
              <S.PetVet>동물병원</S.PetVet>
              <input
                type="text"
                placeholder="병원명을 입력하세요"
                {...register("petVet")}
              />
            </S.InputGroup5>
          </S.Title>
        </S.Mydog>
      </form>
    </S.PetWapper>
  );
};

export default PetUpdate;
