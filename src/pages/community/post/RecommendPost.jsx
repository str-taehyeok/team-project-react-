import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { CommunityContext } from "../../../context/communityContext";
import S from "./style";
import HeartBtn from "../community/HeartBtn";
import InfiniteScroll from "react-infinite-scroll-component";

const RecommendPost = () => {
  const { postColor } = useParams();
  const [color, setColor] = useState(postColor);
  const pathname = useLocation().pathname;

  const { communityState } = useContext(CommunityContext);
  const { communites } = communityState;

  // 초기 데이터와 페이지 상태 관리
  const [communityList, setCommunityList] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  // postColor를 대문자로 변환 (초기 설정 및 경로 변경 시 업데이트)
  useEffect(() => {
    if (postColor.includes("-")) {
      setColor(
        postColor
          .split("-")
          .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
          .join("")
      );
    } else {
      setColor(postColor.charAt(0).toUpperCase() + postColor.slice(1));
    }
  }, [postColor, pathname]);

  // 필터링된 커뮤니티 데이터 가져오기
  useEffect(() => {
    const filteredCommunities =
      color === "All"
        ? communites
        : communites.filter((cm) => cm.postColor === color);

    // 처음 로드 시 첫 번째 페이지 데이터 설정
    setCommunityList(filteredCommunities.slice(0, 10));
    setHasMore(filteredCommunities.length > 10);
    setPage(1);
  }, [color, communites]);

  // 추가 데이터를 불러오는 함수
  const fetchMoreData = () => {
    const filteredCommunities =
      color === "All"
        ? communites
        : communites.filter((cm) => cm.postColor === color);

    const nextPageData = filteredCommunities.slice(page * 10, (page + 1) * 10);

    // 데이터가 더 이상 없으면 로드 중단
    if (nextPageData.length === 0) {
      setHasMore(false);
      return;
    }

    setTimeout(() => {
      setCommunityList((prevList) => [...prevList, ...nextPageData]);
      setPage((prevPage) => prevPage + 1);
    }, 1000); // 데이터를 불러오는 시뮬레이션 (1초 딜레이)
  };

  const comuList = communityList.map(
    ({ id, imageName1, memberNickName, memberFileName, memberFilePath }) => (
      <S.CommunityPost key={id}>
        <HeartBtn id={id} type={"community"} />
        <Link to={`/post/read/${id}`}>
          <S.PostImage
            src={`${process.env.PUBLIC_URL}/assets/images/community/${imageName1}`}
            alt="게시물"
          />
        </Link>
        <S.PropileBox>
          <Link to={`/post/list?postId=${id}`}>
            <S.Profile>
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/${memberFilePath}/${memberFileName}`}
                alt="프로필"
              />
            </S.Profile>
          </Link>
          <S.NickName>{memberNickName}</S.NickName>
        </S.PropileBox>
      </S.CommunityPost>
    )
  );

  return (
    <S.InfiniteScrollContainer>
      <S.ColorTitle>#{postColor}</S.ColorTitle>
      <InfiniteScroll 
        dataLength={communityList.length} // 현재 데이터 개수
        next={fetchMoreData} // 추가 데이터를 불러오는 함수
        hasMore={hasMore} // 더 가져올 데이터가 있는지 여부
        endMessage={
          <S.EndMessage>
            모든 게시물을 불러왔습니다.
          </S.EndMessage>
        }
      >
        <S.AllPostWrapper>{comuList}</S.AllPostWrapper>
      </InfiniteScroll>
    </S.InfiniteScrollContainer>
  );
};

export default RecommendPost;
