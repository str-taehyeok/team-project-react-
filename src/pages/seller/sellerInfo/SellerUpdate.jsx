// SellerUpdate.jsx
import React, { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from 'react-router-dom';
import PwChange from './PwChange'; // PwChange 컴포넌트를 import
import S from './style'; // 스타일 import

const SellerUpdate = () => {
    const { id } = useParams();
    const memberId = 12;
    const { register, handleSubmit, formState: { isSubmitting } } = useForm({ mode: "onChange" });
    const navigate = useNavigate();
    const { currentUser } = useSelector((state) => state.user);
    const [post, setPost] = useState({});
    const [isOpenPopup, setIsOpenPopup] = useState(false); // 팝업 상태

    // 팝업 열기/닫기 함수
    const handleShowPopup = () => {
        setIsOpenPopup(!isOpenPopup);
    };

    // 데이터 fetching
    useEffect(() => {
        const getPost = async () => {
            const response = await fetch(`http://localhost:10000/seller/seller-info/${id}`);
            if (!response.ok) return console.error(`데이터가 없습니다.`);
            const post = await response.json();
            setPost(post);
        };
        getPost().catch(console.error);
    }, [id]);

    const { memberName, memberEmail, memberPhone, memberBank, memberBankAccount, memberBusinessNumber } = post;

    console.log("가져오기 결과 :", post);

    const onDelete = () => {
        if (window.confirm("정말 취소하시나요??")) {
            window.location.href = `/seller/seller-info/${id}`;
        } else {
            window.location.href = `/seller/seller-info/${id}/update/${id}`;
        }
    };


    return (
        <form onSubmit={handleSubmit(async (data) => {

            await fetch(`http://localhost:10000/seller/update/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    memberName: data.memberName,
                    memberPhone: data.memberPhone,
                    memberBank: data.memberBank,
                    memberBankAccount: data.memberBankAccount,
                    memberId: memberId
                })
            })
                .then((res) => res.json())
                .then((res) => {
                    const {id} = res;
                    navigate(`/seller/seller-info/${id}`);
                    console.log("아이디 풋 : {}", id);
                })


        })}>

            <S.UpdateBox>
                <S.ListButton>
                    <S.Title>판매자정보 수정</S.Title>
                    <button className="update" disabled={isSubmitting}>완료</button>
                    <button className="delete" onClick={onDelete}>취소</button>
                </S.ListButton>
                <label>
                    <S.NameInputBox>
                        <S.NameText>이름</S.NameText>
                        <S.NameInput>
                            <input
                                type="text"
                                defaultValue={memberName}
                                {...register("memberName")}
                            />
                        </S.NameInput>
                    </S.NameInputBox>

                    <S.IdInputBox>
                        <S.IdText>로그인 ID</S.IdText>
                        <S.IdInput>
                            <p className={"email"}>{memberEmail}</p>
                        </S.IdInput>
                    </S.IdInputBox>

                    <S.PayInputBox>
                        <S.PayText>정산 계좌 정보</S.PayText>
                        <S.BankInput>
                            <select
                                defaultValue={memberBank}
                                {...register("memberBank")}
                            >
                                <option value="농협은행">농협은행</option>
                                <option value="국민은행">국민은행</option>
                                <option value="신한은행">신한은행</option>
                                <option value="우리은행">우리은행</option>
                                <option value="하나은행">하나은행</option>
                                <option value="카카오뱅크">카카오뱅크</option>
                                <option value="우체국">우체국</option>
                            </select>
                        </S.BankInput>
                    </S.PayInputBox>
                    <S.BankAccInput>
                        <input placeholder={"계좌번호를 입력해주세요"}
                            type="text"
                            defaultValue={memberBankAccount}
                            {...register("memberBankAccount")}
                        />
                    </S.BankAccInput>

                    <S.PhoneInputBox>
                        <S.PhoneText>휴대폰 번호</S.PhoneText>
                        <S.PhoneInput>
                            <input
                                type="text"
                                defaultValue={memberPhone}
                                {...register("memberPhone")}
                            />
                        </S.PhoneInput>
                    </S.PhoneInputBox>

                    <S.PwInputBox>
                        <S.PwText>비밀번호</S.PwText>
                        <div className={'update-button'}>
                            <button type="button" className={"update"} onClick={handleShowPopup}>비밀번호 변경</button>
                        </div>
                    </S.PwInputBox>

                    <S.BussinessInputBox>
                        <S.BussinessText>사업자 번호</S.BussinessText>
                        <S.BussinessInput>
                            <p className={"number"}>{memberBusinessNumber}</p>
                        </S.BussinessInput>
                    </S.BussinessInputBox>
                </label>
            </S.UpdateBox>

            {/* 비밀번호 변경 팝업 모달 */}
            {isOpenPopup && <PwChange handleShowPopup={handleShowPopup}/>}
        </form>
    );
};

export default SellerUpdate;
