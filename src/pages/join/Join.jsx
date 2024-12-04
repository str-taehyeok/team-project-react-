import React, { useState } from "react";
import S from "./style";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const Join = () => {
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

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[!@#])[\da-zA-Z!@#]{8,}$/;

  return (
    <form onSubmit={handleSubmit(async (data) => {

        console.log(data)
        // await fetch("http://localhost:10000/join-complete", {
        //   method: "POST",
        //   headers: {
        //     "Content-Type": "application/json",
        //   },
        //   body: JSON.stringify({
        //     email: data.buyerEmail,
        //     password: data.buyerPassword,
        //     nickName: data.nickName,
        //     name: data.name,
        //     phone: data.phone,
        //     address: {
        //       postcode: data.postcode,
        //       baseAddress: data.baseAddress,
        //       detailAddress: data.detailAddress,
        //     },
        //     agrees: data.agrees,
        //   }),
        // });
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
                  name="buyerEmail"
                  placeholder="아이디(이메일)"
                  {...register("buyerEmail", {
                    required: true,
                    pattern: {
                      value: emailRegex,
                    },
                  })}
                />
                {errors && errors?.buyerEmail?.type === "required" && (
                  <S.P>이메일을 입력하세요</S.P>
                )}
                {errors && errors?.buyerEmail?.type === "pattern" && (
                  <S.P>이메일 양식에 맞게 입력해주세요.</S.P>
                )}
                <S.AuthButton
                  id="EmailCheck"
                  type="button"
                  onClick={() => {
                    const email = getValues("buyerEmail");
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
                  type="password"
                  name="buyerPassword"
                  placeholder="비밀번호"
                  autoComplete="off"
                  {...register("buyerPassword", {
                    required: true,
                    pattern: {
                      value: passwordRegex,
                    },
                  })}
                />
                {errors && errors?.buyerPassword?.type === "required" && (
                  <S.P>비밀번호를 입력하세요</S.P>
                )}
                {errors && errors?.buyerPassword?.type === "pattern" && (
                  <S.P>
                    소문자, 숫자, 특수문자를 각 하나 포함한 8자리 이상이여야
                    합니다.
                  </S.P>
                )}
                <S.Mark></S.Mark>
                <p id="PasswordResult"></p>
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
                  type="password"
                  id="passWordConfirm"
                  placeholder="비밀번호를 입력하세요"
                  {...register("passWordConfirm", {
                    required: "비밀번호 확인을 입력하세요",
                    validate: {
                      matchPassword: (passWordConfirm) => {
                        const password = getValues("buyerPassword");
                        return (
                          password === passWordConfirm ||
                          "비밀번호가 일치하지 않습니다."
                        );
                      },
                    },
                  })}
                />
                {errors && errors?.passWordConfirm && (
                  <S.P>{errors.passWordConfirm.message}</S.P>
                )}
              </S.InputContainer>
            </label>
          </S.InputText>

          <S.InputText>
            <S.TextBox>
              <S.Red id="Text">닉네임</S.Red>
              <S.Red id="Text">*</S.Red>
            </S.TextBox>
            <S.InputContainer>
              <S.InputButton
                type="name"
                id="Name"
                name="nickName"
                placeholder="별명"
              />
              <p id="NameResult"></p>
            </S.InputContainer>
          </S.InputText>

          <S.InputText>
            <S.TextBox>
              <S.Red id="Text">이름</S.Red>
              <S.Red id="Text">*</S.Red>
            </S.TextBox>
            <S.InputButton type="text" name="name" placeholder="이름" />
            <p id="NameResult"></p>
          </S.InputText>

          <S.InputText>
            <S.TextBox>
              <S.Red id="Text">휴대전화 번호</S.Red>
              <S.Red id="Text">*</S.Red>
            </S.TextBox>
            <S.InputButton type="string" name="phone" placeholder="" />
          </S.InputText>

          <S.InputText>
            <S.TextBox>
              <S.Red id="Text">주소</S.Red>
              <S.Red id="Text">*</S.Red>
            </S.TextBox>
            <S.InputContainer>
              <S.InputButton
                type="text"
                id="Sample6Postcode"
                placeholder="우편번호"
              />
              <p id="AddressResult"></p>
              <S.InputButton1
                type="text"
                name="address"
                id="Sample6Address"
                placeholder="기본주소"
              />
              <S.InputButton1
                type="text"
                name="address"
                id="Sample6DetailAddress"
                placeholder="상세주소"
              />
              <p id="DetailAddressResult"></p>
              <S.AuthButton type="button" onClick={() => {}}>
                우편번호
              </S.AuthButton>
            </S.InputContainer>
          </S.InputText>

          <S.Line></S.Line>

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
        </S.Input>

        <S.LoginButton disabled={isSubmitting}>
          회원가입
        </S.LoginButton>
      </S.SellerMain>
    </form>
  );
};

export default Join;
