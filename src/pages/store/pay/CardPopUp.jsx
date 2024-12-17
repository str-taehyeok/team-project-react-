import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import S from "./style";

const CardPopUp = () => {

    const { register, handleSubmit, reset, getValues, formState: {isSubmitted, isSubmitting, errors}} = useForm({mode:"onChange"});
    const memberId = 1;
    const navigate = useNavigate();

    return (

                <S.CardPopUpWrap>
                <form onSubmit={handleSubmit(async (data) => {

                    console.log(data)
                    await fetch("http://localhost:10000/pay/write", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            cardCompany: data.cardCompany,
                            cardNumber: data.cardNumber,
                            cardSecurityCode: data.cardSecurityCode,
                            cardExpirationDate: data.cardExpirationDate,
                            memberId: memberId
                        })
                    })
                        .then((res) => res.json())
                        .then((res) => {
                            //     이후 처리해야할 로직
                            alert("카드 등록이 완료되었습니다.")
                            const {id} = res;
                            reset();
                            navigate(`/pay`)
                        })

                })}>

                    <label>
                        <S.CardArea1>
                            <S.CardCompany>
                                <div>카드사 명</div>
                                <input type="text" placeholder='카드사 이름 입력'
                                       {...register("cardCompany", {
                                           required: true,
                                       })}
                                />
                                {errors && errors?.cardCompany?.type === "required" && (
                                    <p>카드번호를 입력하세요.</p>
                                )}
                            </S.CardCompany>
                            <S.CardIcon1>
                                <img src={`${process.env.PUBLIC_URL}/assets/images/cart/paw-icon.png`} alt="카드사 이미지"/>
                            </S.CardIcon1>
                        </S.CardArea1>


                        <S.cardNumber>
                        <div>카드번호</div>
                            <input type="text" placeholder='0000 - 0000 - 0000 - 0000'
                                   {...register("cardNumber", {
                                       required: true,
                                   })}
                            />
                            {errors && errors?.cardNumber?.type === "required" && (
                                <p>카드번호를 입력하세요.</p>
                            )}
                        </S.cardNumber>
                        <S.codeWrap>
                            <S.cardSecurityCode>
                                <div>보안 코드</div>
                                <input type="text" placeholder='***'
                                       {...register("cardSecurityCode", {
                                           required: true,
                                       })}
                                />
                                {errors && errors?.cardSecurityCode?.type === "required" && (
                                    <p>보안 코드를 입력하세요.</p>
                                )}
                            </S.cardSecurityCode>
                            <S.cardExpirationDate>
                                <div>만료월/년</div>
                                <input type="text" placeholder='MM/YY'
                                       {...register("cardExpirationDate", {
                                           required: true,
                                       })}
                                />
                                {errors && errors?.cardSecurityCode?.type === "required" && (
                                    <p>만료월/년을 입력하세요.</p>
                                )}
                            </S.cardExpirationDate>
                            <S.CardIcon2>
                                <img src={`${process.env.PUBLIC_URL}/assets/images/cart/master-card-icon.png`} alt="카드사 이미지2"/>
                            </S.CardIcon2>
                        </S.codeWrap>


                    </label>

                    <S.CardRegisterBtn>
                        <button disabled={isSubmitting}>작성하기</button>
                    </S.CardRegisterBtn>


                </form>
                </S.CardPopUpWrap>





    );
};

export default CardPopUp;