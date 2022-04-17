import express from "express";
import routes from './src/routes/routes';

const app = express();


app.get('/', (req, res) => {
    res.send('Well done!');
})

app.use('/',routes)

app.listen(4000, () => {
    console.log('The application is listening on port 3000!');
})