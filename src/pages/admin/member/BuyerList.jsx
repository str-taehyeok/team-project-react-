import React, {useState} from 'react';
import S from "./style";

const BuyerList = () => {

    const [memberList] = useState([
        {
            id : 1,
            memberEmail : "jane@gmail.com",
            memberAddressDetail : "서울특별시 어쩌구동 어쩌구 아파트 2401호",
            memberPhone : "01012345678",
            memberSmscheck : "1",
            memberEmailcheck : "1"
        },
        {
            id : 2,
            memberEmail : "chapssal@gmail.com",
            memberAddressDetail : "서울특별시 어쩌구동 어쩌구 아파트 2401호",
            memberPhone : "01034566768",
            memberSmscheck : "0",
            memberEmailcheck : "0"
        },
        {
            id : 3,
            memberEmail : "hong@gmail.com",
            memberAddressDetail : "서울특별시 어쩌구동 어쩌구 아파트 2401호",
            memberPhone : "01011111111",
            memberSmscheck : "1",
            memberEmailcheck : "1"
        },
        {
            id : 4,
            memberEmail : "kim@gmail.com",
            memberAddressDetail : "서울특별시 어쩌구동 어쩌구 아파트 2401호",
            memberPhone : "01036363773",
            memberSmscheck : "0",
            memberEmailcheck : "0"
        },
        {
            id : 5,
            memberEmail : "king@gmail.com",
            memberAddressDetail : "서울특별시 어쩌구동 어쩌구 아파트 2401호",
            memberPhone : "01023455674",
            memberSmscheck : "0",
            memberEmailcheck : "1"
        },
        {
            id : 6,
            memberEmail : "queen@gmail.com",
            memberAddressDetail : "서울특별시 어쩌구동 어쩌구 아파트 2401호",
            memberPhone : "01056479389",
            memberSmscheck : "1",
            memberEmailcheck : "0"
        },
    ]);

    const eachMember = memberList.map((member, index) => (
        <tr key={member.id}>
            <td>{index + 1}</td>
            <td>{member.memberEmail}</td>
            <td>{member.memberAddressDetail}</td>
            <td>{member.memberPhone}</td>
            <td>{member.memberSmscheck === '1' ? '수신' : '수신거부'}</td>
            <td>{member.memberEmailcheck === '1' ? '수신' : '수신거부'}</td>
        </tr>
    ));

    return (
        <div>
                <S.NoticeList>
                    <S.Table>
                        <thead>
                        <tr>
                            <th>No</th>
                            <th>아이디(이메일)</th>
                            <th>상세주소</th>
                            <th>휴대폰</th>
                            <th>SMS 수신여부</th>
                            <th>메일 수신여부</th>
                        </tr>
                        <S.Line></S.Line>
                        </thead>
                        <tbody id="user-list">
                        {eachMember}
                        </tbody>
                    </S.Table>
                </S.NoticeList>
        </div>
    );
};

export default BuyerList;