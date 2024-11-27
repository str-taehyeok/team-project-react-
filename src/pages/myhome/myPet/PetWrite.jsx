import React from 'react';
import S from "./style";
import { Link } from 'react-router-dom';

const PetWrite = () => {
    return (
        <div>
            {/* <S.Button id="submit-button" type="button">완료</S.Button> */}
            <S.Mydog>
                <S.PetCard>
                    <S.Profilepic>
                        <img src="/assets/images/layout/petimg.png" alt="펫이미지" />
                    </S.Profilepic>
                    <S.Name>포포</S.Name>
                    <S.EditButton>이미지 편집</S.EditButton>
                </S.PetCard>
                <div>
                    <S.Title as="h5">
                        <S.InputGroup>
                            <S.PetName>이름</S.PetName>
                            <input type="text" id="petName" name="petName" placeholder="   이름을 입력하세요" />
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
                            <S.PetDogCat>
                            <S.Gap>
                                <input type="radio" name='gender' id="genderboy"  value="수컷" />
                                <label>수컷</label>
                            </S.Gap>
                            <S.Gap>
                                <input type="radio" name='gender' id="gendergirl" value="암컷" />
                                <label>암컷</label>
                            </S.Gap>
                            </S.PetDogCat>
                        </S.RadioGroupGender>
                        <S.InputGroup2>
                        <S.PetBreed>품종</S.PetBreed>
                        <input type="text" id="petBreed" name="petBreed" placeholder="  품종을 입력하세요" />
                        </S.InputGroup2>
                        <S.InputGroup3>
                        <S.PetBrith>생일</S.PetBrith>
                        <input type='date' name='PetBirth' id='PetBirth' placeholder='  생일을 입력해주세요' />
                        </S.InputGroup3>
                        <S.InputGroup4>
                        <S.PetBreed>몸무게(kg)</S.PetBreed>
                        <input type='number' name='PetWeight' id='PetWeight'placeholder='  몸무게를 입력하세요'/>
                        <S.Kg>kg</S.Kg>
                        </S.InputGroup4>
                        <S.RadioGroupGender2>
                        <S.PetNeuter>중성화</S.PetNeuter>
                        <S.PetDogCat>
                            <S.Gap>
                                <input type="radio" name='neutered' id="PetNeuterYes"  value="했어요" />
                                <label>했어요</label>
                            </S.Gap>
                            <S.Gap>
                                <input type="radio" name='neutered' id="PetNeuterNo" value="안했어요" />
                                <label>안했어요</label>
                            </S.Gap>
                        </S.PetDogCat>
                        </S.RadioGroupGender2>
                        <S.InputGroup5>
                        <S.PetVet>동물병원</S.PetVet>
                        <input type='text' name='PetVet' id='PetVet' placeholder='  병원명을 입력하세요'/>
                        </S.InputGroup5>
                        <S.Description as="h7">*위 내용(몸무게, 중성화)을 사실과 다르게 기재한 경우, 약관에 따라 서비스 이용이 거부될 수 있습니다.</S.Description>
                    </S.Title>
                </div>
            </S.Mydog>
        </div>
    );
};

export default PetWrite;