import React from 'react';
import { useForm } from 'react-hook-form';
import S from "./style";
import { Link } from 'react-router-dom';

const AdminLogin = () => {

  const { 
        register, formState: { errors}
    } = useForm({mode:"onChange"});

  const emailRegex = "admin1234";
  const passwordRegex = "admin1234";

  return (
    <S.LoginBox>
    <S.LogoBox>
        <Link to={"/"}>
            <img src={`${process.env.PUBLIC_URL}/assets/images/layout/logo.png`} alt="로고" />
        </Link>
    </S.LogoBox>
    <S.Admin>
        <p>관리자</p>
    </S.Admin>
        <S.InputBox>
            <label>
                <S.Input type="text" id='email' placeholder='아이디를 입력해주세요'
                        {...register("email", {
                            required: true,
                            pattern: {
                                value: emailRegex,
                            }
                        })}
                    />
                    {errors && errors?.email?.type === "required" && (
                        <S.Text>이메일을 입력하세요</S.Text>
                    )}
            </label>
            

            {/* 비밀번호 로직 만들기 */}
            <label>
                <S.Input type="password" id='password' placeholder='비밀번호를 입력해주세요'
                    {...register("password", {
                        required: true,
                        pattern: {
                            value: passwordRegex,
                        }
                    })}
                />
                {errors && errors?.password?.type === "required" && (
                    <S.Text>비밀번호를 입력하세요</S.Text>
                )}
            </label>
        </S.InputBox>
        <Link to={"/admin"}>
            <S.LoginButton>로그인</S.LoginButton>
        </Link>
    </S.LoginBox>
  );
};

export default AdminLogin;