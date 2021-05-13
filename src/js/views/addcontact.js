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
	let id = localStorage.getItem("id");
	console.log(id);
	let contact = store.contacts.find(item => item.id == id);
	console.log(contact, store.contacts);

	return (
		<div className="container p-3">
			<h1 className="text-center">Add a new contact </h1>
			<Form>
				<Form.Group controlId="formBasicName">
					<Form.Label>Full Name</Form.Label>
					<Form.Control
						type="text"
						placeholder="Full Name"
						defaultValue={contact ? contact.full_name : ""}
						onChange={event => setFullName(event.target.value)}
					/>
				</Form.Group>

				<Form.Group controlId="formBasicEmail">
					<Form.Label>Enter Email</Form.Label>
					<Form.Control
						type="email"
						placeholder="Enter Email"
						defaultValue={contact ? contact.email : ""}
						onChange={event => setEmail(event.target.value)}
					/>
				</Form.Group>

				<Form.Group controlId="formBasicPhone">
					<Form.Label>Enter Phone</Form.Label>
					<Form.Control
						type="text"
						placeholder="Enter Phone"
						defaultValue={contact ? contact.phone : ""}
						onChange={event => setPhone(event.target.value)}
					/>
				</Form.Group>
				<Form.Group controlId="formBasicAddress">
					<Form.Label>Enter Address</Form.Label>
					<Form.Control
						type="text"
						placeholder="Enter Address"
						defaultValue={contact ? contact.address : ""}
						onChange={event => setAddress(event.target.value)}
					/>
				</Form.Group>
				<Button
					variant="primary"
					onClick={() => {
						actions.handleSubmit(event, fullName, phone, address, email);
						console.log(fullName, address, email, phone);
					}}>
					save
				</Button>
			</Form>
			<Link to="/">Get back to contacts</Link>
		</div>
	);
};
