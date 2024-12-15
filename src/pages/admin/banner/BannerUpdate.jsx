import React, {useEffect, useState} from 'react';
import S from "./style";
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import {useNavigate, useParams} from "react-router-dom";

const datas = [
    {
        bannerStart : "2024-12-08",
        bannerEnd : "2024-12-24",
        bannerTitle : "배너 제목 TEST1",
        bannerImage : "/assets/images/admin/banner/bannerImage.png",
        bannerUrl : "http://powpow.com"
    },
]

const BannerUpdate = () => {
    const {id} = useParams();
    const { register, handleSubmit, getValues, formState: {isSubmitting, isSubmitted, errors}} = useForm({mode:"onChange"});
    const memberId = 1;
    const navigate = useNavigate();
    const [post, setPost] = useState({});

    useEffect(() => {
        const getPost = async () => {
            const response = await fetch(`http://localhost:10000/banners/list/${id}`);
            if(!response.ok) return console.error(`데이터가 없습니다.`)
            const post = await response.json();
            return post;
        }

        getPost().then(setPost).catch(console.error);
    }, [id]);

    console.log(post)
    const onDelete = () => {
        if (window.confirm("정말 취소하시나요??")) {
          window.location.href = '/admin/banner';
        } else {
          window.location.href = '/admin/banner/banner-update';
        }
    };
    const {bannerTitle,bannerStart, bannerEnd, bannerType, bannerLink, BannerImage} = post;

    const updates = datas.map(({bannerStart,bannerEnd, bannerTitle,bannerImage, bannerUrl }, i) => (
        <S.WriteBox key={i}>
            <S.Title>배너 신규 등록</S.Title>
            <S.TextInputBox>
                <S.TitleText>배너명</S.TitleText>
                <S.TextInput><input placeholder='제목을 입력해주세요' value={bannerTitle}></input></S.TextInput>
            </S.TextInputBox>
            <S.LinkInputBox>
                <S.LinkText>배너링크</S.LinkText>
                <S.LinkInput><input placeholder='배너 클릭 시 이동할 URL' value={bannerUrl}></input></S.LinkInput>
            </S.LinkInputBox>
            <S.ImgInputBox>
                <S.ImgText>배너 이미지</S.ImgText>
                <S.ImgInput><input type='file' placeholder='선택된 파일 없음'></input></S.ImgInput>
            </S.ImgInputBox>
            <S.DateBox>
                <S.DateText>기간</S.DateText>
                <S.Radio>
                    <S.UseButton><input type='radio' name="dateOption" />무제한</S.UseButton>
                        <input type="date" className='date1' value={bannerStart}/>
                        <span>~</span>
                        <input type="date"  className='date' value={bannerEnd} />     
                </S.Radio>
            </S.DateBox>
            <S.UseBox>
                <S.UseText>사용 여부</S.UseText>
                <S.Radio>
                    <S.UseButton><input type='radio' name="useOption" />사용함</S.UseButton>
                    <S.UseButton><input type='radio' className='no' name="useOption" />사용안함</S.UseButton>
                </S.Radio>
            </S.UseBox>
          <S.ButtonBox>
            <Link to={`/admin`}>
              <button className='done'>완료</button>
            </Link>
              <button className='cancel' onClick={onDelete}>취소</button>
          </S.ButtonBox>
        </S.WriteBox>
    ));

    return (
        <div>
            {updates}
        </div>
    );
};

export default BannerUpdate;