import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import S from "./style"; 
import { Link } from 'react-router-dom';

const Header = () => {
    const [searchTerm, setSearchTerm] = useState(""); 
    const [isSearch, setIsSearch] = useState(false);
    const navigate = useNavigate();

    const handleSearchInput = (e) => {
        setSearchTerm(e.target.value); 
    };

    const handleSearchSubmit = () => {
        if (searchTerm.trim() === "") return;  
        navigate(`/search/${encodeURIComponent(searchTerm.trim())}`);  
        setSearchTerm("");  
        setIsSearch(false);  
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSearchSubmit(); 
        }
    };

    const handleShowSearch = () => {
        setIsSearch(!isSearch); 
        if (!isSearch) {
            setSearchTerm(""); 
        }
    };

    return (
        <S.HeaderWrap>
            <S.Header>
                <S.LogoWrap>
                    <Link to={"/"}><img src={`${process.env.PUBLIC_URL}/assets/images/layout/logo.png`} alt="로고" /></Link>
                </S.LogoWrap>
                <S.MenuWrap>
                    <S.MainMenu>
                        <li><Link to={"/petsonal"}>펫스널컬러</Link></li>
                        <li><Link to={"/store"}>스토어</Link></li>
                        <li><Link to={"/community"}>커뮤니티</Link></li>
                        <li><Link to={"/myhome"}>마이홈</Link></li>
                    </S.MainMenu>
                </S.MenuWrap>
                <S.IconWrap>
                    {isSearch ? (
                        <S.SearchWrap>
                            <input
                                type="text"
                                value={searchTerm}
                                onChange={handleSearchInput}
                                onKeyPress={handleKeyPress} 
                                autoFocus
                            />
                            <img
                                className='icon'
                                src={`${process.env.PUBLIC_URL}/assets/images/layout/search.png`}
                                alt="검색 아이콘"
                                onClick={handleSearchSubmit}
                            />
                        </S.SearchWrap>
                    ) : (
                        <img
                            src={`${process.env.PUBLIC_URL}/assets/images/layout/search.png`}
                            alt="검색 아이콘"
                            onClick={handleShowSearch}
                        />
                    )}
                    <Link to={""}><img src={`${process.env.PUBLIC_URL}/assets/images/layout/delivery.png`} alt="배달 아이콘" /></Link>
                    <Link to={"/cart"}><img src={`${process.env.PUBLIC_URL}/assets/images/layout/cart.png`} alt="장바구니 아이콘" /></Link>
                    <p>|</p>
                    <Link to={""}>로그인</Link>
                </S.IconWrap>
            </S.Header>
        </S.HeaderWrap>
    );
};

export default Header;
