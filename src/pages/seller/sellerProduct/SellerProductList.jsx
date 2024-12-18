import React, { useContext, useEffect, useState } from "react";
import S from "./style";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { ProductContext } from "../../../context/productContext";

const SellerProductList = () => {
  const [ setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [deleteProductId, setDeleteProductId] = useState(null);
  const { currentUser } = useSelector((state) => state.user);
  const localJwtToken = localStorage.getItem("jwtToken");
  const navigate = useNavigate();
  const { productState } = useContext(ProductContext);
  const { products, setProducts } = productState;
  const id = currentUser.memberId;


  // 로그인 상태 확인
  useEffect(() => {
    if (!localJwtToken) {
      alert("로그인 후 이용해 주세요.");
      navigate("/login");
    }
  }, [localJwtToken, navigate]);

  useEffect(() => {
    const getPets = async () => {
      try {
        const response = await fetch(`http://localhost:10000/products/seller-all-list/${id}`);
        if (!response.ok) {
          console.error("데이터가 없습니다.");
          return;
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error(error);
        alert("상품 데이터를 가져오는 중 오류가 발생했습니다.");
      }
    };
    getPets();
  }, [id]);

  // useEffect(() => {
  //   const fetchProductData = async () => {
  //     try {
  //       const response = await fetch(`http://localhost:10000/products/seller-all-list/${memberId}`,);
  //       if (!response.ok) {
  //         throw new Error('상품 정보를 가져오지 못했습니다.');
  //       }
  //       const productData = await response.json();
  //
  //       setProductData(productData);
  //
  //       // react-hook-form의 setValue로 폼 초기화
  //       Object.keys(productData).forEach(key => {
  //         setValue(key, productData[key]);
  //       });
  //
  //     } catch (error) {
  //       console.error('상품 데이터 로딩 중 오류:', error);
  //       alert('상품 정보를 불러오는 데 실패했습니다.');
  //     }
  //   };
  //
  //   fetchProductData();
  // }, [memberId, setValue]);

  // 삭제 팝업 열기
  const openDeletePopup = (productId) => {
    setDeleteProductId(productId);
    setIsPopupVisible(true);
  };

  // 삭제 팝업 닫기
  const cancelDelete = () => {
    setDeleteProductId(null);
    setIsPopupVisible(false);
  };

  const handleDelete = async () => {
    try {
      const response = await fetch(
          `http://localhost:10000/products/seller-product/${deleteProductId}`,
          {
            method: 'DELETE',
            headers: {
              'Authorization': `Bearer ${localJwtToken}`
            }
          }
      );

      if (response.ok) {
        const updatedProducts = products.filter(
            (product) => product.id !== deleteProductId
        );
        setProducts(updatedProducts);
        setFilteredProducts(updatedProducts);
        setIsPopupVisible(false);
        alert('상품이 삭제되었습니다.');
      } else {
        throw new Error('상품 삭제에 실패했습니다.');
      }
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
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
    setFilteredProducts(products);
  };

  return (
      <div>
        <Outlet/>
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
          <tbody>
          {products.map(({id, productFileName,productName, productPrice, productCategory, productStock, productDate}, index) => (
              <tr key={id}>
                <td>{index + 1}</td>
                <td>
                  <S.Image>
                    <img
                        alt="제품 사진"
                        src={`${process.env.PUBLIC_URL}/assets/images/products/${productFileName}`}
                    />
                  </S.Image>
                </td>
                <td>
                  <S.Name>{productName}</S.Name>
                </td>
                <td>{productPrice.toLocaleString()} 원</td>
                <td>{productCategory}</td>
                <td>{productStock}</td>
                <td>{productDate}</td>
                <td>
                  <S.ManageButtons>
                    <S.EditButton>
                      <Link to={`/seller/product-update/${id}`}>수정</Link>
                    </S.EditButton>
                    <S.DeleteButton onClick={() => openDeletePopup(id)}>
                      삭제
                    </S.DeleteButton>
                  </S.ManageButtons>
                </td>
              </tr>
          ))}
          </tbody>
        </S.Table>

        {/* 삭제 확인 팝업 */}
        <S.Popup $isVisible={isPopupVisible}>
          <p>삭제하시겠습니까?</p>
          <S.CheckButton>
            <S.DeleteButton onClick={handleDelete}>삭제</S.DeleteButton>
            <S.CancelButton onClick={cancelDelete}>취소</S.CancelButton>
          </S.CheckButton>
        </S.Popup>

        <S.PopupBackground $isVisible={isPopupVisible}/>
      </div>
  );
};

export default SellerProductList;