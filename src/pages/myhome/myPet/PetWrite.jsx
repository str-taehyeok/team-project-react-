import React from 'react';
import S from "./style";
import { Link } from 'react-router-dom';

const PetWrite = () => {
    return (
        <div>
            <S.Mydog>
                <S.PetCard>
                    <S.Profilepic>이미지</S.Profilepic>
                    <S.Name>이름</S.Name>
                    <S.EditButton>이미지 편집</S.EditButton>
                </S.PetCard>
                    <div>
                        <S.Title as="h5">
                            <S.PetName>이름</S.PetName>
                            <S.PetKind>반려종류</S.PetKind>
                            <S.PetGender>성별</S.PetGender>
                            <S.PetBreed>품종</S.PetBreed>
                            <S.PetBrith>생일</S.PetBrith>
                            <S.PetBreed>몸무게</S.PetBreed>
                            </S.Title>
                    </div>
            </S.Mydog>
        </div>
    );
};

export default PetWrite;