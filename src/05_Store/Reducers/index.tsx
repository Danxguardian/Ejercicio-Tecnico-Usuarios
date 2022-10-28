/* FILE TO MERGE ALL REDUCER ON ONE ROOT */
import { combineReducers } from "redux";

import userInfoReducer from "./RUserInfo";

export const rootReducer = combineReducers({

	user: userInfoReducer,
});
export type IRootState = ReturnType<typeof rootReducer>;
