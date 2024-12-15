import React, { useEffect, useState } from 'react';
import S from './style';
import { Link, Outlet, useParams } from 'react-router-dom';

const SellerProductList = () => {
    const { id } = useParams();
    // const navigate = useNavigate();

    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [isPopupVisible, setIsPopupVisible] = useState(false);



    useEffect(() => {
        const getProducts = async () => {
            const response = await fetch(`http://localhost:10000/products/products`);
            if (!response.ok) return console.error('데이터가 없습니다.');
            const data = await response.json();
            setProducts(data);
            setFilteredProducts(data); // 필터링 상태도 초기화
        };
        getProducts().catch(console.error);
    }, [id]);

    const getDelete = async (id) => {
        try {
            const response = await fetch(`http://localhost:10000/products/product/${id}`, {
                method: "DELETE",
            });
            if (!response.ok) {
                throw new Error("삭제 실패");
            }
            setProducts(products.filter(pet => pet.id !== id));
            alert("삭제되었습니다.");
        } catch (error) {
            console.error(error.message);
            alert("삭제 중 오류가 발생했습니다.");
        }
    };

    useEffect(() => {
        setFilteredProducts(products);
    }, [products]);

    const handleSearch = () => {
        const filtered = products.filter(product =>
            product.productName.includes(searchTerm)
        );
        setFilteredProducts(filtered);
    };

    const resetSearch = () => {
        setSearchTerm('');
        setFilteredProducts(products);
    };

    // 삭제 팝업 열기
    const openDeletePopup = (productId) => {
        setIsPopupVisible(true);
    };

    const cancelDelete = () => {
        setIsPopupVisible(false);
    };

    const product = filteredProducts.length === 0 ? (
        <tr><td colSpan="8">상품이 없습니다.</td></tr>
    ) : (
        filteredProducts.map((product, index) => (
            <tr key={product.id}>
                <td>{index + 1}</td>
                <td>
                    <S.Image>
                        <img src={product.productImage1} alt={`상품 ${index + 1}`} />
                    </S.Image>
                </td>
                <td><S.Name>{product.productName}</S.Name></td>
                <td>{product.productPrice.toLocaleString()}원</td>
                <td>{product.productCategory}</td>
                <td>{product.productStock}</td>
                <td>{product.productDate}</td>
                <td>
                    <S.ManageButtons>
                        <S.EditButton><Link to={`/seller/product-update/${product.id}`}>수정</Link></S.EditButton>
                        <S.DeleteButton onClick={() => openDeletePopup()}>삭제</S.DeleteButton>
                    </S.ManageButtons>
                </td>
                <S.Line></S.Line>
            </tr>
        ))
    );

    return (
        <div>
            <Outlet />
            <S.NoticeSearch>
                <S.Search>
                    <input
                        type="text"
                        placeholder="상품명을 입력하세요"
                        value={searchTerm}
                        onChange={e => setSearchTerm(e.target.value)}
                    />
                </S.Search>
                <S.Buttons>
                    <S.SearchButton onClick={handleSearch}>검색</S.SearchButton>
                    <S.ResetButton onClick={resetSearch}>초기화</S.ResetButton>
                    <Link to="/seller/product-write">
                        <S.NewButton>상품등록</S.NewButton>
                    </Link>
                </S.Buttons>
            </S.NoticeSearch>
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
                <S.Line></S.Line>
                </thead>
                <tbody>
                {product}
                </tbody>
            </S.Table>
            {isPopupVisible && (
                <>
                    <S.Popup>
                        <p>삭제하시겠습니까?</p>
                        <S.CheckButton>
                            <S.DeleteButton onClick={() => getDelete(id)}>삭제</S.DeleteButton>
                            <S.CancelButton onClick={cancelDelete}>취소</S.CancelButton>
                        </S.CheckButton>
                    </S.Popup>
                </>
            )}
        </div>
    );
};

export default SellerProductList;

