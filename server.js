/*eslint no-console:0 */
'use strict';
const express = require('express');
// const path = require('path');
// const favicon = require('serve-favicon');
// const logger = require('morgan');
// const cookieParser = require('cookie-parser');
// const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || '8000';

console.log(__dirname + '/dist');
app.use(express.static(__dirname + '/dist'));

app.listen(port, function() {
	console.log('Listening on port ', port);
});