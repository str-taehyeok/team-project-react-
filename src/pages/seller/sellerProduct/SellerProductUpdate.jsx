import React, {useState, useRef} from 'react';
import {useForm} from "react-hook-form";
import {useNavigate, useParams} from "react-router-dom";
import S from "./style";

const SellerProductUpdate = () => {

    const { update, handleSubmit, formState: { isSubmitting }} = useForm({ mode: 'onChange' });
    const [productName, setProductName] = useState("");
    // const [productPrice, setProductPrice] = useState("");
    // const [productCode, setProductCode] = useState("");
    // const [productDate, setProductDate] = useState("");
    // const [productStock, setProductStock] = useState("");
    // const [productEditDate, setProductEditDate] = useState("");
    const [ setProductAnimal] = useState("");
    // const [productCategory, setProductCategory] = useState("");
    // const [productColor, setProductColor] = useState("");
    // const [productSize, setProductSize] = useState("");
    // const [deliveryFee, setDeliveryFee] = useState("");
    const [ setDeliveryFeeKind] = useState("");
    // const [deliveryFeeFree, setDeliveryFeeFree] = useState("");
    const [setDeliveryHow] = useState("");
    const [ setDeliveryPayWhen] = useState("");
    // const [deliveryCompany, setDeliveryCompany] = useState("");
    const memberId = 1;
    const navigate = useNavigate();

    const handleChange = (e) => {
        const value = e.target.value;
        setProductName(value);
    };

    // const handleNextClick = (e) => {
    //     if (!productFileName || productFilePath) {
    //         e.preventDefault();
    //         return alert("상품의 이미지를 등록해주세요.");
    //     }
    // };



    const {id} = useParams();
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

    return (
        <div>
            <form onSubmit={handleSubmit(async (data) => {
                console.log(data)
                await fetch(`http://localhost:10000/product/product/${id}`, {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        productName: data.productName,
                        productPrice: data.productPrice,
                        productCode: new Date().getTime().toString(),
                        productDate: new Date().toISOString(),
                        productStock: data.productStock,
                        productEditDate: new Date().toISOString(),
                        productFileName: data.productFileName,
                        productFilePath: data.productFilePath,
                        productDetail: data.productDetail,
                        productAnimal: data.productAnimal,
                        productRealPrice:data.productRealPrice,
                        productCategory: data.productCategory,
                        productColor: data.productColor,
                        productSize: data.productSize,
                        deliveryFeeKind: data.deliveryFeeKind,
                        deliveryFee: data.deliveryFee,
                        deliveryFeeFree: data.deliveryFeeFree,
                        deliveryHow: data.deliveryHow,
                        deliveryPayHow: data.deliveryPayHow,
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

                <form onSubmit={handleSubmit(async (data) => {
                    console.log(data)
                    await fetch(`http://localhost:10000/deliveries/seller-product/${id}`, {
                        method: "PUT",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            deliveryFeeKind: data.deliveryFeeKind,
                            deliveryFee: data.deliveryFee,
                            deliveryFeeFree: data.deliveryFeeFree,
                            deliveryHow: data.deliveryHow,
                            deliveryPayHow: data.deliveryPayHow,
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
                            <input className="require-value" type="text"
                                   name="productName" {...update("productName", {required: "상품명은 필수 입력 항목입니다."})}
                                   value={productName}
                                   onChange={handleChange}/>
                        </S.ListWrap>
                        <S.ListWrap>
                            <S.Division>소비자가</S.Division>
                            <input className="require-value" type="text" name="productRealPrice" placeholder="원(원)"/>
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
                                    <input type="radio" name="productAnimal"
                                           value="dog" {...update("productAnimal")}
                                           onChange={(e) => setProductAnimal(e.target.value)}/>
                                    <span>반려견</span>
                                </S.Ratio>
                                <S.Ratio>
                                    <input type="radio" name="productAnimal"
                                           value="cat" {...update("productAnimal")}
                                           onChange={(e) => setProductAnimal(e.target.value)}/>
                                    <span>반려묘</span>
                                </S.Ratio>
                            </S.RatioWrap>
                        </S.ListWrap>
                        <S.ListWrap>
                            <S.Division>카테고리</S.Division>
                            <select name="productCategory">
                                <option value="healthCare">헬스케어</option>
                                <option value="treats">사료/간식</option>
                                <option value="colothes">의류</option>
                                <option value="flushies">장난감</option>
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
                                    <input type="radio" name="deliveryFeeKind"
                                           value="free" {...update("deliveryFeeKind")}
                                           onChange={(e) => setDeliveryFeeKind(e.target.value)}/>
                                    <span>무료</span>
                                </S.Ratio>
                                <S.Ratio>
                                    <input type="radio" name="deliveryFeeKind"
                                           value="paid" {...update("deliveryFeeKind")}
                                           onChange={(e) => setDeliveryFeeKind(e.target.value)}/>
                                    <span>유료</span>
                                </S.Ratio>
                                <S.Ratio>
                                    <input type="radio" name="deliveryFeeKind"
                                           value="freeCondition" {...update("deliveryFeeKind")}
                                           onChange={(e) => setDeliveryFeeKind(e.target.value)}/>
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
                                    <input type="radio" name="deliveryHow"
                                           value="normalDelivery" {...update("deliveryHow")}
                                           onChange={(e) => setDeliveryHow(e.target.value)}/>
                                    <span>일반택배배송</span>
                                </S.Ratio>
                                <S.Ratio>
                                    <input type="radio" name="deliveryHow"
                                           value="ownDelivery" {...update("deliveryHow")}
                                           onChange={(e) => setDeliveryHow(e.target.value)}/>
                                    <span>자체배송</span>
                                </S.Ratio>
                            </S.RatioWrap>
                        </S.ListWrap>
                        <S.ListWrap>
                            <S.Division>착불 여부 선택</S.Division>
                            <S.RatioWrap>
                                <S.Ratio>
                                    <input type="radio" name="deliveryPayWhen"
                                           value="prePay" {...update("deliveryPayWhen")}
                                           onChange={(e) => setDeliveryPayWhen(e.target.value)}/>
                                    <span>선결제</span>
                                </S.Ratio>
                                <S.Ratio>
                                    <input type="radio" name="deliveryPayWhen"
                                           value="payLater" {...update("deliveryPayWhen")}
                                           onChange={(e) => setDeliveryPayWhen(e.target.value)}/>
                                    <span>착불</span>
                                </S.Ratio>
                            </S.RatioWrap>
                        </S.ListWrap>
                        <S.ListWrap>
                            <S.Division>택배사 선택</S.Division>
                            <S.Shipping>
                                <select>
                                    <option value="post">우체국 택배</option>
                                    <option value="cj">CJ 택배</option>
                                    <option value="lotte">롯데 택배</option>
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
                                        <img src={mainImage || "/assets/images/seller/sub-default-plus.png"}
                                             alt="메인 이미지"/>
                                    </S.MainImage>
                                </label>
                                <input type="file"
                                       id="main"{...update('productImage', {required: '메인 이미지는 필수입니다.'})}
                                       ref={mainImageRef} accept="image/*" style={{display: 'none'}}
                                       onChange={(e) => handleImagePreview(e, 'main')}/>
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
                                                    alt={`서브 이미지 ${index + 1}`}/>
                                            </S.SubImage>
                                        </label>
                                        <input type="file" id={`sub${index + 1}`} ref={subImageRefs[index]}
                                               accept="image/*" style={{display: 'none'}}
                                               onChange={(e) => handleImagePreview(e, 'sub', index)}
                                        />
                                    </S.Subs>
                                ))}
                            </S.SubWrap>
                        </S.imageContent>
                    </S.ImageWrap>
                    <S.ButtonWrap>
                        <button id="submit-button" type="submit" disabled={isSubmitting}>수정 완료</button>
                        <button type="button" onClick={() => navigate('/seller')}>취소
                        </button>
                    </S.ButtonWrap>
                </S.ProductInsert>
            </form>
            </form>
        </div>
    );
};

export default SellerProductUpdate;