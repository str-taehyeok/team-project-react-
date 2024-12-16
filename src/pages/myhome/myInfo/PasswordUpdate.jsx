import React from 'react';
import S from "./style";


const PasswordUpdate = () => {
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[!@#])[\da-zA-Z!@#]{8,}$/;
    return (
        <S.PasswordUpdateFormContainer>
            <S.PasswordUpdateForm>
                <S.PasswordUpdateInput>
                    <S.PasswordUpdateText>
                        <p>현재 비밀번호</p><S.PasswordUpdateTextStar>*</S.PasswordUpdateTextStar>
                    </S.PasswordUpdateText>
                    <input placeholder="사용 중인 비밀번호를 입력해주세요."/>
                </S.PasswordUpdateInput>
                <S.PasswordUpdateInput>
                    <S.PasswordUpdateText>
                        <p>새로운 비밀번호</p><S.PasswordUpdateTextStar>*</S.PasswordUpdateTextStar>
                    </S.PasswordUpdateText>
                    <input placeholder="사용 중인 비밀번호를 입력해주세요."/>
                    <p>*영문, 숫자를 포함해 8자 이상으로 만들어주세요.</p>
                </S.PasswordUpdateInput>
                <S.PasswordUpdateInput>
                    <S.PasswordUpdateText>
                        <p>새로운 비밀번호 확인</p><S.PasswordUpdateTextStar>*</S.PasswordUpdateTextStar>
                    </S.PasswordUpdateText>
                    <input placeholder="사용 중인 비밀번호를 입력해주세요."/>
                </S.PasswordUpdateInput>
                <S.PasswordUpdateButton>완료</S.PasswordUpdateButton>
            </S.PasswordUpdateForm>
        </S.PasswordUpdateFormContainer>
    )
};

export default PasswordUpdate;