import { useEffect, useState } from "react"
import { Link, useLoaderData } from "react-router"

export default function SortBy() {

    const products = useLoaderData()
    const [productCategory, setProductCategory] = useState([])
    const [productCat, setProductCat] = useState([])
    const [isChecked, setIsChecked] = useState([])
    const [selectedProduct, setSelectedProduct] = useState([])

    const [isChecked2, setIsChecked2] = useState(false);
    
    

    useEffect(() => {

        // console.log(isChecked);
        if (isChecked) {
            const data = products.filter(item => item.category.includes(`${productCat}`))
            setProductCategory(data)
        } else {
            setProductCategory(products)
            // console.log("C R A C K E R S");

        }
    }, [productCat, isChecked])

    useEffect(()=>{
        
        // console.log(selectedProduct);
        
    },[selectedProduct])


   

    function actAmplifier(element) {

        if(element.target.checked){

            let sortList = selectedProduct.filter(prod => prod.id !== element.target.id)


            console.log(sortList);

            // console.log(element.target.id);
                
             setSelectedProduct(prevSelected => [...prevSelected, element.target])
            //  setSelectedProduct(prevSelected => [...prevSelected, element.target])
        }else{



        }
        //console.log(element.target.checked);
        
        // setSelectedProduct(element.target)
       

        setProductCat(element.target.value)
        setIsChecked(element.target.checked);

       

    }

    

    return (
        <>
            <div className="container sm:mx-auto grid md:grid-cols-2 lg:grid-cols-4 text-center">
                <section className="container flex flex-col w-50 pt-7 bg-gray-300 h-80" >
                    <h2 className="pb-2">Sort by</h2>
                    <label>Vælg for-forstærker
                        <input
                            onChange={actAmplifier}
                            type="checkbox"
                            id="forforstaerker"
                            name="forforstaerker"
                            value="forforstaerker"
                            
                            >
                        </input>
                    </label>
                    <label>Vælg højttaler
                        <input
                            onChange={actAmplifier}
                            type="checkbox"
                            id="hojttaler"
                            name="hojttaler"
                            value="hojttaler"
                            
                            >
                        </input>
                    </label>
                    <label>Vælg int-forstærker
                        <input
                            onChange={actAmplifier}
                            type="checkbox"
                            id="intforstaerker"
                            name="intforstaerker"
                            value="intforstaerker">
                        </input>
                    </label>
                    <label>Vælg roer forstærker
                        <input
                            onChange={actAmplifier}
                            type="checkbox"
                            id="roer-forstaerker"
                            name="roer-forstaerker"
                            value="roer-forstaerker">
                        </input>
                    </label>
                    <label>Vælg pladeafspiller
                        <input
                            onChange={actAmplifier}
                            type="checkbox"
                            id="pladespiller"
                            name="pladespiller"
                            value="pladespiller">
                        </input>
                    </label>
                    <label>Vælg effekt forstærker
                        <input
                            onChange={actAmplifier}
                            type="checkbox"
                            id="effektforstaerker"
                            name="effektforstaerker"
                            value="effektforstaerker">
                        </input>
                    </label>
                    <label>Vælg dvd afspiller
                        <input
                            onChange={actAmplifier}
                            type="checkbox"
                            id="dvd_afspiller"
                            name="dvd_afspiller"
                            value="dvd_afspiller">
                        </input>
                    </label>
                    <label>Vælg cd afspiller
                        <input
                            onChange={actAmplifier}
                            type="checkbox"
                            id="cd_afspiller"
                            name="cd_afspiller"
                            value="cd_afspiller">
                        </input>
                    </label>
                </section>
                <ul className="container sm:mx-auto grid md:grid-cols-2 lg:grid-cols-3 text-center col-span-3 ">
                    {productCategory && productCategory.map((product) => (

                        // <p key={`${product.id}`}>{`${product.category}`}</p>
                        <li className="container flex place-content-center p-2" key={product.id}>
                            <Link to={`/list/${product.id}`}>
                                <figure className="place-content-center h-70">
                                    <img className="w-full object-cover" src={`${product.image}`} alt="product-image" />
                                </figure>
                                <p>{product.name}</p>
                                <p>{product.price}</p>
                                <button className="bg-orange-600 text-white p-1.5">Read more</button>
                            </Link>
                        </li>

                    ))}
                </ul>
            </div>
        </>

    )

}