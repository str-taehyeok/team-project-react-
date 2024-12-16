import { createAction, handleActions } from 'redux-actions'

const SET_USER = "user/SET_USER"
const SET_USER_STATUS = "user/USER_STATUS"

export const setUser = createAction(SET_USER, (currentUser) => currentUser);
export const setUserStatus = createAction(SET_USER_STATUS, (isLogin) => isLogin);

// DB 초기값
const UserInitalValue = {
    currentUser: {
        memberEmail: "",
        memberName: "",
        memberPhone: "",
        memberZipcode: "",
        memberAddress: "",
        memberAddressDetail: "",
        memberSmsCheck: "1",
        memberEmailCheck: "1",
        memberDate: null,
        memberBusinessNumber: "",
        memberImage: "",
        memberNickName: "포포친구",
        memberProvider: "자사로그인"
    },
    isLogin: false,
};
 
const admin = handleActions({

    [SET_USER] : (state = UserInitalValue, action) => ({...state, currentUser: action.payload}),
    [SET_USER_STATUS] : (state = UserInitalValue, action) => ({...state, isLogin: action.payload})

}, UserInitalValue);

export default admin;
