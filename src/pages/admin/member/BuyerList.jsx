import React from 'react';
import S from "./style";
import {useOutletContext} from "react-router-dom";

const BuyerList = () => {


    const { filteredMembers } = useOutletContext();

    const eachMember = filteredMembers.map((member, i) => (
        <tr key={member.id}>
            <td>{i + 1}</td>
            <td>{member.memberEmail}</td>
            <td>{member.memberAddressDetail}</td>
            <td>{member.memberPhone}</td>
            <td>{member.memberSmscheck === '1' ? '수신' : '수신거부'}</td>
            <td>{member.memberEmailcheck === '1' ? '수신' : '수신거부'}</td>
        </tr>
    ));

    return (
        <div>
                <S.List>
                    <S.Table>
                        <thead>
                        <tr>
                            <th>No</th>
                            <th>아이디(이메일)</th>
                            <th>상세주소</th>
                            <th>휴대폰</th>
                            <th>SMS 수신여부</th>
                            <th>이메일 수신여부</th>
                        </tr>
                        <S.Line></S.Line>
                        </thead>
                        <tbody id="user-list">
                            {eachMember}
                        </tbody>
                    </S.Table>
                </S.List>
        </div>
    );
};

export default BuyerList;