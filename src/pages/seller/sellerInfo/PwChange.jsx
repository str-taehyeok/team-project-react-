import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import S from "./style";

const PwChange = () => {
    const [newPassword, setNewPassword] = useState("");
    const [confirmNewPassword, setConfirmNewPassword] = useState("");
    const [email, setEmail] = useState("");
    const [authNumber, setAuthNumber] = useState("");
    const [mark, setMark] = useState(false);
    const [authVerified, setAuthVerified] = useState(false);
    const [code, setCode] = useState(0); // 인증번호 값
    const [errorCount, setErrorCount] = useState(0);

    const {
        register,
        getValues,
        formState: { errors },
    } = useForm({ mode: "onChange" });

    // 비밀번호 유효성 검사 정규식 (소문자, 숫자, 특수문자 포함 8자리 이상)
    const passwordRegex = /^(?=.*[a-z])(?=.*\d)(?=.*[!@#])[\da-zA-Z!@#]{8,}$/;

    // 비밀번호 확인 처리
    const handlePasswordChange = async () => {
        if (!authNumber || !newPassword || !confirmNewPassword) {
            return alert("인증번호와 새로운 비밀번호를 모두 입력해주세요.");
        }

        if (newPassword !== confirmNewPassword) {
            return alert("새로운 비밀번호와 비밀번호 확인이 일치하지 않습니다.");
        }

        if (!passwordRegex.test(newPassword)) {
            return alert("소문자, 숫자, 특수문자를 각 하나 포함한 8자리 이상이어야 합니다.");
        }

        try {
            const response = await fetch(`http://localhost:10000/member/change-password`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ memberEmail: email, authCode: authNumber, newPassword }),
            });

            const result = await response.json();

            if (response.ok) {
                alert("비밀번호가 변경되었습니다.");
            } else {
                alert(result.message || "비밀번호 변경에 실패했습니다.");
            }
        } catch (error) {
            console.error("Error changing password:", error);
            alert("서버와의 통신에 실패했습니다.");
        }
    };

    // 인증번호 확인 처리
    const handleVerifyPassword = () => {
        if (authNumber !== code) {
            if (errorCount < 2) {
                setErrorCount(errorCount + 1);
                return alert(`인증번호가 ${errorCount + 1}회 틀렸습니다`);
            }
            setErrorCount(0);
            setCode(0);
            return alert("인증번호를 다시 요청해주세요.");
        }

        // 인증 완료
        setAuthVerified(true);
        return alert("인증이 완료되었습니다.");
    };

    // 인증번호 요청 처리
    const handleAuthRequest = async () => {
        if (!email) {
            return alert("이메일을 입력해주세요.");
        }

        try {
            const response = await fetch(`http://localhost:10000/member/find-password`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ memberEmail: email }),
            });

            const result = await response.json();

            if (response.ok) {
                alert(result.message);
                // 임시로 인증번호를 123456으로 설정
                setCode(123456); // 임시 인증번호 설정
            } else {
                alert(result.message || "인증번호 전송에 실패했습니다.");
            }
        } catch (error) {
            console.error("Error requesting auth code:", error);
            alert("서버와의 통신에 실패했습니다.");
        }
    };

    return (
        <>
            <S.InputContainer>
                <S.NewPasswordMessage>
                    <p>✔ 계정에 등록된 이메일로 전송된 인증번호를 입력해주세요.</p>
                    <p>✔ 새로운 비밀번호는 소문자, 숫자, 특수문자를 각 하나 포함한 8자리 이상이여야 합니다.</p>
                </S.NewPasswordMessage>

                {/* 이메일 입력 및 인증번호 요청 */}
                <S.AuthNumberContainer>
                    <S.InputWrapper>
                        <S.Label htmlFor="email">이메일</S.Label>
                        <S.Input
                            type="text"
                            id="email"
                            name="email"
                            placeholder="회원아이디(이메일)를 입력해주세요."
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <S.AuthButton type="button" onClick={handleAuthRequest}>
                            인증요청
                        </S.AuthButton>
                    </S.InputWrapper>
                </S.AuthNumberContainer>

                {/* 인증번호 입력 및 인증 확인 */}
                <S.AuthNumberContainer>
                    <S.InputWrapper>
                        <S.Label htmlFor="authNumber">인증번호</S.Label>
                        <S.Input
                            type="text"
                            id="authNumber"
                            name="authNumber"
                            placeholder="인증번호"
                            value={authNumber}
                            onChange={(e) => setAuthNumber(e.target.value)}
                        />
                        <S.AuthButton type="button" onClick={handleVerifyPassword}>
                            확인
                        </S.AuthButton>
                    </S.InputWrapper>
                </S.AuthNumberContainer>


                {/* 새로운 비밀번호 입력 */}
                <S.AuthNumberContainer>
                    <S.InputWrapper>
                        <S.Label htmlFor="newPassword">새로운 비밀번호</S.Label>
                        <S.Input
                            type={mark ? "text" : "password"}
                            name="buyerPassword"
                            placeholder="새로운 비밀번호"
                            autoComplete="off"
                            {...register("password", {
                                required: true,
                                pattern: {
                                    value: passwordRegex,
                                },
                            })}
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                        />
                        {errors && errors?.password?.type === "required" && (
                            <S.P>비밀번호를 입력하세요</S.P>
                        )}
                        {errors && errors?.password?.type === "pattern" && (
                            <S.P>
                                소문자, 숫자, 특수문자를 각 하나 포함한 8자리 이상이여야 합니다.
                            </S.P>
                        )}
                        <S.Mark
                            onClick={() => setMark(!mark)}
                            style={{
                                backgroundImage: `url(${
                                    process.env.PUBLIC_URL
                                }/assets/images/join/${mark ? "eye-on.png" : "eye-off.png"})`,
                                cursor: "pointer",
                            }}
                        ></S.Mark>
                    </S.InputWrapper>
                </S.AuthNumberContainer>

                {/* 비밀번호 확인 */}
                <S.AuthNumberContainer>
                    <S.InputWrapper>
                        <S.Label htmlFor="confirmNewPassword">새로운 비밀번호 확인</S.Label>
                        <S.Input
                            type={mark ? "text" : "password"}
                            id="passWordConfirm"
                            placeholder="새로운 비밀번호 확인"
                            {...register("passWordConfirm", {
                                required: "새로운 비밀번호 확인",
                                validate: {
                                    matchPassword: (passWordConfirm) => {
                                        const password = getValues("password");
                                        return (
                                            password === passWordConfirm ||
                                            "비밀번호가 일치하지 않습니다."
                                        );
                                    },
                                },
                            })}
                            value={confirmNewPassword}
                            onChange={(e) => setConfirmNewPassword(e.target.value)}
                        />
                        {errors && errors?.passWordConfirm && (
                            <S.P>{errors.passWordConfirm.message}</S.P>
                        )}
                    </S.InputWrapper>
                </S.AuthNumberContainer>

                {/* 비밀번호 변경 버튼 */}
                <Link to="/find/find-password-complete">
                    <S.NextButton
                        type="button"
                        onClick={handlePasswordChange}
                        disabled={

                            newPassword !== confirmNewPassword 

                        }
                    >
                        확인
                    </S.NextButton>
                </Link>
            </S.InputContainer>
        </>
    );
};

export default PwChange;
