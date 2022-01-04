const express=require('express')
const mongoose=require('mongoose')
const teamRouter=require('./routes/team')
const bodyParser=require('body-parser')
const Team=require('./models/team')


const app=express()


mongoose.connect('mongodb://localhost/team',{useNewUrlParser: true,useUnifiedTopology: true});

app.set('view engine','ejs')
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({extended: true}));
app.get("/",(req,res)=>{

        res.render('team/login');

})

app.use('/team',teamRouter);

app.listen(4000);