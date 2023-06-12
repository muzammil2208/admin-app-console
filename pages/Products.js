import Link from 'next/link'
import Layout from '../components/Layout'
export default function Products()
{
    return(
        <Layout>
        <div className="grid grid-cols-2 gap-3 w-[100%]">
        <Link href={"/Products/new"} className=" w-45 h-45 py-1 px-2 flex justify-center items-center bg-gray-300 rounded-lg">
                 Add Product
            </Link>
            <Link href={"/Products/update"} className=" w-50 py-1 px-2 h-10 flex justify-center items-center bg-gray-300 rounded-lg">
                 Update Product
            </Link>
            <Link href={"/Products/delete"} className=" w-50 py-1 px-2 h-10 flex justify-center items-center bg-gray-300 rounded-lg">
                 Delete Product
            </Link>
            <Link href={"/Products/view"} className=" w-50 py-1 px-2 h-10 flex justify-center items-center bg-gray-300 rounded-lg">
                 View Products
            </Link>
        </div>
         
        </Layout>
    )
}