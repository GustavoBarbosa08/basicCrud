var express = require("express")
var mysql = require("mysql2")
var app = express()

app.use(express.json())

const con = mysql.createConnection({
     host: 'localhost',
     user: 'root',
     password: 'root',
     database: 'newdb',
     port: 3308,
})


con.connect((err) =>{
     if(err){
          console.log(err)
     }else{
          console.log("connected successfully!")
     }
})


app.post('/post', (req, res)=>{
     const name = req.body.name;
     const id = req.body.id;
     const mark = req.body.mark;

     con.query('insert into mytable values(?,?,?)', [id,name,mark], (err, result)=>{
          if(err){console.log(err)}
          else{
               res.send("POSTED")
               console.log(result)
          }
     })
})

app.post('/postList', (req, res)=>{
     req.body.forEach(element => {
          const {id, name, mark} = element

          con.query('insert into mytable values(?,?,?)', [id, name, mark], (err, result)=>{
               if(err){console.log(err)}
               else{
                    res.send(result)
                    console.log(result)
               }
          })
     });
})


app.get('/get', (req,res)=>{
     con.query('select * from mytable', (err, result)=>{
          if(err){console.log(err)}
          else{
               res.send(result) //vai para o postman 
               const resposta = JSON.parse(JSON.stringify(result))
               console.log(resposta)
               console.log(resposta[0])
               console.log(resposta[3].name)
          } 
     })
})


app.get('/getbyid/:id', (req,res)=>{
     const getid = req.params.id //pega da URL

     con.query('select * from mytable where id=?', getid, (err, result)=>{
          if(err){console.log(err)}
          else{
               res.send(result)
               console.log(result)

               const resposta = JSON.parse(JSON.stringify(result))
               console.log(resposta)
               console.log(resposta[0].name)
               console.log(resposta[0].mark)
          }
     })
})




app.delete('/delete', (req,res)=>{
     const id = req.body.id //posso fazer com o params e colocar o id na URL
     con.query('delete from mytable where id=(?)', [id], (err, result)=>{
          if(err){console.log(err)}
          else{
               res.send(result)

          }
     })
})


app.put('/update/:id', (req, res)=>{
     const id = req.params.id
     const name = req.body.name
     const mark = req.body.mark

     con.query('UPDATE mytable SET name = ?, mark = ? WHERE id = ?', [name, mark, id], (err, result)=>{
          if(err){console.log(err)}
          else{
               res.send('UPDATED')
               console.log(result)
          }
     })
})

app.listen(3300, (err) =>{
     if(err){console.log(err)}
     else{console.log("Listenig on port 3300")}
})