import React, {useState} from 'react';
import S from "./style";
import { Link } from 'react-router-dom';
import CouponPopup from './CouponPopup';


const ProfileList = () => {

    const [isOpenPopup, setIsOpenPopup] = useState(false);

    // const formData = {
    //         memberImage : "",
    //         memberName : "Jane Ryo",
    //         memberNickName : "Jane",
    //         memberEmail : "example@gmail.com",
    //         memberPhone : "01012345678",
    //         memberAdress : "06544",
    //         memberAdressDetail : "Seoul 34th st."
    //     };

    



    const [couponData, setCouponData] = useState([
        {
            couponCode : "1111111111",
            couponDiscountRate : "50",
            couponStart : "2024-10-04",
            couponEnd : "2024-10-30",
            couponQuantity : "11",
        },
        {
            couponCode : "1111111111",
            couponDiscountRate : "50",
            couponStart : "2024-10-04",
            couponEnd : "2024-10-30",
            couponQuantity : "11",
        },
        {
            couponCode : "1111111111",
            couponDiscountRate : "50",
            couponStart : "2024-10-04",
            couponEnd : "2024-10-30",
            couponQuantity : "11",
        },
        {
            couponCode : "1111111111",
            couponDiscountRate : "50",
            couponStart : "2024-10-04",
            couponEnd : "2024-10-30",
            couponQuantity : "11",
        },
    ]);

    const onChangeInsertCoupon = (e) => {
        const { name, value } = e.target;
        setCouponData({ ...couponData, [name]: value });
    };

    const handleShowPopup = () => {
        setIsOpenPopup(!isOpenPopup)
    }

    return (
        <div>
            <S.MyHomeContainer>
                {/*<S.MyHomeWrap>*/}
                {/*    <S.UpdateButtonWrap>*/}
                {/*        <button><Link to={"/myhome/profile-update"}>수정하기</Link></button>*/}
                {/*    </S.UpdateButtonWrap>*/}
                {/*    <S.ProfileBoxWrap>*/}
                {/*        <S.ProfileBox>*/}
                {/*            <S.ProfileImage>*/}
                {/*                <img src={`${process.env.PUBLIC_URL}/assets/images/myhome/default-userImg.png`} alt="프로필사진"/>*/}
                {/*                <p>{formData.memberNickName}</p>*/}
                {/*            </S.ProfileImage>*/}
                {/*            <S.ProfileBoxCouponWrap onClick={handleShowPopup}>*/}
                {/*                <img src={`${process.env.PUBLIC_URL}/assets/images/myhome/coupon-icon.svg`} alt="쿠폰" />*/}
                {/*                <p>쿠폰</p>*/}
                {/*                <p>{couponData.length}</p>*/}
                {/*            </S.ProfileBoxCouponWrap>*/}
                {/*        </S.ProfileBox>*/}
                {/*        <S.MemberInputBoxContainer>*/}
                {/*            <S.MemberInputBoxWrap>*/}
                {/*                <S.MemberInputBox>*/}
                {/*                    <S.h7>이름</S.h7><S.h8>{formData.memberName}</S.h8>*/}
                {/*                </S.MemberInputBox>*/}
                {/*                <S.MemberInputBox>*/}
                {/*                    <S.h7>닉네임</S.h7><S.h8>{formData.memberNickName}</S.h8>*/}
                {/*                </S.MemberInputBox>*/}
                {/*                <S.MemberInputBox>*/}
                {/*                    <S.h7>아이디(이메일)</S.h7><S.h8>{formData.memberEmail}</S.h8>*/}
                {/*                </S.MemberInputBox>*/}
                {/*                <S.MemberInputBox>*/}
                {/*                    <S.h7>휴대폰번호</S.h7><S.h8>{formData.memberPhone}</S.h8>*/}
                {/*                </S.MemberInputBox>*/}
                {/*                <S.MemberInputBox>*/}
                {/*                    <S.h7Address>주소</S.h7Address>*/}
                {/*                    <S.MemberInputAddress>*/}
                {/*                        <S.h8>{formData.memberAdress}</S.h8>*/}
                {/*                        <S.h8>{formData.memberAdress}</S.h8>*/}
                {/*                        <S.h8>{formData.memberAdressDetail}</S.h8>*/}
                {/*                    </S.MemberInputAddress>*/}
                {/*                </S.MemberInputBox>*/}
                {/*            </S.MemberInputBoxWrap>*/}
                {/*            <S.MemeberUnsubscribe to={"/unsubscribe"}>*/}
                {/*               *즉시탈퇴 &gt; POWPOW 탈퇴하기*/}
                {/*            </S.MemeberUnsubscribe>*/}
                {/*        </S.MemberInputBoxContainer>*/}
                {/*    </S.ProfileBoxWrap>*/}
                {/*</S.MyHomeWrap>*/}
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