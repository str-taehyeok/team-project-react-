import React from "react";
import S from "./style";
import { Link } from "react-router-dom";

const Join = () => {
  return (
    <div>
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
              <S.InputButton
                type="email"
                id="Email"
                name="buyerEmail"
                placeholder="아이디(이메일)"
              />
              <S.AuthButton id="EmailCheck">확인</S.AuthButton>
              <p id="EmailResult"></p>
            </S.InputContainer>
          </S.InputText>

          <S.InputText>
            <S.TextBox>
              <S.Red id="Text">비밀번호</S.Red>
              <S.Red id="Text">*</S.Red>
            </S.TextBox>
            <S.InputContainer>
              <S.InputButton
                type="password"
                name="sellerPassword"
                placeholder="비밀번호"
              />
              <S.Mark></S.Mark>
              <p id="PasswordResult"></p>
            </S.InputContainer>
          </S.InputText>

          <S.InputText>
            <S.TextBox>
              <S.Red id="Text">비밀번호 확인</S.Red>
              <S.Red id="Text">*</S.Red>
            </S.TextBox>
            <S.InputContainer>
              <S.InputButton
                type="password"
                name="passwordConfirm"
                id="PasswordConfirm"
                placeholder="비밀번호 확인"
              />
              <p className="Result" id="PasswordConfirmResult"></p>
            </S.InputContainer>
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
              <S.AuthButton id="NameCheck">확인</S.AuthButton>
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
            <S.InputButton
              type="string"
              name="phone"
              placeholder=""
              value="${param.phone}"
            />
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
              <S.AuthButton type="button" onClick="sample6_execDaumPostcode()">
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
              <input type="hidden" name="smscheck" value="1" />
              <input type="hidden" name="emailcheck" value="1" />
              <S.AgreeAll>
                <label>
                  <S.AllAgree type="checkbox" name="allagree" />
                </label>
                <S.Text2>모두 동의합니다.</S.Text2>
              </S.AgreeAll>

              <S.Line2></S.Line2>

              {["1", "2", "3", "4"].map((num) => (
                <S.Agree key={num}>
                  <label>
                    <input type="checkbox" name={`agree${num}`} />
                  </label>
                  <S.TextBox2>
                    <S.Text3>이용약관 동의 (필수)</S.Text3>
                    <S.Text4>자세히보기</S.Text4>
                  </S.TextBox2>
                </S.Agree>
              ))}
            </S.AgreeBox>
            <p id="AgreeResult" style={{ color: "red" }}></p>
          </S.InputText>
        </S.Input>

        <S.LoginButton type="button">
          <Link to={"/join/complete"}>
            회원가입
          </Link>
        </S.LoginButton>
      </S.SellerMain>
    </div>
  );
};

export default Join;
