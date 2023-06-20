const { Schema, model ,models } = require("mongoose");

const productSchema=new Schema({
    title: {type:String,required:true},
    description: String,
    price: {type:Number,required:true},

})

 export const Products =models.Products || model('Products',productSchema);
