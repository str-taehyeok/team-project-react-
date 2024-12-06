import React, {useState} from 'react';
import S from "./style";
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

    const adminCoupon = [
        {
            adminCouponTitle : '쿠폰 제목',
            adminCouponStart : '쿠폰시작날짜',
            adminCouponEnd : '쿠폰마무리날짜',
            adminCouponCode : '쿠폰코드',
        },
    ];

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

    const couponList = couponData.map((coupon, i) => (
        <S.CouponPopupBoxWrap key={coupon.couponCode}>
            <S.h2b>첫 구매 최대 {coupon.couponDiscountRate}%할인</S.h2b>
            <S.h6>유효기간 : {coupon.couponStart} ~ {coupon.couponEnd}까지</S.h6>
        </S.CouponPopupBoxWrap>
    ))

    const couponList = couponData.map((coupon, i) => (
        <table>
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>


        </table>
    ))



    return (
        <div>
            <S.CouponListTitle>
                <S.h1>쿠폰 조회</S.h1>
            </S.CouponListTitle>

            <S.NoticeSearch>
                <S.SearchBar>
                    <S.Search type="text" placeholder="쿠폰명을 입력하세요"/>
                </S.SearchBar>
                <S.Buttons>
                    {/*<button><Link to={"/myhome/profile-update"}>수정하기</Link></button>*/}
                    <S.SearchBtn type="button">검색</S.SearchBtn>
                    <S.ResetBtn type="button" onClick="location.reload();">초기화</S.ResetBtn>
                    <S.NewAddBtn type="button" >신규 추가</S.NewAddBtn>
                </S.Buttons>
            </S.NoticeSearch>

            <S.NoticeList>
                <table>
                    <thead>
                    <tr>
                        <th>No</th>
                        <th>쿠폰명</th>
                        <th>시작일</th>
                        <th>종료일</th>
                        <th>쿠폰코드</th>
                        <th>관리</th>
                    </tr>
                    </thead>
                    <tbody>

                    {/*<c:forEach var="adminCoupon" items="${adminCouponList}" varStatus="status">*/}
                        <tr>
                            {/*<td>${status.index + 1}</td>*/}
                            <td>${adminCoupon.adminCouponTitle}</td>
                            <td>${adminCoupon.adminCouponStart}</td>
                            <td>${adminCoupon.adminCouponEnd}</td>
                            <td>${adminCoupon.adminCouponCode}</td>
                            <td>
                                <div className="change-buttons">
                                    {/*<button type="button" className="edit-btn"*/}
                                    {/*        onClick="location.href='admin-coupon-update.admin?id=${adminCoupon.id}'">수정*/}
                                    {/*</button>*/}
                                    <button type="button" className="delete-btn"
                                            data-id="${adminCoupon.id}">삭제
                                    </button>
                                </div>
                            </td>
                        </tr>
                    {/*</c:forEach>*/}
                    </tbody>
                </table>
            </S.NoticeList>
        </div>
    );
};

export default CouponList;