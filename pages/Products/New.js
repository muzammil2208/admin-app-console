import Layout from "../../components/Layout"
export default function New()
{
    return(
    
    <Layout>
    <div className="flex flex-col w-[100%] gap-4 h-[100%]">
    <h2 className="text-blue-900 text-3xl flex w-[100%] justify-center"> Add Products</h2>
        <form className="flex flex-col gap-4 justify-evenly w-[100%] h-[100%]">
            <label>Name</label>
            <input type="text" placeholder="Product Name"></input>
            <label>Description</label>
            <textarea placeholder="product description">
            </textarea>
            <label>Price(USD)</label>
            <input type="number" placeholder="Product Name"></input>
            <button className=" bg-gray-400 px-3 py-2 rounded-lg hover:bg-blue-900 text-white">Add</button>
        </form>
    </div>
        
    </Layout>
    )
   
}