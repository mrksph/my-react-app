const initialState = {
	isAuthenticated: false
};

const session = (state = initialState, action) => {
	switch (action.type) {
		case 'LOG_IN':
			return {
				isAuthenticated: action.isAuthenticated
			};
		case 'LOG_OUT':
			return {
				isAuthenticated: action.isAuthenticated
			};
		default:
			return state;
	}
};

export default session;