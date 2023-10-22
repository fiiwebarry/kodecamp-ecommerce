import axios from "../API/axios";
import { Link } from "react-router-dom";
import { BsCart4 } from "react-icons/bs"
import { BsStarFill, BsStar } from "react-icons/bs"


import { useEffect, useState } from "react";





// eslint-disable-next-line react/prop-types
const Products = ({ addItem, setAddItem }) => {

    const [isLoading, setIsLoading] = useState(false)
    const [products, setProducts] = useState([])

    const getProducts = async () => {

        try {
            setIsLoading(true);
            const response = await axios.get("/products")
            setProducts(response.data)
            if (response.status === 200) {
                setIsLoading(false)
            }
        }
        catch (error) {
            console.log(error);

        }


    };

    const addProduct = (product) => {
        setAddItem([...addItem, { ...product, quantity: 1, }])


    }

    useEffect(() => {

        getProducts();
    }, [])
    return (<div className="container mx-auto w-[90%]">


        {isLoading ? (<div>
            <h1>Loading.........</h1>
        </div>) :

            <div className="grid  md:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
                {products.length > 0 && products.map((product) => {
                    const { id, title, image, description, price, rating } = product;
                    return (
                        <div className="rounded border bg-white shadow-lg w-[340px]" key={id}>



                            <div className=" px-4 pt-4 pb-10 gap-3 bg-white relative">

                                <img className=" w-[180px] h-[180px] mx-auto" src={image} />


                                <p className="mt-[2px] text-base font-semibold">{title.slice(0, 30)}</p>
                                <p>{description.slice(0, 50)}</p>
                                <p> Price: ${price}</p>
                                <p>{rating.rate}</p>
                                <p className="flex"> {[
                                    ...Array(Math.round(rating.rate))].map((e, i) =>

                                        (<BsStarFill key={i} className="text-orange-500" />))
                                }
                                    {[
                                        ...Array(5 - Math.round(rating.rate))].map((e, i) =>

                                            (<BsStar key={i} />))}
                                </p>





                            </div>


                            <div className="flex justify-between p-2">
                                <div className="flex justify-end p-2">
                                    <button onClick={() => addProduct(product)} className="px-3 py-2 border-2 border-solid rounded-lg bg-[#15158d] border-[#15158d] text-[#ffff] flex  gap-2 items-center"> <BsCart4 />Add</button>
                                </div>
                                <Link
                                    to={`//${id}`}>
                                    <h2 className="mt-2 px-3 py-2 border-2 border-solid rounded-lg bg-[brown] border-[brown] text-[#ffff] flex  gap-2 items-center">View Product</h2>
                                </Link>
                            </div>
                        </div>

                    )
                })}
            </div>}


    </div>)
}

export default Products;