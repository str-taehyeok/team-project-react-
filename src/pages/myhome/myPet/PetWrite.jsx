import React from 'react';
import S from "./style";
import { Link } from 'react-router-dom';

const PetWrite = () => {
    return (
        <div>
            <S.Mydog>
                <S.PetCard>
                    <S.Profilepic>이미지</S.Profilepic>
                    <S.Name>포포</S.Name>
                    <S.EditButton>이미지 편집</S.EditButton>
                </S.PetCard>
                <div>
                    <S.Title as="h5">
                        <S.InputGroup>
                            <S.PetName>이름</S.PetName>
                            <input type="text" id="petName" name="petName" placeholder="  이름을 입력하세요" />
                        </S.InputGroup>
                        <S.RadioGroup>
                            <S.PetKind>반려종류</S.PetKind>
                            <S.PetDogCat>
                                <S.Gap>
                                    <input type="radio" id="petKind1" name='kind'  value="반려견" />
                                    <label>반려견</label>
                                </S.Gap>
                                <S.Gap>
                                    <input type="radio" id="petKind2"  name='kind' value="반려묘" />
                                    <label>반려묘</label>
                                </S.Gap>
                            </S.PetDogCat>
                        </S.RadioGroup>
                        <S.RadioGroupGender>
                            <S.PetGender>성별</S.PetGender>
                            <S.PetDogCat></S.PetDogCat>
                            <S.Gap>
                                <input type="radio" name='gender' id="genderboy"  value="수컷" />
                                <label>수컷</label>
                            </S.Gap>
                            <S.Gap>
                                <input type="radio" name='gender' id="gendergirl" value="암컷" />
                                <label>암컷</label>
                            </S.Gap>
                        </S.RadioGroupGender>

                        <S.PetBreed>품종</S.PetBreed>
                        <input type="text" id="petBreed" name="petBreed" placeholder="품종을 입력하세요" />

                        <S.PetBrith>생일</S.PetBrith>
                        <S.PetBreed>몸무게(kg)</S.PetBreed>
                        <S.PetNeuter>중성화</S.PetNeuter>
                        <S.PetVet>동물병원</S.PetVet>
                    </S.Title>
                </div>
            </S.Mydog>
        </div>
    );
};

export default PetWrite;