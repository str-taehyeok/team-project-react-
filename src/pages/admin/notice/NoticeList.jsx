import React, {useState} from 'react';
import S from "./style";
import { Link } from 'react-router-dom';


const NoticeList = () => {


    const datas = [
        {
            id : 1,
            noticeTitle : "공지사항 제목1",
            noticeDate : "2024-12-08",
            noticeContent : "안녕하세요, POWPOW입니다." +
                "POWPOW을 이용해주시는 이용자분들께 감사드리며," +
                "감사합니다. POWPOW 드림"

        },
    ];
    const noticeLists = datas.map(({noticeTitle,noticeContent,noticeDate }, i) => (
        <S.NoticeBox key={i}>
            <S.NoticeList>
                <S.ListTitle >{noticeTitle}</S.ListTitle>
                <S.Date>{noticeDate}</S.Date>
                <S.Content>{noticeContent}</S.Content>
            </S.NoticeList>

            <S.Button>
                <Link to={`/admin`}>
                    <button className={"listButton"}>목록으로 돌아가기</button>
                </Link>
            </S.Button>

        </S.NoticeBox>
    ));
    return (
        <S.NoticeBox>
            {noticeLists}
        </S.NoticeBox>


    );
};

export default NoticeList;