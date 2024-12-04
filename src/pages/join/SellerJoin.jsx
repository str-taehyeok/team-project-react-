import React, { useState } from "react";
import S from "./style";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const SellerJoin = () => {
  const {
    register,
    handleSubmit,
    getValues,
    setError,
    setValue,
    formState: { isSubmitting, errors },
  } = useForm({ mode: "onChange" });

  const [allAgree, setAllAgree] = useState(false);
  const handleAllAgree = (e) => {

    if(e.target.checked){
      setAllAgree(true);
      setValue("agrees", ['1', '2', '3'])
      setValue("optionAgrees", '4')
      setError("agrees", {})
    }else{
      setError("agrees", { message: "필수 약관에 동의하셔야 합니다." })
      setValue("agrees", [])
      setValue("optionAgrees", "")
      setAllAgree(false)
    }
  };

  const [mark, setMark] = useState(false);

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[!@#])[\da-zA-Z!@#]{8,}$/;
  
  return (
    <form
      onSubmit={handleSubmit(async (data) => {
        console.log(data);

      })}
    >
      <S.SellerMain>
        <S.LogoBox>
          <S.LogoWrap>
            <Link to={"/"}>
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/layout/logo.png`}
                alt="로고"
              />
            </Link>
          </S.LogoWrap>
        </S.LogoBox>

        <S.Input>
          <S.InputText>
            <S.TextBox>
              <S.Red id="Text">아이디</S.Red>
              <S.Red id="Text">*</S.Red>
            </S.TextBox>
            <S.InputContainer>
              <label>
                <S.InputButton
                  type="text"
                  id="email"
                  name="sellerEmail"
                  placeholder="아이디(이메일)"
                  {...register("sellerEmail", {
                    required: true,
                    pattern: {
                      value: emailRegex,
                    },
                  })}
                />
                {errors && errors?.sellerEmail?.type === "required" && (
                  <S.P>이메일을 입력하세요</S.P>
                )}
                {errors && errors?.sellerEmail?.type === "pattern" && (
                  <S.P>이메일 양식에 맞게 입력해주세요.</S.P>
                )}
                <S.AuthButton
                  id="EmailCheck"
                  type="button"
                  onClick={() => {
                    const email = getValues("sellerEmail");
                    if (!email) {
                      alert("이메일을 입력하세요.");
                      return;
                    }
                    // 이메일 중복 확인 로직
                    // fetch("http://localhost:10000/check-email", {
                    //   method: "POST",
                    //   headers: {
                    //     "Content-Type": "application/json",
                    //   },
                    //   body: JSON.stringify({ email }),
                    // })
                    //   .then((res) => res.json())
                    //   .then((data) => {
                    //     if (data.isAvailable) {
                    //       alert("사용 가능한 이메일입니다.");
                    //     } else {
                    //       alert("이미 사용 중인 이메일입니다.");
                    //     }
                    //   })
                    //   .catch((err) => {
                    //     console.error("이메일 중복 확인 에러:", err);
                    //     alert("오류가 발생했습니다. 다시 시도해주세요.");
                    //   });
                  }}
                >
                  중복확인
                </S.AuthButton>
                <p id="EmailResult"></p>
              </label>
            </S.InputContainer>
          </S.InputText>

          <S.InputText>
            <S.TextBox>
              <S.Red id="Text">비밀번호</S.Red>
              <S.Red id="Text">*</S.Red>
            </S.TextBox>
            <S.InputContainer>
              <label>
                <S.InputButton
                  type={mark ? "text" : "password"}
                  name="sellerPassword"
                  placeholder="비밀번호"
                  autoComplete="off"
                  {...register("sellerPassword", {
                    required: true,
                    pattern: {
                      value: passwordRegex,
                    },
                  })}
                />
                {errors && errors?.sellerPassword?.type === "required" && (
                  <S.P>비밀번호를 입력하세요</S.P>
                )}
                {errors && errors?.sellerPassword?.type === "pattern" && (
                  <S.P>
                    소문자, 숫자, 특수문자를 각 하나 포함한 8자리 이상이여야
                    합니다.
                  </S.P>
                )}
                <S.Mark
                  onClick={() => setMark(!mark)}
                  style={{
                    backgroundImage: `url(${
                      process.env.PUBLIC_URL
                    }/assets/images/join/${
                      mark ? "eye-on.png" : "eye-off.png"
                    })`,
                    cursor: "pointer",
                  }}
                >
                </S.Mark>
              </label>
            </S.InputContainer>
          </S.InputText>

          <S.InputText>
            <label className="inputTextGap">
              <S.TextBox>
                <S.Red id="Text">비밀번호 확인</S.Red>
                <S.Red id="Text">*</S.Red>
              </S.TextBox>
              <S.InputContainer>
                <S.InputButton
                  type={mark ? "text" : "password"}
                  id="passWordConfirm"
                  placeholder="비밀번호를 입력하세요"
                  {...register("passWordConfirm", {
                    required: "비밀번호 확인을 입력하세요",
                    validate: {
                      matchPassword: (passWordConfirm) => {
                        const password = getValues("sellerPassword");
                        return (
                          password === passWordConfirm ||
                          "비밀번호가 일치하지 않습니다."
                        );
                      },
                    },
                  })}
                />
                {errors?.passWordConfirm && (
                  <S.P>{errors.passWordConfirm.message}</S.P>
                )}
              </S.InputContainer>
            </label>
          </S.InputText>

          <S.InputText>
            <S.TextBox>
              <S.Red id="Text">휴대전화 번호</S.Red>
              <S.Red id="Text" className="Red">
                *
              </S.Red>
            </S.TextBox>
            <S.InputButton type="string" name="phone" placeholder="" />
          </S.InputText>
          <S.Line></S.Line>
          <S.InputText>
            <S.TextBox>
              <S.Red id="Text">사업자 인증번호</S.Red>
              <S.Red id="Text">*</S.Red>
            </S.TextBox>
            <S.InputContainer>
              <S.InputButton
                type="number"
                name="number"
                id="Number"
                placeholder="'-'없이 입력"
              />
              <S.AuthButton>인증</S.AuthButton>
              <p id="NumberResult"></p>
            </S.InputContainer>
          </S.InputText>

          <S.InputText>
            <S.TextBox>
              <S.Red id="Text">대표자명</S.Red>
              <S.Red id="Text">*</S.Red>
            </S.TextBox>
            <S.InputButton type="text" name="kingname" placeholder="대표자명" />
            <p id="KingNameResult"></p>
          </S.InputText>

          <S.InputText>
            <S.TextBox>
              <S.Red id="Text">업체명</S.Red>
              <S.Red id="Text">*</S.Red>
            </S.TextBox>
            <S.InputButton
              type="text"
              name="companyname"
              placeholder="업체명"
            />
            <p id="CompanyNameResult"></p>
          </S.InputText>
          <S.Line></S.Line>
        </S.Input>

          <S.InputText>
            <S.TextBox1>
              <S.Red id="Text1">약관 및 개인정보수집 동의</S.Red>
              <S.Red id="Text1">*</S.Red>
            </S.TextBox1>

            <S.AgreeBox>
              <S.AgreeAll>
                <label>
                  <S.AllAgree
                    type="checkbox"
                    value="all"
                    checked={allAgree}
                    onChange={handleAllAgree}
                  />
                </label>
                <S.Text2>모두 동의합니다.</S.Text2>
              </S.AgreeAll>

              <S.Line2></S.Line2>

              {[
                { id: "1", label: "이용약관 동의 (필수)" },
                { id: "2", label: "개인정보 수집 및 이용 동의 (필수)" },
                { id: "3", label: "위치정보 이용약관 동의 (필수)" },
              ].map((item) => (
                <S.Agree key={item.id}>
                  <label>
                    <input
                      type="checkbox"
                      name="agrees"
                      value={item.id}
                      {...register("agrees", {
                        required: "필수 약관에 동의하셔야 합니다.",
                        validate: {
                          checkAgress : (value) => {
                            const { agrees, optionAgrees } = getValues();
                            if(agrees.length === 3 && optionAgrees === "4"){
                              setAllAgree(true);
                            }else{
                              setAllAgree(false);
                            }

                            if (agrees.length < 3) {
                              return "필수 약관에 모두 동의하셔야 합니다.";
                            }
                            return agrees[0] && agrees[1] && !!agrees[2];
                          }
                        },
                      })}
                    />
                  </label>
                  <S.TextBox2>
                    <S.Text3>{item.label}</S.Text3>
                    <S.Text4>자세히보기</S.Text4>
                  </S.TextBox2>
                </S.Agree>
              ))}

                {/* 선택동의 */}
                <S.Agree>
                  <label>
                    <input
                      type="checkbox"
                      name="agrees"
                      value={"4"}
                      {...register("optionAgrees", {
                        validate: {
                          checkAgress : (value) => {
                            const { agrees, optionAgrees } = getValues();
                            if(agrees.length === 3 && optionAgrees === "4"){
                              setAllAgree(true);
                            }else{
                              setAllAgree(false);
                            }
                            
                            return agrees[0] && agrees[1] && !!agrees[2];
                          }
                        },
                      })}
                    />
                  </label>
                  <S.TextBox2>
                    <S.Text3>프로모션 정보 수신 동의 (선택)</S.Text3>
                    <S.Text4>자세히보기</S.Text4>
                  </S.TextBox2>
                </S.Agree>

            </S.AgreeBox>
            {/* 에러 메시지 */}
            {errors.agrees && (
              <S.P id="AgreeResult" style={{ color: "red" }}>
                {errors.agrees.message}
              </S.P>
            )}
          </S.InputText>
        
        <S.LoginButton type="submit" disabled={isSubmitting}>
          회원가입
        </S.LoginButton>
      </S.SellerMain>
    </form>
  );
};

export default SellerJoin;
