import React, {useEffect, useState} from 'react';
import S from "./style";
import {Outlet, useLocation, useParams} from "react-router-dom";

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

    const {memberProvider} = useParams();
    const [searchTerm, setSearchTerm] = useState('');
    const [smsFilter, setSmsFilter] = useState('1');
    const [emailFilter, setEmailFilter] = useState('1');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [members, setMembers] = useState([]);
    const [filteredMembers, setFilteredMembers] = useState([]);

    // useEffect(() => {
    //     const getMembers = async () => {
    //         try {
    //             const response = await fetch(`http://localhost:10000/admin/members/${memberProvider}`);
    //             if (!response.ok) throw new Error('데이터를 불러올 수 없습니다.');
    //             const data = await response.json();
    //             setMembers(data);
    //             setFilteredMembers(data);
    //             console.log(data)
    //         } catch (error) {
    //           console.error(error);
    //         }
    //     };

    //     getMembers();
    // }, [memberProvider]);


    const handleSearch = () => {
        if (!members.length) return;

        const filtered = members.filter(member => {
            const searchFields = [
                member.memberEmail,
                member.memberAddressDetail,
                member.memberPhone,
                member.memberName,
                member.memberBusinessName,
                member.memberBusinessNumber
            ];

            const matchSearchTerm = searchFields.some(field =>
                field.toLowerCase().includes(searchTerm.toLowerCase())
            );

            // SMS  Email
            const matchSmsFilter = smsFilter === '1'
                ? member.memberSmscheck === '1'
                : member.memberSmscheck === '0';

            const matchEmailFilter = emailFilter === '1'
                ? member.memberEmailcheck === '1'
                : member.memberEmailcheck === '0';

            // 날짜
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
        setFilteredMembers(members);
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