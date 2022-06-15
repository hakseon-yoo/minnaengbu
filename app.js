const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('라우터 구현 예정');
});

app.listen(port, () => {
    console.log(port, '번 포트로 서버 ON');
});