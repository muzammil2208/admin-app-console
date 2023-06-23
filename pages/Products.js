import Link from 'next/link'
import Layout from '../components/Layout'
import { useEffect,useState } from 'react';
import axios from 'axios';
export default function Products()
{    
     const [Products,setProducts]=useState([]);
     useEffect(()=>{

          axios.get('/api/Products').then(response=>{
               setProducts(response.data);
          });
     },[]);

    return(
        <Layout>
        <div className="flex flex-col w-full gap-1 ">
        <Link href={"/Products/New"} className="products_btn">
                 Add Product
          </Link> 
          <table className="products_table">
               <thead>
                    <tr>
                         <td>Prdouct Name</td>
                         <td>Actions</td>
                    </tr>
               </thead>
               <tbody>
                    {Products.map(product=>(  
                          <tr>
                              <td>{product.title}</td>
                              <td><button><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                              </svg>
                              Edit</button></td>
                         </tr>
                    ))}
               </tbody>
          </table>
        </div>
      
         
        </Layout>
    )
}