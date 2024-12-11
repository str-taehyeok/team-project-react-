import React, { useState } from 'react';
import S from "./style";
import {StarRating} from "../../../context/starContext";




const ProductReview = () => {

    // 더미 리뷰
    const reviewList = [
        {
            memberId: 1,
            memberNickName: "janethebest",
            reviewDate: "2024-05-03",
            reviewStar: 4.5,
            reviewContent: "1+1이라 다이어트용으로 10개 주문햇어요.원플원이라 20개 잘받앗네요. 개당 가격은 비싸지만 원플원이라 그나마 괜찮네요. 맛잇다고해서 한달 먹을꺼주문햇네요.유통기한은 10월24일까지라 3주 입니다.원플원이라 딱 10개 주문하면 무료배송에 20개 와서 하루에 하나씩 먹으면 유통기한 전까지 먹을수 잇어요. 다이어트용으로 좋아요.그리고 냉장보관 입니다. 냉동보관이 아닙니다. 냉동보관시 식감이 떨어질수있어요.진공포장이라 김치냉장고에 보관하면 좀더 오래먹을수 잇을꺼 같아요.먹어보고 맛잇으면 또 주문할께요.전자렌지나 에어프라이어에 짧은시간에 돌려서 먹을수 잇으니 간편합니다.",
            memberImage: "/assets/images/myhome/default-userImg.png",
            productName: "강아지 전용 치약 + 칫솔 기획 세트 (트레이 / 칫솔핸들러 포함)"
        },
        {
            memberId: 2,
            memberNickName: "gina",
            reviewDate: "2024-12-11",
            reviewStar: 3,
            reviewContent: "1+1이라 다이어트용으로 10개 주문햇어요.원플원이라 20개 잘받앗네요. 개당 가격은 비싸지만 원플원이라 그나마 괜찮네요. 맛잇다고해서 한달 먹을꺼주문햇네요.유통기한은 10월24일까지라 3주 입니다.원플원이라 딱 10개 주문하면 무료배송에 20개 와서 하루에 하나씩 먹으면 유통기한 전까지 먹을수 잇어요. 다이어트용으로 좋아요.그리고 냉장보관 입니다. 냉동보관이 아닙니다. 냉동보관시 식감이 떨어질수있어요.진공포장이라 김치냉장고에 보관하면 좀더 오래먹을수 잇을꺼 같아요.먹어보고 맛잇으면 또 주문할께요.전자렌지나 에어프라이어에 짧은시간에 돌려서 먹을수 잇으니 간편합니다.",
            memberImage: "/assets/images/myhome/default-userImg.png",
            productName: "강아지 전용 치약 + 칫솔 기획 세트 (트레이 / 칫솔핸들러 포함)"
        },
        {
            memberId: 3,
            memberNickName: "WowMe",
            reviewDate: "2024-09-01",
            reviewStar: 5,
            reviewContent: "1+1이라 다이어트용으로 10개 주문햇어요.원플원이라 20개 잘받앗네요. 개당 가격은 비싸지만 원플원이라 그나마 괜찮네요. 맛잇다고해서 한달 먹을꺼주문햇네요.유통기한은 10월24일까지라 3주 입니다.원플원이라 딱 10개 주문하면 무료배송에 20개 와서 하루에 하나씩 먹으면 유통기한 전까지 먹을수 잇어요. 다이어트용으로 좋아요.그리고 냉장보관 입니다. 냉동보관이 아닙니다. 냉동보관시 식감이 떨어질수있어요.진공포장이라 김치냉장고에 보관하면 좀더 오래먹을수 잇을꺼 같아요.먹어보고 맛잇으면 또 주문할께요.전자렌지나 에어프라이어에 짧은시간에 돌려서 먹을수 잇으니 간편합니다.",
            memberImage: "/assets/images/myhome/default-userImg.png",
            productName: "강아지 전용 치약 + 칫솔 기획 세트 (트레이 / 칫솔핸들러 포함)"
        }
    ];

    const reviews = reviewList.map(({
                                        productName,
                                        memberNickName,
                                        memberImage,
                                        reviewDate,
                                        reviewContent,
                                        reviewStar
                                    }, i) => (
        <div key={i}>
            <div className="user-info-wrap">


                <S.HugReview>
                <S.NickName>
                    <StarRating currentRating={reviewStar}/>
                    <img src={memberImage} alt="사용자 프로필"/>
                </S.NickName>
                    <S.ReviewContent>
                        <S.UserInfo>
                        <span>{memberNickName}</span>
                        <p>{reviewDate}</p>
                        </S.UserInfo>
                        {reviewContent}
                    </S.ReviewContent>
                </S.HugReview>
                <S.LinePer></S.LinePer>
            </div>
        </div>
    ));


    const [selectedRating, setSelectedRating] = useState(0);


    const handleStarClick = (rating) => {
        setSelectedRating(rating);
    };


        return (
            <S.ReviewContainer>
                    <S.ReviewCount>
                        <span>전체 상품평 ({reviewList.length} 건)</span>
                        <span>평균 별점: {(reviewList.reduce((sum, review) => sum + review.reviewStar, 0) / reviewList.length).toFixed(1)}</span>
                    </S.ReviewCount>
                <div>
                    <S.ProductReview>
                    <S.ProductReviewDetail>
                        {reviews}
                    </S.ProductReviewDetail>
                    </S.ProductReview>
                    <div>
                        <S.NewReview>
                        <S.ReviewTitle>
                            <span>리뷰 남기기</span>
                            <div>{[1, 2, 3, 4, 5].map((star) => (<span key={star} onClick={() => handleStarClick(star)} style={{cursor: 'pointer', color: star <= selectedRating ? 'gold' : 'gray'}}>★</span>))}</div>
                        </S.ReviewTitle>
                        <S.ReviewInput>
                        <input type="text" placeholder="상품에 대한 솔직한 리뷰를 남겨주세요"/>
                        <button type="button">등록</button>
                        </S.ReviewInput>
                        </S.NewReview>
                    </div>
                </div>
            </S.ReviewContainer>
        );
    };

export default ProductReview;