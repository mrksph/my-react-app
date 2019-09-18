let nextTodoId = 0;

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