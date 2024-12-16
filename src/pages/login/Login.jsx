import React from 'react';
import S from "./style";
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const { register, handleSubmit, formState: { isSubmitting, errors }} = useForm({ mode: "onSubmit" });
    const navigate = useNavigate();

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[!@#])[\da-zA-Z!@#]{8,}$/;

    // 소셜 로그인 버튼
    const socialAuth = (provider) => {
        window.location.href = `http://localhost:10000/oauth2/authorization/${provider}`;
    };

    const onSubmit = async (data) => {
        try {
            const response = await fetch("http://localhost:10000/member/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });

            if (!response.ok) {
                const errorData = await response.json();
                alert(errorData.message || "아이디 또는 비밀번호가 잘못되었습니다.");
                return;
            }

            const result = await response.json();
            if (result && result.jwtToken) {
                alert("로그인 성공 환영합니다🎉!");
                navigate(`/?jwtToken=${result.jwtToken}`);
            }
        } catch (error) {
            console.error("Login error:", error);
            alert("로그인에 실패했습니다. 다시 시도해주세요.");
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <S.InputBox>
                <label>
                    <S.Input
                        type="text"
                        placeholder='회원 아이디(이메일)를 입력해주세요'
                        {...register("memberEmail", {
                            required: "이메일을 입력하세요.",
                            pattern: {
                                value: emailRegex,
                                message: "이메일 양식에 맞게 입력해주세요."
                            }
                        })}
                    />
                    {errors.memberEmail && <S.P>{errors.memberEmail.message}</S.P>}
                </label>
            </S.InputBox>

            <label>
                <S.Input
                    type="password"
                    placeholder='회원 비밀번호를 입력해주세요'
                    autoComplete='off'
                    {...register("memberPassword", {
                        required: "비밀번호를 입력하세요.",
                        pattern: {
                            value: passwordRegex,
                            message: "소문자, 숫자, 특수문자를 포함한 8자리 이상이어야 합니다."
                        }
                    })}
                />
                {errors.memberPassword && <S.P>{errors.memberPassword.message}</S.P>}
            </label>

            <label>
                <S.Input
                    type="hidden"
                    {...register("memberProvider")}
                    value="구매자"
                />
            </label>

            <S.LoginButton type="submit" disabled={isSubmitting}>로그인</S.LoginButton>

            <S.Box4>
                <S.Box3>
                    <S.SaveBox>
                        <S.SaveEmail type='checkbox'></S.SaveEmail>
                        <S.IdSave>아이디 저장</S.IdSave>
                    </S.SaveBox>
                    <Link to={"/find"}>
                        <S.Forgot>아이디 혹은 비밀번호를 잊어버리셨나요?</S.Forgot>
                    </Link>
                </S.Box3>
            </S.Box4>

            <S.TextBox>
                <S.Text>계정이 없으신가요?</S.Text>
                <S.TextDivider>|</S.TextDivider>
                <Link to={"/join"}>
                    <S.JoinButton name="action" value="join">회원가입</S.JoinButton>
                </Link>
            </S.TextBox>

            <S.Text2>Or continue with</S.Text2>
            <S.ApiLogo>
                <img src={`${process.env.PUBLIC_URL}/assets/images/login/kakao.svg`} onClick={() => socialAuth("kakao")} style={{ cursor: "pointer" }} alt="카카오 로그인" />
                <img src={`${process.env.PUBLIC_URL}/assets/images/login/naver.svg`} onClick={() => socialAuth("naver")} style={{ cursor: "pointer" }} alt="네이버 로그인" />
                <img src={`${process.env.PUBLIC_URL}/assets/images/login/google.svg`} onClick={() => socialAuth("google")} style={{ cursor: "pointer" }} alt="구글 로그인" />
            </S.ApiLogo>

            <S.BottonBox>
                <S.BottonText>이용약관</S.BottonText>
                <S.BottonText1>|</S.BottonText1>
                <S.BottonText>개인정보처리방침</S.BottonText>
                <S.BottonText1>|</S.BottonText1>
                <S.BottonText>책임의 한계와 법적고지</S.BottonText>
                <S.BottonText1>|</S.BottonText1>
                <S.BottonText>회원정보 고객센터</S.BottonText>
            </S.BottonBox>
        </form>
    );
};

export default Login;
