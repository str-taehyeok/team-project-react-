// import React, { useContext, useEffect, useState } from "react";
// import S from "./style";
// import { Link, useNavigate } from "react-router-dom";
// import { PetsonalContext } from "../../context/petsonalContext";

// const PetsonalResult = () => {

//   const [petsonalResult, setpetsonalResult] = useState([]);
//   const petId = 5;
  
//   useEffect(() => {
//       const getPetsonalResult = async () => {
//           const response = await fetch(`http://localhost:10000/petsonal-result/${petId}`);
//           if(!response.ok) return console.error(`데이터가 없습니다.`)
//           const petsonalResult = await response.json();
//           return petsonalResult;
//       }

//       getPetsonalResult().then(setpetsonalResult).catch(console.error);
//   }, []);

//   console.log(petsonalResult);
//   return (
//     <div>
//       <S.Frame>
//         <S.ResultContainer>
//           <S.ColorWrap>
//             <img src={`${process.env.PUBLIC_URL}${imageSrc}`} alt="펫 컬러" />
//           </S.ColorWrap>

//           <S.OrangeResult>
//             {message.map((m, i) => (
//               <li key={i}>{m}</li>
//             ))}
//           </S.OrangeResult>

//           <S.ResultBox color={boxColor} >
//             <S.PetProfile>
//               <S.PetImage
//                 src={`${process.env.PUBLIC_URL}/assets/images/petsonal/dog-img.png`}
//                 alt="강아지사진"
//               />
//               <p>반려동물 이름</p>
//             </S.PetProfile>
//             <S.RateWrap>
//               <S.ResultName>{title}</S.ResultName>
//               <S.PercentageContainer>
//                 <S.AllRate>
//                   <S.ResultCategory>
//                     <span>시크</span>
//                     <span>귀염</span>
//                   </S.ResultCategory>
//                   <S.PercentageWrap>
//                   <span>{scoreResult.petsonalChic}<S.Percentage>(%)</S.Percentage></span>
//                     <S.Percent>
//                       <S.CuteAndChicGage style={{ width: `${scoreResult.petsonalCute}%` }}></S.CuteAndChicGage>
//                     </S.Percent>
//                     <span>{scoreResult.petsonalCute}<S.Percentage>(%)</S.Percentage></span>
//                   </S.PercentageWrap>
//                 </S.AllRate>
//                 <S.AllRate>
//                   <S.ResultCategory>
//                     <span>차분</span>
//                     <span>발랄</span>
//                   </S.ResultCategory>
//                   <S.PercentageWrap>
//                   <span>{scoreResult.petsonalCalm}<S.Percentage>(%)</S.Percentage></span>
//                     <S.Percent>
//                       <S.CalmAndActive style={{ width: `${scoreResult.petsonalActive}%` }}></S.CalmAndActive>
//                     </S.Percent>
//                     <span>{scoreResult.petsonalActive}<S.Percentage>(%)</S.Percentage></span>
//                   </S.PercentageWrap>
//                 </S.AllRate>
//                 <S.AllRate>
//                   <S.ResultCategory>
//                     <span>게으름</span>
//                     <span>부지런함</span>
//                   </S.ResultCategory>
//                   <S.PercentageWrap>
//                   <span>{scoreResult.petsonalLazy}<S.Percentage>(%)</S.Percentage></span>
//                     <S.Percent>
//                       <S.LazyAndDilight style={{ width: `${scoreResult.petsonalDiligent}%` }}></S.LazyAndDilight>
//                     </S.Percent>
//                     <span>{scoreResult.petsonalDiligent}<S.Percentage>(%)</S.Percentage></span>
//                   </S.PercentageWrap>
//                 </S.AllRate>
//                 <S.AllRate>
//                   <S.ResultCategory>
//                     <span>겁쟁이</span>
//                     <span>용감함</span>
//                   </S.ResultCategory>
//                   <S.PercentageWrap >
//                   <span>{scoreResult.petsonalCoward}<S.Percentage>(%)</S.Percentage></span>
//                     <S.Percent>
//                       <S.CowardAndBrave style={{ width: `${scoreResult.petsonalBrave}%` }}></S.CowardAndBrave>
//                     </S.Percent>
//                     <span>{scoreResult.petsonalBrave}<S.Percentage>(%)</S.Percentage></span>
//                   </S.PercentageWrap>
//                 </S.AllRate>
//               </S.PercentageContainer>
//             </S.RateWrap>
//           </S.ResultBox>

//           <S.ProductContainer>
//           <S.ProductHeader>
//             <h2>POWPOW의 추천상품이에요!</h2>
//             <Link to={"/product"}><strong>+ 더보기</strong></Link>
//           </S.ProductHeader>

//           <S.ProductsWrap>
//           <S.Products>
//             {[
//               { name: "피시포독 그레인프리 참치+스피니치 + 캐롯 85g", price: "55% 9,900원", image: "product1.png" },
//               { name: "디팡 강아지 사료 500g", price: "10% 8,500원", image: "product2.png" },
//               { name: "피시포독 그레인프리 참치+스피니치 + 캐롯 85g", price: "10% 9,900원", image: "product3.png" },
//               { name: "디팡 강아지 사료 500g", price: "10% 8,500원", image: "product4.png" },
//               { name: "피시포독 그레인프리 참치+스피니치 + 캐롯 85g", price: "35% 9,900원", image: "product1.png" },
//               { name: "디팡 강아지 사료 500g", price: "55% 8,500원", image: "product2.png" },
//               { name: "피시포독 그레인프리 참치+스피니치 + 캐롯 85g", price: "10% 9,900원", image: "product3.png" },
//               { name: "디팡 강아지 사료 500g", price: "35% 8,500원", image: "product4.png" }
//             ].map((product, index) => {
//               const [discount, price] = product.price.split(' ');

//               return (
//                 <S.ProductCard key={index}>
//                   <img className="productImage" src={`${process.env.PUBLIC_URL}/assets/images/layout/${product.image}`} alt={product.name} />
//                   <S.ProductHeartICon src={`${process.env.PUBLIC_URL}/assets/images/layout/heart_icon.png`} alt="하트" />
//                   <S.CardTextWrap>
//                     <S.ProductName>{product.name}</S.ProductName>
//                     <S.DiscountText>   
                      
//                       {discount && (
//                         <b><span style={{ color: '#C83F3F', fontWeight: 'bold', marginRight: '10px' }}>{discount}</span></b>
//                       )}
//                         <b><span>{price}</span></b>
                      
//                     </S.DiscountText>
//                   </S.CardTextWrap>
//                   <S.CardCart>
//                     <Link to={"/"}>
//                     <img src={`${process.env.PUBLIC_URL}/assets/images/layout/shopping_cart_icon.png`} alt="장바구니아이콘" />
//                     <p>담기</p>
//                     </Link>
//                   </S.CardCart>
//                 </S.ProductCard>
//               );
//             })}
//           </S.Products>
//         </S.ProductsWrap>
//         </S.ProductContainer>

//         </S.ResultContainer>
//       </S.Frame>
//     </div>
//   );
// };

// export default PetsonalResult;
