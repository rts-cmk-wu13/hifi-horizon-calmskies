import { useEffect, useState } from "react";
import { useParams } from "react-router"
import { useLoaderData } from "react-router";
import Card from "../Components/Card"
export default function Detail() {


    return (
        <>
        <h1 className="container px-6 sm:mx-auto mt-8 text-gray-500 text-4xl font-semibold uppercase">Product</h1>
        <Card/>
        </>

    )
}