/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src';
import {name as appName} from './app.json';

const app = require("./src/config/express")();

require("./src/config/database");

app.listen(app.get("port"), () => {
	console.log("Servidor rodando na porta 3001...");
})

AppRegistry.registerComponent(appName, () => App);