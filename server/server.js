import express from 'express';
import cors from 'cors';


const app = express()
app.use(cors())

app.get('/', (req,res) => {
    res.send("DEFAULT PAGE")
})

app.listen(1888, () => {
    console.log("listening on port 1888")
})