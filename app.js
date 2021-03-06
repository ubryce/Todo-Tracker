const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const userRouter = require('./routes/User');
const path = require('path')
app.use(cookieParser());
app.use(express.json());

mongoose.connect('mongodb+srv://bryce:1234@cluster0-wbncb.mongodb.net/trades?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify:false
}, ()=>{
    console.log('successfully connected to database');
});

app.use('/user',userRouter);

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'));
    app.get('*',(req, res)=>{
        res.sendFile(path.resolve(__dirname,'client','build','index.html'));
    }
    )
}

const port = process.env.PORT || 5000;
app.listen(port);
