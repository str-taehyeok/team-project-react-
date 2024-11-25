import React, { useState, useRef, useEffect } from 'react';
import S from "../style";

const FlushieColor = ({productList}) => {

    console.log(productList)
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);
    const [filterdProducts, setFilterdProducts] = useState(productList)

    const colorProducts = filterdProducts.map(({productName, productPrice, src}, i) => (
        <S.Product key={i}>
            <img src={src} alt={"상품" + (i + 1)}/>
            <span>{productName}</span>
            <span style={{fontWeight: 700}}>{productPrice}</span>
            <button>담기</button>
        </S.Product>
    ))

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

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleSelect = (option) => {
        console.log('Selected:', option);
        setIsOpen(false);
    };


        return (
            <>
                <S.ColorProducts>
                    <S.Box>
                        <S.BoxTitle>강아지 컬러 추천 상품</S.BoxTitle>
                        <S.DropdownContainer ref={dropdownRef}>
                            <button onClick={toggleDropdown} type="button">색상</button>
                            <S.DropdownContent isOpen={isOpen}>
                                <p onClick={() => handleSelect('Orange')}>Orange</p>
                                <p onClick={() => handleSelect('Gold')}>Gold</p>
                                <p onClick={() => handleSelect('gradation')}>gradation</p>
                                <p onClick={() => handleSelect('Light Purple')}>Light Purple</p>
                                <p onClick={() => handleSelect('Dark Purple')}>Dark Purple</p>
                            </S.DropdownContent>
                            <button type="button">가격</button>
                            <button type="button">사이즈</button>
                            <button type="button">정렬</button>
                        </S.DropdownContainer>
                    </S.Box>
                </S.ColorProducts>

                {/*<div>카테 고리별 필터 </div>*/}
                <S.ProductWrap>
                    {colorProducts}
                </S.ProductWrap>
            </>
        );
    };


export default FlushieColor;