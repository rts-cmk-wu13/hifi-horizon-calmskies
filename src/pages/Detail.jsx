import { useEffect, useState } from "react";
import { useParams } from "react-router"
import { useLoaderData } from "react-router";
export default function Detail() {

    const product = useLoaderData()

    return (
        <>
            <p>user details</p>
            <h2>{product.name}</h2>
        </>

    )
}