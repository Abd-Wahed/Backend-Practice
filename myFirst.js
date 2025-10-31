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

let express= require("express")

let app = express()

app.get("/",(req,res)=>{
  res.send({status:1,msg:"Home page API"})
})

app.listen("8000")