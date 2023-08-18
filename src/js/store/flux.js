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
					let response = await fetch("https://playground.4geeks.com/apis/fake/contact/agenda/cecilia"); //especificamos la url donde vamos a buscar info
					let data = await response.json();
					setStore({ contacts: data }); //la información que trae se guarda en contacts
					console.log(data);
				} catch (error) {
					console.log(error);
				}
			},

			agregarContacto: async function(fullName, email, phone, address) {
				console.log("holisssss");
				try {
					let response = await fetch("https://playground.4geeks.com/apis/fake/contact/", {
						method: "POST",
						headers: {
							"Content-Type": "application/json"
						},
						body: JSON.stringify({
							full_name: fullName,
							email: email,
							agenda_slug: "cecilia",
							address: address,
							phone: phone
						})
					});
					let data = await response.json();
					if (data.msg === "Contact created succesfully") {
						getActions().obtenerInfo();
					}
				} catch (error) {
					console.log(error);
				}
			},
			borrarContacto: async function(id) {
				//obtenerInfo es la clave para acceder al valor
				try {
					let response = await fetch("https://playground.4geeks.com/apis/fake/contact/" + id, {
						//especificamos la url donde vamos a buscar info
						method: "DELETE",
						headers: {
							"Content-Type": "application/json"
						}
					});
					let data = await response.json();
					console.log(data.msg);
					if (data.msg === "Contact deleted successfully") {
						getActions().obtenerInfo();
					}
				} catch (error) {
					console.log(error);
				}
			},
			editarContactos: async function(id, fullName, phone, address, email) {
				console.log("updateeee");
				try {
					let response = await fetch("https://playground.4geeks.com/apis/fake/contact/" + id, {
						method: "PUT",
						headers: {
							"Content-Type": "application/json"
						},
						body: JSON.stringify({
							full_name: fullName,
							email: email,
							agenda_slug: "cecilia",
							address: address,
							phone: phone
						})
					});
					let data = await response.json();
					console.log(data.msg);
					// if (data.msg === "Contact created succesfully") {
					// 	getActions().obtenerInfo();
					// }
				} catch (error) {
					console.log(error);
				}
			}
		}
	};
};

export default getState;
