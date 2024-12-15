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

S.CouponForm = styled.form`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
`

S.CouponListTitle = styled.div`
    margin: 0 auto;
    margin-bottom: 120px;
    margin-top: 61px;
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
    display: flex;
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
    gap : 35px;
`

S.Box1 = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`

S.Input = styled.input`
    width: 708px;
    height: 60px;
    padding: 26px;
    border: 1px solid #ccc;
    border-radius: 20px;

    //::-webkit-inner-spin-button {
    //    -webkit-appearance: none;
    //    margin: 0;
    //}
    //
    //::-webkit-outer-spin-button {
    //    -webkit-appearance: none;
    //    margin: 0;
    //}
`

S.Label = styled.label`
    display: flex;
    align-items: center;
    width: 230px;
    text-align: left;
    font-weight: bold;
    align-items: flex-start;
`;

S.DateInputWrap = styled.div`
    display: flex;
    gap: 45px;
    align-items: center;
`

S.DateInput = styled.input`
    border-radius: 20px;
    width: 296px;
    height: 60px;
    border: 0.5px solid #ccc;
    padding: 10px;  
    color: #828282;
`

S.Span = styled.span`
    font-size: 50px;
`

S.CouponWriteBtn = styled.button`
    border: none;
    border-radius: 20px;
    cursor: pointer;
    width: 90px;
    height: 30px;
    background-color: #113F8A;
    color: white;
`

S.CouponCancelBtn = styled.button`
    border: none;
    border-radius: 20px;
    cursor: pointer;
    width: 90px;
    height: 30px;
    background-color: #FFC303;
    color: white;
`

S.CouponBtnWrap = styled.div`
    display: flex;
    gap : 10px;
    justify-content: center;
    margin-top: 140px;
    height: 30px;
`

S.CouponCategory = styled.select`
    width: 708px;
    height: 60px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 20px;
    
    & option {
    }
`

S.DiscountType = styled.div`
    display: flex;
    align-items: flex-start;
`

S.Box3 = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
`

S.Box2 = styled.div`
    display: flex;
    flex-direction: row;
    gap: 20px;
    width: 708px;
`

S.Textarea = styled.textarea`
    display: flex;
    width: 708px;
    height: 100px;
    border-radius: 20px;
    padding-top: 19px;
    padding-left: 26px;
`

S.LabelRadio = styled.label`
    display: flex;
    width: 55px;
    align-items: center;
`

S.LabelRadioWrap = styled.div`
    display: flex;
    gap : 21px;
    align-items: center;

    & > input {
        width: 98px;
        height: 43px;
        border-radius: 20px;
        text-align: center;
    }
`

S.LabelRadioCustom = styled.div`
    display: flex;
`











export default S;