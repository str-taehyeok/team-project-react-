import styled from "styled-components";
import {
    h1Bold, h7Bold, h8Regular, gray500, h7Regular, h2Bold, h6Regular, h9Regular, h6Bold, h9Bold
} from '../../../global/common'
import theme from "../../../global/theme";
import { Link } from 'react-router-dom'
// import theme from "../../global/theme";

const S = {}

S.LikeListNoneBox = styled.div`
    width: 823px;
    height: 190px;
    display: flex;
    box-sizing: border-box;
    border-radius: 20px;
    border: solid 1px #888888;
    background-color: #FFFFFF;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 102px;
    box-shadow: 0 2px 20px rgba(0,0,0,0.1);
    
    & p:nth-child(1) {
        ${h6Bold}
        color: #909090;
        
    }
    & p:nth-child(2) {
        ${h7Regular}
        color: #909090;

    }
`


S.LikesAll = styled.div`
    width: 822px;
    margin: 0 auto;
    
`

S.LikeStoreWrap = styled.div`
    width: 822px;
    display: block;
    flex-wrap: wrap;
    justify-content: space-between;

`

// 스토어 좋아요 영역 제목
S.LikeStoreTItleWrap = styled.div`
    margin-top: 102px;
    margin-bottom: 18px;
    width: 822px;
    height: 30px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    ${h6Bold}

`

S.StoreTitle = styled.div`
    width: 54px;
    height: 30px;
    ${h6Bold}
`

S.OtherClickBtn = styled.div`
    width: 112px;
    height: 18px;
    ${h9Regular}
    cursor : pointer;
`
S.ProductLikes = styled.div`
    width: 190px;
    height: 259px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    & > img {
        height: 190px;
        border-radius: 20px;
        width: 100%;
        cursor: pointer;
    }
`

S.ProductName = styled.div`
    width: 127px;
    height: 36px;
    display: flex;
    flex-wrap: wrap;

    
    & > p {
        ${h9Bold}
    }
    
`

S.ProductPrice = styled.div`
    & > p {
        ${h9Regular}
    }

`
// 제품 전체 래퍼
S.productLikeList = styled.div`
    width: 823px;
    display: flex;
    flex-wrap: wrap;
    align-items: first;
    gap: 21px;
    margin-bottom: 86px;
    
`

S.ProfileInfo = styled.div`
    
    & > img {
        width: 40px;
        height: 40px;
    }
    
    & span {
        margin-left: 10px;
        ${h9Bold}
    }

`

S.LikeCommTitleWrap = styled.div`
    margin-top: 102px;
    margin-bottom: 18px;
    width: 822px;
    height: 30px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    ${h6Bold}

`

S.CommTitle = styled.div`
    width: 72px;
    height: 30px;
    ${h6Bold}

`

S.OtherClickCommBtn = styled.div`
    width: 123px;
    height: 18px;
    ${h9Regular}
    cursor: pointer;
`

S.CommLikeList = styled.div`
    width: 823px;
    display: flex;
    flex-wrap: wrap;
    align-items: first;
    gap: 21px;
    margin-bottom: 155px;

`


export default S;