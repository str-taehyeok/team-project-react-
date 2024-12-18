import React, { useEffect } from 'react';
import S from './style';
import { useNavigate } from 'react-router-dom';

const PostTagColor = () => {
  const navigate = useNavigate();
  const localJwtToken = localStorage.getItem("jwtToken");

  useEffect(() => {
    if (!localJwtToken) {
      alert("로그인 후 이용해주시길 바랍니다.");
      navigate("/login");
    }
  }, [navigate, localJwtToken]);

  return (
    <S.PostWarpper>
      <S.UploadButton id="submit-button" type="submit">
        업로드
      </S.UploadButton>
      <S.PostContents>
        {/* 이미지 업로드 영역 */}
        <div className="image-wrapper">
          <div className="dummy-content-wrap">
            <S.TagColorImage>
              <label htmlFor="file-upload">
                <div className="main-img-dummy">
                  <input type="file" id="file-upload" accept="image/*" />
                </div>
              </label>
            </S.TagColorImage>
          </div>
        </div>

        {/* 글 작성 영역 */}
        <div>
          <S.WriterBox>
            <S.Textarea
              placeholder={
                "오늘 당신의 반려동물은 무엇을 했나요?\n당신이 바라보는 모습을 수백만 포포인들과 나눠보세요!"
              }
            />
          </S.WriterBox>
        </div>
      </S.PostContents>
    </S.PostWarpper>
  );
};

export default PostTagColor;