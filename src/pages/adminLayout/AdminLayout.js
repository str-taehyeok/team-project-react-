
import React, { useEffect } from 'react';
import {Outlet, useNavigate, useSearchParams} from "react-router-dom";
import S from "./style";
import AdminHeader from './AdminHeader';
import { useDispatch } from 'react-redux';
import { setUser, setUserStatus } from '../../modules/admin';

const AdminLayout = () => {

    const dispatch = useDispatch();
    const adminToken = localStorage.getItem("adminToken");
    const navigate = useNavigate();
    useEffect(() => {

        // 로컬스토리지 토큰 확인
        if (adminToken) {

            const getUserDatas = async () => {
                const response = await fetch("http://localhost:10000/admin/token", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${adminToken}`
                    }
                });

                // 데이터를 못 가져오면 토큰 만료
                if (!response.ok) {
                    const datas = await response.json();
                    dispatch(setUser({}));
                    dispatch(setUserStatus(false));
                    localStorage.removeItem("adminToken");
                    alert(datas.message)
                    navigate("/admin")
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
            navigate("/admin-login")
        }

    }, [dispatch, adminToken, navigate]);

    return (
        <S.LayoutWrapper> 
            <AdminHeader />
            <S.Main>
                <Outlet />
            </S.Main>
        </S.LayoutWrapper>
    );
};

export default AdminLayout;


