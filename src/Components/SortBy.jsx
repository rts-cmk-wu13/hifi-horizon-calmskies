import { useEffect, useState } from "react"
import { Link, useLoaderData } from "react-router"

export default function SortBy() {

    const products = useLoaderData()
    const [productCategory, setProductCategory] = useState([])
    const [productCat, setProductCat] = useState([])
    const [isChecked, setIsChecked] = useState([])
   
    useEffect(()=>{

        console.log(isChecked);
        if(isChecked){
            const data = products.filter(item => item.category.includes(`${productCat}`))    
            setProductCategory(data)
        } else {
            setProductCategory(products)
            console.log("C R A C K E R S");
            
        }
    },[productCat, isChecked])


    function handleForstærker(element){
        setProductCat(element.target.value)
        setIsChecked(element.target.checked);
        
        // console.log(element.target.value);
        
    }

    return (
        <>
            {/* {productCategory && productCategory.map((product)=>(<p key={`${product.id}`}>{`${product.category}`}</p>))} */}
            {productCategory && productCategory.map((product)=>(
                
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
                <div className="container flex flex-col">

            <label>Vælg for-forstærker
                <input 
                    onChange={handleForstærker} 
                    type="checkbox" 
                    id="forstærker" 
                    name="forstærker" 
                    value="forstærker">
                    </input>
            </label>
            <label>Vælg højttaler
                <input 
                    onChange={handleForstærker} 
                    type="checkbox" 
                    id="højttaler" 
                    name="højttaler" 
                    value="højttaler">
                    </input>
            </label>
            <label>Vælg int-forstærker
                <input 
                    onChange={handleForstærker} 
                    type="checkbox" 
                    id="intforstærker" 
                    name="intforstærker" 
                    value="intforstærker">
                    </input>
            </label>
            <label>Vælg roer forstærker
                <input 
                    onChange={handleForstærker} 
                    type="checkbox" 
                    id="roer-forstærker" 
                    name="roer-forstærker" 
                    value="roer-forstærker">
                    </input>
            </label>
            <label>Vælg pladeafspiller
                <input 
                    onChange={handleForstærker} 
                    type="checkbox" 
                    id="pladeafspiller" 
                    name="pladeafspiller" 
                    value="pladeafspiller">
                    </input>
            </label>
            <label>Vælg effekt forstærker
                <input 
                    onChange={handleForstærker} 
                    type="checkbox" 
                    id="effektforstærker" 
                    name="effektforstærker" 
                    value="effektforstærker">
                    </input>
            </label>
            <label>Vælg dvd afspiller
                <input 
                    onChange={handleForstærker} 
                    type="checkbox" 
                    id="dvd_afspiller" 
                    name="dvd_afspiller" 
                    value="dvd_afspiller">
                    </input>
            </label>
            <label>Vælg cd afspiller
                <input 
                    onChange={handleForstærker} 
                    type="checkbox" 
                    id="cd_afspiller" 
                    name="cd_afspiller" 
                    value="cd_afspiller">
                    </input>
            </label>
                </div>
        </>
       
    )

}