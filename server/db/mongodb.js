const chalk = require("chalk");
const mongoose = require("mongoose");

try {
	mongoose.connect(
		process.env.MONGODB_URL,
		{
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useFindAndModify: true,
			useCreateIndex: true,
		},
		() => {
			console.log(
				chalk.green(new Date().toLocaleTimeString() + ":"),
				"Connected to MongoDB database at",
				chalk.underline(process.env.MONGODB_URL)
			);
		}
	);
} catch (error) {
	console.log(error);
}
