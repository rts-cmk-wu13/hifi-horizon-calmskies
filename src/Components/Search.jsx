
import { FaSearch } from 'react-icons/fa';

import { useState, useEffect } from "react"
import { Link } from "react-router";


export default function Search() {
    const baseUrl = "https://hifi-api-uytm.onrender.com"
    const [products, setProducts] = useState([]);
    const [query, setQuery] = useState("");

    useEffect(() => {
        const handler = setTimeout(() => {
            fetch(`${baseUrl}/products`)
                .then((res) => res.json())
                .then((data) => setProducts(data))
                .catch((err) => console.error("Search error:", err));
        }, 500);

        return () => clearTimeout(handler);
    }, [query]);

    // Filter produkter efter query
    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(query.toLowerCase())
    );


    return (

        <div className="search relative inset-0">
            <input
                type="search"
                className="bg-white text-black p-1 text-justify rounded-sm"
                placeholder="Search product..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />

            <img
                src="src/assets/search-icon.png"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 pointer-events-none"
                alt="Search Icon"
            />
            {query && filteredProducts.length > 0 && (
                <ul className="absolute bg-gray-100 text-black border border-gray-300 mt-1 w-full rounded shadow z-10">
                    {filteredProducts.map((item) => (
                        <li
                            key={item.id}
                            className="p-2 hover:bg-gray-100 cursor-pointer"
                            onClick={() => {
                                setQuery("");
                            }}
                        >
                            <Link to={`/list/${item.id}`}>{item.name}</Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

