import React, {useEffect, useState} from 'react';
import S from "./style";
import {Link, useNavigate, useParams} from "react-router-dom";
import notice from "../../myhome/notice/Notice";


const NoticeList = () => {
    const {id} = useParams();
    const [post, setPost] = useState({});
    const navigate = useNavigate();


    useEffect(() => {
        const getPost = async () => {
            const response = await fetch(`http://localhost:10000/notice/list/${id}`);
            if(!response.ok) return console.error(`데이터가 없습니다.`)
            const post = await response.json();
            return post;
        }

        getPost().then(setPost).catch(console.error);
    }, [id]);

    console.log(post)



    const {noticeTitle,noticeContent,noticeDate, noticeCount} = post;
    return (
        <S.NoticeBox>
            <S.Title>공지사항</S.Title>
            <S.ListButton>
                <Link to={`/admin/update/${id}`}>
                    <button className={"update"}>수정</button>
                </Link>
                <button className={"delete"}onClick={async () => {
                    await fetch(`http://localhost:10000/notice/list/${id}`, {
                        method : "DELETE"
                    })
                        .then((res) => {
                            navigate("/admin")
                        })
                }}>삭제</button>
            </S.ListButton>
                <S.TitleBox>
                    <S.ListTitle >{noticeTitle}</S.ListTitle>
                    <S.Span>
                        <S.Date><span>등록일 : </span>{noticeDate}</S.Date>
                        <S.Count><span>조회수 : </span>{noticeCount}</S.Count>
                    </S.Span>
                </S.TitleBox>

                <S.Content>{noticeContent}</S.Content>


            <S.Button>
                <Link to={`/admin`}>
                    <button className={"listButton"}>목록으로 돌아가기</button>
                </Link>
            </S.Button>

        </S.NoticeBox>




    );
};

export default NoticeList;