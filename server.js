const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

const app = express();
const port = process.env.PORT || 3000;

// for adding header footer partials
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine','hbs');

// logging request
app.use((req,res,next) => {
	var now = new Date().toString();
	var log = `${now} : ${req.method} : ${req.url}`
	console.log(log);
	fs.appendFile('server.log',log + '\n', (err) => {
		if(err){
			console.log('Unable to append to server.log');
		}
	})
	next();
});


// maintainance page
/*app.use((req,res,next) => {
	res.render('maintance.hbs');
	next();
});*/

// accessing static html pages
app.use(express.static(__dirname+'/public'));

// Helper functions
hbs.registerHelper('getCurrentYear', () => {
	return new Date().getFullYear();
});

hbs.registerHelper('screamIt',(text) => {
	return text.toUpperCase();
});

// Get calls for rendering in hbs pages.
app.get('/',(req,res,next) => {
	// res.send('<h1>Hello Express!</h1>');
	res.render('home.hbs',{
		pageTitle: 'Home Page',
		welcomeMessage: 'Welcome To my Website'
	});
});

app.get('/about', (req,res,next) => {
	res.render('about.hbs',{
		pageTitle: 'About Page'

	});
});

app.get('/projects', (req,res,next) => {
	res.render('projects.hbs',{
		pageTitle: 'Projects Page'

	});
});

app.get('/bad',(req,res,next) => {
	const error = new Error('unable to fulfill the request');
	res.status(500).send(error.message);
})

app.listen(port, () => {
	console.log(`Server is up on port ${port}`);
});