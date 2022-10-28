import React from "react";
import { CSpacerIF } from "../../08_Interfaces/componentsIF";

const CSpacer = ({ size, horizontal }: CSpacerIF) => {
	const defaultValue = "auto";

	return (
		<div
			style={{
				width: horizontal ? size : defaultValue,
				height: !horizontal ? size : defaultValue,
			}}
		/>
	);
};

export default CSpacer;
