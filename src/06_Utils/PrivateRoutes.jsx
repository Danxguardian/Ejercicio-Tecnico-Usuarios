import { Outlet, Navigate } from "react-router-dom";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setLoginState } from "../05_Store/Actions/AUserInfo";

const PrivateRoutes = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		if (sessionStorage.getItem("session")) {
			dispatch(setLoginState(true));
		}
	}, []);

	let auth = { token: sessionStorage.getItem("session") };

	return auth.token ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
