import { useLoaderData } from "react-router";

export default function Card() {

        const product = useLoaderData()

    return (
        <div>
            <img src={product.image} alt="product-image" />
            <p>{product.name}</p>
            <p>{product.price}</p>
            <button className="bg-orange-600">Read more</button>
        </div>
    )
}