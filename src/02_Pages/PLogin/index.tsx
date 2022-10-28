import React from "react";
import { Row, Col } from "react-bootstrap";
import { PLoginIF } from "../../08_Interfaces/pages";
import PLoginForm from "./PLoginForm";
import "./index.css";

const PLogin = ({ doLogin }: PLoginIF) => {
	return (
		<Row className="loginBG">
			<Col className="col-12 col-lg-5 px-4 px-lg-0 loginCol d-flex align-items-center ">
				<PLoginForm doLogin={doLogin} />
			</Col>
			<Col className="d-none d-sm-block col-lg-7 bgLogin">
				<img src="https://opendoodles.s3-us-west-1.amazonaws.com/Doggie.svg" />
			</Col>
		</Row>
	);
};

export default PLogin;
