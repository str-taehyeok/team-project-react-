import React from 'react';
import S from "./style";
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';

const AdminLogin = () => {

    const {
        register, handleSubmit, formState: { isSubmitting, errors }
    } = useForm({ mode: "onChange" });
    const navigate = useNavigate();

    const emailRegex = "admin1234";
    const passwordRegex = "admin1234";

    const onSubmit = async (data) => {
        try {
            const response = await fetch("http://localhost:10000/admin/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });
            console.log("Response Status:", response.status);

            if (!response.ok) {
                const errorData = await response.json();
                alert(errorData.message);
                return;
            }

            const result = await response.json();
            if(result){
                localStorage.setItem("adminToken", result.adminToken);
                navigate(`/admin`);
            }
        } catch (error) {
            console.error("Login error:", error);
            alert("로그인에 실패했습니다. 다시 시도해주세요.");
        }
    };

  return (
      <form onSubmit={handleSubmit(onSubmit)}>
          <S.LoginBox>
              <S.LogoBox>
                  <Link to={"/"}>
                      <img src={`${process.env.PUBLIC_URL}/assets/images/layout/logo.png`} alt="로고"/>
                  </Link>
              </S.LogoBox>
              <S.Admin>
                  <p>관리자</p>
              </S.Admin>
              <S.InputBox>
                  <label>
                      <S.Input type="text" id='email' placeholder='아이디를 입력해주세요'
                               {...register("memberEmail", {
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



                  <label>
                      <S.Input type="password" id='password' placeholder='비밀번호를 입력해주세요'
                               {...register("memberPassword", {
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
                  <S.LoginButton disabled={isSubmitting}>로그인</S.LoginButton>

          </S.LoginBox>
      </form>
  );
};

export default AdminLogin;