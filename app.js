require('dotenv').config();
const express = require('express');
const PORT = 8005


const app = express();
app.use(express.json())


app.get('/', (req, res, next) => {
   res.send('Hello fromm express');
});

app.listen(PORT, () => {
   console.log('Running at port:', PORT)
})
