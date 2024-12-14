import React, { useState, useRef, useEffect } from 'react';
import S from "../style";
import { Link } from "react-router-dom";
import HeartBtn from "../../HeartBtn";
import {Grid, Pagination} from "swiper/modules";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import {Swiper, SwiperSlide} from "swiper/react";

const ClothesColor = ({productList}) => {

    console.log(productList)
    const [isOpen, setIsOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);
    const dropdownRef = useRef(null);
    const [filterdProducts, setFilteredProducts] = useState(productList)
    const [selectedColor, setSelectedColor] = useState(null);
    const [selectedPrice, setSelectedPrice] = useState(null);
    const [selectedSize, setSelectedSize] = useState(null);
    const [selectedSort, setSelectedSort] = useState(null);



    // 색상 필터링
    const handleColorSelect = (color) => {
        setSelectedColor(color);
        filterProducts(color, selectedPrice, selectedSize, selectedSort);
        setIsOpen(false);
    };

    // 가격 필터링
    const handlePriceSelect = (priceOption) => {
        setSelectedPrice(priceOption);
        filterProducts(selectedColor, priceOption, selectedSize, selectedSort);
        setIsOpen(false);
    };

    // 사이즈 필터링
    const handleSizeSelect = (size) => {
        setSelectedSize(size);
        filterProducts(selectedColor, selectedPrice, size, selectedSort);
        setIsOpen(false);
    };

    // 정렬
    const handleSortSelect = (sortOption) => {
        setSelectedSort(sortOption);
        filterProducts(selectedColor, selectedPrice, selectedSize, sortOption);
        setIsOpen(false);
    };

    // 초기화 함수
    const onClickToReset = () => {
        // 상태 초기화
        setSelectedColor(null);
        setSelectedPrice(null);
        setSelectedSize(null);
        setSelectedSort(null);

        // 필터링된 상품을 원래 상품 목록으로 복원
        setFilteredProducts(productList);
    };

    const [products, setProducts] = useState([]);

    // fetch 를 통해서 products 를 모두 가져와야한다.
    useEffect(() => {
        const getProducts = async () => {
            try {
                const response = await fetch("http://localhost:10000/products/products")
                const products = await response.json()
                setProducts(products)
                // 초기에 모든 상품을 filterdProducts에 설정
                setFilteredProducts(products)
            } catch (error) {
                console.error(error)
            }
        }
        getProducts()
    }, []);

    const colorProducts = products.length !== 0 ? filterdProducts.map(({productName, productPrice, productDiscount, productImage1}, i) => (
            <SwiperSlide key={i}>
        <S.Product key={i}>
            <HeartBtn />
            <Link to={"/product"}>
            <img src={`${process.env.PUBLIC_URL}/assets/images/store/${productImage1}`} alt={"상품" + (i + 1)}/>
            <span>{productName}</span>
            </Link>
            <S.RecommendedPrice>
                <p style={{color: "#C83F3F", fontWeight: "bold"}}>{productDiscount}%</p>
                <p style={{fontWeight: 700}}>{productPrice}&nbsp;원</p>
            </S.RecommendedPrice>
            <button>담기</button>
        </S.Product>
            </SwiperSlide>
    )) : <S.CustomProductMessage>검색된 상품이 없습니다.</S.CustomProductMessage>

    // useEffect(() => {
    //     const handleClickOutside = (event) => {
    //         if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
    //             setIsOpen(false);
    //         }
    //     };
    //
    //     document.addEventListener('mousedown', handleClickOutside);
    //     return () => {
    //         document.removeEventListener('mousedown', handleClickOutside);
    //     };
    // }, []);



    // 전체 필터
    const filterProducts = (color, price, size, sort) => {
        let result = [...productList];

        // 색상
        if (color) {
            result = result.filter(product => product.productColor === color);
        }

        // 가격
        if (price === 'Low') {
            result.sort((a, b) => a.productPrice - b.productPrice);
        } else if (price === 'High') {
            result.sort((a, b) => b.productPrice - a.productPrice);
        }

        // 사이즈
        if (size) {
            result = result.filter(product => product.productSize === size);
        }

        // 정렬
        switch(sort) {
            case 'Recent':
                result.sort((a, b) => new Date(b.productDate) - new Date(a.productDate));
                break;
            case 'Star':
                result.sort((a, b) => b.reviewStar - a.reviewStar);
                break;
            case 'Sold':
                result.sort((a, b) => b.soldCount - a.soldCount);
                break;
            case 'Name':
                result.sort((a, b) => a.productName.localeCompare(b.productName));
                break;
            default:
                break;
        }

        setFilteredProducts(result);
    };
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);


    const toggleDropdown = (dropdown) => {
        setOpenDropdown(openDropdown === dropdown ? null : dropdown);
        setIsOpen(!isOpen);
    };

        return (
            <>
                <S.ColorProducts>
                    <S.Box>
                        <S.BoxTitle>강아지 컬러 추천 상품</S.BoxTitle>
                        <S.DropdownContainer>
                            <S.DropdownWrapper>
                                <button onClick={() => toggleDropdown('color')} type="button">색상
                                    <S.Arrow src={`${process.env.PUBLIC_URL}/assets/images/store/down-arrow.svg`} alt="icon"/>
                                </button>
                                <S.DropdownContent isOpen={openDropdown === 'color'}>
                                    <S.DropdownItem onClick={() => handleColorSelect('Orange')} isSelected={selectedColor === 'Orange'}>
                                        <input type="checkbox" checked={selectedColor === 'Orange'}/>
                                        <img src={`${process.env.PUBLIC_URL}/assets/images/store/orange.png`} alt="오렌지"/>
                                    </S.DropdownItem>
                                    <S.DropdownItem onClick={() => handleColorSelect('Gold')}
                                                    isSelected={selectedColor === 'Gold'}>
                                        <input type="checkbox" checked={selectedColor === 'Gold'}/>
                                        <img src={`${process.env.PUBLIC_URL}/assets/images/store/gold.png`} alt="gold"/>
                                    </S.DropdownItem>
                                    <S.DropdownItem onClick={() => handleColorSelect('Gradation')}
                                                    isSelected={selectedColor === 'Gradation'}>
                                        <input type="checkbox" checked={selectedColor === 'Gradation'}/>
                                        <img src={`${process.env.PUBLIC_URL}/assets/images/store/gradation.png`} alt="gradation"/>
                                    </S.DropdownItem>
                                    <S.DropdownItem onClick={() => handleColorSelect('Light Purple')}
                                                    isSelected={selectedColor === 'Light Purple'}>
                                        <input type="checkbox" checked={selectedColor === 'Light Purple'}/>
                                        <img src={`${process.env.PUBLIC_URL}/assets/images/store/light-purple.png`} alt="light purple"/>
                                    </S.DropdownItem>
                                    <S.DropdownItem onClick={() => handleColorSelect('Dark Purple')}
                                                    isSelected={selectedColor === 'Dark Purple'}>
                                        <input type="checkbox" checked={selectedColor === 'Dark Purple'}/>
                                        <img src={`${process.env.PUBLIC_URL}/assets/images/store/dark-purple.png`} alt="dark purple"/>
                                    </S.DropdownItem>
                                </S.DropdownContent>
                            </S.DropdownWrapper>
                            <S.DropdownWrapper>
                                <button onClick={() => toggleDropdown('price')} type="button" >가격
                                    <S.Arrow src={`${process.env.PUBLIC_URL}/assets/images/store/down-arrow.svg`} alt="icon"/></button>
                                <S.DropdownContent isOpen={openDropdown === 'price'}>
                                    <S.DropdownItem  onClick={() => handlePriceSelect('Low')} isSelected={selectedPrice === 'Low'}>
                                        <input type="checkbox" checked={selectedPrice === 'Low'}/>낮은 가격순</S.DropdownItem >
                                    <S.DropdownItem  onClick={() => handlePriceSelect('High')} isSelected={selectedPrice === 'High'}>
                                        <input type="checkbox" checked={selectedPrice === 'High'}/>높은 가격순</S.DropdownItem >
                                </S.DropdownContent>
                            </S.DropdownWrapper>

                            <S.DropdownWrapper>
                                <button onClick={() => toggleDropdown('size')} type="button">사이즈
                                    <S.Arrow src={`${process.env.PUBLIC_URL}/assets/images/store/down-arrow.svg`} alt="icon"/></button>
                                <S.DropdownContent isOpen={openDropdown === 'size'}>
                                    <S.DropdownItem onClick={() => handleSizeSelect('S')} isSelected={selectedSize === 'S'}>
                                        <input type="checkbox" checked={selectedSize === 'S'}/>S</S.DropdownItem>
                                    <S.DropdownItem onClick={() => handleSizeSelect('M')} isSelected={selectedSize === 'M'}>
                                        <input type="checkbox" checked={selectedSize === 'M'}/>M</S.DropdownItem>
                                    <S.DropdownItem onClick={() => handleSizeSelect('L')} isSelected={selectedSize === 'L'}>
                                        <input type="checkbox" checked={selectedSize === 'L'}/>L</S.DropdownItem>
                                </S.DropdownContent>
                            </S.DropdownWrapper>

                            <S.DropdownWrapper>
                                <button onClick={() => toggleDropdown('sort')} type="button"> 정렬
                                    <S.Arrow src={`${process.env.PUBLIC_URL}/assets/images/store/down-arrow.svg`} alt="icon"/></button>
                                <S.DropdownContent isOpen={openDropdown === 'sort'}>
                                    <S.DropdownItem onClick={() => handleSortSelect('Star')} isSelected={selectedSort === 'Star'}>
                                        <input type="checkbox" checked={selectedSort === 'Star'}/>별점순</S.DropdownItem>
                                    <S.DropdownItem onClick={() => handleSortSelect('Sold')} isSelected={selectedSort === 'Sold'}>
                                        <input type="checkbox" checked={selectedSort === 'Sold'}/>판매순</S.DropdownItem>
                                    <S.DropdownItem onClick={() => handleSortSelect('Name')} isSelected={selectedSort === 'Name'}>
                                        <input type="checkbox" checked={selectedSort === 'Name'}/>이름순</S.DropdownItem>
                                </S.DropdownContent>
                            </S.DropdownWrapper>
                        </S.DropdownContainer>
                    <S.SortButtonWrap onClick={onClickToReset}>
                        <p>초기화</p>
                    </S.SortButtonWrap>
                    </S.Box>
                <S.ProductWrap>
                <Swiper
                    slidesPerView={4} // 한 줄에 4개
                    grid={{
                        rows: 2, // 두 줄
                        fill: "row", // 위에서부터 채우기
                    }}
                    spaceBetween={16}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Grid, Pagination]}
                    style={{
                        "--swiper-pagination-bottom": "0px",
                        "--swiper-pagination-color": "#131313",
                        "--swiper-pagination-bullet-inactive-color": "#888888",
                        padding: "0",
                    }}
                >
                    {colorProducts}
                </Swiper>
                </S.ProductWrap>
                </S.ColorProducts>
                {/*제품들*/}
                {/*<S.ProductWrap>*/}
                {/*    {colorProducts}*/}
                {/*</S.ProductWrap>*/}
            </>
        );
    };


export default ClothesColor;