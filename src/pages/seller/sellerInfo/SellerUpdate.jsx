import React, { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from 'react-router-dom';
import PwChange from './PwChange'; // PwChange 컴포넌트를 import
import S from './style'; // 스타일 import

const SellerUpdate = () => {
    const { id } = useParams();
    const { register, handleSubmit, setValue, formState: { isSubmitting } } = useForm({ mode: "onChange" });
    const navigate = useNavigate();
    const { currentUser } = useSelector((state) => state.user);
    const [post, setPost] = useState({});
    const [isOpenPopup, setIsOpenPopup] = useState(false); // 팝업 상태

    /*팝업 열기/닫기 함수*/
    const handleShowPopup = () => {
        setIsOpenPopup(!isOpenPopup);
    };


    useEffect(() => {
        const getPost = async () => {
            const response = await fetch(`http://localhost:10000/seller/seller-info/${id}`);
            if (!response.ok) return console.error(`데이터가 없습니다.`);
            const post = await response.json();
            setPost(post);

            // `setValue`로 `react-hook-form`의 필드 값을 갱신
            setValue("memberName", post.memberName || '');
            setValue("memberPhone", post.memberPhone || '');
            setValue("memberBank", post.memberBank || '');
            setValue("memberBankAccount", post.memberBankAccount || '');
            setValue("memberPassword", post.memberPassword || '');
        };
        getPost().catch(console.error);
    }, [id, setValue]);

    const { memberName, memberEmail, memberPhone, memberBank, memberBankAccount, memberBusinessNumber } = post;

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
                    memberPassword: data.memberPassword,
                    memberBankAccount: data.memberBankAccount
                })
            })
                .then((res) => res.json())
                .then((res) => {
                    navigate(`/seller/seller-info/${id}`);
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
                </label>
                <label>
                    <S.IdInputBox>
                        <S.IdText>로그인 ID</S.IdText>
                        <S.IdInput>
                            <p className={"email"}>{memberEmail}</p>
                            <button type="button" className={"update"} onClick={handleShowPopup}>이메일 인증</button>
                        </S.IdInput>
                    </S.IdInputBox>
                </label>
                <label>
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
                </label>
                <label>
                    <S.PhoneInputBox>
                        <S.PhoneText>휴대폰 번호</S.PhoneText>
                            <S.PhoneInput>
                                <p className={"number"}>{memberPhone}</p>
                            </S.PhoneInput>
                    </S.PhoneInputBox>
                </label>
                <label>
                    <S.PwInputBox>
                        <S.PwText>비밀번호</S.PwText>
                        <div className={'update-button'}>
                            <p>이메일 인증을 해주세요.(비밀번호 변경 시 다시 로그인 됩니다)</p>
                        </div>
                    </S.PwInputBox>
                </label>
                <label>
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
