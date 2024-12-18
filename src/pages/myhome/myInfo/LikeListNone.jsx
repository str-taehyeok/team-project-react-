import React from 'react';
import S from './likestyle';

const LikeListNone = () => {
    return (
        <S.LikeListNoneBox>
            <p>아직 스크랩한 콘텐츠가 없습니다.</p>
            <p>마음에 드는 상품을 발견하면 좋아요 해보세요.</p>
        </S.LikeListNoneBox>
    );
};

export default LikeListNone;