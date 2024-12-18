import React, { useState, useEffect } from 'react';
import S from "../style";
import { Link } from "react-router-dom";
import HeartBtn from '../../../../community/community/HeartBtn';
import {Grid, Pagination} from "swiper/modules";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import {Swiper, SwiperSlide} from "swiper/react";

const HealthCareColor = ({productList}) => {

    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [selectedColor, setSelectedColor] = useState(null);
    const [selectedPrice, setSelectedPrice] = useState(null);
    const [selectedSize, setSelectedSize] = useState(null);
    const [selectedSort, setSelectedSort] = useState(null);
    const [openDropdown, setOpenDropdown] = useState(null);

    useEffect(() => {
        const getProducts = async () => {
            try {
                const response = await fetch("http://localhost:10000/products/products");
                const data = await response.json();
                setProducts(data);
                setFilteredProducts(data);
            } catch (error) {
                console.error(error);
            }
        };
        getProducts();
    }, []);


    const filterProducts = (color, price, size, sort) => {
        let result = [...products];

        if (color) result = filterByColor(result, color);
        if (price) result = sortByPrice(result, price);
        if (size) result = filterBySize(result, size);
        if (sort) result = sortByOption(result, sort);

        setFilteredProducts(result);
    };

    const filterByColor = (data, color) => data.filter(product => product.productColor === color);
    const sortByPrice = (data, price) =>
        price === 'Low' ? data.sort((a, b) => a.productPrice - b.productPrice)
            : data.sort((a, b) => b.productPrice - a.productPrice);
    const filterBySize = (data, size) => data.filter(product => product.productSize === size);
    const sortByOption = (data, sort) => {
        switch(sort) {
            case 'Recent': return data.sort((a, b) => new Date(b.productDate) - new Date(a.productDate));
            case 'Star': return data.sort((a, b) => b.reviewStar - a.reviewStar);
            case 'Sold': return data.sort((a, b) => b.soldCount - a.soldCount);
            case 'Name': return data.sort((a, b) => a.productName.localeCompare(b.productName));
            default: return data;
        }
    };

    // 필터링하기

    const handlePriceSelect = (price) => {
        setSelectedPrice(price);
        filterProducts(selectedColor, price, selectedSize, selectedSort);
        closeDropdown();
    };

    const handleSizeSelect = (size) => {
        setSelectedSize(size);
        filterProducts(selectedColor, selectedPrice, size, selectedSort);
        closeDropdown();
    };

    const handleSortSelect = (sort) => {
        setSelectedSort(sort);
        filterProducts(selectedColor, selectedPrice, selectedSize, sort);
        closeDropdown();
    };


    const toggleDropdown = (dropdownName) => {
        setOpenDropdown(prev => prev === dropdownName ? null : dropdownName);
    };

    const closeDropdown = () => setOpenDropdown(null);

    // const closeDropdown = () => setIsOpen(false);

    const handleColorSelect = (color) => {
        setSelectedColor(color);
        filterProducts(color, selectedPrice, selectedSize, selectedSort);
        closeDropdown();
    };

    const onClickToReset = () => {
        // 초기화
        setSelectedColor(null);
        setSelectedPrice(null);
        setSelectedSize(null);
        setSelectedSort(null);

        setOpenDropdown(null);

        // 초기화
        setFilteredProducts(products);
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
                            <S.DropdownContent isopen={openDropdown === 'color'}>
                                <S.DropdownItem
                                    onClick={() => handleColorSelect('Orange')}
                                    className={selectedColor === 'Orange' ? 'selected' : ''}
                                >
                                    <input
                                        type="checkbox"
                                        checked={selectedColor === 'Orange'}
                                        onChange={() => handleColorSelect('Orange')}
                                    />
                                    <img src={`${process.env.PUBLIC_URL}/assets/images/store/orange.png`}
                                         alt="오렌지"/>
                                </S.DropdownItem>
                                <S.DropdownItem
                                    onClick={() => handleColorSelect('Gold')}
                                    className={selectedColor === 'Gold' ? 'selected' : ''}
                                >
                                    <input
                                        type="checkbox"
                                        checked={selectedColor === 'Gold'}
                                        onChange={() => handleColorSelect('Gold')}
                                    />
                                    <img src={`${process.env.PUBLIC_URL}/assets/images/store/gold.png`} alt="gold"/>
                                </S.DropdownItem>
                                <S.DropdownItem
                                    onClick={() => handleColorSelect('Gradation')}
                                    className={selectedColor === 'Gradation' ? 'selected' : ''}
                                >
                                    <input
                                        type="checkbox"
                                        checked={selectedColor === 'Gradation'}
                                        onChange={() => handleColorSelect('Gradation')}
                                    />
                                    <img src={`${process.env.PUBLIC_URL}/assets/images/store/gradation.png`}
                                         alt="gradation"/>
                                </S.DropdownItem>
                                <S.DropdownItem
                                    onClick={() => handleColorSelect('Light purple')}
                                    className={selectedColor === 'Light purple' ? 'selected' : ''}
                                >
                                    <input
                                        type="checkbox"
                                        checked={selectedColor === 'Light Purple'}
                                        onChange={() => handleColorSelect('Light Purple')}
                                    />
                                    <img src={`${process.env.PUBLIC_URL}/assets/images/store/light-purple.png`}
                                         alt="light purple"/>
                                </S.DropdownItem>
                                <S.DropdownItem
                                    onClick={() => handleColorSelect('Sky Blue')}
                                    className={selectedColor === 'Sky Blue' ? 'selected' : ''}
                                >
                                    <input
                                        type="checkbox"
                                        checked={selectedColor === 'Sky Blue'}
                                        onChange={() => handleColorSelect('Sky Blue')}
                                    />
                                    <img src={`${process.env.PUBLIC_URL}/assets/images/store/skyBlue.png`}
                                         alt="Sky Blue"/>
                                </S.DropdownItem>
                                <S.DropdownItem
                                    onClick={() => handleColorSelect('Sage Green')}
                                    className={selectedColor === 'Sage Green' ? 'selected' : ''}
                                >
                                    <input
                                        type="checkbox"
                                        checked={selectedColor === 'Sage Green'}
                                        onChange={() => handleColorSelect('Sage Green')}
                                    />
                                    <img src={`${process.env.PUBLIC_URL}/assets/images/store/sageGreen.png`}
                                         alt="Sage Green"/>
                                </S.DropdownItem>
                                <S.DropdownItem
                                    onClick={() => handleColorSelect('Ice Blue')}
                                    className={selectedColor === 'Ice Blue' ? 'selected' : ''}
                                >
                                    <input
                                        type="checkbox"
                                        checked={selectedColor === 'Ice Blue'}
                                        onChange={() => handleColorSelect('Ice Blue')}
                                    />
                                    <img src={`${process.env.PUBLIC_URL}/assets/images/store/iceBlue.png`}
                                         alt="Ice Blue"/>
                                </S.DropdownItem>
                                <S.DropdownItem
                                    onClick={() => handleColorSelect('Dusty Silver')}
                                    className={selectedColor === 'Dusty Silver' ? 'selected' : ''}
                                >
                                    <input
                                        type="checkbox"
                                        checked={selectedColor === 'Dusty Silver'}
                                        onChange={() => handleColorSelect('Dusty Silver')}
                                    />
                                    <img src={`${process.env.PUBLIC_URL}/assets/images/store/dustySilver.png`}
                                         alt="Dusty Silver"/>
                                </S.DropdownItem>
                            </S.DropdownContent>
                        </S.DropdownWrapper>
                        <S.DropdownWrapper>
                            <button onClick={() => toggleDropdown('price')} type="button">가격
                                <S.Arrow src={`${process.env.PUBLIC_URL}/assets/images/store/down-arrow.svg`} alt="icon"/></button>
                            <S.DropdownContent isopen={openDropdown === 'price'}>
                                <S.DropdownItem
                                    onClick={() => handlePriceSelect('Low')}
                                    className={selectedPrice === 'Low' ? 'selected' : ''}
                                >
                                    <input type="checkbox" checked={selectedPrice === 'Low'} onChange={() => handlePriceSelect('Low')}/>낮은 가격순</S.DropdownItem >
                                <S.DropdownItem
                                    onClick={() => handlePriceSelect('High')}
                                    className={selectedPrice === 'High' ? 'selected' : ''}
                                >
                                    <input type="checkbox" checked={selectedPrice === 'High'} onChange={() => handlePriceSelect('High')}/>높은 가격순</S.DropdownItem >
                            </S.DropdownContent>
                        </S.DropdownWrapper>

                        <S.DropdownWrapper>
                            <button onClick={() => toggleDropdown('size')} type="button">사이즈
                                <S.Arrow src={`${process.env.PUBLIC_URL}/assets/images/store/down-arrow.svg`} alt="icon"/></button>
                            <S.DropdownContent isopen={openDropdown === 'size'}>
                                <S.DropdownItem
                                    onClick={() => handleSizeSelect('S')}
                                    className={selectedSize === 'S' ? 'selected' : ''}
                                >
                                    <input type="checkbox" checked={selectedSize === 'S'} onChange={() => handleSizeSelect('S')}/>S</S.DropdownItem>
                                <S.DropdownItem
                                    onClick={() => handleSizeSelect('M')}
                                    className={selectedSize === 'M' ? 'selected' : ''}
                                >
                                    <input type="checkbox" checked={selectedSize === 'M'} onChange={() => handleSizeSelect('M')}/>M</S.DropdownItem>
                                <S.DropdownItem
                                    onClick={() => handleSizeSelect('L')}
                                    className={selectedSize === 'L' ? 'selected' : ''}
                                >
                                    <input type="checkbox" checked={selectedSize === 'L'} onChange={() => handleSizeSelect('L')}/>L</S.DropdownItem>
                            </S.DropdownContent>
                        </S.DropdownWrapper>

                        <S.DropdownWrapper>
                            <button onClick={() => toggleDropdown('sort')} type="button"> 정렬
                                <S.Arrow src={`${process.env.PUBLIC_URL}/assets/images/store/down-arrow.svg`} alt="icon"/></button>
                            <S.DropdownContent isopen={openDropdown === 'sort'}>
                                <S.DropdownItem
                                    onClick={() => handleSortSelect('Star')}
                                    className={selectedSort === 'Star' ? 'selected' : ''}
                                >
                                    <input type="checkbox" checked={selectedSort === 'Star'} onChange={() => handleSortSelect('Star')}/>별점순</S.DropdownItem>
                                <S.DropdownItem
                                    onClick={() => handleSortSelect('Sold')}
                                    className={selectedSort === 'Sold' ? 'selected' : ''}
                                >
                                    <input type="checkbox" checked={selectedSort === 'Sold'} onChange={() => handleSortSelect('Sold')}/>판매순</S.DropdownItem>
                                <S.DropdownItem
                                    onClick={() => handleSortSelect('Name')}
                                    className={selectedSort === 'Name' ? 'selected' : ''}
                                >
                                    <input
                                        type="checkbox"
                                        checked={selectedSort === 'Name'}
                                        onChange={() => handleSortSelect('Star')}  // This should be 'Name', not 'Star'
                                    />이름순
                                </S.DropdownItem>
                            </S.DropdownContent>
                        </S.DropdownWrapper>
                    </S.DropdownContainer>
                    <S.SortButtonWrap onClick={onClickToReset}>
                        <p>초기화</p>
                    </S.SortButtonWrap>
                </S.Box>
            </S.ColorProducts>
            <S.ProductWrap>
                <Swiper
                    slidesPerView={4}
                    grid={{ rows: 2 }}
                    spaceBetween={30}
                    pagination={{ clickable: true }}
                    modules={[Grid, Pagination]}
                    className="mySwiper"
                >
                    {Array.isArray(filteredProducts) && filteredProducts.length > 0 ? (
                        filteredProducts.map(({ productName, productPrice, productDiscount, productImage1 }, i) => (
                            <SwiperSlide key={i}>
                                <S.Product>
                                    <HeartBtn />
                                    <Link to="/product/:id">
                                        <img src={`${process.env.PUBLIC_URL}/assets/images/store/${productImage1}`} alt={`상품${i + 1}`} />
                                        <span>{productName}</span>
                                    </Link>
                                    <S.RecommendedPrice>
                                        <p style={{ color: "#C83F3F", fontWeight: "bold" }}>{productDiscount}%</p>
                                        <p style={{ fontWeight: 700 }}>{productPrice}&nbsp;원</p>
                                    </S.RecommendedPrice>
                                    <button>담기</button>
                                </S.Product>
                            </SwiperSlide>
                        ))
                    ) : (
                        <S.CustomProductMessage>검색된 상품이 없습니다.</S.CustomProductMessage>
                    )}
                </Swiper>
            </S.ProductWrap>
        </>
    );
};


export default HealthCareColor;