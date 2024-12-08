import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import S from '../sellerInfo/style';


const SellerUpdate = () => {

    const handleSubmit = () => {
        console.log("input 데이터 전송: ", formData);
        alert("데이터가 전송되었습니다!");
    };

    const [formData, setFormData] = useState([
        {
            memberName : "",
            memberNickName : "",
            memberEmail : "",
            memberBank : "",
            memberAccount : "",
            memberPhone : "",
            memberPassword : ""
        }
    ]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };


    return (
        <S.SellerUpdateWrap>
            <S.SellerUpdate>
                <S.SellerTitleWrap>
                    <S.SellerTitle>
                        <p>판매자정보 수정</p>
                    </S.SellerTitle>
                    <S.SellterBtn>
                        <div>취소</div><button onClick={handleSubmit}><Link to={"/seller-list"}>완료</Link></button>
                    </S.SellterBtn>
                </S.SellerTitleWrap>
                <S.SellerBox>
                    <S.SellerName>
                        <p>이름</p>
                        <input type="text" name="userName" placeholder="이름을 입력하세요" value={formData.memberName} onChange={handleChange}/>
                    </S.SellerName>
                    <S.SellerId>
                        <p>로그인ID</p>
                        <input type="text" name="userName" placeholder="아이디를 입력하세요" value={formData.memberName} onChange={handleChange}/>
                    </S.SellerId>
                    <S.SellerEmail>
                        <p>본인확인 이메일</p>
                        <input type="text" name="userEmail" placeholder="이메일을 입력하세요" value={formData.memberEmail}
                        onChange={handleChange}/>
                    </S.SellerEmail>
                    <S.SellerBank>
                        <p>정산계좌정보</p>
                        <input type="text" name="userBank" placeholder="------ 은행 선택 ------" value={formData.memberBank}
                        onChange={handleChange}/>
                    </S.SellerBank>
                    <S.SellerAccount>
                        <input type="text" name="userAccount" placeholder="하이픈(-)없이 숫자만 입력해주세요." value={formData.memberAccount}
                        onChange={handleChange}/>
                    </S.SellerAccount>
                    <S.SellerPhone>
                        <p>휴대폰번호</p>
                        <input type="text" name="userPhone" placeholder="휴대폰 번호를 입력하세요" value={formData.memberPhone}
                        onChange={handleChange}/>
                    </S.SellerPhone>
                    <S.SellerPassword>
                        <p>비밀번호</p>
                    </S.SellerPassword>
                </S.SellerBox>
            </S.SellerUpdate>
        </S.SellerUpdateWrap>
    );
};

export default SellerUpdate;