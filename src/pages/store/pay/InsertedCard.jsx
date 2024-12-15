import React, {useEffect, useState} from 'react';
import S from "./style";
import {useNavigate, useParams} from "react-router-dom";

const InsertedCard = () => {

    const {id} = useParams();
    const [card, setCard] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        const getCard = async () => {
            const response = await fetch(`http://localhost:10000/pay/pay/${id}`)
            if (!response.ok) return console.error(`데이터가 없습니다.`)
            const card = await response.json();
            return card;
        }

        getCard().then(setCard).catch(console.error);
    }, []);

    console.log(card)
    const { cardCompany, cardNumber, cardSecurityCode, cardExpirationDate } = card;

    return (
        <div>
            <S.CardInsertBox>
                <p>{cardCompany}</p>
                <p>{cardNumber}</p>
                <p>{cardSecurityCode}</p>
                <p>{cardExpirationDate}</p>
            </S.CardInsertBox>
        </div>
    );
};

export default InsertedCard;