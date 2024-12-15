import React from 'react';
import CardPopUp from "./CardPopUp";
import S from "./style";

const CardPopBg = ({handleShowPopup}) => {
    return (
        <S.CardBgWrap>
            <S.CardPopUpContainer>
                <S.CardPopUpBtn onClick={handleShowPopup}>
                    <img
                        src={`${process.env.PUBLIC_URL}/assets/images/myhome/x-icon.png`}
                        alt="X아이콘"
                    />
                </S.CardPopUpBtn>
                <CardPopUp/>
            </S.CardPopUpContainer>

        </S.CardBgWrap>

    )
        ;
};

export default CardPopBg;