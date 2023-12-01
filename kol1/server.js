const express = require('express');
const app = express();
const port = 3000;


const users = [
  { id: 1, name: 'Marcin', email: 'marcin@gmail.com', password: '1234' },
  { id: 2, name: 'Kamil', email: 'kamil@gmail.com', password: '1234' },
 
];


const chartData = {
  labels: [1500, 1600, 1700, 1750, 1800, 1850, 1900, 1950, 1999, 2050],
  datasets: [
    { data: [86, 114, 106, 106, 107, 111, 133, 221, 783, 2478], label: 'Africa', borderColor: '#3e95cd', fill: false },
    { data: [282, 350, 411, 502, 635, 809, 947, 1402, 3700, 5267], label: 'Asia', borderColor: '#8e5ea2', fill: false },
    { data: [168, 170, 178, 190, 203, 276, 408, 547, 675, 734], label: 'Europe', borderColor: '#3cba9f', fill: false },
    { data: [40, 20, 10, 16, 24, 38, 74, 167, 508, 784], label: 'Latin America', borderColor: '#e8c3b9', fill: false },
    { data: [6, 3, 2, 2, 7, 26, 82, 172, 312, 433], label: 'North America', borderColor: '#c45850', fill: false },
  ],
};


app.use(express.json());


app.get('/api/users', (req, res) => {
  res.json(users);
});


app.get('/api/user/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const user = users.find(user => user.id === userId);

  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ error: 'User not found' });
  }
});

app.get('/continents', (req, res) => {
    res.sendFile(__dirname + '/index.html');
  });



app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});


app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

