import React, { ComponentType } from "react";
import { ControllerIF } from "../08_Interfaces/controllersIF";

const CUpload = ({ RenderComponent }: ControllerIF) => {

	 
	const propsToComponent = {};
	return <RenderComponent {...propsToComponent} />;
};

export default CUpload;
