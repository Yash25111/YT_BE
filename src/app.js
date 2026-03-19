//create server

const express = require("express")

const app = express()

//add a middlewere to conveet the undefine data in json  mean row data to express redable json
app.use(express.json())

const notes = []

///create a post api

app.post('/notes',(req, res)=>{
    notes.push(req.body)

    ///201 is use to create new recource
    res.status(201).json({
            message:"notes created successfully"
        }
    )
})


//create a get api

app.get("/notes",(req,res)=>{

    res.status(200).json({
        notes:notes
    })
})


///create delete api /notes/:index  :meand dynamic

app.delete("/notes/:index",(req,res)=>{

    const index = req.params.index


    delete notes[index];

    res.status(200).json({
        message : "notes delete successfully",
        index : index
    })


})


//start in server.js

module.exports = app