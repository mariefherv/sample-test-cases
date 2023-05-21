const express = require("express");

const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());

let users = [
    {
        name: "Jojo Joestart",
        age: 25,
        username: "Jojo"
    },
    {
        name: "Dio Brando",
        age: 23,
        username: "Dio"
    },
    {
        name: "Jotaro Kujo",
        age: 28,
        username: "Jotaro"
    }
]

// [SECTION] Routes and Controllers for USERS

app.get("/users", (req, res) => {
    console.log(users)
    return res.send(users);
});

app.post("/users", (req, res) => {
    console.log("hey")
    console.log(req.body)
    // add simple if statement that if the request body does not have property name, we will send message along with a 400 http status code (Bad Request)
    // hasOwnProperty() returns a boolean if the property name passed exists or does not exist in the given object
    if(!req.body.hasOwnProperty("name")){
        return res.status(400).send({
            error: "Bad Request - missing required parameter NAME"
        })
    }

    if(!req.body.hasOwnProperty("age")){
        return res.status(400).send({
            error: "Bad Request - missing required parameter NAME"
        })
    }
})

// Activity
let artists = [
    {
        name: "Taylor Swift",
        songs: ["ivy", "champagne problems"],
        album: "folklore",
        isActive: true
    },
    {
        name: "Lore",
        songs: ["Royals", "Team"],
        album: "Pure Heroine",
        isActive: true
    }
]

app.get("/artists", (req, res) => {
    return res.send(artists);
});

app.post("/artists", (req, res) => {

    // if everything is all good, return OK status
    if(req.body.hasOwnProperty("name") && (req.body.hasOwnProperty("songs") && req.body.songs.length !== 0) && req.body.hasOwnProperty("album") && (req.body.hasOwnProperty("isActive") && req.body.isActive === true)){
        return res.status(200).send({
            response: "OK"
        })
    }

    return res.status(400).send({
        error: "Bad Request - missing required parameter"
    })

    
    
})


app.listen(port,()=>console.log("API running at localhost:4000"))