import React, { useEffect, useState } from "react";
import S from "./style";

const SellerList = () => {

    const [members, setMembers] = useState([]);

    useEffect(() => {
        const getMembers = async () => {
        const response = await fetch(
            `http://localhost:10000/member/admin/member-list`
        );
        if (!response.ok) return console.error(`데이터가 없습니다`);
        const members = await response.json();
        return members;
        };

        getMembers().then(setMembers).catch(console.error);
    }, []);

    const sellerMembers = members.filter(
        (member) => member.memberProvider === "판매자"
    );

    const sellers = sellerMembers.map((member, i) => (
        <tr key={member.id}>
        <td>{i + 1}</td>
        <td>{member.memberEmail}</td>
        <td>{member.memberPhone}</td>
        <td>{member.memberBusinessNumber}</td>
        <td>{member.memberName}</td>
        <td>{member.memberBusinessName}</td>
        <td>{member.memberSmscheck === "1" ? "수신" : "수신거부"}</td>
        <td>{member.memberEmailcheck === "1" ? "수신" : "수신거부"}</td>
        </tr>
    ));

  return (
    <div>
      <S.List>
        <S.SellerTable>
          <thead>
            <tr>
              <th>No</th>
              <th>아이디(이메일)</th>
              <th>휴대폰</th>
              <th>사업자 등록번호</th>
              <th>대표자명</th>
              <th>업체명</th>
              <th>SMS 수신여부</th>
              <th>메일 수신여부</th>
            </tr>
            <S.Line></S.Line>
          </thead>
          <tbody id="user-list">{sellers}</tbody>
        </S.SellerTable>
      </S.List>
    </div>
  );
};

export default SellerList;
