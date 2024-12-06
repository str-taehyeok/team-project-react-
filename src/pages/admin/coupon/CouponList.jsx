import React, {useState} from 'react';
import S from "./style";
import { Link } from 'react-router-dom';
const CouponList = () => {

    // const startdateInput = document.querySelector("#start-date");
    // let startDate = `${adminBanner.adminBannerStart}`;
    // startDate = startDate.split(" ")[0];
    // startdateInput.value = startDate;
    //
    // const endDateInput = document.querySelector("#end-date");
    // let endDate = `${adminBanner.adminBannerEnd}`;
    // endDate = endDate.split(" ")[0];
    // endDateInput.value = endDate;


    const [couponData, setCouponData] = useState([
        {
            couponTitle : "이것은 쿠폰타이틀",
            couponCode : "1111111111",
            couponDiscountRate : "50",
            couponStart : "2024-10-04",
            couponEnd : "2024-10-30",
            couponQuantity : "11",
        },
        {
            couponTitle : "이것은 쿠폰타이틀",
            couponCode : "1111111111",
            couponDiscountRate : "50",
            couponStart : "2024-10-04",
            couponEnd : "2024-10-30",
            couponQuantity : "11",
        },
        {
            couponTitle : "이것은 쿠폰타이틀",
            couponCode : "1111111111",
            couponDiscountRate : "50",
            couponStart : "2024-10-04",
            couponEnd : "2024-10-30",
            couponQuantity : "11",
        },
        {
            couponTitle : "이것은 쿠폰타이틀",
            couponCode : "1111111111",
            couponDiscountRate : "50",
            couponStart : "2024-10-04",
            couponEnd : "2024-10-30",
            couponQuantity : "11",
        },
    ]);

    const couponList = couponData.map((coupon, i) => (
        <S.TableRow key={i}>
            <S.TableCell>{i + 1}</S.TableCell>
            <S.TableCell>{coupon.couponTitle}</S.TableCell>
            <S.TableCell>{coupon.couponStart}</S.TableCell>
            <S.TableCell>{coupon.couponEnd}</S.TableCell>
            <S.TableCell>{coupon.couponCode}</S.TableCell>
            <S.TableCell>
                <S.CouponEdit><Link to={"/admin/coupon/coupon-update"}>수정</Link></S.CouponEdit>
                <S.CouponDelete><Link to={"/"}>삭제</Link></S.CouponDelete>
            </S.TableCell>
        </S.TableRow>
    ));

    return (
        <div>
            <S.CouponListWrap>
                <S.CouponListTitleWrap>
                    <S.CouponListTitle>
                        <S.h1>쿠폰 조회</S.h1>
                    </S.CouponListTitle>

                    <S.NoticeSearch>
                        <S.SearchBar>
                            <S.Search type="text" placeholder="쿠폰명을 입력하세요"/>
                        </S.SearchBar>
                        <S.Buttons>
                            <S.SearchBtn type="button">검색</S.SearchBtn>
                            <S.ResetBtn type="button" onClick={() => window.location.reload()}>초기화</S.ResetBtn>
                            <S.NewAddBtn type="button">신규 추가</S.NewAddBtn>
                        </S.Buttons>
                    </S.NoticeSearch>
                </S.CouponListTitleWrap>
                <S.NoticeList>
                    <S.Table>
                        <thead>
                            <S.TableRow>
                                <S.TableCellTh>No</S.TableCellTh>
                                <S.TableCellTh>쿠폰명</S.TableCellTh>
                                <S.TableCellTh>시작일</S.TableCellTh>
                                <S.TableCellTh>종료일</S.TableCellTh>
                                <S.TableCellTh>쿠폰코드</S.TableCellTh>
                                <S.TableCellTh>관리</S.TableCellTh>
                            </S.TableRow>
                        </thead>
                        <tbody>
                            {couponList}
                        </tbody>
                    </S.Table>
                </S.NoticeList>
            </S.CouponListWrap>
        </div>
    );
};

export default CouponList;