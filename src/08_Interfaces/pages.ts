/* PAGE LOGIN */
export interface PLoginIF {
	doLogin:  (data : Object) => void,
	
}

export interface PLoginFormIF {
	doLogin:  (data : Object) => void,
}

/* PAGE EMPLOYEE */

type employeesColumns = {
	field: string, headerName: string
}
export type employeeType = {
	"id": string,
	"name": string,
	"last_name": string,
	"birthday": number
}


export interface PEmployeesIF {
	employees: Array<employeeType>,
	columns : Array<employeesColumns>,
	searchFunction: (value: string) => void
	doRegister: (data: Object) => void
}

export interface PEmployeesFormIF {
	doRegister : (data: Object) => void
}



