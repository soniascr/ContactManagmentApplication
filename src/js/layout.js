import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Contact } from "./views/Contact";
import { AddContact } from "./views/addcontact";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { ContactCard } from "./component/ContactCard";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column">
			<BrowserRouter basename={basename}>
				<Switch>
					<Route exact path="/">
						<Contact />
					</Route>
					<Route exact path="/addcontact">
						<AddContact />
					</Route>
					<Route>
						<h1>Not found!</h1>
					</Route>
				</Switch>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
