import React, { useEffect } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import CSpacer from "./01_Components/CSpacer";

import PLogin from "./02_Pages/PLogin";
import CLogin from "./03_Controllers/CLogin";

import PUpload from "./02_Pages/PUpload";
import CUpload from "./03_Controllers/CUpload";

import PEmployees from "./02_Pages/PEmployees";
import CEmployees from "./03_Controllers/CEmployees";

import CNavMenu from "./01_Components/CNav";
import PrivateRoutes from "./06_Utils/PrivateRoutes";
import { useSelector, useDispatch } from "react-redux";
import { IRootState } from "./05_Store/Reducers";
import { setLoginState } from "./05_Store/Actions/AUserInfo";

sessionStorage.setItem("testAdmin", "123");

function App() {
	const isLogin = useSelector((state: IRootState) => state.user.isLogin);

	return (
		<div className="container">
			<HashRouter>
				{isLogin && <CNavMenu />}
				<CSpacer size={16} />
				<Routes>
					<Route
						path="/"
						element={<CLogin RenderComponent={PLogin} />}
					/>
					<Route
						path="/login"
						element={<CLogin RenderComponent={PLogin} />}
					/>
					<Route element={<PrivateRoutes />}>
						<Route
							path="/employees"
							element={
								<CEmployees RenderComponent={PEmployees} />
							}
						/>
						<Route
							path="/upload"
							element={<CUpload RenderComponent={PUpload} />}
						/>
					</Route>
				</Routes>
			</HashRouter>
		</div>
	);
}

export default App;
