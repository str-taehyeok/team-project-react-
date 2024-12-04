import React from 'react';
import {Outlet} from "react-router-dom";
import S from "./style"

const SellerProductContainer = () => {
    return (
        <div>
            <S.Title >
                <span>상품조회</span>
            </S.Title >
            {/*<section className="notice-search">*/}
            {/*    <div className="search-bar">*/}
            {/*        <input type="text" className="search" placeholder="상품명을 입력하세요"/>*/}
            {/*    </div>*/}
            {/*    <div className="buttons">*/}
            {/*        <button className="search-btn">검색</button>*/}
            {/*        <button className="reset-btn">초기화</button>*/}
            {/*        <button className="new-add-btn"*/}
            {/*                onClick="location.href='seller-write.seller'">상품등록*/}
            {/*        </button>*/}
            {/*    </div>*/}
            {/*</section>*/}
            <Outlet/>
        </div>
    );
};

export default SellerProductContainer;