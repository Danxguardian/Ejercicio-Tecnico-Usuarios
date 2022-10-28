import React from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { Row } from "react-bootstrap";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { format } from "date-fns";

import TextField from "@mui/material/TextField";

import CSpacer from "../../01_Components/CSpacer/index";
import { FormValuesEmployee } from "../../08_Interfaces/formsIF";
import { PEmployeesFormIF } from "../../08_Interfaces/pages";

const PEmployeesForm = ({ doRegister }: PEmployeesFormIF) => {
	const {
		register,
		handleSubmit,
		watch,
		control,
		formState: { errors, isValid },
	} = useForm<FormValuesEmployee>({ mode: "onChange" });

	const onSubmit: SubmitHandler<FormValuesEmployee> = (data) =>
		doRegister(data);

	return (
		<form className="w-100" onSubmit={handleSubmit(onSubmit)}>
			<Row>
				<TextField
					label="Nombre"
					{...register("name", { required: true })}
				/>
				{errors.name && <span>El campo es requerido</span>}
			</Row>
			<CSpacer size={16} />
			<Row>
				<TextField
					label="Apellidos"
					{...register("last_name", { required: true })}
				/>
				{errors.last_name && <span>El campo es requerido</span>}
			</Row>
			<CSpacer size={16} />
			<Row>
				<LocalizationProvider dateAdapter={AdapterDateFns}>
					<Controller
						name="birthday"
						control={control}
						defaultValue={null}
						rules={{ required: true }}
						render={({
							field: { onChange, value },
							fieldState: { error, invalid },
						}) => (
							<DatePicker
								label="Fecha de nacimiento"
								inputFormat="yyyy/MM/dd"
								disableFuture
								value={value}
								onChange={(value) => {
									onChange(
										format(new Date(value), "yyyy/MM/dd")
									);
								}}
								renderInput={(params) => (
									<TextField
										onKeyPress={(e) => {
											e.preventDefault();
											return false;
										}}
										{...params}
									/>
								)}
							/>
						)}
					/>
				</LocalizationProvider>
			</Row>
			<CSpacer size={32} />
			<Row>
				<input
					className="btn btn-primary"
					value="Registar empleado"
					type="submit"
					disabled={!isValid}
				/>
			</Row>
		</form>
	);
};
export default PEmployeesForm;
