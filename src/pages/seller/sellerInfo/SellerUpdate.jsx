import React, {useEffect, useState} from 'react';
import {Link, useNavigate, useParams} from 'react-router-dom';
import S from '../sellerInfo/style';
import {useForm} from "react-hook-form";


const SellerUpdate = () => {

    const {id} = useParams();
    const [member, setMember] = useState({});
    const navigate = useNavigate();

    const{register, handleSubmit, getValues, formState:{isSubmitting, errors}} = useForm({mode:"onChange"});
    const memberId = 1;

    useEffect(() => {

        const getMember = async () => {
            const response = await fetch(`http://localhost:10000/seller/seller-info/${id}`);
            if(!response.ok) return console.error(`데이터가 없습니다.`)
            const member = await response.json();
            return member;
        }

        getMember().then(setMember).catch(console.error);
    }, [id]);

    console.log(member)

    const {memberName} = member;


    // const handleSubmit = () => {
    //     console.log("input 데이터 전송: ", formData);
    //     alert("데이터가 전송되었습니다!");
    // };
    //
    // const [formData, setFormData] = useState([
    //     {
    //         memberName : "",
    //         memberNickName : "",
    //         memberEmail : "",
    //         memberBank : "",
    //         memberAccount : "",
    //         memberPhone : "",
    //         memberPassword : ""
    //     }
    // ]);
    //
    // const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     setFormData({ ...formData, [name]: value });
    // };


    return (
        <form onSubmit={handleSubmit(async (data) => {
            console.log("전송할 데이터 :", data)
                await fetch(`http://localhost:10000/seller/seller-info/${id}`, {
                    method : "PUT",
                    headers : {
                        "Content-Type" : "application/json"
                    },
                    body : JSON.stringify({
                        memberName : data.memberName,
                        memberId : memberId
                    })
                })
                    .then((res) => res.json())
                    .then((res) => {
                        console.log(res)
                        const {id} = res;
                        navigate(`/seller/${id}`)
                    })
        })}>
            <label>
                <p>회원 이름</p>
                <input type={"text"} placeholder='이봐 원하는 이름을 입력해보라구' defaultValue={memberName}
                    {...register("memberName", {
                        required : true,
                    })}
                />
                {errors && errors.memberName?.type === "required" && (
                    <p>이봐 너의 이름이 없다구!</p>
                )}

                {/*<S.SellerUpdateWrap>*/}
                {/*    <S.SellerUpdate>*/}
                {/*        <S.SellerTitleWrap>*/}
                {/*            <S.SellerTitle>*/}
                {/*                <p>판매자정보 수정</p>*/}
                {/*            </S.SellerTitle>*/}
                {/*            <S.SellterBtn>*/}
                {/*                <div>취소</div><button onClick={handleSubmit}><Link to={"/seller-list"}>완료</Link></button>*/}
                {/*            </S.SellterBtn>*/}
                {/*        </S.SellerTitleWrap>*/}
                {/*        <S.SellerBox>*/}
                {/*            <S.SellerName>*/}
                {/*                <p>이름</p>*/}
                {/*                <input type="text" name="userName" placeholder="이름을 입력하세요" value={formData.memberName} onChange={handleChange}/>*/}
                {/*            </S.SellerName>*/}
                {/*            <S.SellerId>*/}
                {/*                <p>로그인ID</p>*/}
                {/*                <input type="text" name="userName" placeholder="아이디를 입력하세요" value={formData.memberName} onChange={handleChange}/>*/}
                {/*            </S.SellerId>*/}
                {/*            <S.SellerEmail>*/}
                {/*                <p>본인확인 이메일</p>*/}
                {/*                <input type="text" name="userEmail" placeholder="이메일을 입력하세요" value={formData.memberEmail}*/}
                {/*                       onChange={handleChange}/>*/}
                {/*            </S.SellerEmail>*/}
                {/*            <S.SellerBank>*/}
                {/*                <p>정산계좌정보</p>*/}
                {/*                <input type="text" name="userBank" placeholder="------ 은행 선택 ------" value={formData.memberBank}*/}
                {/*                       onChange={handleChange}/>*/}
                {/*            </S.SellerBank>*/}
                {/*            <S.SellerAccount>*/}
                {/*                <input type="text" name="userAccount" placeholder="하이픈(-)없이 숫자만 입력해주세요." value={formData.memberAccount}*/}
                {/*                       onChange={handleChange}/>*/}
                {/*            </S.SellerAccount>*/}
                {/*            <S.SellerPhone>*/}
                {/*                <p>휴대폰번호</p>*/}
                {/*                <input type="text" name="userPhone" placeholder="휴대폰 번호를 입력하세요" value={formData.memberPhone}*/}
                {/*                       onChange={handleChange}/>*/}
                {/*            </S.SellerPhone>*/}
                {/*            <S.SellerPassword>*/}
                {/*                <p>비밀번호</p>*/}
                {/*            </S.SellerPassword>*/}
                {/*        </S.SellerBox>*/}
                {/*    </S.SellerUpdate>*/}
                {/*</S.SellerUpdateWrap>*/}
            </label>

            <button disabled={isSubmitting}>수정하기</button>

        </form>

    );
};

export default SellerUpdate;