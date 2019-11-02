const express = require("express");
const consign = require("consign");
const badyParser = require("body-parser");
const path = require("path");

module.express = () => {
	const app = express();

	app.set("port", (process.env.PORT || 3001));

	app.user(badyParser.urlencoded({extended: true}));
	app.use(badyParser.json());

	consign({cwd: "server"})
		.include("models")
		.include("controllers")
		.then("routes")

		.into(app);

	return app;
}