import React, { useEffect } from 'react';
import { Outlet, useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setPreviousUrl, setUser, setUserStatus } from '../../modules/user';
import S from "./style";
import Header from "./Header";
import LinkToTop from '../../routes/LinkToTop';

const Layout = () => {
    const dispatch = useDispatch();
    const uri = useLocation().pathname;
    const [searchParams] = useSearchParams();
    const jwtToken = searchParams.get("jwtToken");
    const localJwtToken = localStorage.getItem("jwtToken");

    const navigate = useNavigate();
    useEffect(() => {

        // 쿼리스트링 토큰이 있으면
        if (jwtToken) {
            localStorage.setItem("jwtToken", jwtToken);
            navigate("/");
        }

        // 로컬스토리지 토큰 확인
        if (localJwtToken) {

            const getUserDatas = async () => {
                const response = await fetch("http://localhost:10000/member/token", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${localJwtToken}`
                    }
                });

                // 데이터를 못 가져오면 토큰 만료
                if (!response.ok) {
                    const datas = await response.json();
                    dispatch(setUser({}));
                    dispatch(setUserStatus(false));
                    localStorage.removeItem("jwtToken");
                    return alert(datas.message);
                }

                // 정상 응답
                const datas = await response.json();
                dispatch(setUser(datas.currentUser));
                dispatch(setUserStatus(true));
            };

            getUserDatas();
        }else{
            dispatch(setUser({}));
            dispatch(setUserStatus(false));
        }

        dispatch(setPreviousUrl(uri));
    }, [dispatch, uri, jwtToken, localJwtToken, navigate]);


    return (
        <LinkToTop>
            <S.LayoutWrapper>
                <Header />
                <S.Main>
                    <Outlet />
                </S.Main>
            </S.LayoutWrapper>
        </LinkToTop>
    );
};

export default Layout;
