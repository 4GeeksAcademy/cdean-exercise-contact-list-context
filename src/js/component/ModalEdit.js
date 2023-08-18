import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";

export const ModalEdit = () => {
	const [fullName, setFullName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [address, setAddress] = useState("");
	const [showModal, setShowModal] = useState(false);

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
		<div>
			<div className="modal-dialog">
				<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title">Modal title</h5>
						<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
					</div>
					<div className="modal-body">
						<form>
							<div className="form-group">
								<label>Full Name</label>
								<input
									type="text"
									className="form-control"
									placeholder="Full Name"
									onChange={handleFullName}
								/>
							</div>
							<div className="form-group">
								<label>Email</label>
								<input
									type="email"
									className="form-control"
									placeholder="Enter email"
									onChange={handleEmail}
								/>
							</div>
							<div className="form-group">
								<label>Phone</label>
								<input
									type="phone"
									className="form-control"
									placeholder="Enter phone"
									onChange={handlePhone}
								/>
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
						</form>
					</div>
					<div className="modal-footer">
						<button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
							Close
						</button>
						<button type="button" className="btn btn-primary">
							Save changes
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
