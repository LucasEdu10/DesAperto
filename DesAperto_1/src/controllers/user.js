const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const modelUser = mongoose.model("User");

let userController = {};

userController.allUsers = (req, res) => {
	modelUser.find()
	.then(results => res.json(results))
	.catch(err => res.send(err));
}

module.exports = userController;

userController.newUser = (req, res) => {
	if(req.body.username && req.body.password) {
		if(req.body.password2 && req.body.password == req.body.password2) {
			modelUser.findOne({ "username": req.body.username })
				.then(user => {

					if(user){
						res.json({ sucess: false, message: "This username has no available"});
					}else{

						bcrypt.hash(req.body.password, 10)
							.then(hash => {

								let encryptedPassword = hash;

								let newUser = new modelUser({
									username: req.body.username,
									password: encryptedPassword,
									email: req.body.email,
									isAdmin: req.body.isAdmin
								});

								newUser.save()
									.then() => res.json({ sucess: true, message: "User created with sucess", statusCode: 201 });
									.catch(err => res.json({ sucess: false, message: err, statusCode: 500 }));
							})
							.catch(err => res.json({ sucess: false, message: err, statusCode: 400 }));

					}
				})
		} else{
			res.json({ sucess: false, massage: "Password doenst match", statusCode: 400});
		}
	}else{
		res.json({ sucess: false, message: "User and password fields are requireds", statusCode: 400 });
	}
}