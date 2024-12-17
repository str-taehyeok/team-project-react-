import React, { useState } from 'react';
import S from "./style";

const Notification = () => {
    const [isOn1, setIsOn1] = useState(false);
    const [isOn2, setIsOn2] = useState(false);
    return (
        <div>
            <S.ToggleContainer>
                <S.ToggleSwitch $isOn={isOn1} onClick={() => setIsOn1(!isOn1)}>
                    <S.ToggleCircle $isOn={isOn1} />
                </S.ToggleSwitch>

                <S.ToggleSwitch $isOn={isOn2} onClick={() => setIsOn2(!isOn2)}>
                    <S.ToggleCircle $isOn={isOn2} />
                </S.ToggleSwitch>
            </S.ToggleContainer>
            
        </div>
    );
};

export default Notification;