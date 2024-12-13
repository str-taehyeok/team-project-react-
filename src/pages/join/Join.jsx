import React, { useContext, useEffect, useState } from "react";
import S from "./style";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { JoinContext } from "../../context/joinContext";
import DaumPostcode from "react-daum-postcode";

const Join = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const provider = searchParams.get("provider");
  const email = searchParams.get("email");
  const { state } = useContext(JoinContext);
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
    if (e.target.checked) {
      setAllAgree(true);
      setValue("agrees", ["1", "2", "3"]);
      setValue("optionAgrees", "4");
      setError("agrees", {});
    } else {
      setError("agrees", { message: "필수 약관에 동의하셔야 합니다." });
      setValue("agrees", []);
      setValue("optionAgrees", "");
      setAllAgree(false);
    }
  };

  const [mark, setMark] = useState(false);
  const [isPostcodeOpen, setIsPostcodeOpen] = useState(false);
  const [address, setAddress] = useState({
    postcode: "",
    baseAddress: "",
    detailAddress: "",
  });

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[!@#])[\da-zA-Z!@#]{8,}$/;

  const memberPhone = state.phone;
  useEffect(() => {
    // 휴대폰 없으면 휴대폰 인증페이지로 되돌리기
    if(!provider ?!memberPhone : memberPhone){
      navigate("/join/phone")
    }
  }, [navigate, memberPhone]);

  const handleComplete = (data) => {
    setAddress((prev) => ({
      ...prev,
      postcode: data.zonecode,
      baseAddress: data.address,
    }));
    setIsPostcodeOpen(false);
  };

  if (provider) {
    return (
      <form
        onSubmit={handleSubmit(async (data) => {
          const member = {
            memberEmail: email,
            memberNickname: data.memberNickName,
            memberName: data.memberName,
            memberProvider: provider,
            memberZipcode: data.postcode,
            memberAddress: data.baseAddress,
            memberAddressDetail: data.detailAddress,
            memberSmsCheck: data.optionAgrees === "4" ? "1" : "0",
            memberEmailCheck: data.optionAgrees === "4" ? "1" : "0",
          };

          console.log(member);
          await fetch("http://localhost:10000/member/register", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(member),
          })
            .then((res) => {
              if (!res.ok) {
                return res.json().then((res) => {
                  alert(res.message);
                });
              }
              return res.json();
            })
            .then((res) => {
              console.log(res);
              console.log(res && res.jwtToken);
              if (res && res.jwtToken) {
                const { jwtToken } = res;
                localStorage.setItem("jwtToken", jwtToken);
                navigate("/join/complete");
              }
            })
            .catch(console.err);
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
                <S.Red id="Text">닉네임</S.Red>
                <S.Red id="Text">*</S.Red>
              </S.TextBox>
              <S.InputContainer>
                <S.InputField
                  placeholder="별명"
                  {...register("memberNickName")}
                />
                <p id="NameResult"></p>
              </S.InputContainer>
            </S.InputText>

            <S.InputText>
              <S.TextBox>
                <S.Red id="Text">주소</S.Red>
                <S.Red id="Text">*</S.Red>
              </S.TextBox>
              <S.InputContainer>
                <S.InputField
                  placeholder="우편번호"
                  {...register("memberZipcode")}
                  value={address.postcode}
                  readOnly
                />
                <S.AuthButton
                  type="button"
                  onClick={() => setIsPostcodeOpen(true)}
                >
                  우편번호
                </S.AuthButton>
                {isPostcodeOpen && (
                  <S.ModalBackground>
                    <S.ModalContent>
                      <S.CloseAddressBtn
                        type="button"
                        onClick={() => setIsPostcodeOpen(false)}
                      >
                        닫기
                      </S.CloseAddressBtn>
                      <DaumPostcode
                        onComplete={handleComplete}
                        style={{ width: "100%", height: "400px" }}
                      />
                    </S.ModalContent>
                  </S.ModalBackground>
                )}
                <S.InputField1
                  placeholder="기본주소"
                  id="Sample6Address"
                  {...register("memberAddress")}
                  value={address.baseAddress}
                  readOnly
                />
                <S.InputField1
                  placeholder="상세주소"
                  id="Sample6DetailAddress"
                  {...register("memberAddressDetail")}
                />
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
                            checkAgress: (value) => {
                              const { agrees, optionAgrees } = getValues();
                              if (agrees.length === 3 && optionAgrees === "4") {
                                setAllAgree(true);
                              } else {
                                setAllAgree(false);
                              }
                              if (agrees.length < 3) {
                                return "필수 약관에 모두 동의하셔야 합니다.";
                              }
                              return agrees[0] && agrees[1] && !!agrees[2];
                            },
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
                          checkAgress: (value) => {
                            const { agrees, optionAgrees } = getValues();
                            if (agrees.length === 3 && optionAgrees === "4") {
                              setAllAgree(true);
                            } else {
                              setAllAgree(false);
                            }
                            return agrees[0] && agrees[1] && !!agrees[2];
                          },
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

          <S.LoginButton disabled={isSubmitting}>회원가입</S.LoginButton>
        </S.SellerMain>
      </form>
    );
  }

  //  일반 로그인
  return (
    <form
      onSubmit={handleSubmit(async (data) => {
        if (!data.memberName) {
          return alert("이름을 입력해주세요");
        }

        const member = {
          memberEmail: data.memberEmail,
          memberPassword: data.memberPassword,
          memberNickname: data.memberNickName,
          memberName: data.memberName,
          memberPhone: data.memberPhone,
          memberZipcode: address.postcode,
          memberAddress: address.baseAddress,
          memberAddressDetail: data.memberAddressDetail,
          memberSmsCheck: data.optionAgrees === "4" ? "1" : "0",
          memberEmailCheck: data.optionAgrees === "4" ? "1" : "0",
        };
        console.log(member);

        await fetch("http://localhost:10000/member/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(member),
        })
          .then((res) => {
            if (!res.ok) {
              return res.json().then((res) => {
                alert(res.message);
              });
            }
            return res.json();
          })
          .then((res) => {
            console.log(res);
            console.log(res && res.jwtToken);
            if (res && res.jwtToken) {
              const { jwtToken } = res;
              localStorage.setItem("jwtToken", jwtToken);
              navigate("/join/complete");
            }
          })
          .catch(console.err);
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
                <S.InputField
                  type="text"
                  id="email"
                  placeholder="아이디(이메일)"
                  {...register("memberEmail", {
                    required: true,
                    pattern: {
                      value: emailRegex,
                    },
                  })}
                />
                {errors && errors?.memberEmail?.type === "required" && (
                  <S.P>이메일을 입력하세요</S.P>
                )}
                {errors && errors?.memberEmail?.type === "pattern" && (
                  <S.P>이메일 양식에 맞게 입력해주세요.</S.P>
                )}
                <S.AuthButton
                  id="EmailCheck"
                  type="button"
                  onClick={() => {
                    const memberEmail = getValues("memberEmail");
                    if (!memberEmail) {
                      alert("이메일을 입력하세요.");
                      return;
                    }
                    // 이메일 중복 확인 로직
                    fetch("http://localhost:10000/member/check-email", {
                      method: "POST",
                      headers: {
                        "Content-Type": "application/json",
                      },
                      body: JSON.stringify({ memberEmail }),
                    })
                      .then((res) => res.json())
                      .then((data) => {
                        if (data.isValid) {
                          alert("사용 가능한 이메일입니다.");
                        } else {
                          return alert(data.message);
                        }
                      })
                      .catch((err) => {
                        console.error("이메일 중복 확인 에러:", err);
                      });
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
                <S.InputField
                  type={mark ? "text" : "password"}
                  placeholder="비밀번호"
                  autoComplete="off"
                  {...register("memberPassword", {
                    required: true,
                    pattern: {
                      value: passwordRegex,
                    },
                  })}
                />
                {errors && errors?.memberPassword?.type === "required" && (
                  <S.P>비밀번호를 입력하세요</S.P>
                )}
                {errors && errors?.memberPassword?.type === "pattern" && (
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
                ></S.Mark>
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
                <S.InputField
                  type={mark ? "text" : "password"}
                  id="passWordConfirm"
                  placeholder="비밀번호를 입력하세요"
                  {...register("passWordConfirm", {
                    required: "비밀번호 확인을 입력하세요",
                    validate: {
                      matchPassword: (passWordConfirm) => {
                        const password = getValues("memberPassword");
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
              <S.InputField
                placeholder="별명"
                {...register("memberNickName")}
              />
              <p id="NameResult"></p>
            </S.InputContainer>
          </S.InputText>

          <S.InputText>
            <S.TextBox>
              <S.Red id="Text">이름</S.Red>
              <S.Red id="Text">*</S.Red>
            </S.TextBox>
            <S.InputField placeholder="이름" {...register("memberName")} />
            <p id="NameResult"></p>
          </S.InputText>

          <S.InputText>
            <S.TextBox>
              <S.Red id="Text">휴대전화 번호</S.Red>
              <S.Red id="Text">*</S.Red>
            </S.TextBox>
            <S.InputField
              {...register("memberPhone")}
              value={state.phone}
              readOnly
            />
          </S.InputText>

          <S.InputText>
            <S.TextBox>
              <S.Red id="Text">주소</S.Red>
              <S.Red id="Text">*</S.Red>
            </S.TextBox>
            <S.InputContainer>
              <S.InputField
                placeholder="우편번호"
                {...register("memberZipcode")}
                value={address.postcode} // 상태값을 반영
                onChange={
                  (e) =>
                    setAddress((prev) => ({
                      ...prev,
                      postcode: e.target.value,
                    })) // postcode만 업데이트
                }
                readOnly
              />
              <S.AuthButton
                type="button"
                onClick={() => setIsPostcodeOpen(true)}
              >
                우편번호
              </S.AuthButton>
              {isPostcodeOpen && (
                <S.ModalBackground>
                  <S.ModalContent>
                    <S.CloseAddressBtn
                      type="button"
                      onClick={() => setIsPostcodeOpen(false)}
                    >
                      닫기
                    </S.CloseAddressBtn>
                    <DaumPostcode
                      onComplete={(data) => {
                        // DaumPostcode 결과 반영
                        setAddress({
                          postcode: data.zonecode,
                          baseAddress: data.address,
                          detailAddress: "",
                        });
                        setIsPostcodeOpen(false); // 모달 닫기
                      }}
                      style={{ width: "100%", height: "400px" }}
                    />
                  </S.ModalContent>
                </S.ModalBackground>
              )}
              <S.InputField1
                placeholder="기본주소"
                id="Sample6Address"
                {...register("memberAddress")}
                value={address.baseAddress} // 상태값을 반영
                onChange={
                  (e) =>
                    setAddress((prev) => ({
                      ...prev,
                      baseAddress: e.target.value,
                    })) // baseAddress만 업데이트
                }
                readOnly
              />
              <S.InputField1
                placeholder="상세주소"
                id="Sample6DetailAddress"
                {...register("memberAddressDetail")}
              />
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
                          checkAgress: (value) => {
                            const { agrees, optionAgrees } = getValues();
                            if (agrees.length === 3 && optionAgrees === "4") {
                              setAllAgree(true);
                            } else {
                              setAllAgree(false);
                            }
                            if (agrees.length < 3) {
                              return "필수 약관에 모두 동의하셔야 합니다.";
                            }
                            return agrees[0] && agrees[1] && !!agrees[2];
                          },
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
                        checkAgress: (value) => {
                          const { agrees, optionAgrees } = getValues();
                          if (agrees.length === 3 && optionAgrees === "4") {
                            setAllAgree(true);
                          } else {
                            setAllAgree(false);
                          }
                          return agrees[0] && agrees[1] && !!agrees[2];
                        },
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

        <S.LoginButton disabled={isSubmitting}>회원가입</S.LoginButton>
      </S.SellerMain>
    </form>
  );
};

export default Join;
