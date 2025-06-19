import { useLoaderData } from "react-router";
import { useState } from "react";

export default function Card() {
        const [count, setCount] = useState(1);
        const product = useLoaderData()
        console.log(product);
        function handleAdd() {
            setCount(count + 1);

        }
        function handleSubtract() {
            if (count > 1) {
                setCount(count - 1);
            }
        }
        

    return (
        <article className="container px-6 sm:mx-auto grid lg:grid-cols-2 gap-4 items-center my-12">
            <img className="justify-self-center w-3/4" src={product.image} alt="" />
            <div>
            <h2 className="font-semibold text-2xl mb-5 capitalize">{product.name}</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam libero qui laborum reprehenderit obcaecati voluptatum numquam voluptate iusto. Delectus, totam perspiciatis! Voluptatibus voluptatem mollitia doloribus ullam doloremque exercitationem pariatur officia sunt eos eum minima beatae labore expedita, suscipit dicta recusandae obcaecati totam laboriosam sed. Maxime alias quis suscipit tempore rerum asperiores optio. Suscipit vel nam cum deleniti iure fugiat tempore enim magnam fuga rem illo debitis corrupti, minima autem eum odit obcaecati aperiam, eveniet laudantium praesentium et accusamus reiciendis, ab ea. Officia, quo fuga? Cum incidunt a ipsam sint deleniti illo sapiente minus blanditiis quaerat officia consequuntur consectetur, culpa eveniet!</p>
            <p className="text-xl my-5 font-semibold">{new Intl.NumberFormat("en-GB", { style: "currency", currency: "GBP" }).format(product.price)}</p>
            <div className="flex gap-15 items-center">
            <span className="flex items-center gap-4">
            <button className="text-2xl font-bold" onClick={handleSubtract}>-</button>
            <p className="">{count}</p>
            <button className="text-2xl font-bold" onClick={handleAdd}>+</button>

            </span>
            <button className="bg-orange-600 text-white  py-2 px-20">Add to cart</button>
            </div>
            </div>
        </article>
    )
}