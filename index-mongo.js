//------------------ MongoDB -----------------//
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const Student = require("./models/studentModel");

app.use(express.json());

// connect to db
mongoose
	.connect(	
        "mongodb+srv://chibienayme:ayUkqlOk180@cluster0.pg9q2.mongodb.net/students?retryWrites=true&w=majority",
		{
			useNewUrlParser: true,
		}
	)
	.then(() => console.log("Connected to MongoDB"));

// routes
// homepage
app.get("/", (_req, res) => {
	res.send("Students");
});

// get all students
app.get("/students", async (_req, res) => {
	const students = await Student.find().select("-__v");

	res.json(students);
});

// find student by ID
app.get("/students/:id", async (req, res) => {
	const student = await Student.findById(req.params.id);

	res.json(student);
});

// find student by email
app.get("/v2/students/:email", async (req, res) => {
	const student = await Student.findOne({ email: req.params.email });

	res.json(student);
});

// modify password of student by ID
app.patch("/students/:id", async (req, res) => {
	await Student.findByIdAndUpdate(req.params.id, {
		password: req.body.password,
	});

	res.json({
		message: "Password updated",
	});
});

// Add more an student
app.post("/students", async (req, res) => {
	await Student.create(req.body);

	res.status(201).json({
		message: "Student created",
	});
});

app.listen(8000, () => console.log("Listening"));