import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Row } from "react-bootstrap";
import CSpacer from "../../01_Components/CSpacer/index";

import { FormValuesLogin } from "../../08_Interfaces/formsIF";
import { PLoginFormIF } from "../../08_Interfaces/pages";

const PLoginForm = ({ doLogin }: PLoginFormIF) => {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors, isValid },
	} = useForm<FormValuesLogin>({ mode: "onChange" });

	const disableCCP = (e: any) => {
		e.preventDefault();
		return false;
	};

	const onSubmit: SubmitHandler<FormValuesLogin> = (data) => doLogin(data);

	return (
		<form className="w-100" onSubmit={handleSubmit(onSubmit)}>
			<Row>
				<input
					placeholder="Usuario"
					onPaste={(e) => disableCCP(e)}
					onCut={(e) => disableCCP(e)}
					onCopy={(e) => disableCCP(e)}
					{...register("user", { required: true })}
				/>
				{errors.user && <span>El campo es requerido</span>}
			</Row>
			<CSpacer size={16} />
			<Row>
				<input
					placeholder="Contraseña"
					onPaste={(e) => disableCCP(e)}
					onCut={(e) => disableCCP(e)}
					onCopy={(e) => disableCCP(e)}
					{...register("pass", { required: true })}
				/>
				{errors.pass && <span>El campo es requerido</span>}
			</Row>

			<CSpacer size={32} />
			<Row>
				<input
					className="btn btn-primary"
					value="Login"
					type="submit"
					disabled={!isValid}
				/>
			</Row>
		</form>
	);
};
export default PLoginForm;
