/* eslint-disable react/prop-types */
import Cart from "./Cart";
import { useState } from "react";
import { TiShoppingCart } from "react-icons/ti"

const Navbar = ({ addItem, setAddItem }) => {

    const [isOpen, setIsOpen] = useState(false)

    const toggleCart = () => {

        setIsOpen(!isOpen)
    }

    return (
        <div className="p-4 shadow-lg  mb-[20px]  ">
            <div className="container mx-auto w-[90%] flex justify-between">
                <h1 className="text-[brown] font-semibold text-3xl font-poppins">KODECAMP<span className="text-[blue]"> ECOMMERCE</span ></h1>
                <div className="text-[40px] relative">
                    <TiShoppingCart onClick={toggleCart} />

                    <p className="bg-[orange] rounded w-5 h-5 pb-4 px-1 text-[15px] text-[#FFFF] absolute top-0  left-5">{addItem.length}</p>
                </div>


            </div>
            {isOpen && (<Cart className="fixed top-0 right-0 h-screen w-1/3" addItem={addItem} setAddItem={setAddItem} isOpen={isOpen} setIsOpen={setIsOpen} />
            )}

        </div>


    )
}
export default Navbar;