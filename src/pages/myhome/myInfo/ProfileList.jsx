import React, {useState} from 'react';
import S from "./style";
import { Link } from 'react-router-dom';


const ProfileList = () => {

    const [formData, setFormData] = useState({
        userProfileImg: "",
        userName: "Jane Ryo",
        userNickName: "Jane",
        userEmail: "example@gmail.com",
        userPhone: "01012345678",
        userAdress1: "06544",
        userAdress2: "Seoul 34th st."
    });

    const [couponData, setCouponData] = useState({
        couponCode: "1111111111",
        couponDiscount: "50",
        couponDate: "2024-10-04",
        couponCount: "11",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCouponData({ ...couponData, [name]: value });
    };

    const handleSubmit = () => {
        console.log("input 데이터 전송: ", couponData);
        alert("데이터가 전송되었습니다!");
    };


    return (
        <div>
            <S.MyHomeContainer>
                <S.CouponBgWrap>
                    <S.CouponPopupContainer>
                        <Link to={"/"}><img src={`${process.env.PUBLIC_URL}/assets/images/myhome/x-icon.png`}
                                            alt="X아이콘"/></Link>
                        <S.CouponPopupInputWrap>
                            <input type="text" name="couponCode" placeholder="받으신 쿠폰의 코드를 입력하세요" onChange={handleChange}/>
                            <button>쿠폰등록</button>
                        </S.CouponPopupInputWrap>
                        <S.h7b>받으신 쿠폰을 등록하고 간편하게 사용하세요</S.h7b>
                        <S.h7>*등록된 쿠폰중 유효기간이 만료된 쿠폰은 자동 소멸됩니다</S.h7>
                        <S.CouponPopupBoxWrap>
                            <S.h2b>첫 구매 최대 {couponData.couponDiscount}%할인</S.h2b>
                            <S.h6>유효기간 : {couponData.couponDate} ~ {couponData.couponDate}까지</S.h6>
                        </S.CouponPopupBoxWrap>
                    </S.CouponPopupContainer>
                </S.CouponBgWrap>
                <S.MyHomeWrap>
                    <S.UpdateButtonWrap>
                        <button><Link to={"/myhome/profile-update"}>수정하기</Link></button>
                    </S.UpdateButtonWrap>
                    <S.ProfileBoxWrap>
                        <S.ProfileBox>
                            <S.ProfileImage>
                                <img src={`${process.env.PUBLIC_URL}/assets/images/myhome/default-userImg.png`} alt="프로필사진"/>
                                <p>{formData.userNickName}</p>
                            </S.ProfileImage>
                            <S.ProfileBoxCouponWrap>
                                <Link to={"/"}><img src={`${process.env.PUBLIC_URL}/assets/images/myhome/coupon-icon.svg`} alt="쿠폰" /></Link>
                                <p>쿠폰</p>
                                <p>{couponData.couponCount}</p>
                            </S.ProfileBoxCouponWrap>
                        </S.ProfileBox>
                        <S.MemberInputBoxContainer>
                            <S.MemberInputBoxWrap>
                                <S.MemberInputBoxName>
                                    <S.h7>이름</S.h7><S.h8>{formData.userName}</S.h8>
                                </S.MemberInputBoxName>
                                <S.MemberInputBoxNickname>
                                    <S.h7>닉네임</S.h7><S.h8>{formData.userNickName}</S.h8>
                                </S.MemberInputBoxNickname>
                                <S.MemberInputBoxEmail>
                                    <S.h7>아이디(이메일)</S.h7><S.h8>{formData.userEmail}</S.h8>
                                </S.MemberInputBoxEmail>
                                <S.MemberInputBoxPhone>
                                    <S.h7>휴대폰번호</S.h7><S.h8>{formData.userPhone}</S.h8>
                                </S.MemberInputBoxPhone>
                                <S.MemberInputBoxAddress>
                                    <S.h7>주소</S.h7>
                                    <S.MemberInputAddress>
                                        <S.h8>{formData.userAdress1}</S.h8><S.h8>{formData.userAdress2}</S.h8>
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