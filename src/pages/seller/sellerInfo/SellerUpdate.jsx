import React, {useEffect, useState} from 'react';
import {Link, useNavigate, useParams} from 'react-router-dom';
import {useForm} from "react-hook-form";
import S from "./style";
import {useSelector} from "react-redux";
import PwChange from "./PwChange";
import Password from "./Password";


const SellerUpdate = () => {
    const {id} = useParams();
    const { register, handleSubmit, formState: {isSubmitting}} = useForm({mode:"onChange"});
    const navigate = useNavigate();
    const [post, setPost] = useState({});
    const { currentUser } = useSelector((state) => state.user);
    const sellerId = currentUser.id;

    const [isOpenPopup, setIsOpenPopup] = useState(false);

    const handleShowPopup = () => {
        setIsOpenPopup(!isOpenPopup)
    }

    const onDelete = () => {
        if (window.confirm("정말 취소하시나요??")) {
            window.location.href = `/seller/seller-info/read/${id}`;
        }else {
            window.location.href = `/seller/seller-info/update/${id}`;
        }
    };

    useEffect(() => {
        const getPost = async () => {
            const response = await fetch(`http://localhost:10000/seller/seller-info/${id}`);
            if(!response.ok) return console.error(`데이터가 없습니다.`)
            const post = await response.json();
            return post;
        }

        getPost().then(setPost).catch(console.error);
    }, [sellerId]);

    console.log(post)
    const {memberName, memberEmail, memberPhone, memberBank, memberBankAccount, memberPassword, memberBusinessNumber } = post;

    return (
        <form onSubmit={handleSubmit(async (data) => {

            await fetch(`http://localhost:10000/seller/update/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    memberName: data.memberName,
                    memberEmail: data.memberEmail,
                    memberPhone: data.memberPhone,
                    memberBank: data.memberBank,
                    memberBankAccount: data.memberBankAccount,
                    memberPassword: data.memberPassword,
                    memberBusinessNumber: data.memberBusinessNumber
                })
            })
                .then((res) => res.json())
                .then((res) => {
                    const {id} = res;
                    navigate(`/seller/seller-info/${id}`)
                })
        })}>
            <S.UpdateBox>
                <S.ListButton>
                <S.Title>판매자정보 수정</S.Title>
                    <button className={"update"} disabled={isSubmitting}>완료</button>
                    <button className={"delete"} onClick={onDelete}>취소</button>
                </S.ListButton>
                <label>
                    <S.NameInputBox>
                        <S.NameText>이름</S.NameText>
                        <S.NameInput><input type={"text"} defaultValue={memberName}
                               {...register("memberName", {

                               })}
                        /></S.NameInput>
                    </S.NameInputBox>
                </label>
                <label>
                    <S.IdInputBox>
                        <S.IdText>로그인 ID</S.IdText>
                        <S.IdInput><p>{memberEmail}</p></S.IdInput>
                    </S.IdInputBox>
                </label>
                <label>
                    <S.PayInputBox>
                        <S.PayText>정산 계좌 정보</S.PayText>
                            <S.BankInput> <select  defaultValue={memberBank}
                                {...register("memberBank", {
                                    required: true,
                                })}>
                                <option value="농협은행">농협은행</option>
                                <option value="국민은행">국민은행</option>
                                <option value="신한은행">신한은행</option>
                                <option value="우리은행">우리은행</option>
                                <option value="하나은행">하나은행</option>
                                <option value="카카오뱅크">카카오뱅크</option>
                                <option value="우체국">우체국</option>
                            </select></S.BankInput>
                    </S.PayInputBox>
                    <S.BankAccInput><input type={"text"} defaultValue={memberBankAccount}
                                           {...register("memberBankAccount", {
                                           })}
                    /></S.BankAccInput>
                </label>
                <label>
                    <S.PhoneInputBox>
                        <S.PhoneText>휴대폰 번호</S.PhoneText>
                        <S.PhoneInput><input type={"text"} defaultValue={memberPhone}
                                            {...register("memberPhone", {
                                            })}
                        /></S.PhoneInput>
                    </S.PhoneInputBox>

                </label>
                <label>
                    <S.PwInputBox>
                        <S.PwText>비밀번호</S.PwText>
                        <S.PwInput>
                            <Password />
                        </S.PwInput>
                    </S.PwInputBox>
                </label>
                <label>
                <S.BussinessInputBox>
                        <S.BussinessText>사업자 번호</S.BussinessText>
                        <S.BussinessInput><input type={"text"} value={memberBusinessNumber}
                                          {...register("memberBusinessNumber", {
                                          })}
                        /></S.BussinessInput>
                    </S.BussinessInputBox>
                </label>

            </S.UpdateBox>

        </form>
    );
};

export default SellerUpdate;