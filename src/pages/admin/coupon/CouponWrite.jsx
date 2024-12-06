import React from 'react';
import S from "./style";
import { Link } from 'react-router-dom';

const CouponWrite = () => {
    return (
        <S.CouponListWrap>
            <form action="admin-coupon-write-ok.admin" method="POST" id="frame">

                <S.CouponListTitle>
                    <S.h1>쿠폰 신규등록</S.h1>
                </S.CouponListTitle>

                <S.Container>

                    <S.Box1>
                        <S.Label htmlFor="eventTitle">쿠폰 이름</S.Label>
                        <S.Input
                            type="text"
                            id="eventTitle"
                            name="adminCouponTitle"
                            placeholder="ex) 쿠폰이벤트 기획전 -1"
                            required
                        />
                    </S.Box1>

                    <S.Box1>
                        <S.Label htmlFor="coupon-code">쿠폰 코드</S.Label>
                        <S.Input
                            type="text"
                            id="coupon-code"
                            name="adminCouponCode"
                            placeholder="쿠폰 번호 16자리를 입력해 주세요. '-'제외"
                            maxLength="16"
                            required
                        />
                    </S.Box1>

                    <S.Box1>
                        <S.Label htmlFor="event-period">이벤트 기간 (쿠폰 유효기간)</S.Label>
                        <S.DateInput
                            type="date"
                            id="start-date"
                            name="adminCouponStart"
                        />
                        <S.Span>~</S.Span>
                        <S.DateInput
                            type="date"
                            id="end-date"
                            name="adminCouponEnd"
                        />
                    </S.Box1>

                </S.Container>

                <S.Box1>
                    <button type="submit">저장</button>
                </S.Box1>

            </form>
        </S.CouponListWrap>
    );
};

export default CouponWrite;
