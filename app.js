require('dotenv').config();
const express = require('express');



const app = express();
app.use(express.json())


app.get('/', (req, res, next) => {
   res.send('Hello fromm express');
});

app.listen(process.env.PORT, () => {
   console.log('Running at port:', process.env.port)
})