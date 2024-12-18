import React, { useState, useEffect} from 'react';
import S from "./style";
import { useSelector } from "react-redux";


const PasswordUpdate = () => {

        const { currentUser } = useSelector((state) => state.user);
        const [currentPassword, setCurrentPassword] = useState('');
        const [newPassword, setNewPassword] = useState('');
        const [confirmNewPassword, setConfirmNewPassword] = useState('');
        const [message, setMessage] = useState('');


        const handleSubmit = async (e) => {
            e.preventDefault();

            if (newPassword !== confirmNewPassword) {
                setMessage('새로운 비밀번호가 일치하지 않습니다.');
                return;
            }

            if (!passwordRegex.test(newPassword)) {
                setMessage('비밀번호는 소문자, 숫자, 특수문자를 포함해 8자 이상이어야 합니다.');
                return;
            }

            try {
                const response = await fetch('http://localhost:10000/member/check-password', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        memberEmail: currentUser.email,
                        memberPassword: currentUser.password,
                    }),
                });

                console.log("패치정보 {}" , response);

                const result = await response.json();

                console.log("결과 {}" ,result);

                if (result.success) {
                    setMessage('비밀번호가 성공적으로 업데이트되었습니다.');
                } else {
                    setMessage('현재 비밀번호가 일치하지 않습니다.');
                }
            } catch (error) {
                setMessage('비밀번호 변경 중 오류가 발생했습니다.');
            }
        };

    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[!@#])[\da-zA-Z!@#]{8,}$/;
    return (
        <S.PasswordUpdateFormContainer>
            <S.PasswordUpdateForm onSubmit = {handleSubmit}>
                <S.PasswordUpdateInput>
                    <S.PasswordUpdateText>
                        <p>현재 비밀번호</p><S.PasswordUpdateTextStar>*</S.PasswordUpdateTextStar>
                    </S.PasswordUpdateText>
                    <input
                        type="password"
                        placeholder="사용 중인 비밀번호를 입력해주세요."
                        // value={}
                    />
                </S.PasswordUpdateInput>

                <S.PasswordUpdateInput>
                    <S.PasswordUpdateText>
                        <p>새로운 비밀번호</p><S.PasswordUpdateTextStar>*</S.PasswordUpdateTextStar>
                    </S.PasswordUpdateText>
                    <input placeholder="사용 중인 비밀번호를 입력해주세요."/>
                    <p>*소문자, 숫자, 특수문자를 포함해 8자 이상으로 만들어주세요.</p>
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