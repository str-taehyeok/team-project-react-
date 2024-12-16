import { createAction, handleActions } from 'redux-actions'

const SET_PREVIOUS_URL = "user/SET_PREVIOUS_URL";
const SET_USER = "user/SET_USER"
const SET_USER_STATUS = "user/USER_STATUS"

export const setPreviousUrl = createAction(SET_PREVIOUS_URL, (previousUrl) => previousUrl);
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
        memberNickname: "포포친구",
        memberProvider: "자사로그인"
    },
    isLogin: false,
    previousUrl: "",
};
 
const user = handleActions({

    [SET_PREVIOUS_URL] : (state = UserInitalValue, action) => ({...state, previousUrl: action.payload}),
    [SET_USER] : (state = UserInitalValue, action) => ({...state, currentUser: action.payload}),
    [SET_USER_STATUS] : (state = UserInitalValue, action) => ({...state, isLogin: action.payload})

}, UserInitalValue);

export default user;
