const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));
 
// app.get('/', function (req, res) {
//   res.send({
//         Nombre: 'Andres Venegas',
//         Edad: 25 
//     });
// });
 
app.listen(3000, () => { console.log('Server listen at port 3000') });