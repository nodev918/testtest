const express = require("express")          // 引入express套件
const app = express()
const PORT = 5556

const path = require('path')

app.use(express.static(path.resolve(__dirname,'build')))
app.get('/',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'build','index.html'))
})

app.listen(PORT,()=>{
    console.log(`server listening on: ${PORT}`)
})
