const express = require('express');
require('dotenv').config();
//const cors = require('cors');
const connectDB = require('./db/connectDB');
const listRoutes = require('./routes/listRoutes');
const taskRoutes = require('./routes/taskRoutes');

const app = express();
connectDB();
app.use(express.json());
// app.use(cors({
//     credentials:true,
//     origin: ['http://localhost:3000']
// }));

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.use(listRoutes);
app.use(taskRoutes);

app.listen(process.env.PORT);