const getState = ({ getStore, setStore, getActions }) => {
	return {
		store: {
			contacts: []
			//Your data structures, A.K.A Entities
		},
		actions: {
			//(Arrow) Functions that update the Store
			// Remember to use the scope: scope.state.store & scope.setState()
			obtenerInfo: async function() {
				//obtenerInfo es la clave para acceder al valor
				try {
					let response = await fetch("https://playground.4geeks.com/apis/fake/contact/agenda"); //especificamos la url donde vamos a buscar info
					let data = await response.json();
					setStore({contacts: data}); //la información que trae se guarda en contacts
					console.log("HOLAAAAAAAAAAAAAAAAAAAAAAAA");
					//setTodoList(data); // se agregan las tareas a la lista
				} catch (error) {
					console.log(error);
				}
			}
		}
	};
};

export default getState;
