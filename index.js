const express=require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send('Hello, World!');
});

app.get('/getName',(req,res)=>{
    res.send('Hello again, I am Node!');
});

app.get('/api/courses/:id',(req,res)=>{
    res.send(req.params.id);
})
app.get('/api/posts/:year/:month',(req,res)=>{
    // res.send(req.params);
    res.send(req.query);
})

const port=process.env.PORT ||3000
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

// app.post();
// app.put();
// app.delete();