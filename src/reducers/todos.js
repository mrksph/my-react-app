const initialState = {
	list: [
		{
			id: 0,
			title: "Primera nota de ejemplo",
			description: "Vamos a describir mi puesto de trabajo el cual parece muy bueno pero falta una cosa.",
			isSelected: false
		}
	],
	selected: -1 //-1 porque ningun empieza seleccionado
};

const todos = (state = initialState, action) => {
	switch (action.type) {
		case  'CREATE_TODO':
			return {
				selected: state.selected,
				list: [
					...state.list,
					{
						id: action.id,
						title: action.title,
						description: action.description,
						isSelected: action.isSelected
					}
				]
			};
		case 'SELECT_TODO':
			return {
				...state,
				selected: state.selected !== action.id ? action.id : -1
			};
		default:
			return state;
	}
}

export default todos;