import React, { useRef, useState } from 'react';
import S from "./style";
import { Link } from 'react-router-dom'
import HeartBtn from './HeartBtn';
import DogPickColor from './customs/DogPickColor';
import theme from '../../../global/theme';


// 더미데이터
const products = [
  {
    productName : "피시포독 그레인프리 참치+스피니치 + 캐롯 85g",
    productPrice : 80000,
    productImage1 : "/assets/images/store/custom-cat-1.png",
    productDiscount : 35,
    productReviewStart : 2,
    productSoldCount : 15,
    productDate : "2020-12-04",
    productColor : "Orange",
    productSize : "S"
  },
  {
    productName : "피시포독 그레인프리 참치+스피니치 + 캐롯 85g",
    productPrice : 129_000,
    productImage1 : "/assets/images/store/custom-cat-1.png",
    productDiscount : 35,
    productReviewStart : 5,
    productSoldCount : 10,
    productDate : "2014-12-04",
    productColor : "Orange",
    productSize : "M"
  },
  {
    productName : "피시포독 그레인프리 참치+스피니치 + 캐롯 85g",
    productPrice : 129_000,
    productImage1 : "/assets/images/store/custom-cat-1.png",
    productDiscount : 35,
    productReviewStart : 4,
    productSoldCount : 10,
    productDate : "2018-12-04",
    productColor : "DarkPurple",
    productSize : "L"
  },
  {
    productName : "피시포독 그레인프리 참치+스피니치 + 캐롯 85g",
    productPrice : 129_000,
    productImage1 : "/assets/images/store/custom-cat-1.png",
    productDiscount : 45,
    productReviewStart : 3,
    productSoldCount : 100,
    productDate : "2016-12-04",
    productColor : "Orange",
    productSize : "S"
  },
  {
    productName : "피시포독 그레인프리 참치+스피니치 + 캐롯 85g",
    productPrice : 77000,
    productImage1 : "/assets/images/store/custom-cat-1.png",
    productDiscount : 15,
    productReviewStart : 5,
    productSoldCount : 10,
    productDate : "2014-12-04",
    productColor : "Orange",
    productSize : "M"
  },
  {
    productName : "피시포독 그레인프리 참치+스피니치 + 캐롯 85g",
    productPrice : 11000,
    productImage1 : "/assets/images/store/custom-cat-1.png",
    productDiscount : 20,
    productReviewStart : 5,
    productSoldCount : 13,
    productDate : "2014-11-04",
    productColor : "DarkPurple",
    productSize : "S"
  },
]

