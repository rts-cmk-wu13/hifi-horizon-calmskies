import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { useAuth } from "../contexts/AuthContext";
import Card from "../Components/Card";
import SortBy from "../Components/SortBy";

export default function List() {
    const products = useLoaderData();


    return (
        <>
        
        <ul className="container sm:mx-auto grid md:grid-cols-2 lg:grid-cols-3 text-center">   
        <SortBy/>
        </ul>
        </>
    )
}