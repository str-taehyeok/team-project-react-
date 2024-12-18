import React, {useEffect, useState} from 'react';
import S from "./style";
import { useForm } from 'react-hook-form';
import {useNavigate, useParams} from "react-router-dom";

const BusinessUpdate = () => {

    const {id} = useParams();
    const { register, handleSubmit, getValues, formState: {isSubmitting, isSubmitted, errors}} = useForm({mode:"onChange"});
    const navigate = useNavigate();
    const [post, setPost] = useState({});

    const onDelete = () => {
        if (window.confirm("정말 취소하시나요??")) {
            window.location.href = `/admin/list/${id}`;
        } else {
            window.location.href = `/admin/update/${id}`;
        }
    };

    useEffect(() => {
        const getPost = async () => {
            const response = await fetch(`http://localhost:10000/seller-read/${id}`);
            if(!response.ok) return console.error(`데이터가 없습니다.`)
            const post = await response.json();
            return post;
        }

        getPost().then(setPost).catch(console.error);
    }, [id]);

    console.log(post)

    const {memberBusinessName,memberName, memberInternetBusinessNumber, BusinessCategor, memberAdress, memberBusinessNumber } = post;

    return (
        <form onSubmit={handleSubmit(async (data) => {

            await fetch(`http://localhost:10000/seller/update/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    noticeTitle: data.noticeTitle,
                    noticeContent: data.noticeContent,
                })
            })
                .then((res) => res.json())
                .then((res) => {
                    const {id} = res;
                    navigate(`/seller-read/${id}`)
                })
        })}>
            <S.BusinessUpdateWrap>
                <S.BusinessUpdate>
                    <S.BusinessUpdateTitleWrap>
                        <S.BusinessUpdateTitle>
                            <p>사업자정보 관리</p>
                        </S.BusinessUpdateTitle>
                        <S.BusinessUpdateBtn>
                            <button onClick={onDelete}>취소</button>
                            <button disabled={isSubmitting}>완료</button>
                        </S.BusinessUpdateBtn>
                    </S.BusinessUpdateTitleWrap>
                    <S.BusinessBox>
                        <label>
                            <S.BusinessName>
                                <p>상호명</p>
                                <input type="text" name="userBusinessName" defaultValue={memberBusinessName}
                                       {...register("memberBusinessName", {
                                           required: true,
                                       })}
                                />
                            </S.BusinessName>
                        </label>
                        <label>
                            <S.BusinessMemberName>
                                <p>대표자명</p>
                                <input type="text" name="userName" defaultValue={memberName}
                                       {...register("memberName", {
                                           required: true,
                                       })}
                                />
                            </S.BusinessMemberName>
                        </label>
                        <label>
                            <S.InternetBusinessNumber>
                                <p>통신판매업신고번호</p>
                                <input type="text" name="userInternetBusinessNumber"defaultValue={memberInternetBusinessNumber}
                                       {...register("memberInternetBusinessNumber", {
                                           required: true,
                                       })}
                                />
                            </S.InternetBusinessNumber>
                        </label>
                        <label>
                            <S.BusinessCategory>
                                <p>업종</p>
                                <input type="text" name="userBusinessCategory" defaultValue={BusinessCategor}
                                       {...register("BusinessCategor", {
                                           required: true,
                                       })}
                                />
                            </S.BusinessCategory>
                        </label>
                        <label>
                            <S.memberAdress>
                                <p>사업장소재지</p>
                                <input type="text" name="userBusinessAdress " defaultValue={memberAdress}
                                       {...register("memberAdress", {
                                           required: true,
                                       })}
                                />
                            </S.memberAdress>
                        </label>
                        <label>
                            <S.memberAdress>
                                <p>사업자등록번호</p>
                                <input type="text" name="userBusinessNumber " defaultValue={memberBusinessNumber}
                                       {...register("memberBusinessNumber", {
                                           required: true,
                                       })}
                                />
                            </S.memberAdress>
                        </label>
                            <S.BusinessInfoBox>
                                <p>*대표자명 변경 신청은 1:1 문의로 신청 부탁드리며 서류 제출은 1:1 문의 시 함께 제출 가능하며</p>
                                <p>신청 후 판매자센터 &#62; 심사내역 메뉴에서도 가능합니다.</p>
                                <p>대표자명 변경 1:1 문의 연락처 &#62; </p><S.Phone>000-0000-0000</S.Phone>
                            </S.BusinessInfoBox>
                    </S.BusinessBox>
                </S.BusinessUpdate>
            </S.BusinessUpdateWrap>
        </form>
    );
};

export default BusinessUpdate;