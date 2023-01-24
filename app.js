const express = require("express")
const app = express()

app.get("/", (req, res) => {
    res.send("Everything is ok!")
})


app.listen(3000, () => {
    console.log("Server is working on port 3000")
})