import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { useAuth } from "../contexts/AuthContext";


export default function List() {
    const products = useLoaderData();


    console.log(products);


    return (

        <ul>
            {products.map(product => (
                <li key={product.id}>
                    <Link to={`/list/${product.id}`}>{product.name}</Link>
                </li>
            ))}
        </ul>

    )
}