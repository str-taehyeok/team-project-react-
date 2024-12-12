import React from 'react';
import S from "./style";
import { useForm } from 'react-hook-form';
import {useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';
const CouponWrite = () => {

const { register, handleSubmit, formState: { isSubmitting }} = useForm({ mode: 'onChange' });
const memberId = 1;
const navigate = useNavigate();

    return (
        <S.CouponListWrap>
            <S.CouponForm onSubmit={handleSubmit(async (data) => {
                await fetch("http://localhost:10000/coupon/write",{
                    method : "POST",
                    headers : {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        memberId : memberId,
                        couponTitle : data.couponTitle,
                        couponCategory : data.couponCategory,
                        couponCategoryAnimal : data.couponCategoryAnimal,
                        couponCode : data.couponCode,
                        couponStart : data.couponStart,
                        couponEnd : data.couponEnd,
                        couponContent : data.couponContent,
                        couponQuantity : data.couponQuantity,
                        couponDiscountRate : data.couponDiscountRate
                    })
                })
                    .then((res) => res.json())
                    .then((res) => {
                        alert('데이터가 성공적으로 전송되었습니다!');
                        navigate(`/admin/coupon`)
                    })
                    .catch((error) => {
                        console.error('에러발생 :', error);
                        alert('데이터 전송 중 오류가 발생하였습니다.');
                    })

        })}>


                <S.CouponListTitle>
                    <S.h1>쿠폰 신규등록</S.h1>
                </S.CouponListTitle>

                <S.Container>

                    <S.Box1>
                        <S.Label htmlFor="eventTitle">쿠폰 명</S.Label>
                        <S.Input
                            id="eventTitle"
                            {...register("couponTitle", { required: true })}
                            placeholder="ex) 쿠폰이벤트 기획전 -1"
                        />
                    </S.Box1>

                    <S.Box1>
                        <S.Label htmlFor="coupon-code">쿠폰 코드</S.Label>
                        <S.Input
                            id="coupon-code"
                            {...register("couponCode", {required : true })}
                            placeholder="쿠폰 번호 16자리를 입력해 주세요. '-'제외"
                            maxLength="16"
                        />
                    </S.Box1>

                    <S.Box1>
                        <S.Label htmlFor="event-period">쿠폰 기간 (쿠폰 유효기간)</S.Label>
                        <S.DateInputWrap>
                            <S.DateInput
                                type="date"
                                id="start-date"
                                {...register("couponStart", {required : true })}
                            />
                        <S.Span>~</S.Span>
                        <S.DateInput
                            type="date"
                            id="end-date"
                            {...register("couponEnd", {required : true })}
                        />
                        </S.DateInputWrap>
                    </S.Box1>

                    <S.Box1>
                        <S.Label htmlFor="coupon-category">쿠폰 카테고리</S.Label>
                        <S.CouponCategory
                            {...register("couponCategory",{required : true })}
                        >
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
                        <S.Textarea
                            id="details"
                            {...register("couponContent",{required : true })}
                            rows="4"
                            placeholder="내용을 입력해주세요. (500자 이내)"
                            maxLength="500"
                        >
                        </S.Textarea>
                    </S.Box1>

                    <S.Box1>
                        <S.Label htmlFor="coupon-quantity">쿠폰 수량제한</S.Label>
                        <S.Input
                            type="number"
                            id="coupon-quantity"
                            {...register("couponQuantity", {required : true})}
                            placeholder="ex) 1000"
                            min="1"
                        />
                    </S.Box1>

                    <S.DiscountType>
                        <S.Label name="coupon-quantity">쿠폰 할인율</S.Label>
                        <S.Box3>
                            <S.Box2>
                                <S.LabelRadio><input
                                    type="radio"
                                    {...register("couponDiscountRate" , {required : true })}
                                    value="10"
                                /> 10%
                                </S.LabelRadio>
                                <S.LabelRadio><input
                                    type="radio"
                                    {...register("couponDiscountRate" , {required : true })}
                                    value="20"
                                /> 20%
                                </S.LabelRadio>
                                <S.LabelRadioWrap>
                                    <S.LabelRadioCustom><input
                                        type="radio"
                                        {...register("couponDiscountRate", {required: true})}
                                        value="custom"
                                    />직접입력
                                    </S.LabelRadioCustom>
                                    <input
                                        type="number"
                                        {...register("couponDiscountRate", {valueAsNumber: true})}
                                        placeholder="예) 7%"
                                        min="0"
                                        max="100"
                                    />
                                </S.LabelRadioWrap>
                            </S.Box2>
                        </S.Box3>
                    </S.DiscountType>


                </S.Container>
                <S.CouponBtnWrap>
                <S.Box1>
                        <S.CouponWriteBtn type="submit" disabled={isSubmitting}>완료</S.CouponWriteBtn>
                    </S.Box1>
                    <S.Box1>
                        <S.CouponCancelBtn>취소</S.CouponCancelBtn>
                    </S.Box1>
                </S.CouponBtnWrap>

            </S.CouponForm>
        </S.CouponListWrap>
    );
};

export default CouponWrite;
