import axios from "axios";

import {useState} from 'react';
import {useRouter} from 'next/router';

export default function ProductForm({
    _id:currentId,
    title:currentTitle,
    description:currentDescription,
    price:CurrentPrice,
    images,
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
    function uploadImages(ev)
    {
        console.log(ev);
    }
    if(isEmptyFlag)
    {
        router.push('/Products');
    }
    return(
    
    <div className="flex flex-col w-[100%] gap-4 h-[100%]">
        <form className="flex flex-col gap-4 justify-evenly w-[100%] h-[100%] " onSubmit={createProduct}>
            <label>Name</label>
            <input type="text" value={title} placeholder="Product Name" onChange={ev=>setTtitle(ev.target.value)}></input>
            <label>Description</label>
            <textarea rows="4" cols="50" value={description} onChange={ev=>setDescription(ev.target.value)} placeholder="product description"/>
            <label>Product Images</label>
            <div className="flex flex-col">
                <label className="cursor-pointer text-gray-800 text-sm flex bg-gray-400 w-[15%] p-2 rounded-lg justify-center items-center gap-2">
                    <span>Upload</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                    </svg>
                    <input type="file" onChange={uploadImages} className="hidden"></input>
                </label>

                {!images?.length && (
                    <div>No images of the product present</div>)
                }
            </div>
            <label>Price(USD)</label>
            <input value={price} onChange={ ev =>setPrice(ev.target.value)} type="number" placeholder="Product Name"></input>
            <button  className=" bg-gray-400 px-3 py-2 rounded-lg hover:bg-blue-900 text-white" type="submit">Add</button>
        </form>
    </div>
        
    )
   
}