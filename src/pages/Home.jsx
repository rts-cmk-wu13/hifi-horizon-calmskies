import { Link, NavLink, useLoaderData } from "react-router"
import PopularProducts from "../Components/PopularProducts"
import NewsLetter from "../Components/NewsLetter"


export default function Home() {


    return (
        <>

            <figure>
                <img className="w-full" src="hifi-hero.png" alt="hifi hero image" />
            </figure>



            <PopularProducts />


            <section className="sm:mx-auto grid lg:grid-cols-4 text-center mb-10 bg-black text-white">
                <div className="col-span-2 text-left p-10">
                    <h3 className="font-semibold">What we do</h3>
                    <p>We look forward to customising a system to meet your needs.
                        We don’t favour one manufacturer over another – the only thing we do favour is making sure our customers get the right product that suits their needs and listening preferences. We will ask many questions in order to ensure that what you buy from us is tailored to you and you alone.If you are looking for a product not found in our demonstration showrooms or our online site, don’t fret as we have access to hundreds of brands.
                        One of our biggest pleasures of working in this industry is to see the smile on our customers’ faces when they finally hear and see the system of their dreams.</p>
                </div>
                <div className="col-span-2 text-left p-10">
                    <h3 className="font-semibold">Opening hours</h3>
                    <p>Edinburgh</p>
                    <p>2 Joppa Rd,Edinburgh, EH15 2EU
                        Monday to Friday: 10:00am - 5:30pm
                        Saturday: 10:00am - 5:30pm
                        Sunday: Closed</p>

                    <p>Falkirk</p>
                    <p>44 Cow Wynd, Falkirk, Central Region, FK1 1PU
                        Monday to Friday: 10:00am - 5:30pm
                        Saturday - By appointment only
                        Sunday: Closed</p>
                </div>
            </section>

            <section>
                <NewsLetter />
            </section>

        </>
    )
}
