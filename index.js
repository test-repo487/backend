const express = require('express')
const app = express()
const port = 3001
const cors = require('cors')

// app.use(cors({  origin: 'http://example.com',}))

app.use(express.static('dist'))
app.use((req,res,next) => {
    console.log("Middleware")
    console.log(req.headers);
    next()
}
)
// app.get('/', (req, res) => {
//     console.log(res);
    
//   res.send({title:"Hello world"})
// })

// console.log("express"+express);
// console.log("-------------------");

// console.log("app"+app);

app.get("/api/jokes",(req,res)=>{
    const jokes= [
        {
            id:1,
            title:"joke1",
        },
        {
            id:2,
            title:"joke2",
        },
        {
            id:3,
            title:"joke3",
        }
    ]
    res.send(jokes)
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
