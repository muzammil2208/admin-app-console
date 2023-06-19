const { Schema, model } = require("mongoose");

const productSchema=new Schema({
    title: {type:String,required:true},
    description: String,
    price: {type:Number,required:true},

})

 export const Products = model('Products',productSchema);
