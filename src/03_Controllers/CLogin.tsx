import React, { useEffect } from "react";
import { ControllerIF } from "../08_Interfaces/controllersIF";
import { useNavigate } from "react-router-dom";
import { FormValuesLogin } from "../08_Interfaces/formsIF";
import { useDispatch } from "react-redux";
import { setLoginState } from "../05_Store/Actions/AUserInfo";

const CLogin: React.FC<ControllerIF> = ({ RenderComponent }) => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	useEffect(() => {
		if (sessionStorage.getItem("session")) {
			go();
		}
	}, []);

	const go = () => {
		dispatch(setLoginState(true));
		navigate("/employees");
	};

	/*  */
	const doLogin = (data: FormValuesLogin) => {
		const fakeSession = sessionStorage.getItem(data.user);
		if (fakeSession == data.pass) {
			sessionStorage.setItem("session", "true");
			go();
		} else {
			alert("verifique sus datos");
		}
	};
	/*  */
	const propsToComponent = { doLogin };
	return <RenderComponent {...propsToComponent} />;
};

export default CLogin;
