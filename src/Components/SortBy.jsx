import { useEffect, useState } from "react"
import { Link, useLoaderData } from "react-router"

export default function SortBy() {

    const products = useLoaderData()
    const [productCategory, setProductCategory] = useState([])
    const [productCat, setProductCat] = useState([])
    const [isChecked, setIsChecked] = useState([])
    const [selectedProduct, setSelectedProduct] = useState([])
    const [selectedinput, setSelectedinput] = useState([]); // Indeholder de valgte input-elementer

// Når data hentes første gang
  useEffect(() => {
    if (products) {
        // console.log(products);
        
      setProductCat(products);
    }
  }, [products]);
    let key = "category"
    useEffect(() => {
        
        if (selectedinput.length > 0) {
        console.log(selectedinput);

      const filteredProducts = products.filter(product =>
        selectedinput.some(inputId => product[key].toLowerCase() === inputId.toLowerCase())
      );
      setProductCat(filteredProducts);
    } else {
      setProductCat(products); // Hvis intet valgt, vis alle
    }
  }, [selectedinput]);
    // useEffect(() => {

    //     console.log(selectedinput);
    //     console.log(productCat);    
    //     if (isChecked) {
    //         const data = products.filter(item => item.category.includes(`${productCat}`))
    //         setProductCategory(data)
    //     } else {
    //         setProductCategory(products)
    //         // console.log("C R A C K E R S");

    //     }
    // }, [productCat, isChecked, selectedinput])

     const actAmplifier = (inputCheckBox) => {
        const element = inputCheckBox.target;
        const { checked, id } = element
        checked ? setSelectedinput((prev) => [...prev, id]) : setSelectedinput((prev) => prev.filter((el) => el !== id))
    };

    // function actAmplifier(element) {

    //      const elementTarget = element.target;

    //     if (elementTarget.checked) {
    //         // Tilføj til listen
    //         setSelectedinput((prev) => [...prev, elementTarget]);
    //         // console.log(productCat);
    //         // setProductCat((prev)=> [...prev, productCat])

    //     } else {
    //         // setProductCat((prev)=> [...prev, productCat])
    //         // Fjern fra listen
    //         setSelectedinput((prev) => prev.filter((el) => el !== elementTarget));
    //     }
       
    //     setProductCat(element.target.value)
    //     setIsChecked(element.target.checked);
    // }

    

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
                    {productCat && productCat.map((product) => (

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