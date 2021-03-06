const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(path.resolve('build')));

app.listen(process.env.PORT || 4000, () => {
	console.log('Listening');
});
