import React, { useEffect, useState } from 'react';
import S from "./style";
import {useOutletContext} from "react-router-dom";

const BuyerList = () => {   

    const [members, setMembers] = useState([]);

    useEffect(() => {
        const getMembers = async() => {
            const response = await fetch(`http://localhost:10000/member/admin/member-list`);
            if(!response.ok) return console.error(`데이터가 없습니다`)
            const members = await response.json();
            return members;
        }

        getMembers().then(setMembers).catch(console.error);
    }, []);

    const buyerMembers = members.filter(member => member.memberProvider !== '판매자' && member.memberProvider !== '관리자');

    const eachMember = buyerMembers.map((member, i) => (

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
                        </thead>
                        {/* <S.Line></S.Line> */}
                        <tbody id="user-list">
                            {eachMember}
                        </tbody>
                    </S.Table>
                </S.List>
        </div>
    );
};

export default BuyerList;