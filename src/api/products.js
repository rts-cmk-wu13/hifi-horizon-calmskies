
import queryClient from "../queryClient";
import { redirect } from "react-router";

export async function getProducts() {



    return queryClient.fetchQuery({
        queryKey: ['products'],
        queryFn: async function () {
            const response = await fetch("https://hifi-api-uytm.onrender.com/products");
            if (!response.ok) {
                throw new Error({ message: 'Den er helt gal' });
            }

            return response.json();
        }

    });
}

export async function getProduct({ params }) {
    const { id } = params;
    return queryClient.fetchQuery({
        queryKey: ['user', id],
        queryFn: async function () {
            const response = await fetch(`https://hifi-api-uytm.onrender.com/products/${id}`);
            if (!response.ok) {
                throw new Error({ message: 'Den er helt gal' });
            }
            return response.json();
        }
    });
}


"http://localhost:4000"