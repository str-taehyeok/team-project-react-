import React, {useState} from 'react';
import S from "./style";
import { Link } from 'react-router-dom';
import CouponPopup from './CouponPopup';


const ProfileList = () => {

    const [isOpenPopup, setIsOpenPopup] = useState(false);

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

    const onChangeInsertCoupon = (e) => {
        const { name, value } = e.target;
        setCouponData({ ...couponData, [name]: value });
    };

    const handleShowPopup = () => {
        setIsOpenPopup(!isOpenPopup)
    }

    const handleSubmit = () => {
        console.log("input 데이터 전송: ", couponData);
        alert("데이터가 전송되었습니다!");
    };

    return (
        <div>
            <S.MyHomeContainer>
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
                            <S.ProfileBoxCouponWrap onClick={handleShowPopup}>
                                <img src={`${process.env.PUBLIC_URL}/assets/images/myhome/coupon-icon.svg`} alt="쿠폰" />
                                <p>쿠폰</p>
                                <p>{couponData.couponCount}</p>
                            </S.ProfileBoxCouponWrap>
                        </S.ProfileBox>
                        <S.MemberInputBoxContainer>
                            <S.MemberInputBoxWrap>
                                <S.MemberInputBox>
                                    <S.h7>이름</S.h7><S.h8>{formData.userName}</S.h8>
                                </S.MemberInputBox>
                                <S.MemberInputBox>
                                    <S.h7>닉네임</S.h7><S.h8>{formData.userNickName}</S.h8>
                                </S.MemberInputBox>
                                <S.MemberInputBox>
                                    <S.h7>아이디(이메일)</S.h7><S.h8>{formData.userEmail}</S.h8>
                                </S.MemberInputBox>
                                <S.MemberInputBox>
                                    <S.h7>휴대폰번호</S.h7><S.h8>{formData.userPhone}</S.h8>
                                </S.MemberInputBox>

                                <S.MemberInputBox>
                                    <S.h7>주소</S.h7>
                                    <S.MemberInputAddress>
                                        <S.h8>{formData.userAdress1}</S.h8><S.h8>{formData.userAdress2}</S.h8>
                                    </S.MemberInputAddress>
                                </S.MemberInputBox>

                            </S.MemberInputBoxWrap>
                        </S.MemberInputBoxContainer>
                    </S.ProfileBoxWrap>
                </S.MyHomeWrap>
            </S.MyHomeContainer>

            {/* 팝업 */}
            {isOpenPopup ? (
                <CouponPopup 
                couponData={couponData} 
                onChangeInsertCoupon={onChangeInsertCoupon} 
                handleShowPopup={handleShowPopup} 
                isOpenPopup={isOpenPopup}
                setIsOpenPopup={setIsOpenPopup}
                />
            ) : (
                <></>
            )}
            
        </div>
    );
};

export default ProfileList;