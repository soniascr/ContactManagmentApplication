import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Col, Row, Form, Button } from "react-bootstrap";
import { apiBaseURL } from "../constants";

export const AddContact = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	const [fullName, setFullName] = useState("");
	const [address, setAddress] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");

	const handleSubmit = event => {
		event.preventDefault();

		//let BuId = event.target.closest("form").querySelector("#formBusinessId").value;
		let contact = {
			full_name: fullName,
			phone: phone,
			address: address,
			email: email,
			agenda_slug: "sonia_chaves_agenda2353"
		};

		createContact(contact);
	};

	const createContact = contact => {
		let myHeaders = new Headers();

		let url = `${apiBaseURL}/apis/fake/contact/`;

		const data = new FormData();
		for (let key in contact) {
			console.log(contact[key]);
			data.append(key, contact[key]);
		}
		console.log(contact);
		var requestOptions = {
			method: "POST",
			headers: myHeaders,
			body: data
		};

		fetch(url, requestOptions)
			.then(response => response.json())
			.then(result => {
				alert("Contacto agregado correctamente");
				console.log(result);
			});
	};

	return (
		<div className="container p-3">
			<h1 className="text-center">Add a new contact </h1>
			<Form onSubmit={handleSubmit}>
				<Form.Group controlId="formBasicName">
					<Form.Label>Full Name</Form.Label>
					<Form.Control
						type="text"
						placeholder="Full Name"
						onChange={event => setFullName(event.target.value)}
					/>
				</Form.Group>

				<Form.Group controlId="formBasicEmail">
					<Form.Label>Enter Email</Form.Label>
					<Form.Control
						type="email"
						placeholder="Enter Email"
						onChange={event => setEmail(event.target.value)}
					/>
				</Form.Group>

				<Form.Group controlId="formBasicPhone">
					<Form.Label>Enter Phone</Form.Label>
					<Form.Control
						type="text"
						placeholder="Enter Phone"
						onChange={event => setPhone(event.target.value)}
					/>
				</Form.Group>
				<Form.Group controlId="formBasicAddress">
					<Form.Label>Enter Address</Form.Label>
					<Form.Control
						type="text"
						placeholder="Enter Address"
						onChange={event => setAddress(event.target.value)}
					/>
				</Form.Group>
				<Button variant="primary" type="submit">
					save
				</Button>
			</Form>
			<Link to="/">Get back to contacts</Link>
		</div>
	);
};
