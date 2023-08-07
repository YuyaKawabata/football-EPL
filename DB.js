const express = require('express');
const oracledb = require('oracledb');
const app = express();
const port = 3000;

const dbConfig = {
  user: 'YOUR_DATABASE_USER',
  password: 'YOUR_DATABASE_PASSWORD',
  connectString: 'YOUR_ORACLE_CONNECTION_STRING', // e.g. localhost:1521/XE
};

app.get('/data', async (req, res) => {
  try {
    const connection = await oracledb.getConnection(dbConfig);
    const result = await connection.execute('SELECT * FROM YOUR_TABLE_NAME');
    await connection.close();
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error retrieving data from the database.');
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
