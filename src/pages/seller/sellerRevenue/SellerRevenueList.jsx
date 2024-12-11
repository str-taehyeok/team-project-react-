import React, {useState} from 'react';
import S from "./style";
import React, {useState} from 'react';

const SellerRevenueList = () => {

    // const lists =

    // const [couponData, setCouponData] = useState([
    //     {
    //         couponCode : "1111111111",
    //         couponDiscountRate : "50",
    //         couponStart : "2024-10-04",
    //         couponEnd : "2024-10-30",
    //         couponQuantity : "11",
    //     },
    //     {
    //         couponCode : "1111111111",
    //         couponDiscountRate : "50",
    //         couponStart : "2024-10-04",
    //         couponEnd : "2024-10-30",
    //         couponQuantity : "11",
    //     },
    //     {
    //         couponCode : "1111111111",
    //         couponDiscountRate : "50",
    //         couponStart : "2024-10-04",
    //         couponEnd : "2024-10-30",
    //         couponQuantity : "11",
    //     },
    //     {
    //         couponCode : "1111111111",
    //         couponDiscountRate : "50",
    //         couponStart : "2024-10-04",
    //         couponEnd : "2024-10-30",
    //         couponQuantity : "11",
    //     },
    // ]);

    const products = [
        {
            productImage : "/assets/images/cart/cart-product.png",
            productName : "오쥬 바이 로우즈 독 치킨가슴살&호박 파우치 강아지 간식 69g (유통기한 2025-02225까지)",
            productStock : 1,
            productPrice : 4_500,
            productDiscountPrice : 4_050,
            productCoupon : 0,
            reviewStar: "⭐⭐⭐⭐⭐",
            reviewCount: 25,
            productCount: 1,
            deliveryFee : 0
        },
        {
            productImage : "/assets/images/cart/cart-product-2.png",
            productName : "오쥬 바이 로우즈 독 치킨가슴살&호박 파우치 강아지 간식 69g (유통기한 2025-02225까지)",
            productStock : 1,
            productPrice : 4_500,
            productDiscountPrice : 4_050,
            productCoupon : 0,
            reviewStar: "⭐⭐⭐⭐⭐",
            reviewCount: 25,
            productCount: 13,
            deliveryFee : 0
        },
        {
            productImage : "/assets/images/cart/cart-product-3.png",
            productName : "오쥬 바이 로우즈 독 치킨가슴살&호박 파우치 강아지 간식 69g (유통기한 2025-02225까지)",
            productStock : 1,
            productPrice : 4_500,
            productDiscountPrice : 4_050,
            productCoupon : 0,
            reviewStar: "⭐⭐⭐⭐⭐",
            reviewCount: 25,
            productCount: 17,
            deliveryFee : 0
        },
        {
            productImage : "/assets/images/cart/cart-product-4.png",
            productName : "오쥬 바이 로우즈 독 치킨가슴살&호박 파우치 강아지 간식 69g (유통기한 2025-02225까지)",
            productStock : 1,
            productPrice : 4_500,
            productDiscountPrice : 4_050,
            productCoupon : 0,
            reviewStar: "⭐⭐⭐⭐⭐",
            reviewCount: 25,
            productCount: 11,
            deliveryFee : 0
        },
        {
            productImage : "/assets/images/cart/cart-product-5.png",
            productName : "오쥬 바이 로우즈 독 치킨가슴살&호박 파우치 강아지 간식 69g (유통기한 2025-02225까지)",
            productStock : 1,
            productPrice : 4_500,
            productDiscountPrice : 4_050,
            productCoupon : 0,
            reviewStar: "⭐⭐⭐⭐⭐",
            reviewCount: 25,
            productCount: 5,
            deliveryFee : 0
        }
    ]
    return (
        <S.Frame>
            <S.DivisionLine />
            <S.Title>
                <S.H1>매출조회</S.H1>
            </S.Title>
            <form action="seller-serach-ok.seller" method="post">
                <input type="hidden" name="sellerId" value={sellerId} />
                <S.NoticeSearch>
                    <S.InputGroup>
                        <S.DateInput type="date" id="start-date" name="startDate" value={startDate} />
                        <S.Span>~</S.Span>
                        <S.DateInput type="date" id="end-date" name="endDate" value={endDate} />
                    </S.InputGroup>
                    <S.Buttons>
                        <S.Button type="submit" className="search-btn">검색</S.Button>
                        <S.Button type="button" className="reset-btn">초기화</S.Button>
                    </S.Buttons>
                </S.NoticeSearch>
            </form>
            <S.NoticeList>
                <S.Table>
                    <S.TableHeader>
                        <S.TableRow>
                            <S.TableHeaderCell>날짜별</S.TableHeaderCell>
                            <S.TableHeaderCell>주문수량</S.TableHeaderCell>
                            <S.TableHeaderCell>주문금액</S.TableHeaderCell>
                            <S.TableHeaderCell>취소수량</S.TableHeaderCell>
                            <S.TableHeaderCell>취소금액</S.TableHeaderCell>
                            <S.TableHeaderCell>총 판매금액</S.TableHeaderCell>
                        </S.TableRow>
                    </S.TableHeader>
                    <tbody>
                    {lists.map((list, index) => (
                        <S.TableRow key={index}>
                            <S.TableCell>{list.cancleProductDate.substring(0, 10)}</S.TableCell>
                            <S.TableCell>{list.totalOrderedCount}</S.TableCell>
                            <S.TableCell>{list.totalOrderedPrice}</S.TableCell>
                            <S.TableCell>{list.totalCancledCount}</S.TableCell>
                            <S.TableCell>{list.totalCancledPrice}</S.TableCell>
                            <S.TableCell>{list.totalOrderedPrice - list.totalCancledPrice}</S.TableCell>
                        </S.TableRow>
                    ))}
                    <S.TableFooter>
                        <S.TableCell>합계</S.TableCell>
                        <S.TableCell>{totalOrderCount}</S.TableCell>
                        <S.TableCell>{totalOrderPrice}</S.TableCell>
                        <S.TableCell>{totalCancleCount}</S.TableCell>
                        <S.TableCell>{totalCanclePrice}</S.TableCell>
                        <S.TableCell>{totalSales}</S.TableCell>
                    </S.TableFooter>
                    </tbody>
                </S.Table>
            </S.NoticeList>
        </S.Frame>
    );
};

export default SellerRevenueList;
