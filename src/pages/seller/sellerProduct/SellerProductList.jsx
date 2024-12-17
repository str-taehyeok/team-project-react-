import React, { useEffect, useState } from "react";
import S from "./style";
import { Link, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const SellerProductList = () => {
  const [products, setProducts] = useState([]); // 전체 상품 목록
  const [filteredProducts, setFilteredProducts] = useState([]); // 검색 결과 목록
  const [searchTerm, setSearchTerm] = useState(""); // 검색어 상태
  const [isPopupVisible, setIsPopupVisible] = useState(false); // 팝업 표시 여부
  const [deleteProductId, setDeleteProductId] = useState(null); // 삭제할 상품 ID 상태
  const { currentUser } = useSelector((state) => state.user);
  const memberId = currentUser.id;

  
  // 상품 목록 가져오기
  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch(
        `http://localhost:10000/products/seller-all-list/${memberId}`
      );
      if (!response.ok) return console.error("데이터가 없습니다.");
      const data = await response.json();
      setProducts(data); // 전체 상품 목록 저장
      setFilteredProducts(data); // 초기 검색 결과 설정
    };
    getProducts().catch(console.error);
  }, [memberId]);


  // 삭제 팝업 열기
  const openDeletePopup = (id) => {
    setDeleteProductId(id);
    setIsPopupVisible(true);
  };

  // 삭제 팝업 닫기
  const cancelDelete = () => {
    setDeleteProductId(null);
    setIsPopupVisible(false);
  };

  // 상품 삭제 요청
  const handleDelete = async () => {
    
    await fetch(`http://localhost:10000/products/seller-product/${deleteProductId}`,{
        method : 'DELETE'
    })
  };

  // 검색 기능
  const handleSearch = () => {
    const filtered = products.filter((product) =>
      product.productName.includes(searchTerm)
    );
    setFilteredProducts(filtered);
  };

  // 검색 초기화
  const resetSearch = () => {
    setSearchTerm("");
    setFilteredProducts(products); // 전체 상품으로 초기화
  };

  // 상품 테이블 렌더링
  const productRows =
    filteredProducts.length === 0 ? (
      <tr>
        <td colSpan="8">상품이 없습니다.</td>
      </tr>
    ) : (
      filteredProducts.map((product, index) => (
        <tr key={product.id}>
          <td>{index + 1}</td>
          <td>
            <S.Image>
              <img src={product.productImage1} alt={`상품 ${index + 1}`} />
            </S.Image>
          </td>
          <td>
            <S.Name>{product.productName}</S.Name>
          </td>
          <td>{product.productPrice.toLocaleString()}원</td>
          <td>{product.productCategory}</td>
          <td>{product.productStock}</td>
          <td>{product.productDate}</td>
          <td>
            <S.ManageButtons>
              <S.EditButton>
                <Link to={`/seller/product-update/${product.id}`}>수정</Link>
              </S.EditButton>
              <S.DeleteButton onClick={()=>openDeletePopup(product.id)}>
                삭제
              </S.DeleteButton>
            </S.ManageButtons>
          </td>
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
            onChange={(e) => setSearchTerm(e.target.value)}
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
        </thead>
        <tbody>{productRows}</tbody>
      </S.Table>

      {/* 삭제 확인 팝업 */}
      <S.Popup $isVisible={isPopupVisible}>
        <p>삭제하시겠습니까?</p>
        <S.CheckButton>
          <S.DeleteButton onClick={handleDelete}>삭제</S.DeleteButton>
          <S.CancelButton onClick={cancelDelete}>취소</S.CancelButton>
        </S.CheckButton>
      </S.Popup>

      <S.PopupBackground $isVisible={isPopupVisible} />
    </div>
  );
};

export default SellerProductList;
