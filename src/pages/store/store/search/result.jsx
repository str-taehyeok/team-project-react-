import React, { useContext, useState } from 'react';
import S from './style';
import Footer from '../../../layout/Footer';
import { ProductContext } from '../../../../context/productContext';
import { Link } from 'react-router-dom';
import HeartBtn from '../../../community/community/HeartBtn';

const Result = () => {
    const { productState } = useContext(ProductContext);
    const { products } = productState;

    // 검색 상태
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredProducts, setFilteredProducts] = useState(products);

    // 페이징
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 8;
    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
    const maxPageButtons = 5;

    const startIndex = (currentPage - 1) * productsPerPage;
    const currentProducts = filteredProducts.slice(startIndex, startIndex + productsPerPage);

    const startPage = Math.floor((currentPage - 1) / maxPageButtons) * maxPageButtons + 1;
    const endPage = Math.min(startPage + maxPageButtons - 1, totalPages);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    // 검색 핸들러
    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleSearchSubmit = (e) => {
        if (e.key === 'Enter') {
            const filtered = products.filter((product) =>
                product.productName.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setFilteredProducts(filtered);
            setCurrentPage(1); // 검색 후 첫 페이지로 이동
        }
    };

    // 상품 반복문
    const productList =
        currentProducts.length !== 0 ? (
            currentProducts.map(
                (
                    {
                        id,
                        productName,
                        productFileName,
                        productPrice,
                        productRealPrice,
                        productDiscount,
                    },
                    index
                ) => (
                    <S.Products key={id}>
                        <S.Heart>
                            <HeartBtn id={index} type={'product'} />
                        </S.Heart>
                        <Link to={`product/${id}`}>
                            <S.CustomImage>
                                <img
                                    className="thumb"
                                    src={`${process.env.PUBLIC_URL}/assets/images/products/${productFileName}`}
                                    alt={'상품' + (index + 1)}
                                />
                            </S.CustomImage>
                            <S.CustomProductInfo>
                                <S.ProductName>{productName}</S.ProductName>
                                <S.ProductRealPrice>{productRealPrice}</S.ProductRealPrice>
                                <S.ProductDiscountWrap>
                                    <S.ProductDiscount>{productDiscount}%</S.ProductDiscount>
                                    <S.ProductPrice>{productPrice}</S.ProductPrice>
                                </S.ProductDiscountWrap>
                            </S.CustomProductInfo>
                        </Link>
                    </S.Products>
                )
            )
        ) : (
            <S.CustomProductMessage>검색된 상품이 없습니다.</S.CustomProductMessage>
        );

    // 페이징 버튼
    const pagination = (
        <S.Pagination>
            <button disabled={currentPage === 1} onClick={() => handlePageChange(currentPage - 1)}>
                이전
            </button>
            {Array.from({ length: endPage - startPage + 1 }, (_, index) => (
                <button
                    key={startPage + index}
                    onClick={() => handlePageChange(startPage + index)}
                    style={{ fontWeight: currentPage === startPage + index ? 'bold' : 'normal' }}
                >
                    {startPage + index}
                </button>
            ))}
            <button
                disabled={currentPage === totalPages}
                onClick={() => handlePageChange(currentPage + 1)}
            >
                다음
            </button>
        </S.Pagination>
    );

    return (
        <div>
            <S.Body>
                <span>상품 검색</span><input
                    type="text"
                    placeholder="검색하실 상품의 이름을 입력하세요"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    onKeyDown={handleSearchSubmit}
                />
                <S.ProductsContainer>{productList}</S.ProductsContainer>
                {pagination}
            </S.Body>
            <Footer />
        </div>
    );
};

export default Result;
