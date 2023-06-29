import Layout from "@/components/Layout"
import {useRouter} from 'next/router'
import { useEffect,useState} from "react";
import axios from "axios";
import ProductForm from "@/components/ProductForm";
export default function DeleteProducts()
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
    function goback()
    {
        router.push('/Products');
    }
    async function deleteProduct()
    {
        await axios.delete('/api/Products?id='+id)
        .then(response => {
          console.log('User deleted successfully.', response.data);
        })
        .catch(error => {
          console.error('An error occurred while deleting the user.', error);
        });
        router.push('/Products');
    }
    return(
        <Layout>
            <h1 className="w-[100%] flex justify-center text-lg text-blue-900 font-bold">Delete Product</h1>
            <div className="flex justify-center flex-col items-center gap-2">
                <h2 className="text-lg font-bold"> Do you realy want to delete"{ProductInfo?.title}" ?</h2>
                <div className="flex gap-2">
                <button onClick={deleteProduct} className="bg-red-500 rounded-md p-2 text-white">Yes</button>
                <button onClick={goback} className="bg-green-500 rounded-md p-2 text-white">No</button>
                </div>   
            </div>
        </Layout>
    );
}