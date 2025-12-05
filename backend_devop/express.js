import express from 'express';

const app = express();

app.get('/',(req,res)=>{
    res.send("Hello this is from Backend Development");
})

app.listen(7007, () => {
  console.log('Server running at port number 7007');
});