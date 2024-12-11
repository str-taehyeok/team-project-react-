import React from 'react';
import S from './style'

const Adjustment = () => {
    return (
    <S.Frame>
            <S.Title>
                <p>정산내역 조회</p>
            </S.Title>
            <S.NoticeSearch>
                <S.InputGroup>
                    <S.Inputs>
                        <input type="date" id="start-date" name="start-date"/>
                        <span>~</span>
                        <input type="date" id="end-date" name="end-date"/>
                    </S.Inputs>
                    <S.Search>
                        <option value="배송 전">배송 전</option>
                        <option value="배송 중">배송 중</option>
                        <option value="배송 후">배송 후</option>
                    </S.Search>
                </S.InputGroup>
                <S.Buttons>
                    <S.SearchBtn>검색</S.SearchBtn>
                    <S.ResetBtn>초기화</S.ResetBtn>
                </S.Buttons>
            </S.NoticeSearch>

            <S.NoticeList>
                <table>
                    <thead>
                    <tr>
                        <th>no</th>
                        <th>상품판매금액</th>
                        <th>배송비</th>
                        <th>입점수수료</th>
                        <th>쿠폰할인</th>
                        <th>총정산금액</th>
                        <th>정산상태</th>
                        <th>승인일시</th>
                        <th>관리</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>1</td>
                        <td>196,000</td>
                        <td>7,500</td>
                        <td>29,250</td>
                        <td>9,000</td>
                        <td>179,250</td>
                        <td>정산완료</td>
                        <td>2024-10-14 17:25</td>
                        <td>
                            <S.DetailsButton>상세</S.DetailsButton>
                        </td>
                    </tr>
                    </tbody>
                </table>
                <S.AdjustmentGuide>
                    *총정산금액 = 상품금액 + 쿠폰할인(본사부담) + 배송비 - 입점수수료
                </S.AdjustmentGuide>
            </S.NoticeList>

        <S.DetailContainer>
            <S.Header>
                <p>조회 상세</p>
                <S.CloseBtn>닫기</S.CloseBtn>
            </S.Header>
            <S.DetailTable>
                <thead>
                <tr>
                    <th>입금일</th>
                    <th>입금계좌</th>
                    <th>계약구분</th>
                    <th>입금상태</th>
                    <th>매출기간</th>
                    <th>입금금액</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>2024-10-15</td>
                    <td>12341590-8 / 하나</td>
                    <td>일반</td>
                    <td>입금예정</td>
                    <td>24.09.20 ~ 24.09.30</td>
                    <td>102,000원</td>
                </tr>
                </tbody>
            </S.DetailTable>
            <S.Pagination>
                <S.PageBtn>1</S.PageBtn>
                <S.PageBtn>2</S.PageBtn>
                <S.PageBtn>3</S.PageBtn>
                <S.PageBtn>4</S.PageBtn>
                <S.PageBtn>&raquo;</S.PageBtn>
            </S.Pagination>
        </S.DetailContainer>
        <S.PopupBg></S.PopupBg>
    </S.Frame>

);
};

export default Adjustment;