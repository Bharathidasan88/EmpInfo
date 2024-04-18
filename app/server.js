// app.js

const express = require('express');
const bodyParser = require('body-parser');
const { Sequelize, DataTypes } = require('sequelize');

const app = express();
const port = 3000;

// Create Sequelize instance
const sequelize = new Sequelize('database', 'username', 'password', {
  dialect: 'mysql',
  host: 'localhost',
});

// Define model
const Employee = sequelize.define('Employee', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  department: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

// Persist
app.post('/employees', async (req, res) => {
  try {
    const { name, age, department } = req.body;
    const employee = await Employee.create({ name, age, department });
    res.status(201).json(employee);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create employee' });
  }
});

// Validate
// You can add validation middleware here

// Control
app.get('/employees', async (req, res) => {
  try {
    const employees = await Employee.findAll();
    res.status(200).json(employees);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to retrieve employees' });
  }
});

// Start the server
app.use(bodyParser.json());
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
