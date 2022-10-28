import * as Types from "../Actions/actionTypes";
const INIT_STATE = {
	userInfo: { employees: [] },
	userInfoCreate: {},
	isLogin: false,
};

const userInfoReducer = (state = INIT_STATE, action) => {
	switch (action.type) {
		case Types.GET_USERINFO_REQUEST: {
			return { ...state };
		}
		case Types.GET_USERINFO_SUCCESS: {
			return { ...state, userInfo: action.payload };
		}
		case Types.GET_USERINFO_ERROR: {
			return { ...state, error: action.payload };
		}

		case Types.POST_USERINFO_REQUEST: {
			return { ...state };
		}
		case Types.POST_USERINFO_SUCCESS: {
			return { ...state, userInfoCreate: action.payload };
		}
		case Types.POST_USERINFO_ERROR: {
			return { ...state, error: action.payload };
		}

		case Types.SET_LOGIN_STATE: {
			return { ...state, isLogin: action.payload };
		}

		default:
			return state;
	}
};

export default userInfoReducer;
