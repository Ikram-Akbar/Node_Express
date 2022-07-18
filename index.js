const express = require("express");
const fs = require("fs");
const app = express();

const port = 5000;


// Create a route 

app.get("/", (req, res) => {
    res.send("hello, this is from node js ")
});

app.get('/new', (req, res) => {
    fs.readFile('./pages/index.html', (err, data) => {
        if (err) {
            console.log("Error:", err);
            res.send("something went wrong")
        }
        else {
            res.write(data)
            res.end()
        }
    })

})
app.listen(port, () => {
    console.log(`listing port  ${port}`);
})

app.get("/users", (req, res) => {
    res.send("users from node js")
    
})