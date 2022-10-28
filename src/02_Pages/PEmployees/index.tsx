import React, { useState } from "react";
import { Button, Col, Modal, Row } from "react-bootstrap";
import { DataGrid } from "@mui/x-data-grid";

import { PEmployeesIF } from "../../08_Interfaces/pages";
import CSearchBar from "../../01_Components/CSearchBar";
import CSpacer from "../../01_Components/CSpacer";
import PEmployeesForm from "./PEmployeesForm";

const PEmployees = ({
	employees,
	columns,
	searchFunction,
	doRegister,
}: PEmployeesIF) => {
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<>
			<Row>
				<Col className="col-12 col-lg-10 mb-1 ">
					<CSearchBar
						placeholder={"Buscar empleado"}
						searchFunction={searchFunction}
					/>
				</Col>
				<Col className="col-12 col-lg-2 d-flex justify-content-end">
					<Button variant="primary" onClick={handleShow}>
						Nuevo empleado
					</Button>
				</Col>
			</Row>
			<CSpacer size={8} />

			<CSpacer size={8} />
			<Row className="mx-0" style={{ height: 700, width: "100%" }}>
				<DataGrid
					rows={employees}
					columns={columns}
					pageSize={10}
					rowsPerPageOptions={[10]}
					disableSelectionOnClick
				/>
			</Row>

			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Registro Empleado</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<PEmployeesForm
						doRegister={(data) => {
							handleClose();
							doRegister(data);
						}}
					/>
				</Modal.Body>
			</Modal>
		</>
	);
};

export default PEmployees;
