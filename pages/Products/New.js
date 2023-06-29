import axios from "axios";
import Layout from "../../components/Layout";
import {useState} from 'react';
import {useRouter} from 'next/router';
import ProductForm from '../../components/ProductForm'
export default function New()
{
    return(
        <Layout>
            <h1 className="w-[100%] flex justify-center text-lg text-blue-900 font-bold">New Product</h1>
            <ProductForm/>
        </Layout>
    )
   
}