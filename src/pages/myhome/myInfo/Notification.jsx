import React, { useState } from 'react';
import S from "./style";

const Notification = () => {
    const [isOn1, setIsOn1] = useState(false);
    const [isOn2, setIsOn2] = useState(false);
    return (
        <div>
            <S.Notification>
                <S.NotWrap>
                    <S.Not1>이벤트 및 혜택 알림</S.Not1>
                    <S.Not2>특가, 쿠폰 등 이벤트 정보를 빠르게 알려드릴게요.</S.Not2>
                </S.NotWrap>
                <S.ToggleContainer>
                    <S.ToggleWrap>
                        <p>이메일 알림</p>
                        <S.ToggleSwitch $isOn={isOn1} onClick={() => setIsOn1(!isOn1)}>
                            <S.ToggleCircle $isOn={isOn1} />
                        </S.ToggleSwitch>
                    </S.ToggleWrap>

                    <S.ToggleWrap>
                        <p>문자 알림</p>
                        <S.ToggleSwitch $isOn={isOn2} onClick={() => setIsOn2(!isOn2)}>
                            <S.ToggleCircle $isOn={isOn2} />
                        </S.ToggleSwitch>
                    </S.ToggleWrap>
                </S.ToggleContainer>
                <p>*알림 수신 동의와 함께 개인정보 마케팅 활용에 동의하시게 됩니다.</p>
            </S.Notification>
            
        </div>
    );
};

export default Notification;