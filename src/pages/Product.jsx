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
            console.log(response);


            if (response.status === 200) {
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

    const { title, image, price, description } = product;

    return (
        <div className="flex justify-center mt-[120px]">
            {isLoading ? (<div> <h1>Loading....</h1></div >) : (<div>
                <div className="rounded border bg-white shadow-lg w-[840px] h-[500px]" >

                    <div className=" px-4 pt-4 pb-10 gap-3 bg-white relative">

                        <img className=" w-[180px] h-[180px] mx-auto" src={image} />
                        <p className="mt-[2px] text-base font-semibold">{title}</p>
                        <p>{description}</p>
                        <p> Price: ${price}</p>


                    </div>

                </div>
            </div>)
            }
        </div>

    )
}

export default Product
