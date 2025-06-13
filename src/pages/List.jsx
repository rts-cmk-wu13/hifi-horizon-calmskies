import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { useAuth } from "../contexts/AuthContext";
import Card from "../Components/Card";

export default function List() {
    const users = useLoaderData();


    return (

        // <h1>HER SKAL LISTEN VÆRE</h1>
        <Card/>
    )
}