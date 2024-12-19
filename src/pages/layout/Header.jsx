import React, { useEffect, useState } from 'react';
import S from "./style";
import {Link, useNavigate} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { setUser, setUserStatus } from '../../modules/user';

const Header = () => {
    const { isLogin } = useSelector((state) => state.user);
    const [isHover, setIsHover] = useState(false);
    const [isSearch, setIsSearch] = useState(false);
    const dispatch = useDispatch();
    const [searchTerm, setSearchTerm] = useState(""); // 검색어 상태 관리
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("jwtToken");
        dispatch(setUser({}));
        dispatch(setUserStatus(false));
        window.location.href = "http://localhost:10000/logout";
    };

    const handleMouseOver = () => {
        setIsHover(true);
    }
    const handleMouseOut = () => {
        setIsHover(false);
    }
    const handleShowSearch = () => {
        setIsSearch(!isSearch)
    }

    useEffect(() => {

    }, [])
    // 검색어 입력 핸들러
    const handleSearchInput = (e) => setSearchTerm(e.target.value);

    // 검색 실행 핸들러
    const handleSearchSubmit = () => {
        if (searchTerm.trim() === "") return; // 빈 입력 방지

        // 예시: 검색한 상품 이름을 기준으로 검색 처리
        // 서버로 API 요청을 보내거나, 로컬 상태에 있는 데이터를 탐색합니다.
        navigate(`/store/search?productName=${encodeURIComponent(searchTerm)}`);
    };

    return (
        <S.HeaderWrap className={isHover ? "active" : ""} onMouseOut={handleMouseOut}>
            <S.Header>
                <S.LogoWrap>
                    <Link to={"/"}><img src={`${process.env.PUBLIC_URL}/assets/images/layout/logo.png`} alt="로고" /></Link>
                </S.LogoWrap>
                <S.MenuWrap onMouseOver={handleMouseOver}>
                    <S.MainMenu>
                        <li><Link to={"/petsonal"}>펫스널컬러</Link></li>
                        <li><Link to={"/store"}>스토어</Link></li>
                        <li><Link to={"/community"}>커뮤니티</Link></li>
                        <li><Link to={"/myhome"}>마이홈</Link></li>
                    </S.MainMenu>
                    <S.SubMenuWrap className={isHover ? "active" : ""} >
                        <S.SubMenu>
                            <li><Link to={"/petsonal"}>테스트</Link></li>
                            <li></li>
                            <li></li>
                        </S.SubMenu>
                        <S.SubMenu>
                            <li><Link to={"/store-dog"}>강아지</Link></li>
                            <li><Link to={"/store-cat"}>고양이</Link></li>
                            <li></li>
                        </S.SubMenu>
                        <S.SubMenu>
                            <li><Link to={"/post/recommend/all"}>추천 바구니</Link></li>
                            <li><Link to={"/post/list?postId=${id}"}>내 게시물</Link></li>
                            <li></li>
                        </S.SubMenu>
                        <S.SubMenu>
                            <li><Link to={"/myhome"}>나의 정보</Link></li>
                            <li><Link to={"/my-pet"}>반려동물 정보</Link></li>
                            <li><Link to={"/notice"}>공지사항</Link></li>
                        </S.SubMenu>
                    </S.SubMenuWrap>
                </S.MenuWrap>
                <S.IconWrap>
                    {isSearch ? (
                        <S.SearchWrap>
                            <input type="text" />
                            <img
                                className='icon'
                                src={`${process.env.PUBLIC_URL}/assets/images/layout/search.png`} alt="로고"
                                onClick={handleShowSearch}
                            />
                        </S.SearchWrap>
                    ) : (
                        <img
                            src={`${process.env.PUBLIC_URL}/assets/images/layout/search.png`} alt="로고"
                            onClick={handleShowSearch}
                        />
                    )}
                    <Link to={""} ><img src={`${process.env.PUBLIC_URL}/assets/images/layout/delivery.png`} alt="로고" /></Link>
                    <Link to={"/cart"} ><img src={`${process.env.PUBLIC_URL}/assets/images/layout/cart.png`} alt="로고" /></Link>
                    <p>|</p>
                    { isLogin ? (
                        <Link onClick={handleLogout}>로그아웃</Link> 
                    ) : (
                        <Link to={"/login"}>로그인</Link> 
                    )}
                </S.IconWrap>
            </S.Header>
        </S.HeaderWrap>
    );
};

export default Header;