// When using nodeJs


// let http =require("http")

// let server = http.createServer((req, res) => {
//    let obj;
//   if (req.url == "/news") {
//    obj = {
//       status: 1,
//       data: [{
//         newsTitle: 'ws',
//         newsDes: "hello newsletter"
//       },
//       {
//         newsTitle: 'IIP',
//         newsDes: "IIP sfkjie"
//       }
//       ]
//     }
//   }
//   res.end(JSON.stringify(obj))
//   if (req.url == "/about") {

//   }
//   if (req.url == "/") {

//   }
// })

// server.listen("8081")



// when using express

let express = require("express")

let app = express()
app.use(express.json())//frontend theke backend data patabe

let checkToken=(req,res,next)=>{
  console.log("Welcome")
  next();
}
app.use(checkToken)

app.get("/", (req, res) => {
  res.send({ status: 1, msg: "Home page API" })
})

app.get("/news", (req, res) => {
  res.send({
    status: 2,
    msg: "hello,i am from the news portal"
  })
})

app.get("/news/:id", (req, res) => {
  let currentId = req.params.id
  res.send("News Details API" + currentId)
})

app.post("/login", (req, res) => {
  console.log(req.body)

  res.status(200).json(
      {
      status: 1,
      msg: "Hello i am from login page",
      data: req.body,
      queryData:req.query
    }
  )

  // res.send(
  //   {
  //     status: 1,
  //     msg: "Hello i am from login page",
  //     data: req.body,
  //     queryData:req.query
  //   }
  // )
})
app.listen("8000")