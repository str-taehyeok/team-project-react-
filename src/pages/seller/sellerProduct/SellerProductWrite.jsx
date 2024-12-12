import React, {useState, useRef} from 'react';
import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import S from "./style";

const SellerProductWrite = () => {

    // const { register, handleSubmit, formState: { isSubmitting }} = useForm({ mode: 'onChange' });
    // const [productName, setProductName] = useState("");
    // const [productPrice, setProductPrice] = useState("");
    // const [productCode, setProductCode] = useState("");
    // const [productDate, setProductDate] = useState("");
    // const [productStock, setProductStock] = useState("");
    // const [productEditDate, setProductEditDate] = useState("");
    // const [productDetail, setProductDetail] = useState("");
    // const [productImage1, setProductImage1] = useState("");
    // const [productImage2, setProductImage2] = useState("");
    // const [productImage3, setProductImage3] = useState("");
    // const [productImage4, setProductImage4] = useState("");
    // const [productAnimal, setProductAnimal] = useState("");
    // const [productCategory, setProductCategory] = useState("");
    // const [productColor, setProductColor] = useState("");
    // const [productSize, setProductSize] = useState("");
    // const [deliveryFee, setDeliveryFee] = useState("");
    // const [deliveryFeeKind, setDeliveryFeeKind] = useState("");
    // const [deliveryFeeFree, setDeliveryFeeFree] = useState("");
    // const [deliveryHow, setDeliveryHow] = useState("");
    // const [deliveryPayWhen, setDeliveryPayWhen] = useState("");
    // const [deliveryCompany, setDeliveryCompany] = useState("");
    // const navigate = useNavigate();
    // const memberId = 1;
    //
    // const handleChange = (e) => {
    //     const value = e.target.value;
    //     setProductName(value);
    // };
    //
    // const handleNextClick = (e) => {
    //     // 입력 값 확인
    //     if (!productName) {
    //         e.preventDefault();
    //         return alert("제품명을 입력해주세요.");
    //     }
    //     if (!productPrice) {
    //         e.preventDefault();
    //         return alert("가격을 입력해주세요.");
    //     }
    //     if (!productCode) {
    //         e.preventDefault();
    //         return alert("제품 코드를 입력해주세요.");
    //     }
    //     if (!productStock) {
    //         e.preventDefault();
    //         return alert("재고를 입력해주세요.");
    //     }
    //     if (!productImage1) {
    //         e.preventDefault();
    //         return alert("상품의 이미지를 등록해주세요.");
    //     }
    //     if (!productAnimal) {
    //         e.preventDefault();
    //         return alert("제품을 사용할 수 있는 종을 선택해주세요.");
    //     }
    //     if (!productCategory) {
    //         e.preventDefault();
    //         return alert("카테고리를 선택해주세요.");
    //     }
    //     if (!productColor) {
    //         e.preventDefault();
    //         return alert("펫스널컬러로 구분할 색상을 선택해주세요.");
    //     }
    //     if (!productSize) {
    //         e.preventDefault();
    //         return alert("사이즈를 선택해주세요.");
    //     }
    // };


    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: 'onChange'
    });

    const [mainImage, setMainImage] = useState(null);
    const [subImages, setSubImages] = useState([null, null, null]);

    const mainImageRef = useRef(null);
    const subImageRefs = [useRef(null), useRef(null), useRef(null)];

    const handleImagePreview = (e, type, index = 0) => {
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.onload = (event) => {
            if (type === 'main') {
                setMainImage(event.target.result);
            } else {
                const newSubImages = [...subImages];
                newSubImages[index] = event.target.result;
                setSubImages(newSubImages);
            }
        };

        if (file) {
            reader.readAsDataURL(file);
        }
    };


    // const onSubmit = async (data) => {
    //     const formData = new FormData();
    //
    //     if (mainImageRef.current.files[0]) {
    //         formData.append('productImage', mainImageRef.current.files[0]);
    //     }
    //
    //     subImageRefs.forEach((ref, index) => {
    //         if (ref.current.files[0]) {
    //             formData.append(`productSubImage${index + 1}`, ref.current.files[0]);
    //         }
    //     });
    //
    //
    //     Object.keys(data).forEach(key => {
    //         formData.append(key, data[key]);
    //     });
    //
    //
    //     formData.append('memberId', 1); // 임시 회원 ID
    //
    //     try {
    //         const response = await fetch("http://localhost:10000/product/write", {
    //             method: "POST",
    //             body: formData
    //         });
    //
    //         if (response.ok) {
    //             const result = await response.json();
    //             alert('상품이 성공적으로 등록되었습니다!');
    //             navigate('/seller');
    //         } else {
    //             throw new Error('상품 등록 실패');
    //         }
    //     } catch (error) {
    //         console.error('Error:', error);
    //         alert('상품 등록 중 오류가 발생했습니다.');
    //     }
    // };


    // const handleImagePreview = (event, previewId) => {
    //     const file = event.target.files[0];
    //     if (file) {
    //         const reader = new FileReader();
    //         reader.onload = (e) => {
    //             document.getElementById(previewId).src = e.target.result;
    //         };
    //         reader.readAsDataURL(file);
    //     }
    // };



    return (
        <div>
            {/*<form onSubmit={handleSubmit(onSubmit)}>*/}
            {/*<form onSubmit={handleSubmit(async (data) => {*/}
            {/*    console.log(data)*/}
            {/*    await fetch("http://localhost:10000/product/write", {*/}
            {/*        method: "POST",*/}
            {/*        headers: {*/}
            {/*            "Content-Type": "application/json"*/}
            {/*        },*/}
            {/*        body: JSON.stringify({*/}
            {/*            productName: data.productName,*/}
            {/*            productPrice: data.productPrice,*/}
            {/*            productCode: data.productCode,*/}
            {/*            productDate: data.productDate,*/}
            {/*            productStock: data.productStock,*/}
            {/*            productEditDate: data.productEditDate,*/}
            {/*            productDetail: data.productDetail,*/}
            {/*            productImage1: data.productImage1,*/}
            {/*            productImage2: data.productImage2,*/}
            {/*            productImage3: data.productImage3,*/}
            {/*            productImage4: data.productImage4,*/}
            {/*            productAnimal: data.productAnimal,*/}
            {/*            productCategory: data.productCategory,*/}
            {/*            productColor: data.productColor,*/}
            {/*            productSize: data.productSize,*/}
            {/*            deliveryFee: data.deliveryFee,*/}
            {/*            deliveryFeeKind: data.deliveryFeeKind,*/}
            {/*            deliveryFeeFree: data.deliveryFeeFree,*/}
            {/*            deliveryHow: data.deliveryHow,*/}
            {/*            deliveryPayWhen: data.deliveryPayWhen,*/}
            {/*            deliveryCompany: data.deliveryCompany,*/}
            {/*            memberId: memberId*/}
            {/*        })*/}
            {/*    })*/}
            {/*        .then((res) => res.json())*/}
            {/*        .then((res) => {*/}
            {/*            alert('데이터가 성공적으로 전송되었습니다!');*/}
            {/*            navigate(`/seller`)*/}
            {/*        })*/}
            {/*        .catch((error) => {*/}
            {/*            console.error('에러발생 :', error);*/}
            {/*            alert('데이터 저장중 오류가 발생하였습니다.');*/}
            {/*        })*/}
            {/*})}>*/}
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
                        productCode: new Date().getTime().toString(), // 임시 상품 코드 생성
                        productDate: new Date().toISOString(), // 현재 날짜 추가
                        productStock: data.productStock,
                        productEditDate: new Date().toISOString(),
                        productDetail: data.productDetail,
                        productAnimal: data.productAnimal,
                        productCategory: data.productCategory,
                        petsonalColor: data.petsonalColor,
                        productSize: data.productSize,
                        deliveryFeeKind: data.deliveryFeeKind,
                        deliveryFee: data.deliveryFee,
                        deliveryFeeFree: data.deliveryFeeFree,
                        deliveryHow: data.deliveryHow,
                        deliveryPayHow: data.deliveryPayHow,
                        // memberId는 임시로 1로 고정
                        memberId: 1
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
                            <S.RatioWrap>
                                <S.Ratio>
                                    <input type="radio" name="productAnimal" value="dog" checked/>
                                    <span>반려견</span>
                                </S.Ratio>
                                <S.Ratio>
                                    <input type="radio" name="productAnimal" value="cat"/>
                                    <span>반려묘</span>
                                </S.Ratio>
                            </S.RatioWrap>
                        </S.ListWrap>
                        <S.ListWrap>
                            <S.Division>카테고리</S.Division>
                            <select name="productCategory">
                                <option value="헬스케어">헬스케어</option>
                                <option value="사료/간식">사료/간식</option>
                                <option value="의류">의류</option>
                                <option value="장난감">장난감</option>
                            </select>
                        </S.ListWrap>
                        <S.ListWrap>
                            <S.Division>펫스널컬러</S.Division>
                            <select name="petsonalColor">
                                <option value="orange">오렌지</option>
                                <option value="gold">골드</option>
                                <option value="gradation">그라데이션</option>
                                <option value="lightPurple">라이트 퍼플</option>
                                <option value="skyBlue">스카이 블루</option>
                                <option value="sageGreen">세이지 그린</option>
                                <option value="iceBlue">아이스 블루</option>
                                <option value="dustySilver">더스티 실버</option>
                            </select>
                        </S.ListWrap>
                        <S.ListWrap>
                            <S.Division>사이즈</S.Division>
                            <select name="productSize">
                                <option value="S">S</option>
                                <option value="M">M</option>
                                <option value="L">L</option>
                            </select>
                        </S.ListWrap>

                        <S.ListWrap>
                            <S.Division>상품 상세 설명</S.Division>
                            <textarea className="description require-value" type="text" name="productDetail"
                                      placeholder="제품의 상세 정보를 입력해주세요."></textarea>
                        </S.ListWrap>
                    </div>
                    <div className="line">
                        <hr/>
                    </div>
                    <S.ShippingWrap>
                        <p>배송정보 입력</p>
                        <S.ListWrap>
                            <S.Division>배송비 종류</S.Division>
                            <S.RatioWrap>
                                <S.Ratio>
                                    <input type="radio" name="deliveryFeeKind" value="무료" checked/>
                                    <span>무료</span>
                                </S.Ratio>
                                <S.Ratio>
                                    <input type="radio" name="deliveryFeeKind" value="유료"/>
                                    <span>유료</span>
                                </S.Ratio>
                                <S.Ratio>
                                    <input type="radio" name="deliveryFeeKind" value="조건부 무료"/>
                                    <span>조건부 무료</span>
                                </S.Ratio>
                            </S.RatioWrap>
                        </S.ListWrap>
                        <S.ListWrap>
                            <S.Division>배송비 금액</S.Division>
                            <input name="deliveryFee" type="text" placeholder="원(원)"/>
                        </S.ListWrap>
                        <S.ListWrap>
                            <S.Division>무료배송 금액</S.Division>
                            <input name="deliveryFeeFree" type="text" placeholder="원 이상 구매시 무료"/>
                        </S.ListWrap>
                        <S.ListWrap>
                            <S.Division>배송사 선택</S.Division>
                            <S.RatioWrap>
                                <S.Ratio>
                                    <input type="radio" name="deliveryHow" checked/>
                                    <span>일반택배배송</span>
                                </S.Ratio>
                                <S.Ratio>
                                    <input type="radio" name="deliveryHow"/>
                                    <span>자체배송</span>
                                </S.Ratio>
                            </S.RatioWrap>
                        </S.ListWrap>
                        <S.ListWrap>
                            <S.Division>착불 여부 선택</S.Division>
                            <S.RatioWrap>
                                <S.Ratio>
                                    <input type="radio" name="deliveryPayHow" checked/>
                                    <span>선결제</span>
                                </S.Ratio>
                                <S.Ratio>
                                    <input type="radio" name="deliveryPayHow"/>
                                    <span>착불</span>
                                </S.Ratio>
                            </S.RatioWrap>
                        </S.ListWrap>
                        <S.ListWrap>
                            <S.Division>택배사 선택</S.Division>
                            <S.Shipping>
                                <select>
                                    <option value="우체국 택배">우체국 택배</option>
                                    <option value="CJ 택배">CJ 택배</option>
                                    <option value="롯데 택배">롯데 택배</option>
                                </select>
                            </S.Shipping>
                        </S.ListWrap>
                        <S.Explain>
                            <span>* 판매자가 직접 발송하는 일반택배 택배사를 선택하시면 됩니다.</span>
                            <span>*’자체배송’ 선택시, 구매자에게는 배송비 ‘무료’로 안내됩니다. </span>
                            <span>‘자체배송’ 설정 후 구매자에게 별도로 배송비를 요구하는 행위는 자제 부탁드립니다.</span>
                        </S.Explain>
                    </S.ShippingWrap>
                    <S.Line></S.Line>
                    <S.ImageWrap>
                        <S.ImageInfo>이미지정보</S.ImageInfo>
                        <S.imageContent>
                            <S.Main>
                                <S.Division>메인 이미지</S.Division>
                                <label htmlFor="main" style={{cursor: 'pointer'}}>
                                    <S.MainImage>
                                        <img
                                            src={mainImage || "/assets/images/seller/sub-default-plus.png"}
                                            alt="메인 이미지"
                                            style={{
                                                objectFit: 'cover'
                                            }}
                                        />
                                    </S.MainImage>
                                </label>
                                <input
                                    type="file"
                                    id="main"
                                    {...register('productImage', {
                                        required: '메인 이미지는 필수입니다.'
                                    })}
                                    ref={mainImageRef}
                                    accept="image/*"
                                    style={{display: 'none'}}
                                    onChange={(e) => handleImagePreview(e, 'main')}
                                />
                                {errors.productImage && <p style={{color: 'red'}}>{errors.productImage.message}</p>}
                            </S.Main>
                            {/* 서브 이미지들 */}
                            <S.SubWrap>
                                {[0, 1, 2].map((index) => (
                                    <S.Subs key={index}>
                                        <S.Division>서브이미지{index + 1}</S.Division>
                                        <label htmlFor={`sub${index + 1}`} style={{cursor: 'pointer'}}>
                                            <S.SubImage>
                                                <img
                                                    src={subImages[index] || "/assets/images/seller/sub-default-plus.png"}
                                                    alt={`서브 이미지 ${index + 1}`}
                                                    style={{
                                                        objectFit: 'cover'
                                                    }}
                                                />
                                            </S.SubImage>
                                        </label>
                                        <input
                                            type="file"
                                            id={`sub${index + 1}`}
                                            ref={subImageRefs[index]}
                                            accept="image/*"
                                            style={{display: 'none'}}
                                            onChange={(e) => handleImagePreview(e, 'sub', index)}
                                        />
                                    </S.Subs>
                                ))}
                            </S.SubWrap>
                        </S.imageContent>
                    </S.ImageWrap>
                    <S.ButtonWrap>
                        <button type="button" className="register-btn h6">상품 등록</button>
                        <button type="button" className="cancel-btn h6" onClick={() => navigate('/seller')}>취소
                        </button>
                    </S.ButtonWrap>
                </S.ProductInsert>
            </form>
        </div>
    );
};

export default SellerProductWrite;