const StoreCustom = () => {

  // 해당 모달창을 나오게 하기
  const [isActive, setIsActive] = useState(10);
  const onClickToActive = (i) => {
    if(i === isActive) {
      setIsActive(10)
    }else{
      setIsActive(i)
    }
  }

  // 커스텀 모달 부분 데이터
  const sortInfo = [
    { 
      title : "색상",
      sub : [
        `${theme.PALETTE.petsonal["orange"]}`,
        `${theme.PALETTE.petsonal["lightGold"]}`,
        `${theme.PALETTE.petsonal["gradation"]}`,
        `${theme.PALETTE.petsonal["lightPurple"]}`,
        `${theme.PALETTE.petsonal["deepPurple"]}`
      ]
    },
    {
      title : "가격",
      sub : ["낮은 가격순", "높은 가격순"]
    },
    {
      title : "사이즈",
      sub : ["S", "M", "L"]
    },
    {
      title : "정렬",
      sub : ["최신 등록순", "별점순", "판매순"]
    }
  ]

  // 정렬 그룹 만들기
  const [ productSort, setProductSort ] = useState({ color : 10, price : 10, size : 10, sort : 10 });
  const [ sortedProduct, setSortedProduct ] = useState(products);

  // 초기화 함수
  const onClickToReset = () => {
    setProductSort({ color : 10, price : 10, size : 10, sort : 10 })
  }

  // 정렬함수
  const onChangeToSort = (e, index) => {
    let value = e.target.value;
    if(index == 0){
      // 색상
      setProductSort({...productSort, color : value})
    }else if(index == 1){
      // 가격
      setProductSort({...productSort, price : value})
      if(value == 0){
        // 낮은 가격순
        setSortedProduct(sortedProduct.sort((currentProduct, nextProduct) => {
          return currentProduct.productPrice - nextProduct.productPrice;
        }))
      }else {
        // 높은 가격순
        setSortedProduct(sortedProduct.sort((currentProduct, nextProduct) => {
          return nextProduct.productPrice - currentProduct.productPrice;
        }))
      }
    }else if(index == 2){
       // 사이즈
      setProductSort({...productSort, size : value})
    }else {
      // 정렬 카테고리
      setProductSort({...productSort, sort : value})
      if(value == 0){
        // 최신등록순
        setSortedProduct(sortedProduct.sort((currentProduct, nextProduct) => {
          let currentDate = currentProduct.productDate.split("-").join("")
          let nextDate = nextProduct.productDate.split("-").join("")
          return nextDate - currentDate;
        }))
      }else if(value == 1){
        // 별점순
        setSortedProduct(sortedProduct.sort((currentProduct, nextProduct) => {
          return nextProduct.productReviewStart - currentProduct.productReviewStart;
        }))
      }else if(value == 2){
        // 판매순
        setSortedProduct(sortedProduct.sort((currentProduct, nextProduct) => {
          return nextProduct.productSoldCount - currentProduct.productSoldCount;
        }))
      }else{
        setSortedProduct(products)
      }
    }
  }

  // 상품 리스트 색상, 가격 filter
  const sortedProductList = sortedProduct.filter((product) => {
    if(productSort.color == 0){
      return product.productColor === "Orange"
    }else if(productSort.color == 1){
      return product.productColor === "LigthGold"
    }else if(productSort.color == 2){
      return product.productColor === "Gradation"
    }else if(productSort.color == 3){
      return product.productColor === "Lavender"
    }else if(productSort.color == 4){
      return product.productColor === "DarkPurple"
    }else {
      return product;
    }
  })
  .filter((product) => {
    if(productSort.size == 0){
      return product.productSize === "S"
    }else if(productSort.size == 1){
      return product.productSize === "M"
    }else if(productSort.size == 2){
      return product.productSize === "L"
    }else {
      return product;
    }
  })

  // 상품 반복문
  const productList = sortedProductList.length != 0 ? sortedProductList.map((product, i) => (
    <S.CustomProduct key={i}>
      <HeartBtn />
      <Link to={`read/${i}`}>
        <img className='thumb' src={`${process.env.PUBLIC_URL}${product.productImage1}`} alt={"상품" + (i + 1)} />
        <S.CustomProductInfo>
        <div>{product.productDate}</div>
          <p>{product.productName}</p>
          <p>{product.productPrice}</p>
          <p>{product.productSoldCount}</p>
          <span>{product.productDiscount}% </span><span>{product.productPrice * ((100 - product.productDiscount) / 100)}</span>
          <span>★{product.productReviewStart}(8) </span><span>♥5,069</span>
        </S.CustomProductInfo>
      </Link>
     </S.CustomProduct>
  )) : <S.CustomProductMessage>검색된 상품이 없습니다.</S.CustomProductMessage>
  
  return (
      <>
        <S.SortButtonWrapper>
          {
            sortInfo.map((sortInfo, index) => (
              <div key={index}>
                <S.SortButtonWrap  onClick={() => onClickToActive(index)}>
                  <p>{sortInfo.title}</p><img src={`${process.env.PUBLIC_URL}/assets/images/store/down-arrow.svg`} />
                </S.SortButtonWrap>
                <S.SortModal className={isActive === index ? "active" : ""}>
                  {sortInfo.sub.map((subTitle, i) => (
                    <div key={i}>
                      <input 
                        value={i} type='checkbox' name={"sort" + index} 
                        checked={ 
                            index == 0 ? productSort["color"] == i : 
                              index == 1 ? productSort["price"] == i : 
                                index == 2 ? productSort["size"] == i : 
                                  productSort["sort"] == i 
                        }
                        onChange={(e) => { onChangeToSort(e, index) }}
                      />
                      { index == 0 ? <S.ColorCircle subtitle={subTitle}></S.ColorCircle> : <p>{subTitle}</p>}
                    </div>
                  ))}
                </S.SortModal>
              </div>
            ))
          }
           <S.SortButtonWrap onClick={onClickToReset}>
                <p>초기화</p>
            </S.SortButtonWrap>
        </S.SortButtonWrapper>
        <S.CustomProductWrap>
          {productList}
        </S.CustomProductWrap>
      </>
  );
};


export default StoreCustom;