import React, { useState, useRef } from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import S from "./style";

const SellerProductWrite = () => {
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({ mode: "onChange" });
    const navigate = useNavigate();
    const { id } = useSelector(state => state.admin.currentUser);

    // 이미지 상태 관리
    const [mainImage, setMainImage] = useState(null);
    const [subImages, setSubImages] = useState([null, null, null]);
    const mainImageRef = useRef(null);
    const subImageRefs = [useRef(null), useRef(null), useRef(null)];

    // 이미지 미리보기 핸들러
    const handleImagePreview = (e, type, index = 0) => {
        const file = e.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onloadend = () => {
            if (type === 'main') {
                setMainImage(reader.result);
            } else {
                const newSubImages = [...subImages];
                newSubImages[index] = reader.result;
                setSubImages(newSubImages);
            }
        };
        reader.readAsDataURL(file);
    };

    const onSubmit = async (data) => {
        try {
            const formData = new FormData();

            // 이미지 파일 추가
            const mainImageFile = mainImageRef.current?.files[0];
            const subImageFiles = subImageRefs.map(ref => ref.current?.files[0]);

            if (mainImageFile) {
                formData.append('mainImage', mainImageFile);
            }
            subImageFiles.forEach((file, index) => {
                if (file) {
                    formData.append(`subImage${index + 1}`, file);
                }
            });

            // 나머지 폼 데이터 추가
            Object.keys(data).forEach(key => {
                formData.append(key, data[key]);
            });

            // 이미지 업로드
            const imageResponse = await fetch("http://localhost:10000/image-upload", {
                method: "POST",
                body: formData
            });
            const imageResult = await imageResponse.json();

            // 상품 정보 저장
            const productResponse = await fetch("http://localhost:10000/product/write", {
                method: "POST",
                body: formData
            });
            const productResult = await productResponse.json();

            // 배송 정보 저장
            const deliveryResponse = await fetch("http://localhost:10000/delivery/write", {
                method: "POST",
                body: formData
            });
            const deliveryResult = await deliveryResponse.json();

            alert("상품이 성공적으로 등록되었습니다.");
            navigate("/seller");

        } catch (error) {
            console.error("상품 등록 중 오류 발생:", error);
            alert("상품 등록에 실패했습니다. 다시 시도해주세요.");
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
                <S.ProductInsert>
                    <p>상품 정보 입력</p>
                    <div>
                        <S.ListWrap>
                            <S.Division>상품명</S.Division>
                            <input className="require-value" type="text"
                                   {...register("productName", {
                                       required: "상품명은 필수 입력 항목입니다.",
                                   })}/>
                        </S.ListWrap>
                        <S.ListWrap>
                            <S.Division>소비자가</S.Division>
                            <input className="require-value" type="number" placeholder="원(원)"
                                   {...register("productRealPrice", {
                                       required: true,
                                   })}/>
                        </S.ListWrap>
                        <S.ListWrap>
                            <S.Division>상품가격</S.Division>
                            <input className="require-value" type="number" placeholder="원(원)"
                                   {...register("productPrice", {
                                       required: true,
                                   })}/>
                        </S.ListWrap>
                        <S.ListWrap>
                            <S.Division>상품재고</S.Division>
                            <input className="require-value" type="text" name="productStock" placeholder="개"
                                   {...register("productStock"
                                   )}/>
                        </S.ListWrap>
                        <S.ListWrap>
                            <S.Division>대분류</S.Division>
                            <S.RatioWrap>
                                <S.Ratio>
                                    <input type="radio"
                                           value="dog" {...register("productAnimal")}/>
                                    <span>반려견</span>
                                </S.Ratio>
                                <S.Ratio>
                                    <input type="radio"
                                           value="cat" {...register("productAnimal")}/>
                                    <span>반려묘</span>
                                </S.Ratio>
                            </S.RatioWrap>
                        </S.ListWrap>
                        <S.ListWrap>
                            <S.Division>카테고리</S.Division>
                            <select {...register("productCategory", {
                                required: true,
                            })}>
                                <option value="healthCare">헬스케어</option>
                                <option value="treats">사료/간식</option>
                                <option value="clothes">의류</option>
                                <option value="flushies">장난감</option>
                            </select>
                        </S.ListWrap>
                        <S.ListWrap>
                            <S.Division>펫스널컬러</S.Division>
                            <select name="productColor" {...register("productColor", {
                                required: true,
                            })}>
                                <option value="Orange">오렌지</option>
                                <option value="Gold">골드</option>
                                <option value="Gradation">그라데이션</option>
                                <option value="LightPurple">라이트 퍼플</option>
                                <option value="SkyBlue">스카이 블루</option>
                                <option value="SageGreen">세이지 그린</option>
                                <option value="IceBlue">아이스 블루</option>
                                <option value="DustySilver">더스티 실버</option>
                            </select>
                        </S.ListWrap>
                        <S.ListWrap>
                            <S.Division>사이즈</S.Division>
                            <select name="productSize" {...register("productSize", {
                                required: true,
                            })}>
                                <option value="S">S</option>
                                <option value="M">M</option>
                                <option value="L">L</option>
                            </select>
                        </S.ListWrap>

                        <S.ListWrap>
                            <S.Division>상품 상세 설명</S.Division>
                            <textarea className="description require-value" type="text" name="productDetail"
                                      placeholder="제품의 상세 정보를 입력해주세요." {...register("productDetail"
                            )}>
                                </textarea>
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
                                           value="free" {...register("deliveryFeeKind")}/>
                                    <span>무료</span>
                                </S.Ratio>
                                <S.Ratio>
                                    <input type="radio" name="deliveryFeeKind"
                                           value="paid" {...register("deliveryFeeKind")}/>
                                    <span>유료</span>
                                </S.Ratio>
                                <S.Ratio>
                                    <input type="radio" name="deliveryFeeKind"
                                           value="freeCondition" {...register("deliveryFeeKind")}/>
                                    <span>조건부 무료</span>
                                </S.Ratio>
                            </S.RatioWrap>
                        </S.ListWrap>
                        <S.ListWrap>
                            <S.Division>배송비 금액</S.Division>
                            <input name="deliveryFee" type="text" placeholder="원(원)" {...register("deliveryFee")}/>
                        </S.ListWrap>
                        <S.ListWrap>
                            <S.Division>무료배송 금액</S.Division>
                            <input name="deliveryFeeFree" type="text" placeholder="원 이상 구매시 무료" {...register("deliveryFeeFree")}/>
                        </S.ListWrap>
                        <S.ListWrap>
                            <S.Division>배송사 선택</S.Division>
                            <S.RatioWrap>
                                <S.Ratio>
                                    <input type="radio" name="deliveryHow"
                                           value="normalDelivery" {...register("deliveryHow")}/>
                                    <span>일반택배배송</span>
                                </S.Ratio>
                                <S.Ratio>
                                    <input type="radio" name="deliveryHow"
                                           value="ownDelivery" {...register("deliveryHow")}/>
                                    <span>자체배송</span>
                                </S.Ratio>
                            </S.RatioWrap>
                        </S.ListWrap>
                        <S.ListWrap>
                            <S.Division>착불 여부 선택</S.Division>
                            <S.RatioWrap>
                                <S.Ratio>
                                    <input type="radio" name="deliveryPayWhen"
                                           value="prePay" {...register("deliveryPayWhen")}/>
                                    <span>선결제</span>
                                </S.Ratio>
                                <S.Ratio>
                                    <input type="radio" name="deliveryPayWhen"
                                           value="payLater" {...register("deliveryPayWhen")}/>
                                    <span>착불</span>
                                </S.Ratio>
                            </S.RatioWrap>
                        </S.ListWrap>
                        <S.ListWrap>
                            <S.Division>택배사 선택</S.Division>
                            <S.Shipping>
                                <select {...register("deliveryCompany")}>
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
                                <label htmlFor="mainImage" style={{cursor: 'pointer'}}>
                                    <S.MainImage>
                                        <img
                                            src={mainImage || "/assets/images/seller/sub-default-plus.png"}
                                            alt="메인 이미지"
                                        />
                                    </S.MainImage>
                                </label>
                                <input
                                    type="file"
                                    id="mainImage"
                                    ref={mainImageRef}
                                    onChange={(e) => handleImagePreview(e, 'main')}
                                    accept="image/*"
                                    style={{display: 'none'}}
                                />
                            </S.Main>
                            <S.SubWrap>
                                {[0, 1, 2].map((index) => (
                                    <S.Subs key={index}>
                                        <S.Division>서브이미지{index + 1}</S.Division>
                                        <label htmlFor={`subImage${index + 1}`} style={{cursor: 'pointer'}}>
                                            <S.SubImage>
                                                <img
                                                    src={subImages[index] || "/assets/images/seller/sub-default-plus.png"}
                                                    alt={`서브 이미지 ${index + 1}`}
                                                />
                                            </S.SubImage>
                                        </label>
                                        <input
                                            type="file"
                                            id={`subImage${index + 1}`}
                                            ref={subImageRefs[index]}
                                            onChange={(e) => handleImagePreview(e, 'sub', index)}
                                            accept="image/*"
                                            style={{display: 'none'}}
                                        />
                                    </S.Subs>
                                ))}
                            </S.SubWrap>
                        </S.imageContent>
                    </S.ImageWrap>
                    <S.ButtonWrap>
                        <button type="submit" disabled={isSubmitting}>상품 등록</button>
                        <button type="button" onClick={() => navigate('/seller')}>취소</button>
                    </S.ButtonWrap>
                </S.ProductInsert>
            </form>
        </div>
);
};

export default SellerProductWrite;