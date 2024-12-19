import React, { useState } from 'react';
import S from './style';
import PwChange from './PwChange';  // 기본 import 방식 사용

const Password = () => {
    const [isOpenPopup, setIsOpenPopup] = useState(false);

    const handleShowPopup = () => {
        setIsOpenPopup(!isOpenPopup);  // 팝업 열기/닫기
    };

    return (
        <>
            <S.PwChangeBox onClick={handleShowPopup}>
                <button className={"update"}>변경하기</button>
            </S.PwChangeBox>

            {isOpenPopup && (
                <PwChange
                    handleShowPopup={handleShowPopup}
                />
            )}
        </>
    );
};

export default Password;
