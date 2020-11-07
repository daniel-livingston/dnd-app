const chalk = require("chalk");
const { httpServer } = require("./app");

const port = process.env.PORT || 8080;
httpServer.listen(port, () => {
	console.log(
		chalk.green(new Date().toLocaleTimeString() + ":"),
		"Server is listening at",
		chalk.underline(`localhost:${port}`)
	);
});
