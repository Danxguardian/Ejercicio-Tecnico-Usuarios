import React, { useState } from "react";
import { CSearchBarIF } from "../../08_Interfaces/componentsIF";
const CSearchBar = ({
	placeholder = "Buscar",
	searchFunction,
}: CSearchBarIF) => {
	const [value, setValue] = useState("");
	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
				searchFunction(value);
			}}
		>
			<input
				className="w-100"
				name="search"
				type="text"
				placeholder={placeholder}
				value={value}
				onChange={(e) => {
					setValue(e.target.value);
				}}
			/>
		</form>
	);
};

export default CSearchBar;
