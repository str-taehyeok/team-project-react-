import React from 'react';
import Footer from '../../layout/Footer';
import StoreCustom from './StoreCustom';
import StoreDogPick from './StoreDogPick';
import StoreCatPick from './StoreCatPick';
import S from './style';
import { Link } from 'react-router-dom';
import StoreBtn from './StoreCatBtn';
import ToCommunityBtn from './ToCommunityBtn';
import StoreCatBtn from './StoreCatBtn';
import StoreDogBtn from './StoreDogBtn';

const StoreMain = () => {

    let name = "";

    return (
        <S.StoreMainWrap>
            <div>
               <img src={`${process.env.PUBLIC_URL}/assets/images/store/banner.png`} alt='배너' />
            </div>
            <S.StoreMain>

                {/* <StoreBtn/> */}
                <div style={{cursor:'pointer'}}>
                    <StoreCustom />
                </div>

                <S.StoreToCommunityBanner>
                   <img src={`${process.env.PUBLIC_URL}/assets/images/store/to-community-banner.png`} alt="배너2" />
                   <ToCommunityBtn />
                </S.StoreToCommunityBanner>

                <S.GoShopping>
                    <img src={`${process.env.PUBLIC_URL}/assets/images/store/toshopbanner.png`} alt="쇼핑하러 가기 이미지" />
                    <S.GoShoppingTitle>
                        <p>고양이용품 쇼핑,</p>
                        <span>지금 powpow에서 시작하세요</span>
                        <span>powpow 고양이 기획전 보러가기</span>
                        <StoreCatBtn />
                    </S.GoShoppingTitle>
                </S.GoShopping>

                <S.DogPickTitle>
                    <p>강아지 원픽</p>
                </S.DogPickTitle>
                <div style={{cursor:'pointer'}}>
                    <StoreDogPick />
                </div>

                <S.GoShopping2>
                    <S.GoShoppingTitle2>
                        <p>강아지용품 쇼핑,</p>
                        <span>지금 powpow에서 시작하세요</span>
                        <span>powpow 강아지 기획전 보러가기</span>
                        <StoreDogBtn />
                    </S.GoShoppingTitle2>
                    <img src={`${process.env.PUBLIC_URL}/assets/images/store/toshopbanner2.png`}></img>
                </S.GoShopping2>

                
                <S.CatPickTitle>
                    <p>고양이 원픽</p>
                </S.CatPickTitle>
                <div style={{cursor:'pointer'}}>
                    <StoreCatPick />
                </div>
            </S.StoreMain>
           <Footer />
        </S.StoreMainWrap>
    );
};

export default StoreMain;