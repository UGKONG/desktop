const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

// 엔진 셋팅
app.use(bodyParser());
app.use(cors());

// API 함수
const {
  getItem,
  getItemAll,
} = require('./api.js');

// 라우터
app.get('/api/item/:id', getItem);
app.get('/api/item', getItemAll);

// 서버 실행
app.listen(8080, () => console.log('Node Server Start!!'));