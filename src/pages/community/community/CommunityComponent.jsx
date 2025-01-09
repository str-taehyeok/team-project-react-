import React, { useContext } from 'react';
import { CommunityContext } from '../../../context/communityContext';
import S from './style';
import HeartBtn from './HeartBtn';
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';

const CommunityComponent = ({postColor}) => {

  const { communityState } = useContext(CommunityContext);
  const { communites } = communityState;

  return communites.filter((cm) => cm.postColor === postColor).slice(0, 5).map(({
    id, memberId, imageName1, memberNickName, memberFileName, memberFilePath
  }) => (
      <S.OrangePostBox key={id}>
          <S.OrangePost>
              <S.PostImage>
                  <S.Heart>
                      <HeartBtn id={id} type={"community"} />
                  </S.Heart>
                  <Link to={`/post/read/${id}`}>
                      <img src={`${process.env.PUBLIC_URL}/assets/images/community/${imageName1}`} alt={"게시글" + (id + 1)} />
                  </Link>
              </S.PostImage>
              <S.ProfileBox>
                  <S.Profile>
                      <Link to={`/post/list/${memberId}`}>
                          <img src={`${process.env.PUBLIC_URL}/assets/images/${memberFilePath}/${memberFileName}`} alt={"게시글 리스트" + id} />
                      </Link>
                  </S.Profile>
                  <S.NickName>{memberNickName}</S.NickName>
              </S.ProfileBox>
          </S.OrangePost>
      </S.OrangePostBox>
  ))
};

export default CommunityComponent;