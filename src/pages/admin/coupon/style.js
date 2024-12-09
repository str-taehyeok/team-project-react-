import styled from "styled-components";
import {
    h6Bold,h6Regular,h11Regular
} from '../../../global/common'
// import theme from "../../../global/theme";
const S = {}

/*****상세내용*******/


S.CouponListWrap = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
`

S.CouponListTitle = styled.div`
    margin: 42px 0 35px 0;
    display: flex;
    justify-content: space-between;
    width: 1191px;
`

S.CouponListTitleWrap = styled.div`
    margin: 0 auto;
`

S.h1 = styled.p`
    font-size: 40px;
    font-weight: bold;
`

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
    border: solid 1px #828282;
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
    display: block;
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
    border: none;
    margin-right: 5px;
    
    & > a {
        color: white;
        ${h11Regular};
    }
`

S.CouponDelete = styled.button`
    width: 46px;
    height: 24px;
    border-radius: 20px;
    background-color: white;
    border: 1px solid #131313;
    color: #131313;
    ${h11Regular};
`

S.Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #ffffff;
    justify-content: center;
    margin: 0 auto;
`

S.Box1 = styled.div`
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
`

S.Input = styled.input`
    width: 464px;
    height: 55px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 20px;
    margin-top: 15px;
`

S.label = styled.label`
    display: flex;
    align-items: center;
    width: 230px;
    text-align: left;
    font-weight: bold;
    align-items: flex-start;
`

S.DateInput = styled.input`
    border-radius: 20px;
    width: 218px;
    height: 55px;
    border: 0.5px solid #ccc;
    margin-right: 10px;
    padding: 10px;
    color: #828282;
`
    //     width: 464px;
    //     height: 55px;
    //     padding: 10px;
    //     border: 1px solid #ccc;
    //     border-radius: 20px;
    //     box-sizing: border-box;

S.Span = styled.span`
    font-size: 10px;
`

S.CouponWriteBtn = styled.button`
    padding: 10px 20px;
    border: none;
    background-color: #ccc;
    border-radius: 20px;
    cursor: pointer;
`



//
// .coupon-form {
//     display: flex;
//     align-items: center;
// }
//

//

//

//
// textarea {
//     height: 80px;
// }
//
// .change-buttons {
//     width: 100%;
//     display: flex;
//     justify-content: flex-end;
//     justify-content: center;
//     margin-top: 100px;
// }
//
// .button-submit, .button-edit {
//     width: 90px;
//     height: 30px;
//     border: none;
//     border-radius: 20px;
//     color: white;
//     cursor: pointer;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     margin-top: 6px;
// }
//
// .button-submit {
//     background-color: #113F8A;
//     margin-right: 10px;
// }
//
// .button-edit {
//     background-color: #FFC303;
// }
//
// .form-group {
//     margin-bottom: 20px;
// }
//


//

//
// .box1 input[type="number"],
// .custom-discount {
//     width: 464px;
//     height: 55px;
//     padding: 10px;
//     border: 1px solid #ccc;
//     border-radius: 20px;
//     box-sizing: border-box;
// }
//
// textarea {
//     box-sizing: border-box;
//     resize: vertical;
//     width: 464px;
//     min-height: 150px;
//     padding: 10px;
//     border: 1px solid #ccc;
//     border-radius: 10px;
//     margin-top: 15px;
//     font-family: 'Spoqa Han Sans Neo', sans-serif !important;
// }
//
// .discount-type {
//     display: flex;
//     align-items: flex-start;
//     margin-top: 30px;
// }
//
// .discount-type label {
//     display: flex;
//     flex-direction: row;
//     align-items: center;
//     margin-top: 5px;
//     margin-right: 10px;
// }
//
// .discount-type .box2 label {
//     display: flex;
//     align-items: center;
// }
//
// .custom-discount {
//     width: 90px;
//     height: 30px;
//     border: 1px solid #ccc;
//     padding: 5px;
// }
//
// .result {
//     margin-top: 20px;
// }
//
// .box2 {
//     display: flex;
//     flex-direction: row;
//     gap: 10px;
// }
//
// .box2 label {
//     display: flex;
//     align-items: center;
// }
//
// .box2 > div {
//     display: flex;
//     align-items: center;
// }
//
// .custom-discount {
//     width: 100px;
// }
//
// .box3 {
//     display: flex;
//     flex-direction: column;
//     gap:5px;
// }
//
// button {
//     padding: 10px 20px;
//     border: none;
//     background-color: #ccc;
//     border-radius: 20px;
//     cursor: pointer;
// }







export default S;