import React, { useState } from 'react';
import S from "./style";

const PwChange = ({ handleShowPopup }) => {
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

        // 실제 비밀번호 변경 로직 (API 호출 등)
        setMessage('비밀번호가 성공적으로 변경되었습니다.');
    };

    return (
        <S.CardPopUpBtn className="modal">
            <button className={"x"} onClick={handleShowPopup}>X</button>
                <S.CardPop>
                <form onSubmit={handleSubmit}>

                    <p>현재 비밀번호</p>
                    <input
                        type="password"
                        placeholder="현재 비밀번호를 입력하세요"
                        value={currentPassword}
                        onChange={(e) => setCurrentPassword(e.target.value)}
                    />
                    <p>새로운 비밀번호</p>
                    <input
                        type="password"
                        placeholder="새 비밀번호를 입력하세요"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                    />
                    <p>새로운 비밀번호 확인</p>
                    <input
                        type="password"
                        placeholder="새 비밀번호를 확인하세요"
                        value={confirmNewPassword}
                        onChange={(e) => setConfirmNewPassword(e.target.value)}
                    />
                </form>
                    <button className={"change"} type="submit">변경 완료</button>

                </S.CardPop>
        </S.CardPopUpBtn>
    );
};

export default PwChange;
