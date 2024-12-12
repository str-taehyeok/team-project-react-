import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import S from "./style";

const SellerProductWrite = () => {

    const { register, handleSubmit, formState: { isSubmitting }} = useForm({ mode: 'onChange' });
    const [productName, setProductName] = useState("");
    const [productPrice, setProductPrice] = useState("");
    const [productCode, setProductCode] = useState("");
    const [productDate, setProductDate] = useState("");
    const [productStock, setProductStock] = useState("");
    const [productEditDate, setProductEditDate] = useState("");
    const [productDetail, setProductDetail] = useState("");
    const [productImage1, setProductImage1] = useState("");
    const [productImage2, setProductImage2] = useState("");
    const [productImage3, setProductImage3] = useState("");
    const [productImage4, setProductImage4] = useState("");
    const [productAnimal, setProductAnimal] = useState("");
    const [productCategory, setProductCategory] = useState("");
    const [productColor, setProductColor] = useState("");
    const [productSize, setProductSize] = useState("");
    const [deliveryFee, setDeliveryFee] = useState("");
    const [deliveryFeeKind, setDeliveryFeeKind] = useState("");
    const [deliveryFeeFree, setDeliveryFeeFree] = useState("");
    const [deliveryHow, setDeliveryHow] = useState("");
    const [deliveryPayWhen, setDeliveryPayWhen] = useState("");
    const [deliveryCompany, setDeliveryCompany] = useState("");
    const navigate = useNavigate();
    const memberId = 1;

    const handleChange = (e) => {
        const value = e.target.value;
        setProductName(value);
    };

    const handleNextClick = (e) => {
        // 입력 값 확인
        if (!productName) {
            e.preventDefault();
            return alert("제품명을 입력해주세요.");
        }
        if (!productPrice) {
            e.preventDefault();
            return alert("가격을 입력해주세요.");
        }
        if (!productCode) {
            e.preventDefault();
            return alert("제품 코드를 입력해주세요.");
        }
        if (!productStock) {
            e.preventDefault();
            return alert("재고를 입력해주세요.");
        }
        if (!productImage1) {
            e.preventDefault();
            return alert("상품의 이미지를 등록해주세요.");
        }
        if (!productAnimal) {
            e.preventDefault();
            return alert("제품을 사용할 수 있는 종을 선택해주세요.");
        }
        if (!productCategory) {
            e.preventDefault();
            return alert("카테고리를 선택해주세요.");
        }
        if (!productColor) {
            e.preventDefault();
            return alert("펫스널컬러로 구분할 색상을 선택해주세요.");
        }
        if (!productSize) {
            e.preventDefault();
            return alert("사이즈를 선택해주세요.");
        }
    };

    return (
        <div>
            판매자 제품 등록
            <form onSubmit={handleSubmit(async (data) => {
                console.log(data)
                await fetch("http://localhost:10000/product/write", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        productName: data.productName,
                        productPrice: data.productPrice,
                        productCode: data.productCode,
                        productDate: data.productDate,
                        productStock: data.productStock,
                        productEditDate: data.productEditDate,
                        productDetail: data.productDetail,
                        productImage1: data.productImage1,
                        productImage2: data.productImage2,
                        productImage3: data.productImage3,
                        productImage4: data.productImage4,
                        productAnimal: data.productAnimal,
                        productCategory: data.productCategory,
                        productColor: data.productColor,
                        productSize: data.productSize,
                        deliveryFee: data.deliveryFee,
                        deliveryFeeKind: data.deliveryFeeKind,
                        deliveryFeeFree: data.deliveryFeeFree,
                        deliveryHow: data.deliveryHow,
                        deliveryPayWhen: data.deliveryPayWhen,
                        deliveryCompany: data.deliveryCompany,
                        memberId: memberId
                    })
                })
                    .then((res) => res.json())
                    .then((res) => {
                        alert('데이터가 성공적으로 전송되었습니다!');
                        navigate(`/seller`)
                    })
                    .catch((error) => {
                        console.error('에러발생 :', error);
                        alert('데이터 저장중 오류가 발생하였습니다.');
                    })
            })}>

                <S.ProductInsert>
                    <p>상품 정보 입력</p>
                    <div>
                        <S.ListWrap>
                            <S.Division>상품명</S.Division>
                            <input className="require-value" type="text" name="productName"/>
                        </S.ListWrap>
                        <S.ListWrap>
                            <S.Division>상품가격</S.Division>
                            <input className="require-value" type="text" name="productPrice" placeholder="원(원)"/>
                        </S.ListWrap>
                        <S.ListWrap>
                            <S.Division>상품재고</S.Division>
                            <input className="require-value" type="text" name="productStock" placeholder="개"/>
                        </S.ListWrap>
                        <S.ListWrap>
                            <S.Division>대분류</S.Division>
                            <select name="productCategoryName">
                                <option value="강아지">강아지</option>
                                <option value="고양이">고양이</option>
                            </select>
                        </S.ListWrap>
                        <S.ListWrap>
                            <S.Division>카테고리</S.Division>
                            <select name="productType">
                                <option value="헬스케어">헬스케어</option>
                                <option value="사료/간식">사료/간식</option>
                                <option value="의류">의류</option>
                                <option value="장난감">장난감</option>
                            </select>
                        </S.ListWrap>
                        <S.ListWrap>
                            <S.Division>펫스널컬러</S.Division>
                            <select name="productAge">
                                <option value="퍼피">오렌지</option>
                                <option value="어덜트">골드</option>
                                <option value="시니어">그라데이션</option>
                                <option value="시니어">라이트 퍼플</option>
                                <option value="시니어">스카이 블루</option>
                                <option value="시니어">세이지 그린</option>
                                <option value="시니어">아이스 블루</option>
                                <option value="시니어">더스티 실버</option>
                            </select>
                        </S.ListWrap>
                        <S.ListWrap>
                            <S.Division>사이즈</S.Division>
                            <select name="productAge">
                                <option value="S">S</option>
                                <option value="M">M</option>
                                <option value="L">L</option>
                            </select>
                        </S.ListWrap>

                        <S.ListWrap>
                            <S.Division>상품간략설명</S.Division>
                            <textarea className="description require-value" type="text" name="productDetail"
                                      placeholder="내용을 설명해주세요."></textarea>
                        </S.ListWrap>
                    </div>
                    <div className="line">
                        <hr/>
                    </div>
                    <div className="shipping-wrap">
                        <h3 className="title h3">배송정보 입력</h3>
                        <S.ListWrap>
                            <S.Division>배송비 종류</S.Division>
                            <div className="radio-wrap">
                                <div className="radio">
                                    <input type="radio" name="shipping-pay" value="무료"/><span className="h6">무료</span>
                                </div>
                                <div className="radio">
                                    <input type="radio" name="shipping-pay" value="유료"/><span className="h6">유료</span>
                                </div>
                                <div className="radio">
                                    <input type="radio" name="shipping-pay" value="조건부 무료" checked/><span
                                    className="h6">조건부 무료</span>
                                </div>
                            </div>
                        </S.ListWrap>
                        <S.ListWrap>
                            <S.Division>배송비 금액</S.Division>
                            <input className="require-value" type="text" placeholder="원(원)"/>
                        </S.ListWrap>
                        <S.ListWrap>
                            <S.Division>무료배송 금액</S.Division>
                            <input className="require-value" type="text" placeholder="원 이상 구매시 무료"/>
                        </S.ListWrap>
                        <S.ListWrap>
                            <S.Division>배송사 선택</S.Division>
                            <div className="radio-wrap">
                                <div className="radio">
                                    <input type="radio" name="shipping-company" checked/><span
                                    className="h6">일반택배배송</span>
                                </div>
                                <div className="radio">
                                    <input type="radio" name="shipping-company"/><span className="h6">자체배송</span>
                                </div>
                            </div>
                        </S.ListWrap>
                        <S.ListWrap>
                            <S.Division>착불 여부 선택</S.Division>
                            <div className="radio-wrap">
                                <div className="radio">
                                    <input type="radio" name="shipping-paylater" checked/><span
                                    className="h6">선결제</span>
                                </div>
                                <div className="radio">
                                    <input type="radio" name="shipping-paylater"/><span className="h6">착불</span>
                                </div>
                            </div>
                        </S.ListWrap>
                        <S.ListWrap>
                            <S.Division>택배사 선택</S.Division>
                            <div className="shipping">
                                <select name="shipping">
                                    <option value="우체국 택배">우체국 택배</option>
                                    <option value="CJ 택배">CJ 택배</option>
                                    <option value="롯데 택배">롯데 택배</option>
                                    <option value="POW 택배">POW 택배</option>
                                    <option value="재은 택배">재은 택배</option>
                                </select>
                                <h6 className="explain h7">
                                    * 판매자가 직접 발송하는 일반택배 택배사를 선택하시면 됩니다.<br/> *’자체배송’ 선택시, 구매자에게는
                                    배송비 ‘무료’로 안내됩니다.<br/> ‘자체배송’ 설정 후 구매자에게 별도로 배송비를 요구하는 행위는 자제
                                    부탁드립니다.
                                </h6>
                            </div>
                        </S.ListWrap>
                    </div>
                    <div className="line">
                        <hr/>
                    </div>
                    <div className="image-wrap">
                        <h3 className="title h3">이미지정보</h3>
                        <div className="image-content">
                            <div className="main">
                                <S.Division className="h6">메인 이미지</S.Division>
                                <label htmlFor="main">
                                    <div className="main-image">
                                        <img id="main-preview" src="../assets/images/seller/plus.png"
                                             alt="사진 추가 아이콘"/>
                                    </div>
                                </label>
                                <input type="file" id="main" name="productImage"
                                       accept="image/*"/>
                                <h6 className="h7">*등록 이미지 5M 이하/ jpg, png, git</h6>
                            </div>
                            <div className="sub-wrap">
                                <div className="sub">
                                    <S.Division>서브이미지1</S.Division>
                                    <label htmlFor="sub1">
                                        <div className="sub-image">
                                            <img id="sub1-preview" src="../assets/images/seller/plus.png"
                                                 alt="#"/>
                                        </div>
                                    </label>
                                    <input type="file" id="sub1" name="productSubImage1"
                                           accept="image/*"/>
                                </div>
                                <div className="sub">
                                    <S.Division>서브이미지2</S.Division>
                                    <label htmlFor="sub2">
                                        <div className="sub-image">
                                            <img id="sub2-preview" src="../assets/images/seller/plus.png"
                                                 alt="#"/>
                                        </div>
                                    </label>
                                    <input type="file" id="sub2" name="productSubImage2"
                                           accept="image/*"/>
                                </div>
                                <div className="sub">
                                    <S.Division>서브이미지3</S.Division>
                                    <label htmlFor="sub3">
                                        <div className="sub-image">
                                            <img id="sub3-preview" src="../assets/images/seller/plus.pngg"
                                                 alt="#"/>
                                        </div>
                                    </label>
                                    <input type="file" id="sub3" name="productSubImage3"
                                           accept="image/*" onClick="document.getElementById('sub3').click();"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="button-wrap">
                        <button type="button" className="register-btn h6">상품 등록</button>
                        <button type="button" className="cancel-btn h6"
                                onClick="location.href='/seller';">취소
                        </button>
                    </div>
                </S.ProductInsert>
            </form>
        </div>
    );
};

export default SellerProductWrite;