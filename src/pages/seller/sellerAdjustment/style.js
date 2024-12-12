import styled from "styled-components";

const S = {}

S.Frame = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
`

S.Title = styled.div`
    margin: 43px 0 80px 0;
    display: flex;
    justify-content: space-between;
    width: 1191px;
    
    & p {
        font-size: 40px;
        font-weight: bold;
    }
`

S.NoticeSearch = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 1440px;
`

S.InputGroup = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
`

S.Inputs = styled.div`
    display: flex;
    width: 708px;
    justify-content: space-between;
    align-items: center;
    
    & input {
        width: 120px;
        font-size: 16px;
        font-weight: bold;
        width: 342px;
        height: 60px;
        padding: 17px;
        border-radius: 20px;
        border: 1px solid #ccc;
    }
    
    & span {
        
    }
`

// input[type="text"],
//     input[type="date"],
//     select {
//     width: 342px;
//     height: 60px;
//     padding: 17px;
//     border-radius: 20px;
//     border: 1px solid #ccc;
// }

S.Search = styled.select`
    width: 708px;
    height: 60px;
    border-radius: 20px;
    padding: 17px;
`

S.Buttons = styled.div`
    display: flex;
    margin: 35px 0 80px 0;
    gap: 10px;
`

S.SearchBtn = styled.button`
    width: 90px;
    height: 30px;
    border: none;
    border-radius: 20px;
    color: #fff;
    cursor: pointer;
    background-color: #113f8a;
`

S.ResetBtn = styled.button`
    width: 90px;
    height: 30px;
    border: solid 1px #888888;
    border-radius: 20px;
    color: #888888;
    cursor: pointer;
    background-color: #fff;
`

S.NoticeList = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 1440px;
    margin: 0 auto;
    
    & table {
        width: 1440px;
        text-align: center;

        & tr {
            display: flex;
            justify-content: space-between;
            justify-content: center;
            align-items: center;

            & > th {
                width: 100%;
                border-bottom: solid 0.1px #828282;
                justify-content: center;
                padding-bottom: 28px;

                & > th:nth-child(1) {
                    width: 122px;
                    flex-shrink: 0;
                    display: flex;
                    align-items: center;
                }
                & > th:nth-child(2) {
                    width: 244px;
                    flex-shrink: 0;
                    display: flex;
                    align-items: center;
                }
                & > th:nth-child(3) {
                    width: 122px;
                    flex-shrink: 0;
                    display: flex;
                    align-items: center;
                }
                & > th:nth-child(4) {
                    width: 122px;
                    flex-shrink: 0;
                    display: flex;
                    align-items: center;
                }
                & > th:nth-child(5) {
                    width: 122px;
                    flex-shrink: 0;
                    display: flex;
                    align-items: center;
                }
                & > th:nth-child(6) {
                    width: 244px;
                    flex-shrink: 0;
                    display: flex;
                    align-items: center;
                }
                & > th:nth-child(7) {
                    width: 122px;
                    flex-shrink: 0;
                    display: flex;
                    align-items: center;
                }
                & > th:nth-child(8) {
                    width: 244px;
                    flex-shrink: 0;
                    display: flex;
                    align-items: center;
                }
                & > th:nth-child(9) {
                    width: 98px;
                    flex-shrink: 0;
                    display: flex;
                    align-items: center;
                }
                
            }
            
            & > td {
                width: 100%;
                justify-content: center;
                padding: 35px 0;

                & > td:nth-child(1) {
                    width: 122px;
                    flex-shrink: 0;
                    display: flex;
                    align-items: center;
                }
                
                & > td:nth-child(2) {
                    width: 244px;
                    flex-shrink: 0;
                    display: flex;
                    align-items: center;
                }
                
                & > td:nth-child(3) {
                    width: 122px;
                    flex-shrink: 0;
                    display: flex;
                    align-items: center;
                }
                
                & > td:nth-child(4) {
                    width: 122px;
                    flex-shrink: 0;
                    display: flex;
                    align-items: center;
                }
                
                & > td:nth-child(5) {
                    width: 122px;
                    flex-shrink: 0;
                    display: flex;
                    align-items: center;
                }
                
                & > td:nth-child(6) {
                    width: 244px;
                    flex-shrink: 0;
                    display: flex;
                    align-items: center;
                }
                
                & > td:nth-child(7) {
                    width: 122px;
                    flex-shrink: 0;
                    display: flex;
                    align-items: center;
                }
                
                & > td:nth-child(8) {
                    width: 244px;
                    flex-shrink: 0;
                    display: flex;
                    align-items: center;
                }
                
                & > td:nth-child(9) {
                    width: 98px;
                    flex-shrink: 0;
                    display: flex;
                    align-items: center;
                }
            }
        }
    }
`
// table tbody tr td .image {
//     border: none;
//     width: 98px;
//     height: 98px;
//     border-radius: 20px;
//     background-color: #828282;
//     display: inline-flex;
// }

