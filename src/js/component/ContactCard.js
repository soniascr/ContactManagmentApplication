import React, { useContext, useState, useEffect } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import "../../styles/index.scss";
import { apiBaseURL } from "../constants";
import { Context } from "../store/appContext";
import { Button, Image } from "react-bootstrap";
import profile from "../../img/profile.jpg";

//create your first component
export const ContactCard = data => {
	const { id, full_name, address, email, phone } = data.data;
	const { store, actions } = useContext(Context);

	let history = useHistory();
	const handleEdit = event => {
		localStorage.setItem("id", id);

		history.push("/addcontact");
	};

	return (
		<div>
			<div>
				<div className="card mb-3">
					<div className="row">
						<div className="col-md-3 p-3 ml-3">
							<Image src={profile} className="img-fluid mt-3" roundedCircle />
						</div>
						<div className="col-md-6">
							<div className="card-body">
								<p className="lead card-title fluid py-3">{data ? full_name : "loading"}</p>

								<p className="card-text text-secondary mt-4 mb-2">
									<i className="fas fa-map-marker-alt" />
									{data ? " " + address : "loading"}
								</p>
								<p className="card-text text-secondary mt-4 mb-2">
									<i className="fas fa-phone" />
									{data ? " " + phone + " " : "loading"}
								</p>
								<p className="card-text text-secondary mt-4 mb-2">
									<i className="fas fa-envelope" />
									{data ? " " + email + " " : "loading"}
								</p>
							</div>
						</div>
						<div className="col-md-1 mt-4">
							<button
								className="close"
								onClick={event => {
									handleEdit(event);
									console.log(id);
								}}>
								<i className="fas fa-pencil-alt" />
							</button>
						</div>
						<div className="col-md-1 mt-4">
							<button className="close" onClick={event => actions.handleDelete(event, id)}>
								<i className="fas fa-trash" />
							</button>
						</div>
						<div className="col-md-1 mt-4" />
					</div>
				</div>
			</div>
		</div>
	);
};

ContactCard.propTypes = {
	data: PropTypes.object
};
