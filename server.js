const express = require("express");
const oracledb = require("oracledb");
const app = express();
const PORT = 8080;

const dbConfig = {
  user: 'k0543413',
  password: 'Yuya1336#14',
  connectString: 'localhost:1522/xepdb1',
};
// sqlplus k0543413/Yuya1336#14@xepdb1

app.use(express.static('public'));

// フロントエンドからのリクエストを処理
app.get('/api/data', async (req, res) => {
  try {
    const connection = await oracledb.getConnection(dbConfig);
    
    if (value2 == "順位表") {
      const query = `SELECT * FROM RANKS WHERE SEASON_ID = :value1`;
    }else if (value2 == "得点王") {
      const query = `SELECT * FROM GOAL WHERE SEASON_ID = :value1`;
    }
    // else if (value2 == "アシスト王") {
    //   const query = `SELECT * FROM GOAL WHERE SEASON_ID = :value1`;
    // }else if (value2 == "最優秀GK賞") {
    //   const query = `SELECT * FROM GOAL WHERE SEASON_ID = :value1`;
    // }else if (value2 == "年間MVP") {
    //   const query = `SELECT * FROM GOAL WHERE SEASON_ID = :value1`;
    // }else if(value2 == "年間最優秀若手選手賞") {
    //   const query = `SELECT * FROM GOAL WHERE SEASON_ID = :value1`;
    // }

    const result = await connection.execute(query, { outFormat: oracledb.OUT_FORMAT_OBJECT });

    connection.release();

    res.json(result.rows);
  } catch (err) {
    console.error('Error retrieving data: ', err);
    res.status(500).json({ error: 'Error retrieving data' });
  }
});

// サーバー起動
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});