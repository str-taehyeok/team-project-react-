import React from 'react';
import S from "./style";

const PostWrite = () => {
    return (
        <div>
            <S.PostWarpper>
                <S.UploadButton type="button">업로드</S.UploadButton>
                <S.PostContents >
                    {/* 디자인 용 */}
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
                                <S.SubImg></S.SubImg>
                                <S.SubImg></S.SubImg>
                                <S.SubImg></S.SubImg>
                                <S.SubImg></S.SubImg>
                            </S.SubImagesWrap>
                        </div>
                    </div>
                    {/* 글 작성하는 칸 */}
                    <div>
                        <S.WriterBox>
                            <S.Textarea name="write" id="write"
                                placeholder={'오늘 당신의 반려동물은 무엇을 했나요?\n당신이 바라보는 모습을 수백만 포포인들과 나눠보세요!'}>
                            </S.Textarea>
                        </S.WriterBox>
                    </div>
                </S.PostContents >
            </S.PostWarpper>
        </div>
    );
};

export default PostWrite;
