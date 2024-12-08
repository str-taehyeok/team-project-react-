import React from 'react';
import S from "./style";
import { Link } from 'react-router-dom';

const BannerWrite = () => {
    return (
    <S.WriteBox>
        <S.Title>
          배너 신규 등록
        </S.Title>
        <S.TextInputBox>
          <S.TitleText>배너명</S.TitleText>
          <S.TextInput><input placeholder='제목을 입력해주세요'></input></S.TextInput>
        </S.TextInputBox>
        <S.LinkInputBox>
          <S.LinkText>배너링크</S.LinkText>
          <S.LinkInput><input placeholder='배너 클릭 시 이동할 URL'></input></S.LinkInput>
        </S.LinkInputBox>
        <S.ImgInputBox>
          <S.ImgText>배너 이미지</S.ImgText>
          <S.ImgInput><input type='file' placeholder='선택된 파일 없음'></input></S.ImgInput>
        </S.ImgInputBox>
        <S.DateBox>
          <S.DateText>기간</S.DateText>
            <S.Radio>
                <S.UseButton><input type='radio' name="dateOption" />무제한</S.UseButton>
                    <input type="date" className='date1' />
                    <span>~</span>
                    <input type="date"  className='date'  />     
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
          <Link to={`/admin/banner`}>
            <button className='done'>완료</button>
          </Link>
          <Link to={`/admin/banner`}>
            <button className='cancel'>취소</button>
          </Link>
        </S.ButtonBox>
    </S.WriteBox>
    );
};

export default BannerWrite;