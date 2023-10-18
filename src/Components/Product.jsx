import axios from "../API/axios";

import { useEffect, useState } from "react";




const Products = () => {

    const [isLoading, setIsLoading] = useState(false)
    const [products, setProducts] = useState([])

    const getProducts = async () => {

        try {
            setIsLoading(true);
            const response = await axios.get("/products")
            setProducts(response.data)
        }
        catch (error) {
            console.log(error);

        }


    };

    useEffect(() => {

        getProducts();
    }, [])
    return (<div>

        <div>
            {products.map((product) => {
                const { id, title, image, price } = product;
                return (
                    <div className="rounded border-indigo-600" key={id} >
                        <p>title:{title}</p>
                        <img className="w-[20px]" src={image} />
                        {price}

                    </div>
                )
            })}
            Products</div>

    </div>)
}

export default Products;