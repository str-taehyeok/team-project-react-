import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import S from './style';

const PostWrite = () => {
    const { currentUser } = useSelector((state) => state.user);
    const { register, handleSubmit, formState: { isSubmitting, errors } } = useForm({ mode: 'onChange' });
    const navigate = useNavigate();
    const localJwtToken = localStorage.getItem("jwtToken");

    useEffect(() => {
        if (!localJwtToken) {
            alert("로그인 후 이용해주시길 바랍니다.");
            navigate('/login');
        }
    }, [navigate, localJwtToken]);

    const onSubmit = async (data) => {
        console.log(data);
        try {
            const response = await fetch("http://localhost:10000/posts/write", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    memberId: currentUser.id,
                    postContent: data.postContent,
                    postImage1: "post.png",
                    postColor: "Gold",
                }),
            });

            const result = await response.json();
            if (response.ok) {
                alert('데이터가 성공적으로 전송되었습니다!');
                navigate(`/my-pet`);
            } else {
                console.log(result);
                throw new Error(result.message || '데이터 전송 중 오류가 발생하였습니다.');
            }
        } catch (error) {
            console.error('에러발생 :', error);
            alert(error.message);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <S.PostWarpper>
                <S.UploadButton id="submit-button" type="submit" disabled={isSubmitting}>업로드</S.UploadButton>
                <S.PostContents>
                    {/* 이미지 업로드 영역 */}
                    <div className="image-wrapper">
                        <div className="dummy-content-wrap">
                            <S.MainImageDumy>
                                <label htmlFor="file-upload">
                                    <div className="main-img-dummy">
                                        <span className="h5">
                                            화면을 눌러 이미지를 추가하세요<br />
                                            (최대 5장까지 가능합니다)
                                        </span>
                                    </div>
                                </label>
                            </S.MainImageDumy>
                            <S.SubImagesWrap>
                                <S.SubImg><img src="/assets/images/community/plus.png" alt="플러스아이콘" /></S.SubImg>
                                <S.SubImg></S.SubImg>
                                <S.SubImg></S.SubImg>
                                <S.SubImg></S.SubImg>
                            </S.SubImagesWrap>
                        </div>
                    </div>

                    {/* 글 작성 영역 */}
                    <div>
                        <S.WriterBox>
                            <S.Textarea
                                {...register("postContent")}
                                placeholder={'오늘 당신의 반려동물은 무엇을 했나요?\n당신이 바라보는 모습을 수백만 포포인들과 나눠보세요!'} />
                            {errors.postContent && <p>{errors.postContent.message}</p>}
                        </S.WriterBox>
                    </div>
                </S.PostContents>
            </S.PostWarpper>
        </form>
    );
};

export default PostWrite;
