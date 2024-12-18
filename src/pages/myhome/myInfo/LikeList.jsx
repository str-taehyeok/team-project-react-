import React, {useContext, useEffect, useState} from 'react';
import LikeListNone from "./LikeListNone";
import S from './likestyle';
import {Link, useNavigate, useParams} from "react-router-dom";
import { HeartContext } from "../../../context/heartContext";


const LikeList = () => {

    // 좋아요 리스트 heartContext에서 가져와 뿌리기
    const { state } = useContext(HeartContext);
    const { productLikes } = state;

    const productLikeList = productLikes.map((like, i) => (
        <div key={i}>
            <p>{like.productName}</p>
            <p>{like.productPrice}</p>
        </div>
    ))

    console.log({productLikeList})
    return (

            <S.LikesAll>
                <S.LikeStoreTItleWrap>
                    <S.StoreTitle>스토어</S.StoreTitle>
                    <S.OtherClickBtn>
                        <Link to={"/store"}>더 많은 상품 보러가기&#62;</Link>
                    </S.OtherClickBtn>
                </S.LikeStoreTItleWrap>
                <LikeListNone/>
                <div>
                    {productLikeList}
                    {/*{commLikes}*/}
                </div>
                <div>

                </div>

            </S.LikesAll>


    );
};

export default LikeList;