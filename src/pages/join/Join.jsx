import React from "react";

const Join = () => {
  return (
    <div>
      <div className="SellerMain">
        <div className="LogoBox">
          <a href="../index.jsp">
            <img id="Logo" src="../assets/images/member/logo.png" alt="로고" />
          </a>
        </div>
        <div className="Input">
          <div>
            <div className="TextBox">
              <p id="Text">아이디</p>
              <p id="Text" className="Red">*</p>
            </div>
            <div className="InputContainer">
              <input
                className="InputButton"
                type="email"
                id="Email"
                name="buyerEmail"
                placeholder="아이디(이메일)"
              />
              <button className="AuthButton" id="EmailCheck">
                확인
              </button>
              <p className="Result" id="EmailResult"></p>
            </div>
          </div>

          <div>
            <div className="TextBox">
              <p id="Text">비밀번호</p>
              <p id="Text" className="Red">*</p>
            </div>
            <div className="InputContainer">
              <input
                className="InputButton"
                type="password"
                name="buyerPassword"
                id="Password"
                placeholder="비밀번호"
              />
              <div className="Mark"></div>
              <p className="Result" id="PasswordResult"></p>
            </div>
          </div>

          <div>
            <div className="TextBox">
              <p id="Text">비밀번호 확인</p>
              <p id="Text" className="Red">*</p>
            </div>
            <div className="InputContainer">
              <input
                className="InputButton"
                type="password"
                name="passwordConfirm"
                id="PasswordConfirm"
                placeholder="비밀번호 확인"
              />
              <p className="Result" id="PasswordConfirmResult"></p>
            </div>
          </div>

          <div>
            <div className="TextBox">
              <p id="Text">닉네임</p>
              <p id="Text" className="Red">*</p>
            </div>
            <div className="InputContainer">
              <input
                className="InputButton"
                type="name"
                id="Name"
                name="nickName"
                placeholder="별명"
              />
              <button className="AuthButton" id="NameCheck">
                확인
              </button>
              <p className="Result" id="NameResult"></p>
            </div>
          </div>

          <div>
            <div className="TextBox">
              <p id="Text">이름</p>
              <p id="Text" className="Red">*</p>
            </div>
            <div className="InputContainer">
              <input
                className="InputButton"
                type="name"
                id="Name"
                name="name"
                placeholder="이름"
              />
            </div>
          </div>

          <div>
            <div className="TextBox">
              <p id="Text">휴대전화 번호</p>
              <p id="Text" className="Red">*</p>
            </div>
            <input
              className="InputButton"
              type="string"
              name="phone"
              placeholder=""
              value="${param.phone}"
            />
          </div>

          <div>
            <div className="TextBox">
              <p id="Text">주소</p>
              <p id="Text" className="Red">*</p>
            </div>
            <div className="InputContainer">
              <input
                className="InputButton"
                type="text"
                id="Sample6Postcode"
                placeholder="우편번호"
              />
              <p id="AddressResult"></p>
              <input
                className="InputButton1"
                type="text"
                name="address"
                id="Sample6Address"
                placeholder="기본주소"
              />
              <input
                className="InputButton1"
                type="text"
                name="address"
                id="Sample6DetailAddress"
                placeholder="상세주소"
              />
              <p id="DetailAddressResult"></p>
              <button
                className="AuthButton"
                type="button"
                onClick="sample6_execDaumPostcode()"
              >
                우편번호
              </button>
            </div>
          </div>

          <div className="Line"></div>

          <div>
            <div className="TextBox1">
              <p id="Text1">약관 및 개인정보수집 동의</p>
              <p id="Text1" className="Red">*</p>
            </div>

            <div className="AgreeBox">
              <input type="hidden" name="smscheck" value="1" />
              <input type="hidden" name="emailcheck" value="1" />
              <div className="AgreeAll">
                <label>
                  <input type="checkbox" name="allagree" className="AllAgree" />
                  <span className="Checkmark"></span>
                </label>
                <p className="Text2">모두 동의합니다.</p>
              </div>

              <div className="Line2"></div>

              {["1", "2", "3", "4"].map((num) => (
                <div className="Agree" key={num}>
                  <label>
                    <input
                      type="checkbox"
                      name={`agree${num}`}
                      className="AgreeInput"
                    />
                    <span className="Checkmark"></span>
                  </label>
                  <div className="TextBox2">
                    <p className="Text3">이용약관 동의 (필수)</p>
                    <p className="Text4">자세히보기</p>
                  </div>
                </div>
              ))}
            </div>
            <p id="AgreeResult" style={{ color: "red" }}></p>
          </div>
        </div>

        <button type="button" className="LoginButton">
          회원가입
        </button>
      </div>
    </div>
  );
};

export default Join;
