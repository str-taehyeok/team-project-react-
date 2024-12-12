import React, { useEffect } from 'react';
import { Outlet, useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setPreviousUrl, setUser, setUserStatus } from '../../modules/user';
import S from "./style";
import Header from "./Header";

const Layout = () => {
    const dispatch = useDispatch();
    const uri = useLocation().pathname;
    const currentUser = useSelector(state => state.yourReducer?.user || {});
    const [searchParams] = useSearchParams();
    const jwtToken = searchParams.get("jwtToken");
    const localJwtToken = localStorage.getItem("jwtToken");

    const navigate = useNavigate();

    useEffect(() => {
        // Redux 상태 로그로 확인
        console.log("Redux 상태 확인:", currentUser);

        // 쿼리스트링 토큰이 있으면
        if (jwtToken) {
            localStorage.setItem("jwtToken", jwtToken);
            navigate("/");
        }

        // 로컬스토리지 토큰 확인
        if (localJwtToken) {
            console.log("로컬스토리지에서 가져온 jwtToken:", localJwtToken);

            const getUserDatas = async () => {
                const response = await fetch("http://localhost:10000/member/token", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${localJwtToken}`
                    }
                });

                console.log("응답 상태:", response.status);

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
                console.log("정상적으로 가져온 유저 데이터:", datas);
                dispatch(setUser(datas.currentUser));
                dispatch(setUserStatus(true));
            };

            getUserDatas();
        }

        dispatch(setPreviousUrl(uri));
    }, [dispatch, uri, localJwtToken, navigate, jwtToken, currentUser]);


    return (
        <S.LayoutWrapper>
            <Header />
            <S.Main>
                <Outlet />
            </S.Main>
        </S.LayoutWrapper>
    );
};

export default Layout;
