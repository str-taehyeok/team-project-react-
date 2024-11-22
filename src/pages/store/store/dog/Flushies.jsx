import React from 'react';
import FlushieColor from './flushies/FlushieColor';
import FlushieBest from './flushies/FlushieBest';
import FlushieSpecial from './flushies/FlushieSpecial';
import FlushieRecommend from './flushies/FlushieRecommend';

// 더미데이터 확인용
const projectList = [
    {
        productName : "피시포독 그레인프리 참치+스피니치 + 캐롯 85g ,5개",
        productPrice : 9_900,
        src : "/assets/images/dental-dog.png"
    },
    {
        productName : "피시포독 그레인프리 참치+스피니치 + 캐롯 85g ,5개",
        productPrice : 9_900,
        src : "/assets/images/dental-dog.png"
    },
    {
        productName : "피시포독 그레인프리 참치+스피니치 + 캐롯 85g ,5개",
        productPrice : 9_900,
        src : "/assets/images/dental-dog.png"
    },
    {
        productName : "피시포독 그레인프리 참치+스피니치 + 캐롯 85g ,5개",
        productPrice : 9_900,
        src : "/assets/images/dental-dog.png"
    },
    {
        productName : "피시포독 그레인프리 참치+스피니치 + 캐롯 85g ,5개",
        productPrice : 9_900,
        src : "/assets/images/dental-dog.png"
    },
    {
        productName : "피시포독 그레인프리 참치+스피니치 + 캐롯 85g ,5개",
        productPrice : 9_900,
        src : "/assets/images/dental-dog.png"
    },
    {
        productName : "피시포독 그레인프리 참치+스피니치 + 캐롯 85g ,5개",
        productPrice : 9_900,
        src : "/assets/images/dental-dog.png"
    },
    {
        productName : "피시포독 그레인프리 참치+스피니치 + 캐롯 85g ,5개",
        productPrice : 9_900,
        src : "/assets/images/dental-dog.png"
    },
]


const Flushies = () => {

    const betsProducts = projectList.map(({productName, productPrice, src}, i) => (
        <div key={i} >
            <img src={src} alt={"상품" + (i + 1)} />
            <span>{productName}</span>
            <span style={{ fontWeight: 700 }}>{productPrice}</span>
            <button>담기</button>
        </div>
    ))

    const specialProducts = projectList.map(({productName, productPrice, src}, i) => (
        <div key={i} >
            <img src={src} alt={"상품" + (i + 1)} />
            <span>{productName}</span>
            <span style={{ fontWeight: 700 }}>{productPrice}</span>
            <button>담기</button>
        </div>
    ))

    const recommendProducts = projectList.map(({productName, productPrice, src}, i) => (
        <div key={i} >
            <img src="/assets/default-heart.png" alt="좋아요" />
            <img src={src} alt="상품1" />
            <span>{productName}</span>
            <span style={{ fontWeight: 700 }}>{productPrice}</span>
            <button>담기</button>
        </div>
    ))

    return (
        <div>
            <div id="content">
                {/* 컬러 추천 상품 */}
                <FlushieColor projectList={projectList} />

                {/* 베스트상품 */}
                <FlushieBest betsProducts={betsProducts} />
                
                {/* 스페셜 상품 */}
                <FlushieSpecial specialProducts={specialProducts}/>

                {/* 강아지 추천 상품 */}
                <FlushieRecommend recommendProducts={recommendProducts} />

            </div>
        </div>
    );
};

export default Flushies;
