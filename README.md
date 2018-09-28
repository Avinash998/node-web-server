# node-web-server ![CI status](https://img.shields.io/badge/build-passing-brightgreen.svg)

node-web-server is amazing template/project structure for learning about express server, hbs front end, for logging your server request etc. Devloped in node.js.

## Installation

### Requirements
* Node 8 or latest
* npm 6 or latest

`$ cd to_your_folder`

`$ git clone https://github.com/Avinash998/node-web-server.git`

`$ npm install`

## Usage

```javascript
// To start the server
node server.js

```
open webbrowser and type url 'localhost:3000'
and its ready to go, and explore

## Deployment
click link for the project url [https://fierce-shelf-96857.herokuapp.com/](https://fierce-shelf-96857.herokuapp.com/)

## Development
server logging request before every every route
```javascript
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
```
maintainance page
```javascript
app.use((req,res,next) => {
	res.render('maintance.hbs');
	next();
});
```
accessing static html pages
```javascript
app.use(express.static(__dirname+'/public'));
```
Helper functions
```javascript
hbs.registerHelper('getCurrentYear', () => {
	return new Date().getFullYear();
});
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
