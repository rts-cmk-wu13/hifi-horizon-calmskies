import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { useAuth } from "../contexts/AuthContext";
import Card from "../Components/Card";

export default function List() {
    const products = useLoaderData();


    console.log(products);


    return (

        <ul className="container sm:mx-auto grid md:grid-cols-2 lg:grid-cols-4 text-center">
            {products.map(product => (
                <li className="container flex place-content-center" key={product.id}>
                    <Link to={`/list/${product.id}`}>
                        <img src={`${product.image}`} alt="product-image" />
                        <p>{product.name}</p>
                        <p>{product.price}</p>
                        <button className="bg-orange-600 text-white p-1.5">Read more</button>
                    </Link>
                </li>
            ))}
        </ul>

    )
}