const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

mongoose.connect("sual-url", {useMongoCliente: true});

mongoose.connection.on("connectd", () => {
	console.log("Conecttando ao Banco de dados!");
});

mongoose.connection.on("error", (err) => {
	console.log("Erro no conexão: " + err);
});

mongoose.connection.on("disconnet", () => {
	console.log("Desconectado :(");
});