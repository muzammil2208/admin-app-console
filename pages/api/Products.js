import mongooseConnect from "@/lib/mongoose";
import { Products } from "@/models/products";



export default async function handler(req, res)
{
   
   const {method}=req;
   if(method=='POST')
   {
      mongooseConnect();
      const title=req.body.title;
      const description=req.body.description;
      const price=req.body.price;
      const productDoc=await Products.create({
         title:title,
         description:description,
         price:price
      })
      res.json(productDoc);
   }
   else
   {
      res.json(req.method);
   }

    

}

