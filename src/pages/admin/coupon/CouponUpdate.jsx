import React from 'react';
import S from "./style";
const CouponUpdate = () => {
    return (
        <S.CouponListWrap>
            <S.CouponForm action="admin-coupon-write-ok.admin" method="POST" id="frame">
                <S.CouponListTitle>
                    <S.h1>쿠폰 수정</S.h1>
                </S.CouponListTitle>

                <S.Container>

                    <S.Box1>
                        <S.Label htmlFor="eventTitle">쿠폰 명</S.Label>
                        <S.Input type="text" id="eventTitle" name="adminCouponTitle" placeholder="ex) 쿠폰이벤트 기획전 -1"
                                 required/>
                    </S.Box1>

                    <S.Box1>
                        <S.Label htmlFor="coupon-code">쿠폰 코드</S.Label>
                        <S.Input
                            type="text" id="coupon-code" name="adminCouponCode" placeholder="쿠폰 번호 16자리를 입력해 주세요. '-'제외"
                            maxLength="16" required/>
                    </S.Box1>

                    <S.Box1>
                        <S.Label htmlFor="event-period">쿠폰 기간 (쿠폰 유효기간)</S.Label>
                        <S.DateInputWrap>
                            <S.DateInput type="date" id="start-date" name="adminCouponStart"/>
                            <S.Span>~</S.Span>
                            <S.DateInput type="date" id="end-date" name="adminCouponEnd"/>
                        </S.DateInputWrap>
                    </S.Box1>

                    <S.Box1>
                        <S.Label htmlFor="coupon-category">쿠폰 카테고리</S.Label>
                        <S.CouponCategory name="adminCouponType" required>
                            <option value="category7">강아지 사료/간식</option>
                            <option value="category1">강아지 장난감</option>
                            <option value="category2">강아지 펫웨어</option>
                            <option value="category3">강아지 헬스케어</option>
                            <option value="category4">고양이 사료/간식</option>
                            <option value="category5">고양이 장난감</option>
                            <option value="category6">고양이 펫웨어</option>
                            <option value="category7">고양이 헬스케어</option>
                        </S.CouponCategory>
                    </S.Box1>

                    <S.Box1>
                        <S.Label htmlFor="details">상세 내용</S.Label>
                        <S.Textarea id="details" name="adminCouponContent" rows="4" placeholder="내용을 입력해주세요. (500자 이내)"
                                    maxLength="500" required></S.Textarea>
                    </S.Box1>

                    <S.Box1>
                        <S.Label htmlFor="coupon-quantity">쿠폰 수량제한</S.Label>
                        <S.Input type="number" id="coupon-quantity" name="adminCouponQuantity" placeholder="ex) 1000"
                                 required min="1"/>
                    </S.Box1>

                    <S.DiscountType>
                        <S.Label name="coupon-quantity">쿠폰 할인율</S.Label>
                        <S.Box3>
                            <S.Box2>
                                <S.LabelRadio><input type="radio" name="adminCouponDiscountRate" value="10"/> 10%</S.LabelRadio>
                                <S.LabelRadio><input type="radio" name="adminCouponDiscountRate" value="20"/> 20% </S.LabelRadio>
                                <S.LabelRadioWrap>
                                    <S.LabelRadioCustom><input type="radio" name="adminCouponDiscountRate"
                                                               value="custom"/>직접입력</S.LabelRadioCustom>
                                    <input type="number" className="custom-discount"
                                           name="adminCouponDiscountRateCustom" placeholder="예) 7%" min="0" max="100"
                                           required/>
                                </S.LabelRadioWrap>
                            </S.Box2>
                        </S.Box3>
                    </S.DiscountType>


                </S.Container>
                <S.CouponBtnWrap>
                    <S.Box1>
                        <S.CouponWriteBtn>완료</S.CouponWriteBtn>
                    </S.Box1>
                    <S.Box1>
                        <S.CouponCancelBtn>취소</S.CouponCancelBtn>
                    </S.Box1>
                </S.CouponBtnWrap>

            </S.CouponForm>
        </S.CouponListWrap>
    );
};

export default CouponUpdate;