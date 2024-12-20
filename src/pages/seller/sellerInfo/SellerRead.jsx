import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import S from './style';

const SellerRead = () => {
    const { id } = useParams();
    const [post, setPost] = useState({});
    const navigate = useNavigate();



    useEffect(() => {
        const getPost = async () => {
            const response = await fetch(`http://localhost:10000/seller/seller-info/${id}`);
            if (!response.ok) return console.error('데이터가 없습니다.');
            const post = await response.json();
            setPost(post);
        };

        getPost().catch(console.error);
    }, [id]);

    const { memberName, memberEmail, memberPhone, memberBank, memberBankAccount, memberBusinessNumber } = post;

    console.log(post)

    const onClickDeleteNotice = async () => {
        await fetch(`http://localhost:10000/seller/seller-info/${id}`, {
            method: 'DELETE',
        }).then((res) => {
            navigate('/login');
            console.log(res) //500번대 에러..?
        });
    };

    return (
        <S.UpdateBox>
            <S.ListButton>
                <S.Title>판매자정보</S.Title>
                <Link to={`/seller/seller-info/${id}/update/${id}`}>
                    <button className={'update'}>수정하기</button>
                </Link>
            </S.ListButton>
            <label>
                <S.NameInputBox>
                    <S.NameText>이름</S.NameText>
                    <span>|</span>
                    <S.NameInput>
                        <p>{memberName}</p>
                    </S.NameInput>
                </S.NameInputBox>
            </label>
            <label>
                <S.IdInputBox>
                    <S.IdText>로그인 ID</S.IdText>
                    <span>|</span>
                    <S.IdInput>
                        <p>{memberEmail}</p>
                    </S.IdInput>
                </S.IdInputBox>
            </label>
            <label>
                <S.PayInputBox>
                    <S.PayText>정산 계좌 정보</S.PayText>
                    <span>|</span>
                    <S.BankInput>
                        <p>{memberBank}</p>
                    </S.BankInput>
                </S.PayInputBox>
                <S.BankAccInput>
                    <p>{memberBankAccount}</p>
                </S.BankAccInput>
            </label>
            <label>
                <S.PhoneInputBox>
                    <S.PhoneText>휴대폰 번호</S.PhoneText>
                    <span>|</span>
                    <S.PhoneInput>
                        <p className={"number1"}>{memberPhone}</p>
                    </S.PhoneInput>
                </S.PhoneInputBox>
            </label>
            <label>
                <S.Update>
                    <S.BussinessText>비밀번호</S.BussinessText>
                    <span>|</span>
                    <p>***************</p>
                </S.Update>
            </label>
            <label>
                <S.BussinessInputBox>
                    <S.BussinessText>사업자 번호</S.BussinessText>
                    <span>|</span>
                    <S.BussinessInput>
                        <p>{memberBusinessNumber}</p>
                    </S.BussinessInput>
                </S.BussinessInputBox>
            </label>
            <S.Delete>
                <S.BussinessText>탈퇴하기</S.BussinessText>
                <div className={'delete-button'}>
                    <button className={'delete'} onClick={onClickDeleteNotice}>
                        탈퇴하기
                    </button>
                </div>
            </S.Delete>
        </S.UpdateBox>
    );
};

export default SellerRead;
