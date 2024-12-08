import React, {useState} from 'react';
import S from "./style";
import {Outlet, useLocation} from "react-router-dom";

const MemberContainer = () => {

    const location = useLocation();

    const pageTitle = () => {
        switch (location.pathname) {
            case '/admin/member':
                return '일반회원 정보조회';
            case '/admin/member/seller-list':
                return '판매자회원 정보조회';
            default:
                return '일반회원 정보조회';
        }
    };

    const [memberList] = useState([
        {
            id : 1,
            memberName : "홍길동",
            memberEmail : "jane@gmail.com",
            memberAddressDetail : "서울특별시 어쩌구동 어쩌구 아파트 2401호",
            memberPhone : "01012345678",
            memberSmscheck : "1",
            memberEmailcheck : "1",
            memberDate : "2022-11-18",
            memberBusinessNumber : "1111111111",
            memberBusinessName : "멍냥멍냥"
        },
        {
            id : 2,
            memberName : "홍길동",
            memberEmail : "chapssal@gmail.com",
            memberAddressDetail : "서울특별시 어쩌구동 어쩌구 아파트 2401호",
            memberPhone : "01034566768",
            memberSmscheck : "0",
            memberEmailcheck : "0",
            memberDate : "2022-11-18",
            memberBusinessNumber : "1111111111",
            memberBusinessName : "댕냥댕냥"
        },
        {
            id : 3,
            memberName : "홍길동",
            memberEmail : "hong@gmail.com",
            memberAddressDetail : "서울특별시 어쩌구동 어쩌구 아파트 2401호",
            memberPhone : "01011111111",
            memberSmscheck : "1",
            memberEmailcheck : "1",
            memberDate : "2022-11-18",
            memberBusinessNumber : "1111111111",
            memberBusinessName : "멍냥멍냥"
        },
        {
            id : 4,
            memberName : "홍길동",
            memberEmail : "kim@gmail.com",
            memberAddressDetail : "서울특별시 어쩌구동 어쩌구 아파트 2401호",
            memberPhone : "01036363773",
            memberSmscheck : "0",
            memberEmailcheck : "0",
            memberDate : "2022-11-18",
            memberBusinessNumber : "1111111111",
            memberBusinessName : "댕냥댕냥"
        },
        {
            id : 5,
            memberName : "홍길동",
            memberEmail : "king@gmail.com",
            memberAddressDetail : "서울특별시 어쩌구동 어쩌구 아파트 2401호",
            memberPhone : "01023455674",
            memberSmscheck : "0",
            memberEmailcheck : "1",
            memberDate : "2022-11-18",
            memberBusinessNumber : "1111111111",
            memberBusinessName : "멍냥멍냥"
        },
        {
            id : 6,
            memberName : "홍길동",
            memberEmail : "queen@gmail.com",
            memberAddressDetail : "서울특별시 어쩌구동 어쩌구 아파트 2401호",
            memberPhone : "01056479389",
            memberSmscheck : "1",
            memberEmailcheck : "0",
            memberDate : "2022-11-18",
            memberBusinessNumber : "1111111111",
            memberBusinessName : "댕냥댕냥"
        },
    ]);


    // 검색 상태 관리
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredMembers, setFilteredMembers] = useState(memberList);
    const [smsFilter, setSmsFilter] = useState('1');
    const [emailFilter, setEmailFilter] = useState('1');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    // 통합 검색 필터 함수
    const handleSearch = () => {
        const filtered = memberList.filter(member => {
            // 검색어
            const matchSearchTerm =
                member.memberEmail.toLowerCase().includes(searchTerm.toLowerCase()) ||
                member.memberAddressDetail.toLowerCase().includes(searchTerm.toLowerCase()) ||
                member.memberPhone.includes(searchTerm) ||
                member.memberName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                member.memberBusinessName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                member.memberBusinessNumber.includes(searchTerm);

            // SMS랑 이메일 필터
            const matchSmsFilter =
                smsFilter === '1' ? member.memberSmscheck === '1' : member.memberSmscheck === '0';

            const matchEmailFilter =
                emailFilter === '1' ? member.memberEmailcheck === '1' : member.memberEmailcheck === '0';

            const matchDateFilter =
                (!startDate || member.memberDate >= startDate) &&
                (!endDate || member.memberDate <= endDate);

            return matchSearchTerm && matchSmsFilter && matchEmailFilter && matchDateFilter;
        });

        setFilteredMembers(filtered);
    };

    // 검색어 입력
    const handleSearchInput = (e) => {
        setSearchTerm(e.target.value);
    };

    // 검색 초기화
    const resetSearch = () => {
        setSearchTerm('');
        setSmsFilter('1');
        setEmailFilter('1');
        setStartDate('');
        setEndDate('');
        setFilteredMembers(memberList);
    };

    return (
        <div>
                <S.Content className="container">
                    <S.Title>
                        <span>{pageTitle()}</span>
                    </S.Title>
                    <S.NoticeSearch>
                        <S.SearchRow>
                            <S.SearchBar>
                                <label htmlFor="search">검색</label>
                                <input name="searchKeyword" type="text" value={searchTerm} onChange={handleSearchInput} placeholder="검색어를 입력해주세요"/>
                            </S.SearchBar>
                            <S.Notification>
                                <label>SMS 수신여부</label>
                                <input type="radio" id="sms-yes" name="sms" value="1" checked={smsFilter === '1'} onChange={() => setSmsFilter('1')}/> 수신
                                <input type="radio" id="sms-no" name="sms" value="0" checked={smsFilter === '0'} onChange={() => setSmsFilter('0')}/> 수신거부
                            </S.Notification>
                        </S.SearchRow>
                        <S.SearchRow>
                            <S.SearchPeriod>
                                <label>기간</label>
                                <input type="date"
                                    value={startDate} onChange={(e) => setStartDate(e.target.value)}/> ~
                                <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)}/>
                            </S.SearchPeriod>
                            <S.Notification>
                                <label>메일 수신여부</label>
                                <input type="radio" id="email-yes" name="email" value="1" checked={emailFilter === '1'} onChange={() => setEmailFilter('1')}/> 수신
                                <input type="radio" id="email-no" name="email" value="0" checked={emailFilter === '0'} onChange={() => setEmailFilter('0')}/> 수신거부
                            </S.Notification>
                        </S.SearchRow>
                        <S.Buttons>
                            <S.SearchButton onClick={handleSearch}>검색</S.SearchButton>
                            <S.ResetButton onClick={resetSearch}>초기화</S.ResetButton>
                        </S.Buttons>
                    </S.NoticeSearch>
                </S.Content>
            <Outlet context={{ filteredMembers }}/>
        </div>
);
};

export default MemberContainer;