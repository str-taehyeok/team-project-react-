import React,{useState} from 'react';
import { Link, Outlet } from "react-router-dom";
import S from './style';

const LoginContainer = () => {
    const[activeBtn, setActiveButton] = useState("member");
    const handleButtonClick = (button) => {
        setActiveButton(button);
    };

    console.log(activeBtn)
    return (
        <S.root>
            <S.LoginMain>
                <S.LogoBox>
                    <Link to={"/"}>
                        <img src={`${process.env.PUBLIC_URL}/assets/images/layout/logo.png`} alt="로고" />
                    </Link>
                </S.LogoBox>
                <S.Tap>
                    <Link to={"/login"}>
                        <S.MemberBtn 
                            className={activeBtn === "member" ? "active" : ""}
                            onClick={() => handleButtonClick("member")}>
                            회원
                        </S.MemberBtn>
                    </Link>

                    <Link to={"/login/seller"}>
                        <S.SellerBtn 
                            className={activeBtn === "seller" ? "active" : ""}
                            onClick={() => handleButtonClick("seller")}>
                            판매자
                        </S.SellerBtn>
                    </Link>
                </S.Tap>
                <div>
                    <Outlet />
                </div>
            </S.LoginMain>
        </S.root>
    );
};

export default LoginContainer;