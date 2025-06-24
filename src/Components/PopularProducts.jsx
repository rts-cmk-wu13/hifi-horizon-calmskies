import { useLoaderData, Link } from "react-router";

export default function PopularProducts() {

    const products = useLoaderData();

    console.log(products);

    return (
        <>
            <div className="flex mx-10 my-10">
                <p className="w-full text-left text-lg font-semibold">Popular products</p>
                <button className="bg-orange-600 text-white p-1.5 w-50">See all products</button>
            </div>
            <ul className="container sm:mx-auto grid md:grid-cols-2 lg:grid-cols-4 text-center mb-10">
                {products.map((product, index) => index < 4 && (
                    <li className="flex flex-col items-center place-content-center p-2 mb-5" key={product.id}>
                        <Link to={`/list/${product.id}`}>
                            <figure className="w-40 h-40 flex items-center justify-center overflow-hidden mb-2">
                                <img className="w-full h-full object-cover" src={product.image} alt="product-image" />
                            </figure>
                            <p>{product.name}</p>
                            <p>{product.price}</p>
                            <button className="bg-orange-600 text-white p-1.5">Read more</button>
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    );
}