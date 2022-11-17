import express from 'express';
const app = express();
const port = 3000;
app.get("/", (req, res) => {
    res.send("Ana Sayfa!");
});

app.listen(port, () => {
    console.log('application on running on port: ${port}');
});