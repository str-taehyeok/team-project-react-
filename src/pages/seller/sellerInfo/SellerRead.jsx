import React, {useEffect, useState} from 'react';
import {Link, useNavigate, useParams} from 'react-router-dom';
import {useForm} from "react-hook-form";
import S from "./style";
import {useSelector} from "react-redux";


const SellerRead = () => {
    const {id} = useParams();
    const { register, handleSubmit, formState: {isSubmitting}} = useForm({mode:"onChange"});
    const navigate = useNavigate();
    const [post, setPost] = useState({});
    const { currentUser } = useSelector((state) => state.user);
    const sellerId = currentUser.id;


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
    const {memberName, memberEmail, memberPhone, memberBank, memberBankAccount, memberBusinessNumber } = post;

    const onClickDeleteNotice = async () => {
        await fetch(`http://localhost:10000/member/seller/${id}`, {
            method : "DELETE"
        })
            .then((res) => {
                // navigate("/login")
            })
    }
    return (
            <S.UpdateBox>
                <S.ListButton>
                <S.Title>판매자정보 수정</S.Title>
                    <Link to={`/seller/seller-info/update/${id}`}>
                        <button className={"update"}>수정하기</button>
                    </Link>
                </S.ListButton>
                <label>
                    <S.NameInputBox>
                        <S.NameText>이름</S.NameText>
                        <S.NameInput><input type={"text"} className={"none"} value={memberName}

                        /></S.NameInput>
                    </S.NameInputBox>
                </label>
                <label>
                    <S.IdInputBox>
                        <S.IdText>로그인 ID</S.IdText>
                        <S.IdInput><input type={"text"} className={"none"} defaultValue={memberEmail}
                        /></S.IdInput>
                    </S.IdInputBox>
                </label>
                <label>
                    <S.PayInputBox>
                        <S.PayText>정산 계좌 정보</S.PayText>
                            <S.BankInput>
                                <input type={"text"} className={"none"} defaultValue={memberBank}
                                /></S.BankInput>
                    </S.PayInputBox>
                    <S.BankAccInput><input type={"text"} className={"none"} defaultValue={memberBankAccount}

                    /></S.BankAccInput>
                </label>
                <label>
                    <S.PhoneInputBox>
                        <S.PhoneText>휴대폰 번호</S.PhoneText>
                        <S.PhoneInput><input type={"text"} className={"none"} defaultValue={memberPhone}

                        /></S.PhoneInput>
                    </S.PhoneInputBox>

                </label>
                <label>
                    <S.Update>
                        <S.BussinessText>비밀번호</S.BussinessText>
                        <div className={"update-button"}>
                            <button className={"update"}>변경하기</button>
                        </div>
                    </S.Update>
                </label>
                <label>
                    <S.BussinessInputBox>
                        <S.BussinessText>사업자 번호</S.BussinessText>
                        <S.BussinessInput><input type={"text"} className={"none"} value={memberBusinessNumber}
                        /></S.BussinessInput>
                    </S.BussinessInputBox>
                </label>
                <S.Delete>
                    <S.BussinessText>탈퇴하기</S.BussinessText>
                    <div className={"delete-button"}>
                        <button className={"delete"} onClick={onClickDeleteNotice}>탈퇴하기</button>
                    </div>
                </S.Delete>
            </S.UpdateBox>

    );
};

export default SellerRead;