const app = require("./app");
const port = 2121

// app.get('/', (req, res) => {
//   res.sendFile(__dirname + '/home.html');
// });

// app.get('/summary', (req, res) => {
//     res.sendFile(__dirname + '/summary.html');
//   });

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})