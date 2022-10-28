import {
	GET_USERINFO_REQUEST,
	GET_USERINFO_SUCCESS,
	GET_USERINFO_ERROR,
	POST_USERINFO_REQUEST,
	POST_USERINFO_SUCCESS,
	POST_USERINFO_ERROR,
	SET_LOGIN_STATE,
} from "./actionTypes";

const getUserInfoRequest = (payload) => {
	return { type: GET_USERINFO_REQUEST, payload: payload };
};

const getUserInfoSuccess = (payload) => {
	return { type: GET_USERINFO_SUCCESS, payload: payload };
};
const getUserInfoError = ({ error }) => {
	return { type: GET_USERINFO_ERROR, payload: error };
};

const postUserInfoRequest = (payload) => {
	return { type: POST_USERINFO_REQUEST, payload: payload };
};

const postUserInfoSuccess = (payload) => {
	return { type: POST_USERINFO_SUCCESS, payload: payload };
};
const postUserInfoError = ({ error }) => {
	return { type: POST_USERINFO_ERROR, payload: error };
};

const setLoginState = (payload) => {
	return { type: SET_LOGIN_STATE, payload: payload };
};

export {
	getUserInfoRequest,
	getUserInfoSuccess,
	getUserInfoError,
	postUserInfoRequest,
	postUserInfoSuccess,
	postUserInfoError,
	setLoginState,
};

export default {
	getUserInfoRequest,
	getUserInfoSuccess,
	getUserInfoError,
	postUserInfoRequest,
	postUserInfoSuccess,
	postUserInfoError,
	setLoginState,
};
