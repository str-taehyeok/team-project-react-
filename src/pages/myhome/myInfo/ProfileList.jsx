import React from 'react';
import S from "./style";
import { Link } from 'react-router-dom';


const ProfileList = () => {

    const member = [
        {
            name : "김철수",
            nickname : "닉네임",
            email : "test123@gmail.com"
        }
    ]
    return (
        <div>
            <S.MyHomeContainer>
                <S.MyHomeWrap>
                    <S.MyHomeLeft>
                        <p>나의 정보</p>
                        <ul>
                            <li>프로필</li>
                            <li>|</li>
                            <li>좋아요</li>
                            <li>|</li>
                            <li>알림설정</li>
                            <li>|</li>
                            <li>비밀번호 변경</li>
                        </ul>
                    </S.MyHomeLeft>
                    <S.UpdateButtonWrap>
                        <button><p>수정하기</p></button>
                    </S.UpdateButtonWrap>
                    <S.ProfileBoxWrap>
                        <S.ProfileBox>
                            <img src={"#"} alt="프로필사진"/>
                            <p>Jane</p>
                            <div></div>
                            <S.ProfileBoxCouponWrap>
                                <Link to={"/"}><img src={`${process.env.PUBLIC_URL}/assets/images/myhome/coupon-icon.svg`} alt="쿠폰" /></Link>
                                <p>쿠폰</p>
                                <p>쿠폰수량</p>
                            </S.ProfileBoxCouponWrap>
                        </S.ProfileBox>
                        <S.MemberInputBoxContainer>
                            <S.MemberInputBoxWrap>
                                <S.MemberInputTagWrap>
                                    <p>이름</p>
                                    <p>닉네임</p>
                                    <p>아이디(이메일)</p>
                                    <p>휴대폰번호</p>
                                    <p>주소</p>
                                </S.MemberInputTagWrap>
                                <S.MemberInputWrap>
                                    <p>이름</p>
                                    <p>닉네임</p>
                                    <p>아이디</p>
                                    <p>휴대폰번호</p>
                                    <p>주소1</p>
                                    <p>주소2</p>
                                </S.MemberInputWrap>
                            </S.MemberInputBoxWrap>
                        </S.MemberInputBoxContainer>
                    </S.ProfileBoxWrap>
                </S.MyHomeWrap>
            </S.MyHomeContainer>
        </div>
    );
};

export default ProfileList;