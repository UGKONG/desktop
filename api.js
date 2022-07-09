const mysql = require('mysql');

// DB 연결 함수
const dbConnect = callback => {
  let db = mysql.createConnection({
    host: '127.0.0.1',
    port: 3306,
    user: 'root',
    password: '569800',
    database: 'desktop',
    multipleStatements: true,
    dateString: true
  }, err => err && console.log('DB가 연결되지 않았습니다.'));
  callback(db);
}
// 성공
const success = data => ({ result: true, msg: '성공', data });
// 실패
const fail = msg => ({ result: false, msg, data: null });

module.exports.getItem = (req, res) => {
  const id = req?.params?.id;

  dbConnect(db => {
    db.query(`
      SELECT
      ID, CURRENT_ID, TYPE, NAME, SIZE, EXT, URL,
      DATE_FORMAT(MODIFY_DATE, '%Y-%m-%d %H:%i:%s') AS MODIFY_DATE
      FROM tn_item
      WHERE CURRENT_ID = ${id};
    `, (err, result) => {
      db.end();
      if (err) {
        console.log(err);
        return res.send(fail('조회에 실패하였습니다.'));
      }
      res.send(success(result));
    })
  })
}