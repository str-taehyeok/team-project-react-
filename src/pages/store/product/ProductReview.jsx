import React, {useContext, useEffect, useState} from 'react';
import S from "./style";
import {StarRating} from "../../../context/starContext";
import {useParams} from "react-router-dom";
import {ProductContext} from "../../../context/productContext";
import {findAllByRole} from "@testing-library/react";
import {useSelector} from "react-redux";


const ProductReview = () => {

    const { productState } = useContext(ProductContext);
    const { products } = productState;
    const { id } = useParams();
    const [count, setCount] = useState(1);
    const [activeTab, setActiveTab] = useState('info');
    const [relatedProducts, setRelatedProducts] = useState([]);
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [newReview, setNewReview] = useState('');
    const { currentUser } = useSelector((state) => state.user);
    const memberId = currentUser.id;

    const foundProduct = products?.find((pr) => String((pr).id) === String(id));

    // 리뷰 데이터 가져오기
    useEffect(() => {
        const getReviews = async () => {
            setLoading(true);
            try {
                const response = await fetch(`http://localhost:10000/review/reviews/${id}`);
                if (!response.ok) {
                    throw new Error('리뷰 데이터를 불러오는데 실패했습니다.');
                }
                const reviewData = await response.json();
                console.log('받아온 리뷰 데이터:', reviewData);
                setReviews(reviewData);
            } catch (err) {
                setError(err.message);
                console.error('리뷰 데이터 조회 오류:', err);
            } finally {
                setLoading(false);
            }
        };

        if (id) {
            getReviews();
        }
    }, [id]);


    const handleReviewSubmit = async () => {
        if(newReview.trim() === '') return;
        if(selectedRating === 0) {
            return alert("별점을 선택해주세요");
        }
        const token = localStorage.getItem('jwtToken');
        if(!token){
            return alert("로그인 후 이용해주세요")
        }
        const response = await fetch(`http://localhost:10000/review/write`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify({
                memberId: memberId,
                productId: foundProduct.id,  // 주석 해제하고 수정
                reviewContent: newReview,
                reviewStar: selectedRating
            })
        });

        if (response.ok) {
            const updatedReviews = await fetch(`http://localhost:10000/review/reviews/${foundProduct.id}`);
            if (updatedReviews.ok) {
                const data = await updatedReviews.json();
                setReviews(data);
                setNewReview('');
                setSelectedRating(0);  // 별점 초기화
            } else {
                alert('리뷰 조회 실패');
            }
        } else {
            alert('리뷰 추가 실패');
        }
    };


    const handleDeleteReview = async (reviewId) => {
        const review = reviews.find((review) => review.id === reviewId);
        if(review.memberId !== memberId){
            return alert('본인의 리뷰만 삭제 가능합니다')
        }
        const response = await fetch(`http://localhost:10000/review/review/${reviewId}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            const updateReviews = reviews.filter(review => review.id !== reviewId);
            setReviews(updateReviews);
        } else {
            alert('리뷰 삭제 실패');
        }
    };

    const allReview = reviews.map(({
                                       id,
                                       reviewContent,
                                       reviewStar,
                                       memberNickname,
                                       reviewDate,
                                   }, i) => (
        <div key={i}>
            <div className="user-info-wrap">
                <S.HugReview>
                    <S.NickName>
                        <StarRating currentRating={reviewStar}/>
                        <img src="/assets/images/community/default-myProfile.png" alt="사용자 프로필"/>
                    </S.NickName>
                    <S.ReviewContent>
                        <S.UserInfo>
                            <span>{memberNickname}</span>
                            <span>{reviewDate}</span>
                        </S.UserInfo>
                        <S.WithButton>
                            {reviewContent}
                            <button onClick={() => handleDeleteReview(id)}>
                                <img src="/assets/images/community/trash.jpg" alt="삭제아이콘"/>
                            </button>
                        </S.WithButton>
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
                <span>전체 상품평 ({reviews.length} 건)</span>
                <span>평균 별점: {(reviews.reduce((sum, review) => sum + review.reviewStar, 0) / reviews.length).toFixed(1)}</span>
            </S.ReviewCount>
            <div>
                <S.ProductReview>
                    <S.ProductReviewDetail>
                        {allReview}
                    </S.ProductReviewDetail>
                </S.ProductReview>
                <div>
                    <S.NewReview>
                        <S.ReviewTitle>
                            <span>리뷰 남기기</span>
                            <div>{[1, 2, 3, 4, 5].map((star) => (<span key={star} onClick={() => handleStarClick(star)} style={{cursor: 'pointer', color: star <= selectedRating ? 'gold' : 'gray'}}>★</span>))}</div>
                        </S.ReviewTitle>
                        <S.ReviewInput>
                            <input
                                type="text"
                                value={newReview}
                                onChange={(e) => setNewReview(e.target.value)}
                                placeholder="상품에 대한 솔직한 리뷰를 남겨주세요"
                            />
                            <button type="button" onClick={() => handleReviewSubmit(reviews.id)}>등록</button>
                        </S.ReviewInput>
                    </S.NewReview>
                </div>
            </div>
        </S.ReviewContainer>
    );
};

export default ProductReview;