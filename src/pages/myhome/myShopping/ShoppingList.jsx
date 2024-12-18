import React, {useState} from 'react';
import S from "../myShopping/style";
import {useSelector} from "react-redux";
import CouponPopup from "../myInfo/CouponPopup";


const ShoppingList = () => {

    const [isOpenPopup, setIsOpenPopup] = useState(false);
    const { currentUser } = useSelector((state) => state.user);
    const [couponData, setCouponData] = useState([]);

    const onChangeInsertCoupon = (e) => {
        const { name, value } = e.target;
        setCouponData({ ...couponData, [name]: value });
    };

    const handleShowPopup = () => {
        setIsOpenPopup(!isOpenPopup)
    }

    return (
        <div>
            <S.ShoppingListContainer>
                <p>나의 쇼핑</p>
                <S.ProfileContainer>
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
                    <S.ShoppingRight>
                        <S.InputGroup>
                            <input type="date" id="start-date" name="startDate" value={""} />
                            <span>-</span>
                            <input type="date" id="end-date" name="endDate" value={""} />
                            <button>검색</button>
                        </S.InputGroup>
                        <S.OrderBox>
                            <S.OrderList>
                                <S.OrderImg></S.OrderImg>
                                <S.OrderTextWrap>
                                    <S.OrderTextName>상품이름</S.OrderTextName>
                                    <S.OrderTextPrice>상품가격</S.OrderTextPrice>
                                    <S.OrderTextCount>상품갯수</S.OrderTextCount>

                                </S.OrderTextWrap>

                            </S.OrderList>
                        </S.OrderBox>
                    </S.ShoppingRight>

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
                </S.ProfileContainer>
            </S.ShoppingListContainer>
        </div>
    );
};

export default ShoppingList;