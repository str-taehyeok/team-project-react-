import React, {useEffect, useState} from 'react';
import S from "./style";
import ProductCount from './ProductCount';
import Coupon from './Coupon';
import CartBtn from './CartBtn';
import {Link, useNavigate} from "react-router-dom";
import CartProducts from "./CartProducts";
import {useSelector} from "react-redux";
import ProductPay from "./ProductPay";
import NoCart from "./NoCart";


const CartProduct = () => {

    // 데이터 fetch 해오기
    // memberId가 1일 때로 가정,

    const { currentUser, isLogin } = useSelector((state) => state.user);
    // const memberId = currentUser.id;
    const memberId = 1;

    // useState로 product의 상태를 변경
    const [product, setProduct] = useState([] || {});
    const navigate = useNavigate();

    // useEffect 함수 안에 getProduct함수를 선언,
    useEffect(() => {

        // getProduct 함수에서 디비 데이터 fetch - product 변수에 할당
        const getProduct = async () => {

            const response = await fetch(`http://localhost:10000/carts/all-cart/${memberId}`);

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

            console.log(response);
            if (!response.ok) return console.error(`데이터가 없어요 ㅠㅠ`)
            const products = await response.json();
            return products;
        }
        getProduct().then(setProduct).catch(console.error);
    }, []);

    console.log(product)
    const products = {...product};


    const productList = product.map(({id, productName, productPrice}) => {
        <p>{productName}</p>
    })

    console.log(productList)

    // 체크박스 상태를 관리해주는 함수 만들기
    const [checkedAll, setCheckedAll] = useState(false);
    const [checked, setChecked] = useState(new Array(product.length).fill(false));

    const onChangeCheckedAll = (e) => {
        setCheckedAll(e.target.checked);
        setChecked(new Array(product.length).fill(e.target.checked));
    };

    const onChangeChecked = (e) => {
        const value = e.target.value;
        const updatedChecked = checked.map((c, i) => i === parseInt(value) ? !c : c);
        setChecked(updatedChecked);

        if (updatedChecked.every((c) => c)) {
            setCheckedAll(true);
        } else {
            setCheckedAll(false);
        }
    };



    return (
        // {products.length === 0 ? (
        //     <NoCart/>
        //     ) : (
                <S.CartBox>
                    <form>
                        <S.CartWrap>
                            <S.Cart>
                                <S.CartTitle>장바구니</S.CartTitle>
                                <S.CartAllCheck>
                                    <input
                                        type="checkbox"
                                        onChange={onChangeCheckedAll}
                                        value="all"
                                        checked={checked.filter((c) => c).length === checked.length}
                                    />
                                    <S.CartAllNames>
                                        <p>상품정보</p>
                                        <p>상품수량</p>
                                        <p>판매가격</p>
                                        <p>적용할 쿠폰</p>
                                    </S.CartAllNames>
                                </S.CartAllCheck>
                                <CartProducts
                                    product = {product}
                                    checked = {checked}
                                    onChangeChecked = {onChangeChecked}
                                />
                                {/*{productList}*/}
                                <ProductPay product = {product}/>
                                <S.CartPayWrap>
                                    <S.CartPayTitle>결제정보</S.CartPayTitle>
                                    <ProductPay/>
                                    <S.Link>
                                        <Link to={`/pay`}>
                                            <S.All>
                                                구매하기
                                            </S.All>
                                        </Link>
                                    </S.Link>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          </S.CartPayWrap>
                            </S.Cart>
                        </S.CartWrap>
                    </form>
                </S.CartBox>

            // )}

    );
};

export default CartProduct;
