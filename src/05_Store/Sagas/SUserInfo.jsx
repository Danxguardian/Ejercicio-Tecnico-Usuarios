import { call, put, takeLatest } from "@redux-saga/core/effects";
import { getService } from "../../07_Services/getServices";
import * as actionTypes from "../Actions/actionTypes";
import {
	getUserInfoSuccess,
	getUserInfoError,
	postUserInfoSuccess,
	postUserInfoError,
} from "../Actions/AUserInfo";

import { CONFIG } from "../../04_Constans/constans";
import { ENDPOINTS } from "../../04_Constans/endpoints.tsx";
import { postService } from "../../07_Services/postServices";

export function* getUserInfoRequest({}) {
	try {
		const response = yield call(
			getService,
			CONFIG["development"].API_SERVER,
			CONFIG["development"].API_ROOT,
			ENDPOINTS["employees"]
		);

		yield put(getUserInfoSuccess(response.data.data));
	} catch (error) {
		yield put(getUserInfoError(error));
	}
}

export function* postUserInfoRequest({ payload }) {
	try {
		const response = yield call(
			postService,
			CONFIG["development"].API_SERVER,
			CONFIG["development"].API_ROOT,
			ENDPOINTS["employees"],
			payload
		);

		yield put(postUserInfoSuccess(response.data));
		yield put({ type: actionTypes.GET_USERINFO_REQUEST, payload: {} });
	} catch (error) {
		yield put(postUserInfoError(error));
	}
}

export default function* userInfoSagas() {
	yield takeLatest(actionTypes.GET_USERINFO_REQUEST, getUserInfoRequest);
	yield takeLatest(actionTypes.POST_USERINFO_REQUEST, postUserInfoRequest);
}
