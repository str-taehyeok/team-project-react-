import React, {useState} from 'react';
import S from "./style";

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

    // const products = [
    //     {
    //         productImage : "/assets/images/cart/cart-product.png",
    //         productName : "오쥬 바이 로우즈 독 치킨가슴살&호박 파우치 강아지 간식 69g (유통기한 2025-02225까지)",
    //         productStock : 1,
    //         productPrice : 4_500,
    //         productDiscountPrice : 4_050,
    //         productCoupon : 0,
    //         reviewStar: "⭐⭐⭐⭐⭐",
    //         reviewCount: 25,
    //         productCount: 1,
    //         deliveryFee : 0
    //     },
    //     {
    //         productImage : "/assets/images/cart/cart-product-2.png",
    //         productName : "오쥬 바이 로우즈 독 치킨가슴살&호박 파우치 강아지 간식 69g (유통기한 2025-02225까지)",
    //         productStock : 1,
    //         productPrice : 4_500,
    //         productDiscountPrice : 4_050,
    //         productCoupon : 0,
    //         reviewStar: "⭐⭐⭐⭐⭐",
    //         reviewCount: 25,
    //         productCount: 13,
    //         deliveryFee : 0
    //     },
    //     {
    //         productImage : "/assets/images/cart/cart-product-3.png",
    //         productName : "오쥬 바이 로우즈 독 치킨가슴살&호박 파우치 강아지 간식 69g (유통기한 2025-02225까지)",
    //         productStock : 1,
    //         productPrice : 4_500,
    //         productDiscountPrice : 4_050,
    //         productCoupon : 0,
    //         reviewStar: "⭐⭐⭐⭐⭐",
    //         reviewCount: 25,
    //         productCount: 17,
    //         deliveryFee : 0
    //     },
    //     {
    //         productImage : "/assets/images/cart/cart-product-4.png",
    //         productName : "오쥬 바이 로우즈 독 치킨가슴살&호박 파우치 강아지 간식 69g (유통기한 2025-02225까지)",
    //         productStock : 1,
    //         productPrice : 4_500,
    //         productDiscountPrice : 4_050,
    //         productCoupon : 0,
    //         reviewStar: "⭐⭐⭐⭐⭐",
    //         reviewCount: 25,
    //         productCount: 11,
    //         deliveryFee : 0
    //     },
    //     {
    //         productImage : "/assets/images/cart/cart-product-5.png",
    //         productName : "오쥬 바이 로우즈 독 치킨가슴살&호박 파우치 강아지 간식 69g (유통기한 2025-02225까지)",
    //         productStock : 1,
    //         productPrice : 4_500,
    //         productDiscountPrice : 4_050,
    //         productCoupon : 0,
    //         reviewStar: "⭐⭐⭐⭐⭐",
    //         reviewCount: 25,
    //         productCount: 5,
    //         deliveryFee : 0
    //     }
    // ]
    return (
        <S.Frame>
            <S.Title>
                <p>매출조회</p>
            </S.Title>
            <form action="seller-serach-ok.seller" method="post">
                <input type="hidden" name="sellerId" value={""} />
                <S.NoticeSearch>
                    <S.InputGroup>
                        <input type="date" id="start-date" name="startDate" value={""} />
                        <span>~</span>
                        <input type="date" id="end-date" name="endDate" value={""} />
                    </S.InputGroup>
                    <S.Buttons>
                        <S.SearchBtn>검색</S.SearchBtn>
                        <S.ResetBtn>초기화</S.ResetBtn>
                    </S.Buttons>
                </S.NoticeSearch>
            </form>
            <S.NoticeList>
                <S.Table>
                    <S.TableHeader>
                        <S.TableHeaderRow>
                            <S.TableHeaderCell>날짜별</S.TableHeaderCell>
                            <S.TableHeaderCell>주문수량</S.TableHeaderCell>
                            <S.TableHeaderCell>주문금액</S.TableHeaderCell>
                            <S.TableHeaderCell>취소수량</S.TableHeaderCell>
                            <S.TableHeaderCell>취소금액</S.TableHeaderCell>
                            <S.TableHeaderCell>판매금액</S.TableHeaderCell>
                        </S.TableHeaderRow>
                    </S.TableHeader>
                    <tbody>
                    {/*{lists.map((list, index) => (*/}
                        <S.TableRow>
                            <S.TableCell>날짜별</S.TableCell>
                            <S.TableCell>주문 금액</S.TableCell>
                            <S.TableCell>판매 수량</S.TableCell>
                            <S.TableCell>취소수량</S.TableCell>
                            <S.TableCell>취소금액</S.TableCell>
                            <S.TableCell>주문가격 - 판매가격</S.TableCell>
                        </S.TableRow>
                    {/*))}*/}
                    <S.TableFooter>
                        <S.TableFooterCell>합</S.TableFooterCell>
                        <S.TableFooterCell>총 주문 금액</S.TableFooterCell>
                        <S.TableFooterCell>총 판매 수량</S.TableFooterCell>
                        <S.TableFooterCell>총 취소수량</S.TableFooterCell>
                        <S.TableFooterCell>총 취소금액</S.TableFooterCell>
                        <S.TableFooterCell>총 판매가격</S.TableFooterCell>
                    </S.TableFooter>
                    </tbody>
                </S.Table>
            </S.NoticeList>
        </S.Frame>
    );
};

export default SellerRevenueList;
