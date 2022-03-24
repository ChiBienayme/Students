const express = require("express");
const app = express();

app.use(express.json());

// app.use((req, res, next) => {
// 	console.log("requête reçue");
// 	next();
// });

const students = [
	{
		id: 1,
		name: "Nicolas",
		age: 18,
		gender: "M",
	},
	{
		id: 2,
		name: "Anita",
		age: 26,
		gender: "F",
	},
	{
		id: 3,
		name: "Djibril",
		age: 29,
		gender: "M",
	},
];
app.get("/", (req, res) => {
	res.send("Students page");
});


app.get("/students", (req, res) => {

	res.send(students);
});

app.post("/students", (req, res) => {
	students.push({
		id: students.length + 1,
		name: req.body.name,
	});

	res.send(students);
});



app.get("*", (req, res) => {
	res.send("Page not found - 404");
});
app.listen(3000, () => console.log("Listening..."));