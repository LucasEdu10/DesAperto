import React from "react";
import Routes from "./routes";
import "./config/statusBarConfig";


const App = () => <Routes/>;

/*const app = require("./config/express")();

require("./config/database");

app.listen(app.get("port"), () => {
	console.log("Servidor rodando na porta 3001...");
})*/

export default App;