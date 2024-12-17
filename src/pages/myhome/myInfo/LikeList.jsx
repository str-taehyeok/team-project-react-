import React, {useContext, useEffect, useState} from 'react';
import LikeListNone from "./LikeListNone";
import S from './likestyle';
import {Link, useNavigate, useParams} from "react-router-dom";
import { HeartContext } from "../../../context/heartContext";


const LikeList = () => {

    const {list} = useContext(HeartContext);

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
                    {list}
                </div>
                <div>

                </div>

            </S.LikesAll>


    );
};

export default LikeList;