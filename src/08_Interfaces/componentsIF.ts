
export interface CSpacerIF {
	size: number;
	horizontal?: boolean;
};

export interface CSearchBarIF {
	placeholder: string,
	searchFunction: (value : string) => void,
}