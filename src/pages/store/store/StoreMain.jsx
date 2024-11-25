import React from 'react';
import Footer from '../../layout/Footer';
import StoreCustom from './StoreCustom';
import StoreDogPick from './StoreDogPick';
import StoreCatPick from './StoreCatPick';
import S from './style';
import { Link } from 'react-router-dom';
import StoreBtn from './StoreBtn';

const StoreMain = () => {

    let name = "";

    return (
        <S.StoreMainWrap>
            <div>
               <img src={`${process.env.PUBLIC_URL}/assets/images/store/banner.png`} alt='배너' />
            </div>
            <S.StoreMain>
                <S.StoreCustomTitle>
                    <p>우리 {name}을 위한 맞춤상품</p>
                </S.StoreCustomTitle>

                {/* <StoreBtn/> */}
                <StoreCustom />

                <div>
                    <Link to={"/"}><img src={`${process.env.PUBLIC_URL}/assets/images/store/banner2.png`} alt="배너2" /></Link>
                </div>

                <S.GoShopping>
                    <img src={`${process.env.PUBLIC_URL}/assets/images/store/toshopbanner.png`} alt="쇼핑하러 가기 이미지" />
                    <img src={`${process.env.PUBLIC_URL}/assets/images/store/shopinfo.png`}></img>
                    <StoreBtn />
                </S.GoShopping>

                <S.DogPickTitle>
                    <p>강아지 원픽</p>
                </S.DogPickTitle>
                <StoreDogPick />

                <S.GoShopping2>
                    <img src={`${process.env.PUBLIC_URL}/assets/images/store/shopinfo2.png`}></img>
                    <img src={`${process.env.PUBLIC_URL}/assets/images/store/toshopbanner2.png`} alt="쇼핑하러 가기 이미지" />
                    <StoreBtn />
                </S.GoShopping2>

                
                <S.CatPickTitle>
                    <p>고양이 원픽</p>
                </S.CatPickTitle>
                <StoreCatPick />
            </S.StoreMain>
           <Footer />
        </S.StoreMainWrap>
    );
};

export default StoreMain;