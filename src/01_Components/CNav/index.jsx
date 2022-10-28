import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import CSpacer from "../CSpacer";

import "./index.css";

const CNav = () => {
	return (
		<div className="navMenu">
			<ul>
				<li>
					<Link to="/employees">Empleados</Link>
				</li>
				<CSpacer size={4} horizontal />
				<li>
					<Link to="/upload">Carga de Imagenes</Link>
				</li>
				<li className="justify-content-end">
					<Button
						className="btn btn-link"
						onClick={() => {
							sessionStorage.removeItem("session");
							window.location.reload();
						}}
					>
						Cerrar sesion
					</Button>
				</li>
			</ul>
		</div>
	);
};
export default CNav;
