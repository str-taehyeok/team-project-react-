import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import S from './style';

const PetUpdate = () => {
  const navigate = useNavigate();
  const [pet, setPet] = useState({ petName: '', petKind: '', petImage: '', petGender: '', petBreed: '', petBirth: '', petWeight: '', petNeuter: '', petVet: '' });
  const { id } = useParams();
  const memberId = 23;

  useEffect(() => {
    const getPet = async () => {
      try {
        const response = await fetch(`http://localhost:10000/my-pet/${id}`);
        if (!response.ok) return console.error('데이터가 없습니다.');
        const petData = await response.json();
        setPet(petData);
      } catch (error) {
        console.error('데이터 로드 중 오류 발생:', error);
      }
    };
    getPet();
  }, [id]);

  const handleChange = (e) => setPet((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:10000/my-pet/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...pet, petImage: '1234', memberId }),
      });
      if (!response.ok) throw new Error('데이터 전송 실패');
      alert('데이터가 성공적으로 전송되었습니다!');
      navigate('/my-pet');
    } catch (error) {
      console.error('에러 발생:', error);
      alert('데이터 전송 중 오류가 발생하였습니다.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <S.PetWapper>
        <div className="button-postion">
          <S.Button id="submit-button" type="submit">완료</S.Button>
        </div>
        <S.Mydog>
          <S.PetCard>
            <S.Profilepic><img src="/assets/images/layout/petimg.png" alt="펫 이미지" /></S.Profilepic>
            <S.Name>{pet.petName || '이름'}</S.Name>
            <S.EditButton>이미지 편집</S.EditButton>
          </S.PetCard>
          <S.Title as="h5">
            <S.InputGroup>
              <S.PetName>이름</S.PetName>
              <input type="text" name="petName" value={pet.petName} onChange={handleChange} />
            </S.InputGroup>
            <S.RadioGroup>
              <S.PetKind>반려종류</S.PetKind>
              <S.RadioWrap>
                <S.Gap>
                  <input type="radio" name="petKind" value="반려견" checked={pet.petKind === '반려견'} onChange={handleChange} />
                  <label>반려견</label>
                </S.Gap>
                <S.Gap>
                  <input type="radio" name="petKind" value="반려묘" checked={pet.petKind === '반려묘'} onChange={handleChange} />
                  <label>반려묘</label>
                </S.Gap>
              </S.RadioWrap>
            </S.RadioGroup>
            <S.RadioGroupGender>
              <S.PetGender>성별</S.PetGender>
              <S.RadioWrap>
                <S.Gap>
                  <input type="radio" name="petGender" value="수컷" checked={pet.petGender === '수컷'} onChange={handleChange} />
                  <label>수컷</label>
                </S.Gap>
                <S.Gap>
                  <input type="radio" name="petGender" value="암컷" checked={pet.petGender === '암컷'} onChange={handleChange} />
                  <label>암컷</label>
                </S.Gap>
              </S.RadioWrap>
            </S.RadioGroupGender>
            <S.InputGroup2>
              <S.PetBreed>품종</S.PetBreed>
              <input type="text" name="petBreed" value={pet.petBreed} onChange={handleChange} />
            </S.InputGroup2>
            <S.InputGroup3>
              <S.PetBrith>생일</S.PetBrith>
              <input type="date" name="petBirth" value={pet.petBirth} onChange={handleChange} />
            </S.InputGroup3>
            <S.InputGroup4>
              <S.PetBreed>몸무게(kg)</S.PetBreed>
              <input type="number" name="petWeight" value={pet.petWeight} onChange={handleChange} />
            </S.InputGroup4>
            <S.RadioGroupGender2>
              <S.PetNeuter>중성화</S.PetNeuter>
              <S.RadioWrap>
                <S.Gap>
                  <input type="radio" name="petNeuter" value="했어요" checked={pet.petNeuter === '했어요'} onChange={handleChange} />
                  <label>했어요</label>
                </S.Gap>
                <S.Gap>
                  <input type="radio" name="petNeuter" value="안했어요" checked={pet.petNeuter === '안했어요'} onChange={handleChange} />
                  <label>안했어요</label>
                </S.Gap>
              </S.RadioWrap>
            </S.RadioGroupGender2>
            <S.InputGroup5>
              <S.PetVet>동물병원</S.PetVet>
              <input type="text" name="petVet" value={pet.petVet} onChange={handleChange} />
            </S.InputGroup5>
          </S.Title>
        </S.Mydog>
      </S.PetWapper>
    </form>
  );
};

export default PetUpdate;
