const express=require('express');
const bodyParser=require('body-parser');

const app= express();

app.use(bodyParser.json());

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
			id: '321',
			name:'Danny',
			email: 'dandan@gmail.com',
			password: 'balls',
			entries: '0',
			joined: new Date(),
		}
	]
}

app.get('/', (req, res)=> {
	res.send(database.users);
})

app.post('/signin', (req, res) => {
	if (req.body.email === database.users[0].email &&
			req.body.password === database.users[0].password) {
		res.json('success');
	} else {
		res.status(400).json('error logging in');
	}
	
})

app.post('/register', (req, res)=> {
	const{email, name, password} =req.body;
	database.users.push({
		id: '125',
		name: name,
		email: email,
		password: password,
		entries: 0, 
		joined: new Date()
	})
	res.json(database.users[database.users.length-1]);
})

app.listen(3000, ()=> {
	console.log('app is runnin');
})




/*
/--> res = this is workin
/signin --> POST req = success /fail
/register -->post = user
/profile/:user ID--> GET= user
/image --> PUT  --> user

*/