const mongoose= require('mongoose')

const teamSchema=new mongoose.Schema({

        name:{
                type: String,
                require: true
        },
        email:{
                type: String,
                require: true,
                unique: true

        },
        phone:{
                type: String,
                require: true
        },
        password:{
                type: String,
                require: true
        },
        collegename:{
                type: String,
                required: true
        },
        github:{
                type: String,
                required: true

        },
        information:{
                type: String,
                required: true
        }
        
})


module.exports=mongoose.model('Teams',teamSchema)
 