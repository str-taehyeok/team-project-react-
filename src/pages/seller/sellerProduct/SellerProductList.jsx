import React from 'react';
import S from './style'
import {Link, Outlet} from "react-router-dom";

const productList = [
    {
        id : 1,
        productCategory : "사료",
        productName : "피시포독 그레인프리 참치+스피니치 + 캐롯 85g ,5개",
        productPrice : 11_900,
        productImage1 : "/assets/images/store/dental-dog.png",
        productColor : "Orange",
        productSize : "M",
        productStock : 100,
        productDate : "2023-01-03"

    },
    {
        id : 2,
        productCategory : "사료",
        productName : "피시포독 그레인프리 참치+스피니치 + 캐롯 85g ,5개",
        productPrice : 5_900,
        productImage1 : "/assets/images/store/product2.png",
        productColor : "Gold",
        productSize : "S",
        productStock : 200,
        productDate : "2023-05-03"
    },
    {
        id : 3,
        productCategory : "사료",
        productName : "피시포독 그레인프리 참치+스피니치 + 캐롯 85g ,5개",
        productPrice : 6_500,
        productImage1 : "/assets/images/store/product3.png",
        productColor : "Gradation",
        productSize : "M",
        productStock: 300,
        productDate : "2023-07-03"
    },
    {
        id : 4,
        productCategory : "사료",
        productName : "피시포독 그레인프리 참치+스피니치 + 캐롯 85g ,5개",
        productPrice : 4_000,
        productImage1 : "/assets/images/store/product4.png",
        productColor : "Dark Purple",
        productSize : "L",
        productStock : 50,
        productDate : "2023-03-03"
    },
    {
        id : 5,
        productCategory : "사료",
        productName : "피시포독 그레인프리 참치+스피니치 + 캐롯 85g ,5개",
        productPrice : 12_900,
        productImage1 : "/assets/images/store/product5.png",
        productColor : "Light Purple",
        productSize : "L",
        productStock : 600,
        productDate : "2023-07-03"
    },
    {
        id : 6,
        productCategory : "사료",
        productName : "피시포독 그레인프리 참치+스피니치 + 캐롯 85g ,5개",
        productPrice : 14_000,
        productImage1 : "/assets/images/store/product6.png",
        productColor : "Gold",
        productSize : "S",
        productStock : 100,
        productDate : "2023-01-03"
    },
    {
        id : 7,
        productCategory : "사료",
        productName : "피시포독 그레인프리 참치+스피니치 + 캐롯 85g ,5개",
        productPrice : 7_900,
        productImage1 : "/assets/images/store/dental-dog.png",
        productColor : "Orange",
        productSize : "M",
        productStock : 130,
        productDate : "2023-01-07"
    },
    {
        id : 8,
        productCategory : "사료",
        productName : "피시포독 그레인프리 참치+스피니치 + 캐롯 85g ,5개",
        productPrice : 8_000,
        productImage1 : "/assets/images/store/product2.png",
        productColor : "Gradation",
        productSize : "L",
        productStock : 170,
        productDate : "2023-09-03"
    },
]


const products = productList.map(({productName, productPrice, productImage1}, i) => (
    // <S.BestProduct key={i} >
    //     <Link to={"/product"}>
    //         <img src={productImage1} alt={"상품" + (i + 1)} />
    //         <span>{productName}</span>
    //     </Link>
    //     <span style={{ fontWeight: 700 }}>{productPrice}<br/>원</span>
    //     <button>담기</button>
    // </S.BestProduct>
    <div key={i} >
        <Link to={"/product"}>
            <img src={productImage1} alt={"상품" + (i + 1)} />
            <span>{productName}</span>
        </Link>
        <span style={{ fontWeight: 700 }}>{productPrice}<br/>원</span>
        <button>담기</button>
    </div>
))

const SellerProductList = () => {

    // const [products, setProducts] = useState(productList);
    //
    // // 상품 수정
    // const handleEdit = (productId) => {
    //     console.log(`상품 수정: ${productId}`);
    // };
    //
    // // 상품 삭제
    // const handleDelete = (productId) => {
    //     setProducts(products.filter(product => product.id !== productId));


        return (
            <div>
                <S.NoticeSearch>
                    <S.Search>
                        <input type="text" placeholder="상품명을 입력하세요"/>
                    </S.Search>
                    <S.Buttons>
                        <S.SearchButton>검색</S.SearchButton>
                        <S.ResetButton>초기화</S.ResetButton>
                        <Link to={"/seller/product-write"}><S.NewButton>상품등록</S.NewButton></Link>
                    </S.Buttons>
                </S.NoticeSearch>
                <Outlet/>
                <S.NoticeSearch>
                    <S.Table>
                        <thead>
                        <tr>
                            <th>No</th>
                            <th>이미지</th>
                            <th>상품명</th>
                            <th>판매가</th>
                            <th>분류</th>
                            <th>재고</th>
                            <th>등록일</th>
                            <th>관리</th>
                        </tr>
                        </thead>
                        <tbody>

                        {/*            <tr>*/}
                        {/*                <td>${status.index + 1}</td>*/}
                        {/*                <!-- 행 번호 출력 -->*/}
                        {/*                <td>*/}
                        {/*                    <div className="image">*/}
                        {/*                        <img src="../assets/images/product/${product.productImage}"*/}
                        {/*                             alt="이미지"/>*/}
                        <h1>{products}</h1>
                        {/*                    </div>*/}
                        {/*                </td>*/}
                        {/*                <td>*/}
                        {/*                    <c:out value="${product.productName}"/>*/}
                        {/*                </td>*/}
                        {/*                <td>*/}
                        {/*                    <c:out value="${product.productPrice}원"/>*/}
                        {/*                </td>*/}
                        {/*                <td>*/}
                        {/*                    <c:out value="${product.productType}"/>*/}
                        {/*                </td>*/}
                        {/*                <td className="product-status" data-stock="${product.productStock}"></td>*/}
                        {/*                <td>*/}
                        {/*                    <c:out value="${product.productStock}"/>*/}
                        {/*                </td>*/}
                        {/*                <td>*/}
                        {/*                    <c:out value="${product.productDate}"/>*/}
                        {/*                </td>*/}
                        {/*                <td>*/}
                        {/*                    <div className="change-buttons">*/}
                        {/*                        <button type="button" className="edit-btn"*/}
                        {/*                                onClick="location.href='seller-update.seller?id=${product.id}'">수정*/}
                        {/*                        </button>*/}
                        {/*                        <button type="button" className="delete-btn"*/}
                        {/*                                data-productid="${product.id}">삭제*/}
                        {/*                        </button>*/}
                        {/*                    </div>*/}
                        {/*                </td>*/}
                        {/*            </tr>*/}

                        </tbody>
                    </S.Table>
                </S.NoticeSearch>

                {/*<div className="pop-up">*/}
                {/*    <p>삭제하시겠습니까?</p>*/}
                {/*    <div className="check-buttons">*/}
                {/*        <button type="button" className="delete-btn confirm-btn">확인</button>*/}
                {/*        <button className="cancel-btn">취소</button>*/}
                {/*    </div>*/}
                {/*</div>*/}

                {/*<div className="popup-bg"></div>*/}
            </div>
        );
    };



export default SellerProductList;