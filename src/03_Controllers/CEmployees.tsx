import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { format } from "date-fns";
import { GridValueFormatterParams } from "@mui/x-data-grid";
import {
	getUserInfoRequest,
	postUserInfoRequest,
} from "../05_Store/Actions/AUserInfo";

import { ControllerIF } from "../08_Interfaces/controllersIF";
import { IRootState } from "../05_Store/Reducers/index";
import { employeeType } from "../08_Interfaces/pages";

const CEmployees = ({ RenderComponent }: ControllerIF) => {
	const dispatch = useDispatch();
	const stateForWorks = useSelector((state: IRootState) => state.user);

	const [employees, setEmployees] = useState(
		stateForWorks.userInfo.employees
	);

	useEffect(() => {
		dispatch(getUserInfoRequest());
	}, []);

	useEffect(() => {
		setEmployees(stateForWorks.userInfo.employees);
	}, [stateForWorks]);

	const searchFunction = (value: string) => {
		if (value == "") return dispatch(getUserInfoRequest());
		const employeesFiltered: Array<employeeType> = employees.filter(
			(employee: employeeType) => employee.last_name.includes(value)
		);
		setEmployees(employeesFiltered);
	};

	const doRegister = (data: object) => {
		dispatch(postUserInfoRequest(data));
	};

	const columns = [
		{ field: "name", headerName: "Nombre", flex: 1 },
		{ field: "last_name", headerName: "Apellido", flex: 1 },
		{
			field: "birthday",
			headerName: "Cumpleaños (YYYY/MM/DD)",
			flex: 1,
			valueFormatter: (params: GridValueFormatterParams<number>) => {
				if (params.value == null) {
					return "No se encontro cumpleaños";
				}

				return format(params.value, "yyyy/MM/dd");
			},
		},
	];

	const propsToComponent = {
		employees: employees,
		columns,
		searchFunction,
		doRegister,
	};

	return <RenderComponent {...propsToComponent} />;
};

export default CEmployees;
