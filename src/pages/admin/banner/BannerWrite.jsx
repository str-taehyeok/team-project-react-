import React from 'react';
import S from "./style";
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';

const BannerWrite = () => {
    const { register, handleSubmit, getValues, formState: {isSubmitting, isSubmitted, errors}} = useForm({mode:"onChange"});
    const { id } = useSelector(state => state.admin.currentUser);
    const navigate = useNavigate();

    return (
        <form encType="multipart/form-data" onSubmit={handleSubmit(async (data) => {

            const formData = new FormData();
            const { bannerStart, bannerEnd, bannerTitle, bannerType, bannerLink, bannerImage } = data;

            formData.append("memberId", id);
            formData.append("bannerStart", bannerStart);
            formData.append("bannerEnd", bannerEnd);
            formData.append("bannerTitle", bannerTitle);
            formData.append("bannerType", bannerType);
            formData.append("bannerLink", bannerLink);
            formData.append("uploadFile", data.bannerImage[0]);

            await fetch("http://localhost:10000/banners/upload", {
                method: "POST",
                body: formData
            })
            .then((res) => res.json())
            .then(async (res) => {
                console.log(res)
                formData.append("uuid", res.uuid);
                await fetch("http://localhost:10000/banners/write", {
                    method: "POST",
                    body: formData
                })
                .then((res) => res.json())
                .then((res) => {
                    alert(res.message)
                    navigate("/admin/banner")
                    return;
                })
            })
            .catch(console.error)

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