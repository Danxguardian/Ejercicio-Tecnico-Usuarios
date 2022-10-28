/* Con esto podemos cambiar en lugar de usar .env */
export const CONFIG = {
	development: {
		REACT_APP_ENV: "LOCAL",
		PORT: "4000",
		API_SERVER: "https://6edeayi7ch.execute-api.us-east-1.amazonaws.com/",
		API_ROOT: "v1/examen/",
	},
};
