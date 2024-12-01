import React from 'react';
import S from "./style";
import { Link } from 'react-router-dom';


const ProfileList = () => {

    // const member = [
    //     {
    //         name : "김철수",
    //         nickname : "닉네임",
    //         email : "test123@gmail.com"
    //     }
    // ]
    return (
        <div>
            <S.MyHomeContainer>
                <S.MyHomeWrap>
                    <S.UpdateButtonWrap>
                        <Link to={""}><button><p>수정하기</p></button></Link>
                    </S.UpdateButtonWrap>
                    <S.ProfileBoxWrap>
                        <S.ProfileBox>
                            <S.ProfileImage>
                                <img src={"#"} alt="프로필사진"/>
                                <p>Jane</p>
                            </S.ProfileImage>
                            <S.ProfileBoxCouponWrap>
                                <Link to={"/"}><img src={`${process.env.PUBLIC_URL}/assets/images/myhome/coupon-icon.svg`} alt="쿠폰" /></Link>
                                <p>쿠폰</p>
                                <p>쿠폰수량</p>
                            </S.ProfileBoxCouponWrap>
                        </S.ProfileBox>
                        <S.MemberInputBoxContainer>
                            <S.MemberInputBoxWrap>
                                <S.MemberInputBoxName>
                                    <h5>이름</h5><h6>Jane Ryo</h6>
                                </S.MemberInputBoxName>
                                <S.MemberInputBoxNickname>
                                    <h5>닉네임</h5><h6>Jane</h6>
                                </S.MemberInputBoxNickname>
                                <S.MemberInputBoxEmail>
                                    <h5>아이디(이메일)</h5><h6>example@gmail.com</h6>
                                </S.MemberInputBoxEmail>
                                <S.MemberInputBoxPhone>
                                    <h5>휴대폰번호</h5><h6>01012345678</h6>
                                </S.MemberInputBoxPhone>
                                <S.MemberInputBoxAddress>
                                    <h5>주소</h5>
                                    <S.MemberInputAddress>
                                        <h6>06544</h6><h6>Seoul 34th st.</h6>
                                    </S.MemberInputAddress>
                                </S.MemberInputBoxAddress>
                            </S.MemberInputBoxWrap>
                        </S.MemberInputBoxContainer>
                    </S.ProfileBoxWrap>
                </S.MyHomeWrap>
            </S.MyHomeContainer>
        </div>
    );
};

export default ProfileList;