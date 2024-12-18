import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {useForm} from "react-hook-form";
import S from "./style";


const SellerUpdate = () => {
    const {id} = useParams();
    const { register, handleSubmit, formState: {isSubmitting}} = useForm({mode:"onChange"});
    const navigate = useNavigate();
    const [post, setPost] = useState({});

    useEffect(() => {
        const getPost = async () => {
            const response = await fetch(`http://localhost:10000/seller/seller-info/${id}`);
            if(!response.ok) return console.error(`데이터가 없습니다.`)
            const post = await response.json();
            return post;
        }

        getPost().then(setPost).catch(console.error);
    }, [id]);

    console.log(post)
    const {memberName, memberEmail, memberPhone, memberBank, memberBankAccount, memberPassword,memberBusinessNumber } = post;

    return (
        <form onSubmit={handleSubmit(async (data) => {
            console.log("전송할 데이터 :", data)

            await fetch(`http://localhost:10000/seller/update/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    memberName: data.memberName,
                    // memberId : memberId
                })
            })
                .then((res) => res.json())
                .then((res) => {
                    console.log(res)
                    const {id} = res;
                    navigate(`/seller/seller-info/${id}`)
                })
        })}>
            <label>
                <p>회원 이름</p>
                <input type={"text"} defaultValue={memberName}
                       {...register("memberName", {
                           required: true,
                       })}
                />
            </label>
            <label>
                <p>로그인 ID(이메일)</p>
                <input type={"text"} defaultValue={memberEmail}
                       {...register("memberEmail", {
                           required: true,
                       })}
                />
            </label>
            <label>
                <p>정산 계좌 정보</p>
                <input type={"text"} defaultValue={memberBank}
                       {...register("memberBank", {
                           required: true,
                       })}
                />
                <input type={"text"} defaultValue={memberBankAccount}
                       {...register("memberBankAccount", {
                           required: true,
                       })}
                />
            </label>
            <label>
                <p>휴대폰 번호</p>
                <input type={"text"} defaultValue={memberPhone}
                       {...register("memberPhone", {
                           required: true,
                       })}
                />
            </label>
            <label>
                <p>비밀번호</p>
                <input type={"text"} defaultValue={memberPassword}
                       {...register("memberPassword", {
                           required: true,
                       })}
                />
            </label>
            <label>
                <p>사업자 번호</p>
                <input value={memberBusinessNumber}
                       {...register("memberBusinessNumber", {
                           required: true,
                       })}
                />
            </label>
            {/*<label>*/}
            {/*    <S.LinkInputBox>*/}
            {/*        <S.LinkText>배너링크</S.LinkText>*/}
            {/*        <S.LinkInput><input  defaultValue={memberName}*/}
            {/*                            {...register("memberName", {*/}
            {/*                                required: true,*/}
            {/*                            })}*/}
            {/*        /></S.LinkInput>*/}
            {/*    </S.LinkInputBox>*/}
            {/*</label>*/}
            <button disabled={isSubmitting}>수정하기</button>
        </form>
    );
};

export default SellerUpdate;