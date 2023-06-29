import Layout from "@/components/Layout"
import {useRouter} from 'next/router'
import { useEffect,useState} from "react";
import axios from "axios";
import ProductForm from "@/components/ProductForm";
export default function EditProducts()
{
    const [ProductInfo,setProductInfo]=useState(null);
    const router=useRouter();
    const {id}=router.query;
    useEffect(()=>{
        if(!id)
        {
            return;
        }
        axios.get('/api/Products?id='+id).then(response=>{
            
            setProductInfo(response.data)
        });
    },[id]);
    
    return(
        <Layout>
            <h1 className="w-[100%] flex justify-center text-lg text-blue-900 font-bold">Edit Product</h1>
            {ProductInfo && (<ProductForm {...ProductInfo}/>)}
            
        </Layout>
    );
}