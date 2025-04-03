const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000

const months = ["January", "February", "March", "April", "May", "June", "July"];



app.listen(port, () => {
    console.log(`Server running on port ${port}...`);
})
app.use(express.urlencoded({extended: true}))
app.use(cors());





app.get("/modo1", (req, res, next) => {
    const idx = Math.floor(Math.random() * months.length);
    res.json({"mes": `${months[idx]}`});
})

app.get("/modo2", (req, res, next) => {
    res.json({"mes": `${req.query.teste}`})
});