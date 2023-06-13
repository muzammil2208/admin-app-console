import Link from 'next/link'
import Layout from '../components/Layout'
export default function Products()
{
    return(
        <Layout>
        <div className="flex flex-col gap-1 h-[100%] justify-between">
        <Link href={"/Products/New"} className="products_btn">
                 Add Product
            </Link>
            <Link href={"/Products/Update"} className="products_btn">
                 Update Product
            </Link>
            <Link href={"/Products/Delete"} className="products_btn">
                 Delete Product
            </Link>
            <Link href={"/Products/View"} className=" products_btn">
                 View Products
            </Link>
        </div>
         
        </Layout>
    )
}