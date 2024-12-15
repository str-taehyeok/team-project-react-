import React from 'react';
import S from "./style";
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useNavigate } from "react-router-dom";

const BannerWrite = () => {
    const { register, handleSubmit, getValues, formState: {isSubmitting, isSubmitted, errors}} = useForm({mode:"onChange"});
    const memberId = 1;
    const navigate = useNavigate();

    return (
        <form onSubmit={handleSubmit(async (data) => {

            console.log(data)
            await fetch("http://localhost:10000/banners/write", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    bannerTitle: data.bannerTitle,
                    bannerStart: data.bannerStart,
                    bannerEnd: data.bannerEnd,
                    bannerType: data.bannerType,
                    bannerLink: data.bannerLink,
                    bannerImage: data.bannerImage,
                    memberId: memberId
                })
            })
                .then((res) => res.json())
                .then((res) => {
                    //     이후 처리해야할 로직
                    const {id} = res;
                    navigate(`/admin/banner`)
                })
        })}>

            <S.WriteBox>
                <S.Title>
                    배너 신규 등록
                </S.Title>
                <label>
                    <S.TextInputBox>
                        <S.TitleText>배너명</S.TitleText>
                        <S.TextInput><input placeholder='제목을 입력해주세요'
                                            {...register("bannerTitle", {
                                                required: true,
                                            })}
                        /></S.TextInput>
                    </S.TextInputBox>
                </label>
                <label>
                    <S.TypeInputBox>
                        <S.TypeText>배너 타입</S.TypeText>
                        <S.TypeInput>
                            <select
                                {...register("bannerType", {
                                required: true,
                            })}>
                                <option value="" disabled selected>사용 위치에 맞는 배너 선택</option>
                                <option value="상단 배너">쇼핑 메인 배너(사이즈 : 1920 x 603 )</option>
                                <option value="매인 배너">커뮤니티 서브 배너(사이즈 : 1440 x 300 )</option>

                            </select>
                        </S.TypeInput>
                    </S.TypeInputBox>
                </label>
                <label>
                    <S.LinkInputBox>
                        <S.LinkText>배너링크</S.LinkText>
                        <S.LinkInput><input placeholder='배너 클릭 시 이동할 URL'
                                            {...register("bannerLink", {
                                                required: true,
                                            })}
                        /></S.LinkInput>
                    </S.LinkInputBox>
                </label>
                <label>
                    <S.ImgInputBox>
                        <S.ImgText>배너 이미지</S.ImgText>
                        <S.ImgInput><input type='file' placeholder='선택된 파일 없음'
                                           {...register("bannerImage", {
                                               required: true,
                                           })}
                        /></S.ImgInput>
                    </S.ImgInputBox>
                </label>
                <label>
                    <S.DateBox>
                        <S.DateText>기간</S.DateText>
                        <S.Radio>

                            <input type="date" className='date1'
                                   {...register("bannerStart", {
                                         required: true,
                            })}
                            />
                            <span>~</span>
                            <input type="date" className='date'
                                   {...register("bannerEnd", {
                                       required: true,
                                   })}
                            />
                            <S.UseButton><input type='radio' name="dateOption"/>무제한</S.UseButton>
                        </S.Radio>
                    </S.DateBox>
                </label>
                    {/*<S.UseBox>*/}
                    {/*    <S.UseText>사용 여부</S.UseText>*/}
                    {/*    <S.Radio>*/}
                    {/*        <S.UseButton><input type='radio' name="useOption"/>사용함</S.UseButton>*/}
                    {/*        <S.UseButton><input type='radio' className='no' name="useOption"/>사용안함</S.UseButton>*/}
                    {/*    </S.Radio>*/}
                    {/*</S.UseBox>*/}

                    <S.ButtonBox>
                            <button className='done' disabled={isSubmitting}>완료</button>
                        <Link to={`/admin/banner`}>
                            <button className='cancel'>취소</button>
                        </Link>
                    </S.ButtonBox>
            </S.WriteBox>
        </form>
    );
};

export default BannerWrite;