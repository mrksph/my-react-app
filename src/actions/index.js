///let nextTodoId = 1;

export const createTodo = ({title, description}) => ({
	type: 'CREATE_TODO',
	id: nextTodoId++,
	title: title,
	description: description,
	isSelected: false
});


export const selectTodo = ({id}) => ({
	type: 'SELECT_TODO',
	id: id
});

export const logIn = () => ({
	type: 'LOG_IN',
	isAuthenticated: true
});

export const logOut = () => ({
	type: 'LOG_OUT',
	isAuthenticated: false
});