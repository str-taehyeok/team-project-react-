import React, {useEffect, useState} from 'react';
import S from "./style";
import Coupon from "./Coupon";
import {useNavigate, useParams} from "react-router-dom";
import {useSelector} from "react-redux";

const CartProducts = () => {

    const { currentUser, isLogin } = useSelector((state) => state.user);
    // const memberId = currentUser.id;
    const memberId = 1;

    const [product, setProduct] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        const getProduct = async () => {

            const response = await fetch(`http://localhost:10000/carts/cart-orders/${memberId}`);

            // body
            // await fetch("경로", {
            //     method : "GET" or "POST" or "PUT" or "DELETE",
            //     headers : {
            //         "Content-Type" : "application/json"
            //     },
            //     body : {
            //         memberId : memberId,
            //         productid : productId
            //     }
            // })

            if (!response.ok) return console.error(`데이터가 없어요 ㅠㅠ`)
            const product = await response.json();
            return product;
        }
        getProduct().then(setProduct).catch(console.error);
    }, []);

    console.log(product)
    const{ productName, productPrice, productRealPrice, productStock, couponTitle } = product;

    return (
        <div>
            <S.CartProductInfo>
                <img
                    className="thumb"
                    src={`${process.env.PUBLIC_URL}${product.productImage}`}
                    // alt={"상품" + (i + 1)}
                />
                <S.ProductName></S.ProductName>
                {/*<ProductCount key={i} product={product} />*/}
                <S.productPrice>
                    <p>{productPrice} 원</p>
                    <p>{productRealPrice} 원</p>
                </S.productPrice>
                <Coupon />
            </S.CartProductInfo>
        </div>
    );
};

export default CartProducts;