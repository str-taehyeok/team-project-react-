import React from "react";

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
          <div>
            <S.TextBox>
              <S.Red id="Text">아이디</S.Red>
              <S.Red id="Text">*</S.Red>
            </S.TextBox>
            <S.InputContainer>
              <input
                className="InputButton"
                type="text"
                name="sellerEmail"
                id="Email"
                placeholder="아이디(이메일)"
              />
              <button className="AuthButton" id="EmailCheck">
                확인
              </button>
              <p id="EmailResult"></p>
            </S.InputContainer>
          </div>

          <div>
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
          </div>

          <div>
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
          </div>

          <div>
            <S.TextBox>
              <S.Red id="Text">이름</S.Red>
              <S.Red id="Text">*</S.Red>
            </S.TextBox>
            <S.InputButton type="text" name="name" placeholder="이름" />
            <p id="NameResult"></p>
          </div>

          <div>
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
              value="${param.phone}"
            />
          </div>
          <S.Line></S.Line>
          <div>
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
          </div>

          <div>
            <S.TextBox>
              <S.Red id="Text">대표자명</S.Red>
              <S.Red id="Text">*</S.Red>
            </S.TextBox>
            <S.InputButton type="text" name="kingname" />
            <p id="KingNameResult"></p>
          </div>

          <div>
            <S.TextBox>
              <S.Red id="Text">업체명</S.Red>
              <S.Red id="Text">*</S.Red>
            </S.TextBox>
            <S.InputButton type="text" name="companyname" />
            <p id="CompanyNameResult"></p>
          </div>
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
            <p className="Text2">모두 동의합니다.</p>
          </S.AgreeAll>

          <S.Line2></S.Line2>

          <S.Agree>
            <label>
              <S.Agree1 type="checkbox" name="agree1" />
            </label>
            <S.TextBox2>
              <p className="Text3">이용약관 동의 (필수)</p>
              <p className="Text4">자세히보기</p>
            </S.TextBox2>
          </S.Agree>

          <S.Agree>
            <label>
              <S.Agree1 type="checkbox" name="agree2" />
            </label>
            <S.TextBox2>
              <p className="Text3">이용약관 동의 (필수)</p>
              <p className="Text4">자세히보기</p>
            </S.TextBox2>
          </S.Agree>

          <S.Agree>
            <label>
              <S.Agree1 type="checkbox" name="agree3" />
            </label>
            <S.TextBox2>
              <p className="Text3">이용약관 동의 (필수)</p>
              <p className="Text4">자세히보기</p>
            </S.TextBox2>
          </S.Agree>

          <S.Agree2>
            <label>
              <S.Agree1 type="checkbox" name="agree4" />
            </label>
            <S.TextBox2>
              <p className="Text3">이용약관 동의 (필수)</p>
              <p className="Text4">자세히보기</p>
            </S.TextBox2>
          </S.Agree2>
        </S.AgreeBox>
        <button type="button" className="LoginButton">
          회원가입
        </button>
      </S.SellerMain>
    </div>
  );
};

export default Join;
