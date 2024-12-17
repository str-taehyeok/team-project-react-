import React, {useState} from 'react';
import S from "./style";
import CardPopBg from "./CardPopBg";
import InsertedCard from "./InsertedCard";

const Card = () => {

    const [isOpenPopup, setIsOpenPopup] = useState(false);

    const handleShowPopup = () => {
        setIsOpenPopup(!isOpenPopup)
    }

    const [isInsertCard, setIsInsertCard] = useState(false);

    const handleInsertedCard = () => {
        setIsInsertCard(!isInsertCard)
    }

    return(

        <>
            <S.CardInsertBox onClick={handleShowPopup}>
                <img src={`${process.env.PUBLIC_URL}/assets/images/cart/plus-button.png`} alt="추가하는 이미지"/>
                <S.CardInsertMent>카드 등록하기</S.CardInsertMent>
            </S.CardInsertBox>
            {isOpenPopup ? (
                <CardPopBg
                    handleShowPopup={handleShowPopup}
                    isOpenPopup = {isOpenPopup}
                    setIsOpenPopup = {setIsOpenPopup}
                />
            ) : (
                <></>
            )}

            {isInsertCard ? (
                <InsertedCard
                    handleInsertedCard={handleInsertedCard}
                />
            ) : (
                <></>
            )}


        </>



    )



};

export default Card;