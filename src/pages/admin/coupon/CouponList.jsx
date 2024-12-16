import React, { useEffect, useState } from 'react';
import S from "./style";
import { Link } from 'react-router-dom';

const CouponList = () => {
    const [coupons, setCoupons] = useState([]);

    useEffect(() => {
        const coupons = async () => {
            try {
                const response = await fetch("http://localhost:10000/coupons/list");
                if (!response.ok) {
                    console.error("데이터가 없습니다.");
                    return;
                }
                const data = await response.json();
                setCoupons(data);
            } catch (error) {
                console.error(error);
            }
        };

        coupons();
    }, []);

    const getDelete = async (id) => {
        try {
            const response = await fetch(`http://localhost:10000/coupons/${id}`, {
                method: "DELETE",
            });
            if (!response.ok) {
                throw new Error("삭제 실패");
            }
            setCoupons(coupons.filter(coupon => coupon.id !== id));
            alert("삭제되었습니다.");
        } catch (error) {
            console.error(error.message);
            alert("삭제 중 오류가 발생했습니다.");
        }
    };

    const couponList = coupons.map((coupon, i) => (
        <S.TableRow key={i}>
            <S.TableCell>{i + 1}</S.TableCell>
            <S.TableCell>{coupon.couponTitle}</S.TableCell>
            <S.TableCell>{coupon.couponStart}</S.TableCell>
            <S.TableCell>{coupon.couponEnd}</S.TableCell>
            <S.TableCell>{coupon.couponCode}</S.TableCell>
            <S.TableCell>
                <S.CouponEdit><Link to={`/admin/coupon/coupon-update/${coupon.id}`}>수정</Link></S.CouponEdit>
                <S.CouponDelete onClick={() => getDelete(coupon.id)}>삭제</S.CouponDelete>
            </S.TableCell>
        </S.TableRow>
    ));

    return (
        <div>
            <S.CouponListWrap>
                <S.CouponListTitleWrap>
                    <S.CouponListTitle>
                        <S.h1>쿠폰 조회</S.h1>
                    </S.CouponListTitle>
                    <S.NoticeSearch>
                        <S.SearchBar>
                            <S.Search type="text" placeholder="쿠폰명을 입력하세요"/>
                        </S.SearchBar>
                        <S.Buttons>
                            <S.SearchBtn>검색</S.SearchBtn>
                            <S.ResetBtn>초기화</S.ResetBtn>
                            <Link to={"/admin/coupon/coupon-write"}><S.NewAddBtn type="button">신규 추가</S.NewAddBtn></Link>
                        </S.Buttons>
                    </S.NoticeSearch>
                </S.CouponListTitleWrap>
                <S.NoticeList>
                    <S.Table>
                        <thead>
                            <S.TableRow>
                                <S.TableCellTh>No</S.TableCellTh>
                                <S.TableCellTh>쿠폰명</S.TableCellTh>
                                <S.TableCellTh>시작일</S.TableCellTh>
                                <S.TableCellTh>종료일</S.TableCellTh>
                                <S.TableCellTh>쿠폰코드</S.TableCellTh>
                                <S.TableCellTh>관리</S.TableCellTh>
                            </S.TableRow>
                        </thead>
                        <tbody>
                            {couponList}
                        </tbody>
                    </S.Table>
                </S.NoticeList>
            </S.CouponListWrap>
        </div>
    );
};

export default CouponList;