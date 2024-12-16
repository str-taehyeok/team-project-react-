import React, {useEffect, useState} from 'react';
import S from "./style";
import { Link } from 'react-router-dom';
import CouponPopup from './CouponPopup';
import { useSelector } from "react-redux";

const ProfileList = () => {

    const [isOpenPopup, setIsOpenPopup] = useState(false);
    const { currentUser } = useSelector((state) => state.user);
    const [couponData, setCouponData] = useState([]);

    // console.log(currentUser);
    const id = currentUser.id;
    console.log("아이디",id);



    useEffect(() => {
        const couponData = async () => {
            try {
                const response = await fetch(`http://localhost:10000/coupons/member/${id}`);
                if (!response.ok) {
                    console.error("데이터가 없습니다.");
                    return;
                }
                const data = await response.json();
                setCouponData(data);
            } catch (error) {
                console.error(error);
            }
        };

        couponData();
    }, []);
    console.log("쿠폰데이터", couponData);

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
                <S.MyHomeWrap>
                    <S.UpdateButtonWrap>
                        <button><Link to={"/myhome/profile-update"}>수정하기</Link></button>
                    </S.UpdateButtonWrap>
                    <S.ProfileBoxWrap>
                        <S.ProfileBox>
                            <S.ProfileImage>
                                <img src={`${process.env.PUBLIC_URL}/assets/images/myhome/default-userImg.png`} alt="프로필사진"/>
                                <p>{currentUser.memberNickname}</p>
                            </S.ProfileImage>
                            <S.ProfileBoxCouponWrap onClick={handleShowPopup}>
                                <img src={`${process.env.PUBLIC_URL}/assets/images/myhome/coupon-icon.svg`} alt="쿠폰" />
                                <p>쿠폰</p>
                                <p>{couponData.length}</p>
                            </S.ProfileBoxCouponWrap>
                        </S.ProfileBox>
                        <S.MemberInputBoxContainer>
                            <S.MemberInputBoxWrap>
                                <S.MemberInputBox>
                                    <S.h7>이름</S.h7><S.h8>{currentUser.memberName}</S.h8>
                                </S.MemberInputBox>
                                <S.MemberInputBox>
                                    <S.h7>닉네임</S.h7><S.h8>{currentUser.memberNickname}</S.h8>
                                </S.MemberInputBox>
                                <S.MemberInputBox>
                                    <S.h7>아이디(이메일)</S.h7><S.h8>{currentUser.memberEmail}</S.h8>
                                </S.MemberInputBox>
                                <S.MemberInputBox>
                                    <S.h7>휴대폰번호</S.h7><S.h8>{currentUser.memberPhone}</S.h8>
                                </S.MemberInputBox>
                                <S.MemberInputBox>
                                    <S.h7Address>주소</S.h7Address>
                                    <S.MemberInputAddress>
                                        <S.h8>{currentUser.memberZipcode}</S.h8>
                                        <S.h8>{currentUser.memberAddress}</S.h8>
                                        <S.h8>{currentUser.memberAddressDetail}</S.h8>
                                    </S.MemberInputAddress>
                                </S.MemberInputBox>
                            </S.MemberInputBoxWrap>
                            <S.MemeberUnsubscribe to={"/unsubscribe"}>
                               *즉시탈퇴 &gt; POWPOW 탈퇴하기
                            </S.MemeberUnsubscribe>
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