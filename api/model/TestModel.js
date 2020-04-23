const mongoose =require('mongoose')
const shipSchema=mongoose.Schema({
        loadid:Number,	
        po:Number,	
        shipperno:String,	
        shippername:String,	 
        address:String,	
        city:String,	
        state:String,
        zipcode:Number       
})

module.exports=mongoose.model('Shipping',shipSchema);