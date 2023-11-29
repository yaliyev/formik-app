import axios from "axios";

let API_URL = "https://northwind.vercel.app/api/products";

export async function addProduct(product){
    return axios.post(API_URL,product);
}