S.DetailsButton = styled.button`
    width: 53px;
    height: 30px;
    border: solid 1px #888888;
    color: #828282;
    background-color: #fff;
    border-radius: 10px;
    cursor: pointer;
`

S.AdjustmentGuide = styled.p`
    display: flex;
    justify-content: start;
    width: 1440px;
    font-size: 14px;
    color: #131313;
`

S.DetailContainer = styled.div`
    display: none;
    flex-direction: column;
    width: 952px;
    height: 428px;
    border-radius: 10px;
    border: solid 0.1px #828282;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    animation: lift-popup 0.1s;
    z-index: 100;
`

S.Header = styled.div`
    display: flex;
    justify-content: space-between;
    width: 924px;
    align-items: center;
    margin: 13px 14px 25px 14px;
    
    & p {
        font-weight: bold;
        font-size: 20px;
    }
`

S.CloseBtn = styled.button`
    width: 90px;
    height: 30px;
    border: none;
    border-radius: 10px;
    color: white;
    cursor: pointer;
    background-color: #113F8A;
    margin-top: 10px;
    position: relative;
    bottom: 10px;
`

S.DetailTable = styled.table`
    width: 100%;
    text-align: center;
    
    & tr {
        display: flex;
        justify-content: space-between;
        
        & th {
            width: 100%;
            border-bottom: solid 0.1px #828282;
            justify-content: center;
            padding-bottom: 28px;

            & > th:nth-child(1) {
                width: 122px;
                flex-shrink: 0;
                display: flex;
                align-items: center;
            }
            & > th:nth-child(2) {
                width: 244px;
                flex-shrink: 0;
                display: flex;
                align-items: center;
            }
            & > th:nth-child(3) {
                width: 122px;
                flex-shrink: 0;
                display: flex;
                align-items: center;
            }
            & > th:nth-child(4) {
                width: 122px;
                flex-shrink: 0;
                display: flex;
                align-items: center;
            }
            & > th:nth-child(5) {
                width: 244px;
                flex-shrink: 0;
                display: flex;
                align-items: center;
            }
            & > th:nth-child(6) {
                width: 98px;
                flex-shrink: 0;
                display: flex;
                align-items: center;
            }
        }
        
        & td {
            width: 100%;
            justify-content: center;
            padding: 20px 0;

            & > td:nth-child(1) {
                width: 122px;
                flex-shrink: 0;
                display: flex;
                align-items: center;
            }

            & > td:nth-child(2) {
                width: 244px;
                flex-shrink: 0;
                display: flex;
                align-items: center;
            }

            & > td:nth-child(3) {
                width: 122px;
                flex-shrink: 0;
                display: flex;
                align-items: center;
            }
            & > td:nth-child(4) {
                width: 122px;
                flex-shrink: 0;
                display: flex;
                align-items: center;
            }
            & > td:nth-child(5) {
                width: 244px;
                flex-shrink: 0;
                display: flex;
                align-items: center;
            }
            & > td:nth-child(6) {
                width: 98px;
                flex-shrink: 0;
                display: flex;
                align-items: center;
            }
        }
    }
`



S.Pagination = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 40px;
    gap: 35px;
`

S.PageBtn = styled.button`
    border: none;
    background-color: #d9d9d9;
    color: #131313;
    padding: 2px 6px;
    border-radius: 5px;
    cursor: pointer;
`


S.PopupBg = styled.div`
    display: none;
    z-index: 99;
    position: fixed;
    left: 0;
    top: 0;
    width: 100dvw;
    height: 100dvh;
    background-color: rgba(0, 0, 0, 0.5);
`

export default S;