import React, {useState} from 'react';
import S from "./style";
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";
import { useForm } from 'react-hook-form';


const ProfileUpdate = () => {
    const { currentUser } = useSelector((state) => state.user); // 리덕스에서 멤버벨류 가져오기
    const [authNumber, setAuthNumber] = useState(""); // 인증 번호 상태
    const [attempts, setAttempts] = useState(0); // 인증번호 횟수
    const [isBlocked, setIsBlocked] = useState(false); // 인증횟수 초과


    // const [verificationCode, setVerificationCode] = useState("");
    const [setVerificationCode] = useState(""); // 받아온 인증번호

    const [isVisible, setIsVisible] = useState(false); // input 숨기기

    // const { register, setValue, formState: { isSubmitting } } = useForm({ mode: 'onChange' });
    const { register, formState: { isSubmitting } } = useForm({ mode: 'onChange' });


    const [userData, setUserData] = useState(currentUser);

    

    const memberPhone = currentUser.memberPhone;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    };

    const handleSubmit = () => {
        console.log("input 데이터 전송: ", userData);
        alert("데이터가 전송되었습니다!");
    };

    // 돈나가니까 인증번호 누를수만 있게 해놈
    const checkVisible = () => {
            setIsVisible(true);
    }

    const transferSms = async () => {


        await fetch("http://localhost:10000/member/sms", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(memberPhone),
        })
            .then((res) => res.json())
            .then((data) => setVerificationCode(data.verificationCode))
            .catch((error) => {
                console.error("Error:", error);
            });

        return alert("인증번호를 발송했습니다.");
    };


    const testCode = "123456"
    // verificationCode 할 때 이걸로 변경

    const confirmVerificationCode = () => {
        if (isBlocked) {
            return alert("인증 시도 횟수를 초과했습니다. 다시 시도해주세요.");
        }

        if (authNumber === testCode) {
            alert("인증번호가 일치합니다.");
            setAttempts(0);
            setIsBlocked(false);
            setIsVisible(false);
        } else {
            const newAttempts = attempts + 1;
            setAttempts(newAttempts);

            if (newAttempts >= 3) {
                alert("인증횟수를 초과했습니다. 다시 입력해주세요");
                setAuthNumber("");
                setAttempts(0);
                setIsBlocked(true);
            } else {
                alert(`인증번호가 일치하지 않습니다. (${newAttempts}/3)`);
            }
        }
    };


    return (
        <div>
            <S.MyHomeContainer>
                <S.MyHomeWrap>
                    <S.UpdateButtonWrap>
                        <button onClick={isSubmitting}><Link to={"/myhome"}>완료</Link></button>
                    </S.UpdateButtonWrap>
                    <S.ProfileBoxWrap>
                        <S.ProfileBox>
                            <S.ProfileImage>
                                <img src={`${process.env.PUBLIC_URL}/assets/images/myhome/default-userImg.png`}
                                     alt="프로필사진"/>
                                <p>{currentUser.memberNickname}</p>
                            </S.ProfileImage>
                            <S.ProfileBoxImageWrap>
                                <button><Link to={"/"}>이미지 편집</Link></button>
                            </S.ProfileBoxImageWrap>
                        </S.ProfileBox>
                        <S.MemberInputBoxContainer>
                            <S.MemberInputBoxWrap>
                                <S.MemberInputBox>
                                    <S.h7>이름</S.h7>
                                    <input
                                        placeholder="이름을 입력하세요"
                                        {...register("memberName")}
                                        onChange={handleChange}
                                        value={currentUser.memberName}
                                    />
                                </S.MemberInputBox>
                                <S.MemberInputBox>
                                    <S.h7>닉네임</S.h7>
                                    <input
                                        placeholder="닉네임을 입력하세요"
                                        value={currentUser.memberNickname}
                                        onChange={handleChange}
                                    />
                                </S.MemberInputBox>
                                <S.MemberInputBox>
                                    <S.h7>아이디(이메일)</S.h7>
                                    {/*<input type="text" name="userEmail" placeholder="이메일을 입력하세요"*/}
                                    {/*       value={currentUser.memberEmail}*/}
                                    {/*       onChange={handleChange}/>*/}
                                    <p name="userEmail">{currentUser.memberEmail}</p>
                                </S.MemberInputBox>
                                <S.MemberInputBox>
                                    <S.h7>휴대폰번호</S.h7>
                                    <S.MemberCertification>
                                        <input placeholder="휴대폰 번호를 입력하세요" value={currentUser.memberPhone}
                                               onChange={handleChange}/>
                                        <S.AuthButton onClick={checkVisible} >인증번호</S.AuthButton>
                                    </S.MemberCertification>

                                </S.MemberInputBox>
                                <S.MemberInput2Box style={{ display: isVisible ? "flex" : "none" }}>
                                <S.MemberCertification>
                                    <input
                                        placeholder="인증 번호를 입력하세요"
                                        value={authNumber}
                                        onChange={(e) => setAuthNumber(e.target.value)}
                                    />
                                    <S.AuthButton type="button" onClick={confirmVerificationCode} >확인</S.AuthButton>
                                </S.MemberCertification>
                                </S.MemberInput2Box>
                                <S.MemberInputBox>
                                    <S.h7Address>주소</S.h7Address>
                                    <S.MemberInputAddress>
                                        <S.ZipCode>
                                            <input type="text" name="memberAdress" placeholder="우편주소를 입력해주세요"
                                                   value={currentUser.memberZipcode} readOnly onChange={handleChange}/>
                                            <p>우편번호</p>
                                        </S.ZipCode>
                                        <input type="text" name="memberAddress" placeholder="간편주소"
                                               value={currentUser.memberAddress} onChange={handleChange}/>
                                        <input type="text" name="memberAddressDetail" placeholder="상세주소를 입력하세요"
                                               value={currentUser.memberAddressDetail} onChange={handleChange}/>
                                    </S.MemberInputAddress>
                                </S.MemberInputBox>
                            </S.MemberInputBoxWrap>
                        </S.MemberInputBoxContainer>
                    </S.ProfileBoxWrap>
                </S.MyHomeWrap>
            </S.MyHomeContainer>
        </div>
    );
};

export default ProfileUpdate;