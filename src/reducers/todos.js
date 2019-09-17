const todos = (state = [], action) => {
	switch (action.type) {
		case	'CREATE_TODO':
			return [
				...state,
				{
					id: action.id,
					title: action.title,
					description: action.description,
					isSelected: action.isSelected
				}
			]
		default:
			return state;
	}
}

export default todos;