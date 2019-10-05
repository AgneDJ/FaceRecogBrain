const express=require('express');
const bodyParser=require('body-parser');
const bcrypt=require('bcrypt');
const saltRounds = 10;
const myPlaintextPassword = 's0/\/\P4$$w0rD';
const someOtherPlaintextPassword = 'not_bacon';
const cors = require('cors');

const app= express();

app.use(bodyParser.json());
app.use(cors());

const database={
	users: [
		{
			id: '123',
			name:'John',
			email: 'johnyboi@gmail.com',
			password: 'candy',
			entries: '0',
			joined: new Date(),
		},
		{
			id: '124',
			name:'Danny',
			email: 'dandan@gmail.com',
			password: 'balls',
			entries: '0',
			joined: new Date(),
		}
	],
	login: [
	{
		id: '987',
		has: '',
		email: 'johnyboi@gmail.com'
	}
	]
}

app.get('/', (req, res)=> {
	res.send(database.users);
})

app.post('/signin', (req, res) => {
	// bcrypt.compare("lopaslopavic", "$2b$10$IZBL9BX52lub3u.86Uh/feIQDWzVKRV7vq3XSWIF4OPpCFA46Da32", function(err, res) {
	// 	console.log("first guess", res)
	// });
		
	// bcrypt.compare("vegge", "$2b$10$IZBL9BX52lub3u.86Uh/feIQDWzVKRV7vq3XSWIF4OPpCFA46Da32", function(err, res) {
	// 	console.log("sec guess", res)
	// });
	if (req.body.email === database.users[0].email &&
			req.body.password === database.users[0].password) {
		res.json(database.users[0]);
	} else {
		res.status(400).json('error logging in');
	}
	
});

app.post('/register', (req, res)=> {
	const{email, name, password} =req.body;
	bcrypt.hash(password, saltRounds, function(err, hash) {
		console.log(hash);
	});


	database.users.push({
		id: '125',
		name: name,
		email: email,
		entries: 0, 
		joined: new Date()
	});
	res.json(database.users[database.users.length-1]);
});

app.get('/profile/:id', (req, res) => {
	const {id} = req.params;
	let found = false;
	database.users.forEach(user => {
		if(user.id===id) {
			found=true;
			return res.json(user);
		} 
	})
	if (!found) {
		res.status(400).json('not found');
	}
})


// bcrypt.hash("bacon", null, null, function(err, hash) {
//     // Store hash in your password DB.
// });

// // Load hash from your password DB.
// bcrypt.compare("bacon", hash, function(err, res) {
//     // res == true
// });
// bcrypt.compare("veggies", hash, function(err, res) {
//     // res = false
// });


app.put('/image', (req, res)=> {
	const {id} = req.body;
	let found = false;
	database.users.forEach(user => {
		if(user.id===id) {
			found=true;
			user.entries++
			return res.json(user.entries);
		} 
	})
	if (!found) {
		res.status(400).json('not found');
	}
})

app.listen(3001, ()=> {
	console.log('app is runnin');
})




/*
/--> res = this is workin
/signin --> POST req = success /fail
/register -->post = user
/profile/:user ID--> GET= user
/image --> PUT  --> user

*/