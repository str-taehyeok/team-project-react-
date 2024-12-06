import styled from "styled-components";
import {
    h6Bold,h6Regular
} from '../../../global/common'
// import theme from "../../../global/theme";
const S = {}

/*****상세내용*******/

S.CouponListTitle = styled.div`
    margin: 42px 0 35px 0;
    display: flex;
    justify-content: space-between;
    width: 1191px;
`

S.h1 = styled.p`
    font-size: 40px;
    font-weight: bold;
`

// .new-add-btn {
//     width: 120px;
//     height: 30px;
//     border: none;
//     border-radius: 10px;
//     color: white;
//     cursor: pointer;
//     background-color: #113F8A;
//     left: 1082px;
//     top: 134px;
// }
//
//
S.NoticeSearch = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 1440px;
`

S.SearchBar = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;
`

S.Search = styled.input`
    width: 708px;
    height: 60px;
    border-radius: 20px;
    padding: 17px;
`

S.Buttons = styled.div`
    display: flex;
    margin: 35px 0 180px 0;
    gap: 10px;
`

S.SearchBtn = styled.button`
    width: 90px;
    height: 30px;
    border: solid 1px #888888;
    border-radius: 20px;
    color: #131313;
    cursor: pointer;
    background-color: #fff;
`

S.ResetBtn = styled.button`
    width: 90px;
    height: 30px;
    border: solid 1px #888888;
    border-radius: 20px;
    color: #131313;
    cursor: pointer;
    background-color: #fff;
`

S.NewAddBtn = styled.button`
    width: 90px;
    height: 30px;
    border: solid 1px #113F8A;
    border-radius: 20px;
    color: #fff;
    cursor: pointer;
    background-color: #113F8A;
`

S.NoticeList = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 1440px;
    margin: 0 auto;
`;

S.Table = styled.table`
    width: 100%;
    text-align: center;
    table-layout: fixed;
`

S.TableCellTh = styled.th`
    width: 100%;
    border-bottom: solid 1px #828282;
    justify-content: center;
    padding-bottom: 38px;
    ${h6Bold};
`

S.TableRow = styled.tr`
    
`

S.TableCell = styled.td`
    width: 100%;
    justify-content: center;
    padding: 25px 0;
    gap: 5px;
    ${h6Regular};
`

S.CouponEdit = styled.button`
    width: 46px;
    height: 24px;
    border-radius: 20px;
    background-color: #888888;
    color: white;
    border: none;
    margin-right: 5px;
`

S.CouponDelete = styled.button`
    width: 46px;
    height: 24px;
    border-radius: 20px;
    background-color: white;
    color: #131313;
    border: 1px solid #131313;
`






export default S;