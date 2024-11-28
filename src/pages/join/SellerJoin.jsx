import React from "react";
import S from "./style";
import { Link } from "react-router-dom";

const SellerJoin = () => {


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
                type="text"
                name="sellerEmail"
                id="Email"
                placeholder="아이디(이메일)"
              />
              <S.AuthButton id="EmailCheck">
                확인
              </S.AuthButton>
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
              <S.Red id="Text">이름</S.Red>
              <S.Red id="Text">*</S.Red>
            </S.TextBox>
            <S.InputButton type="text" name="name" placeholder="이름" />
            <p id="NameResult"></p>
          </S.InputText>

          <S.InputText>
            <S.TextBox>
              <S.Red id="Text">휴대전화 번호</S.Red>
              <S.Red id="Text" className="Red">
                *
              </S.Red>
            </S.TextBox>
            <S.InputButton
              type="string"
              name="phone"
              placeholder=""
            />
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
            <S.InputButton type="text" name="kingname" placeholder="대표자명"/>
            <p id="KingNameResult"></p>
          </S.InputText>

          <S.InputText>
            <S.TextBox>
              <S.Red id="Text">업체명</S.Red>
              <S.Red id="Text">*</S.Red>
            </S.TextBox>
            <S.InputButton type="text" name="companyname" placeholder="업체명"/>
            <p id="CompanyNameResult"></p>
          </S.InputText>
          <S.Line></S.Line>
        </S.Input>

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

          <S.Agree>
            <label>
              <S.Agree1 type="checkbox" name="agree1" />
            </label>
            <S.TextBox2>
              <S.Text3>이용약관 동의 (필수)</S.Text3>
              <S.Text4>자세히보기</S.Text4>
            </S.TextBox2>
          </S.Agree>

          <S.Agree>
            <label>
              <S.Agree1 type="checkbox" name="agree2" />
            </label>
            <S.TextBox2>
              <S.Text3>이용약관 동의 (필수)</S.Text3>
              <S.Text4>자세히보기</S.Text4>
            </S.TextBox2>
          </S.Agree>

          <S.Agree>
            <label>
              <S.Agree1 type="checkbox" name="agree3" />
            </label>
            <S.TextBox2>
              <S.Text3>이용약관 동의 (필수)</S.Text3>
              <S.Text4>자세히보기</S.Text4>
            </S.TextBox2>
          </S.Agree>

          <S.Agree2>
            <label>
              <S.Agree1 type="checkbox" name="agree4" />
            </label>
            <S.TextBox2>
              <S.Text3>이용약관 동의 (필수)</S.Text3>
              <S.Text4>자세히보기</S.Text4>
            </S.TextBox2>
          </S.Agree2>
        </S.AgreeBox>
        <S.LoginButton type="button">
          <Link to={"/join/complete"}>
            회원가입
          </Link>
        </S.LoginButton>
      </S.SellerMain>
    </div>
  );
};

export default SellerJoin;