// import React, { useState } from 'react';
// import S from './style'
// import {Link, Outlet} from "react-router-dom";
//
//
// const SellerProductList = () => {
//
//     const [productList, setProductList] = useState([
//         {
//             id : 1,
//             productCategory : "헬스케어",
//             productName : "강아지 전용 치약 + 칫솔 기획 세트 (트레이 / 칫솔핸들러 포함)",
//             productPrice : 11_900,
//             productImage1 : "/assets/images/store/dental-dog.png",
//             productColor : "Orange",
//             productSize : "M",
//             productStock : 100,
//             productDate : "2023-01-03"
//
//         },
//         {
//             id : 2,
//             productCategory : "헬스케어",
//             productName : "덴탈케어 분말형",
//             productPrice : 5_900,
//             productImage1 : "/assets/images/store/product2.png",
//             productColor : "Gold",
//             productSize : "S",
//             productStock : 200,
//             productDate : "2023-05-03"
//         },
//         {
//             id : 3,
//             productCategory : "사료",
//             productName : "피시포독 그레인프리 참치+스피니치 + 캐롯 85g ,5개",
//             productPrice : 6_500,
//             productImage1 : "/assets/images/store/product3.png",
//             productColor : "Gradation",
//             productSize : "M",
//             productStock: 300,
//             productDate : "2023-07-03"
//         },
//         {
//             id : 4,
//             productCategory : "간식",
//             productName : "동결건조 치킨) 어린 견종을 위한 건강 간식 85g ,1통",
//             productPrice : 4_000,
//             productImage1 : "/assets/images/store/product4.png",
//             productColor : "Dark Purple",
//             productSize : "L",
//             productStock : 50,
//             productDate : "2023-03-03"
//         },
//         {
//             id : 5,
//             productCategory : "간식",
//             productName : "저염 황태채",
//             productPrice : 12_900,
//             productImage1 : "/assets/images/store/product5.png",
//             productColor : "Light Purple",
//             productSize : "L",
//             productStock : 600,
//             productDate : "2023-07-03"
//         },
//         {
//             id : 6,
//             productCategory : "헬스케어",
//             productName : "미네랄 분무기형 소독제품 (리필 2팩 포함)",
//             productPrice : 14_000,
//             productImage1 : "/assets/images/store/product6.png",
//             productColor : "Gold",
//             productSize : "S",
//             productStock : 100,
//             productDate : "2023-01-03"
//         },
//         {
//             id : 7,
//             productCategory : "사료",
//             productName : "스피루리나 구강 건강 도움 (메디몰) 고체형 100g",
//             productPrice : 7_900,
//             productImage1 : "/assets/images/store/dental-dog.png",
//             productColor : "Orange",
//             productSize : "M",
//             productStock : 130,
//             productDate : "2023-01-07"
//         },
//         {
//             id : 8,
//             productCategory : "사료",
//             productName : "피시포독 그레인프리 참치+스피니치 + 캐롯 85g ,5개",
//             productPrice : 8_000,
//             productImage1 : "/assets/images/store/product2.png",
//             productColor : "Gradation",
//             productSize : "L",
//             productStock : 170,
//             productDate : "2023-09-03"
//         },
//     ]);
//
//     // 검색 상태 관리
//     const [searchTerm, setSearchTerm] = useState('');
//     const [filteredProducts, setFilteredProducts] = useState(productList);
//
//     // 삭제 관련 상태 관리
//     const [isPopupVisible, setIsPopupVisible] = useState(false);
//     const [productToDelete, setProductToDelete] = useState(null);
//
//     // 검색 핸들러
//     const handleSearch = () => {
//         const filtered = productList.filter(product =>
//             product.productName.includes(searchTerm)
//         );
//         setFilteredProducts(filtered);
//     };
//
//     // 검색어 입력 핸들러
//     const handleSearchInput = (e) => {
//         setSearchTerm(e.target.value);
//     };
//
//     // 검색 초기화
//     const resetSearch = () => {
//         setSearchTerm('');
//         setFilteredProducts(productList);
//     };
//
//     // 삭제 팝업 열기
//     const openDeletePopup = (productId) => {
//         setProductToDelete(productId);
//         setIsPopupVisible(true);
//     };
//
//     // 삭제 확인
//     const confirmDelete = () => {
//         const updatedProductList = productList.filter(product => product.id !== productToDelete);
//         setProductList(updatedProductList);
//         setFilteredProducts(updatedProductList);
//         setIsPopupVisible(false);
//         setProductToDelete(null);
//     };
//
//     // 삭제 취소
//     const cancelDelete = () => {
//         setIsPopupVisible(false);
//         setProductToDelete(null);
//     };
//
//     // 재고 상태 표시
//     // const getStockStatus = (stock) => {
//     //     return stock > 0 ? '판매중' : '품절';
//     // };
//
//
//     const product = filteredProducts.map((product, index) => (
//         <tr key={product.id}>
//             <td>{index + 1}</td>
//             <td>
//                 <S.Image>
//                     <img src={product.productImage1} alt={`상품 ${index + 1}`}/>
//                 </S.Image>
//             </td>
//             <td><S.Name>{product.productName}</S.Name></td>
//             <td>{product.productPrice.toLocaleString()}원</td>
//             <td>{product.productCategory}</td>
//             <td>{product.productStock}</td>
//             <td>{product.productDate}</td>
//             <td>
//                 <S.ManageButtons>
//                     <S.EditButton><Link to={"/seller/product-update"}>수정</Link></S.EditButton>
//                     <S.DeleteButton onClick={() => openDeletePopup(product.id)}>삭제</S.DeleteButton>
//                 </S.ManageButtons>
//             </td>
//         </tr>
//     ));
//
//     return (
//         <div>
//             <Outlet/>
//             <S.NoticeSearch>
//                 <S.Search>
//                     <input type="text" placeholder="상품명을 입력하세요" value={searchTerm}  onChange={handleSearchInput}/>
//                 </S.Search>
//                 <S.Buttons>
//                     <S.SearchButton onClick={handleSearch}>검색</S.SearchButton>
//                     <S.ResetButton onClick={resetSearch}>초기화</S.ResetButton>
//                     <Link to={"/seller/product-write"}><S.NewButton>상품등록</S.NewButton></Link>
//                 </S.Buttons>
//             </S.NoticeSearch>
//             <S.NoticeSearch>
//                 <S.Table>
//                     <thead>
//                     <tr>
//                         <th>No</th>
//                         <th>이미지</th>
//                         <th>상품명</th>
//                         <th>판매가</th>
//                         <th>분류</th>
//                         <th>재고</th>
//                         <th>등록일</th>
//                         <th>관리</th>
//                     </tr>
//                     <S.Line></S.Line>
//                     </thead>
//                     <tbody>
//                     {product}
//                     </tbody>
//                 </S.Table>
//             </S.NoticeSearch>
//             {isPopupVisible && (
//                 <>
//                     <S.Popup isVisible={isPopupVisible}>
//                         <p>삭제하시겠습니까?</p>
//                         <S.CheckButton>
//                             <S.DeleteButton onClick={confirmDelete}>삭제</S.DeleteButton>
//                             <S.CancelButton onClick={cancelDelete}>취소</S.CancelButton>
//                         </S.CheckButton>
//                     </S.Popup>
//
//                     <S.PopupBackground isVisible={isPopupVisible}  onClick={cancelDelete}></S.PopupBackground>
//                 </>
//             )}
//         </div>
//     );
// };
//
//
//
// export default SellerProductList;
