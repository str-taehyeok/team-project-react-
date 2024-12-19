import React, {useState} from 'react';
import S from "./style";
import PwChange from "./PwChange";

const Password = () => {

    const [isOpenPopup, setIsOpenPopup] = useState(false);

    const handleShowPopup = () => {
        setIsOpenPopup(!isOpenPopup)
    }

    return(

        <>
            <S.PwChangeBox onClick={handleShowPopup}>
                <button className={"update"}>변경하기</button>
            </S.PwChangeBox>
            {isOpenPopup ? (
                <PwChange
                    handleShowPopup={handleShowPopup}
                    isOpenPopup = {isOpenPopup}
                    setIsOpenPopup = {setIsOpenPopup}
                />
            ) : (
                <></>
            )}



        </>



    )



};

export default Password;