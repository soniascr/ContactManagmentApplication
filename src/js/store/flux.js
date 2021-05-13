import { apiBaseURL } from "../constants";
import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Col, Row, Form, Button } from "react-bootstrap";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],

			contacts: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			setContacts: contacts => {
				setStore({ contacts: contacts });
			},

			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			handleDelete: (event, id) => {
				let myHeaders = new Headers();

				let url = `${apiBaseURL}/apis/fake/contact/${id}`;

				var requestOptions = {
					method: "DELETE",
					headers: myHeaders
				};

				fetch(url, requestOptions)
					.then(response => response.json())
					.then(result => {
						window.location.reload();
					});
			},

			handleSubmit: (event, fullName, phone, address, email) => {
				event.preventDefault();

				//let BuId = event.target.closest("form").querySelector("#formBusinessId").value;
				let contact = {
					full_name: fullName,
					phone: phone,
					address: address,
					email: email,
					agenda_slug: "sonia_chaves_agenda2353"
				};

				let id = localStorage.getItem("id");

				let url = "";
				let urlMethod = "";
				if (id != "") {
					url = `${apiBaseURL}/apis/fake/contact/${id}`;
					localStorage.setItem("id", "");
					urlMethod = "PUT";
				} else {
					url = `${apiBaseURL}/apis/fake/contact/`;
					urlMethod = "POST";
				}
				console.log("URL: " + url);

				var requestOptions = {
					method: urlMethod,
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(contact)
				};

				console.log("Method: " + requestOptions.method);

				fetch(url, requestOptions)
					.then(response => response.json())
					.then(result => {
						alert("Contacto agregado correctamente");
						console.log(result);
					});
			},

			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
