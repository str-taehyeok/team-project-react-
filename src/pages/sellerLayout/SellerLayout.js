import React, { useEffect } from 'react';
import { Outlet, useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import { setPreviousUrl, setUser, setUserStatus } from '../../modules/seller';
import S from "./style";
import SellerHeader from './SellerHeader';


const SellerLayout = () => {
    const dispatch = useDispatch();
    const uri = useLocation().pathname;
    const [searchParams] = useSearchParams();
    const jwtToken = searchParams.get("jwtToken");
    const localJwtToken = localStorage.getItem("jwtToken");
    const { currentUser } = useSelector((state) => state.seller);
    const navigate = useNavigate();
    useEffect(() => {

        // 쿼리스트링 토큰이 있으면
        if (jwtToken) {
            localStorage.setItem("jwtToken", jwtToken);
            navigate("/seller");
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
                    alert(datas.message);
                    navigate("/seller")
                    return;
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
            navigate("/login")
        }

        dispatch(setPreviousUrl(uri));

    }, [dispatch, uri, jwtToken, localJwtToken, navigate]);

    console.log(localJwtToken);


    return (
        <S.LayoutWrapper>
            <SellerHeader />
            <S.Main>
                <Outlet />
            </S.Main>
        </S.LayoutWrapper>
    );
};

export default SellerLayout;


