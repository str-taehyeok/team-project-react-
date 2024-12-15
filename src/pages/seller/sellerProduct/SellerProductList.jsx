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

    const openDeletePopup = (id) => {
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
                        <S.DeleteButton onClick={() => openDeletePopup(product.id)}>삭제</S.DeleteButton>
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
                            <S.CancelButton onClick={cancelDelete}>취소</S.CancelButton>
                        </S.CheckButton>
                    </S.Popup>
                </>
            )}
        </div>
    );
};

export default SellerProductList;
