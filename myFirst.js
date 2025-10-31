let http =require("http")

let server = http.createServer((req, res) => {
   let obj;
  if (req.url == "/news") {
   obj = {
      status: 1,
      data: [{
        newsTitle: 'ws',
        newsDes: "hello newsletter"
      },
      {
        newsTitle: 'IIP',
        newsDes: "IIP sfkjie"
      }
      ]
    }
  }
  res.end(JSON.stringify(obj))
  if (req.url == "/about") {

  }
  if (req.url == "/") {

  }
})

server.listen("8081")