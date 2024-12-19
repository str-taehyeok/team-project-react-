import React from 'react';
import S from './style';

const PwChange = () => {



    return (
        <div>
            <S.PwChangeBox>
                <p>현재 비밀번호</p>
                <input placeholder={"현재 비밀번호를 입력하세요"}></input>
                <p>새 비밀번호</p>
                <input placeholder={"새 비밀번호를 입력하세요"}></input>
                <input placeholder={"새 비밀번호를 입력하세요"}></input>
            </S.PwChangeBox>
        </div>
    );
};

export default PwChange;