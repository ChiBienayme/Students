const mongoose = require("mongoose");

// créer un schéma
const studentSchema = new mongoose.Schema({
	email: {
		type: String,
		required: true,
		unique: true,
		maxlength: 255,
		//lowercase: true,
	},
	password: {
		type: String,
		required: true,
		minlength: 8,
		maxlength: 100,
	},
	name: {
		type: String,
		//required: true,
	},
	lastConnection: Date,
	orders: Number,
});

// créer un modèle
const Student = mongoose.model("Student", studentSchema);

// exporter le modèle
module.exports = Student;