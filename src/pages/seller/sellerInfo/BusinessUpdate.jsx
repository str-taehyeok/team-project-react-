import React, {useState} from 'react';
import S from "./style";
import { Link } from 'react-router-dom';

const BusinessUpdate = () => {

    const [formData, setFormData] = useState({
        memberBusinessName : "",
        memberName : "",
        memberInternetBusinessNumber : "",
        memberBusinessCategory : "",
        memberAdress : "",
        memberBusinessNumber : ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = () => {
        console.log("input 데이터 전송: ", formData);
        alert("데이터가 전송되었습니다!");
    };

    return (
        <S.BusinessUpdateWrap>
            <S.BusinessUpdate>
                <S.BusinessUpdateTitleWrap>
                    <S.BusinessUpdateTitle>
                        <p>사업자정보 관리</p>
                    </S.BusinessUpdateTitle>
                     <S.BusinessUpdateBtn>
                        <div>취소</div><button onClick={handleSubmit}><Link to={"/seller-list"}>완료</Link></button>
                    </S.BusinessUpdateBtn>
                </S.BusinessUpdateTitleWrap>
            <S.BusinessBox>
                <S.BusinessName>
                    <p>상호명</p>
                    <input type="text" name="userBusinessName" placeholder="사업자 등록증의 상호명과 동일하게 입력해주세요." value={formData.memberBusinessName} onChange={handleChange}/>
                </S.BusinessName>
                <S.BusinessMemberName>
                    <p>대표자명</p>
                    <input type="text" name="userName" placeholder="예) 홍길동" value={formData.memberName} onChange={handleChange}/>
                </S.BusinessMemberName>
                <S.InternetBusinessNumber>
                    <p>통신판매업신고번호</p>
                    <input type="text" name="userInternetBusinessNumber" placeholder="예)2024 브랜드명 03252" value={formData.memberInternetBusinessNumber} onChange={handleChange}/>
                </S.InternetBusinessNumber>
                <S.BusinessCategory>
                    <p>업종</p>
                    <input type="text" name="userBusinessCategory" placeholder="예) 통신판매업" value={formData.BusinessCategory} onChange={handleChange}/>
                </S.BusinessCategory>
                <S.memberAdress>
                    <p>사업장소재지</p>
                    <input type="text" name="userBusinessAdress " placeholder="검색란" value={formData.memberAdress } onChange={handleChange}/>
                </S.memberAdress>
                <S.memberAdress>
                    <p>사업자등록번호</p>
                    <input type="text" name="userBusinessNumber " placeholder="하이픈(-)없이 숫자만 입력해주세요." value={formData.memberBusinessNumber } onChange={handleChange}/>
                </S.memberAdress>
                <S.BusinessInfoBox>
                    <p>*대표자명 변경 신청은 1:1 문의로 신청 부탁드리며 서류 제출은 1:1 문의 시 함께 제출 가능하며</p>
                    <p>신청 후 판매자센터 &#62; 심사내역 메뉴에서도 가능합니다.</p>
                    <Link>대표자명 변경 1:1 문의 바로가기 &#62; </Link><S.Phone>(마왕님 번호)</S.Phone>
                </S.BusinessInfoBox>
            </S.BusinessBox>
            </S.BusinessUpdate>
        </S.BusinessUpdateWrap>
    );
};

export default BusinessUpdate;