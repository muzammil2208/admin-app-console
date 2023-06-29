import axios from "axios";

import {useState} from 'react';
import {useRouter} from 'next/router';

export default function ProductForm({
    _id:currentId,
    title:currentTitle,
    description:currentDescription,
    price:CurrentPrice
})
{
    
    const router=useRouter();
    const [title,setTtitle]=useState(currentTitle||'');
    const [description,setDescription]=useState(currentDescription||'')
    const [price,setPrice]=useState(CurrentPrice||'');
    const [isEmptyFlag,setisEmptyFlag]=useState(false);
    async function createProduct(ev)
    {
        ev.preventDefault();
        const data={title,description,price}
        if(currentId)
        {
            console.log("update flow is getting triggered")
            await axios.put('/api/Products',{...data,currentId});
        }
        else
        {
            const data={title,description,price};
            await axios.post('/api/Products',data);
            
        }
        setisEmptyFlag(true);
    }
    if(isEmptyFlag)
    {
        router.push('/Products');
    }
    return(
    
    <div className="flex flex-col w-[100%] gap-4 h-[100%]">
        <form className="flex flex-col gap-4 justify-evenly w-[100%] h-[100%]" onSubmit={createProduct}>
            <label>Name</label>
            <input type="text" value={title} placeholder="Product Name" onChange={ev=>setTtitle(ev.target.value)}></input>
            <label>Description</label>
            <textarea value={description} onChange={ev=>setDescription(ev.target.value)} placeholder="product description"/>
            <label>Price(USD)</label>
            <input value={price} onChange={ ev =>setPrice(ev.target.value)} type="number" placeholder="Product Name"></input>
            <button  className=" bg-gray-400 px-3 py-2 rounded-lg hover:bg-blue-900 text-white" type="submit">Add</button>
        </form>
    </div>
        
    )
   
}