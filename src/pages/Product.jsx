import { useParams } from "react-router-dom"
import axios from "../API/axios";
import { useState, useEffect } from "react";
import { BsCart4 } from "react-icons/bs"
import { BsStarFill, BsStar } from "react-icons/bs"


const Product = () => {

    const { id } = useParams();
    const [isLoading, setIsLoading] = useState(false)
    const [product, setProduct] = useState([])

    const getProduct = async () => {

        try {
            setIsLoading(true);
            const response = await axios.get(`/products/${id}`)


            if (response.status === 200) {
                console.log(response)
                setProduct(response.data)
                setIsLoading(false)
            }
        }
        catch (error) {
            console.log(error);

        }


    };

    useEffect(() => {

        getProduct();
    }, [])

    const { title, image, price, rating, description } = product;

    return (
        <div>
            {isLoading ? (<div> <h1>Loading....</h1></div >) : (<div>
                <div className="rounded border bg-white shadow-lg w-[340px]" >

                    <div className=" px-4 pt-4 pb-10 gap-3 bg-white relative">

                        <img className=" w-[180px] h-[180px] mx-auto" src={image} />
                        <p className="mt-[2px] text-base font-semibold">{title}</p>
                        <p>{description}</p>
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
                    <div className="flex justify-end p-2">
                        <button className="px-3 py-2 border-2 border-solid rounded-lg bg-gray-50 border-red-900 text-red-800 flex  gap-2 items-center"> <BsCart4 />Add</button>
                    </div></div>
            </div>)
            }
        </div>

    )
}

export default Product
