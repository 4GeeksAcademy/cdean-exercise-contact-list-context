import React, { useState, useRef, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const AddContact = () => {
	const [fullName, setFullName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [address, setAddress] = useState("");

	const { store, actions } = useContext(Context);

	function handleFullName(event) {
		setFullName(event.target.value); // captura el nombre que escribe el usuario
	}

	function handleEmail(event) {
		setEmail(event.target.value); // captura el mail que escribe el usuario
	}
	function handlePhone(event) {
		setPhone(event.target.value); // captura el tel que escribe el usuario
	}

	function handleAddress(event) {
		setAddress(event.target.value); // captura la dirección que escribe el usuario
	}
	console.log(fullName);

	function agregar(e) {
		e.preventDefault();
		actions.agregarContacto(fullName, email, phone, address);
	}
	return (
		<div className="container">
			<div>
				<h1 className="text-center mt-5">Add a new contact</h1>
				<form>
					<div className="form-group">
						<label>Full Name</label>
						<input type="text" className="form-control" placeholder="Full Name" onChange={handleFullName} />
					</div>
					<div className="form-group">
						<label>Email</label>
						<input type="email" className="form-control" placeholder="Enter email" onChange={handleEmail} />
					</div>
					<div className="form-group">
						<label>Phone</label>
						<input type="phone" className="form-control" placeholder="Enter phone" onChange={handlePhone} />
					</div>
					<div className="form-group">
						<label>Address</label>
						<input
							type="text"
							className="form-control"
							placeholder="Enter address"
							onChange={handleAddress}
						/>
					</div>
					<button type="button" className="btn btn-primary form-control" onClick={agregar}>
						save
					</button>
					<Link className="mt-3 w-100 text-center" to="/">
						or get back to contacts
					</Link>
				</form>
			</div>
		</div>
	);
};
