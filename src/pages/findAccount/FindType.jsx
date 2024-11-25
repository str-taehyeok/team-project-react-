import React from 'react';
import S from './style';

const FindType = () => {
    return (
        <S.FindMain>
            <S.LogoBox>
                <img src={`${process.env.PUBLIC_URL}/assets/images/layout/powpow-logo.png`} alt="로고" />
            </S.LogoBox>
            <S.Text>찾고자 하는 계정을 선택해 주세요.</S.Text>

            <S.RaidoBox>
                <S.Label htmlFor="userA">
                    <S.RadioInput name="user" id="userA" value="A" />
                    <S.Text1>POWPOW 회원</S.Text1>
                </S.Label>
                <S.Label htmlFor="userB">
                    <S.RadioInput name="user" id="userB" value="B" />
                    <S.Text1>POWPOW 판매자</S.Text1>
                </S.Label>
            </S.RaidoBox>
            <S.NextButton>다음</S.NextButton>
        </S.FindMain>
    );
};

export default FindType;