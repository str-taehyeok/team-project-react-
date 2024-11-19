import React, {useState} from 'react';

const Login = () => {
    const [ memberType, setMemberType ] = useState("buyer");

    return (
        <div>
            여기 로그인 메인
            <button type="button" onClick={() => { setMemberType("buyer") }}>회원</button>
            <button type="button" onClick={() => { setMemberType("seller") }}>판매자</button>
            { memberType === "buyer" ? (
                <>
                    "멤버"
                </>
            ): (
                <>
                    "판매자"
                </>
            )}
        </div>
    );
};

export default Login;