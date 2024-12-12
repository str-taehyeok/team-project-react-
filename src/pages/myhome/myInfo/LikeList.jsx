// import React, {useEffect, useState} from 'react';
//
// const LikeList = () => {
//     const memberId = 1;
//    const[products, setProducts] = useState([])
//
//     useEffect(() => {
//         const getProducts = async () => {
//             const response = await fetch(`http://localhost:10000/likes/api/allLikes`);
//             if (!response.ok) return console.error('데이터가 없어요...ㅠㅠ');
//             const products = await response.json();
//             return products;
//         }
//
//         getProducts().then(setProducts).catch(console.error);
//     }, []);
//
//    console.log(products)
//
// const StoreList = products.map((product, i) => {
//
//     return (
//         <div key={i}>
//             <img className='thumb' src={process.env.PUBLIC_URL + "/product" + (i + 1) + ".jpg"}/>
//             <p>{product.productName}</p>
//             <p>{product.productPrice}원</p>
//         </div>
//     )
//
// })
//
//     return (
//         <div>
//             <div>
//                 <p>나의 정보</p>
//             </div>
//             <div>
//                 <p>스토어</p><p>더 많은 상품 보러가기&#62;</p>
//             </div>
//             {StoreList}
//         </div>
//     );
// };
//
// export default LikeList;