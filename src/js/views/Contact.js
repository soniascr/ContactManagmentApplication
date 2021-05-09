import React, { useState, useEffect, useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { ContactCard } from "../component/ContactCard";
import { Context } from "../store/appContext";
import { apiBaseURL } from "../constants";
import { Link, useHistory } from "react-router-dom";
import Button from "react-bootstrap/Button";

export const Contact = () => {
	const [contacts, setContacts] = useState([]);
	const { store, actions } = useContext(Context);

	useEffect(() => {
		console.log(`${apiBaseURL}/apis/fake/contact/agenda/sonia_chaves_agenda2353`);
		let url = `${apiBaseURL}/apis/fake/contact/agenda/sonia_chaves_agenda2353`;

		var requestOptions = {
			method: "GET",
			redirect: "follow"
		};

		fetch(url, requestOptions)
			.then(response => response.json())
			.then(result => setContacts(result))
			.catch(error => console.log("error", error));
	}, []);

	console.log(contacts);

	let contactList = contacts.map((item, key) => (
		<div className="col-md-12" key={key}>
			<ContactCard data={item} />
		</div>
	));

	return (
		<div className="container py-3">
			<div className="text-right">
				<Link to="/addcontact">
					<Button variant="success">Add new Contact</Button>
				</Link>
			</div>
			<div className="row py-3">{contactList}</div>
		</div>
	);
};
