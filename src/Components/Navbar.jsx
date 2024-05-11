/* eslint-disable react/prop-types */
import { useState } from "react";
import { Link } from "react-router-dom"
import Cart from "./Cart";
import { GiHamburgerMenu } from "react-icons/gi"
import { TiShoppingCart } from "react-icons/ti"
import MobileNavbar from "./MobileNavbar";


const Navbar = ({ addItem, setAddItem }) => {

    const [isOpen, setIsOpen] = useState();
    const [show, setShow] = useState();


    const toggleCart = () => {

        setIsOpen(!isOpen)
    }
    const toggleNav = () => {

        setShow(!show)
    }

    return (
        <div className="p-4 shadow-lg  mb-[20px]  ">
            <div className="container mx-auto w-[90%] flex justify-between">
                <h1 className="text-[brown] font-semibold text-3xl font-poppins">GrittyBee<span className="text-[blue]"> Shopping Mall </span ></h1>
                <div className="flex gap-4">
                    <div className="flex gap-4">
                        <button className="lg:flex md:flex hidden bg-[blue] rounded text-[18px] text-[#FFFF] p-2">Log out</button>

                        <GiHamburgerMenu onClick={toggleNav} className="lg:hidden md:hidden flex text-[40px]" />
                    </div>
                    <div className="text-[40px] relative">
                        <TiShoppingCart onClick={toggleCart} />

                        <p className="bg-[orange] rounded w-5 h-5 pb-4 px-1 text-[15px] text-[#FFFF] absolute top-0  left-5">{addItem.length}</p>
                    </div>
                </div>



            </div>
            {isOpen && (<Cart className="fixed top-0 right-0 h-screen w-1/3" addItem={addItem} setAddItem={setAddItem} isOpen={isOpen} setIsOpen={setIsOpen} />
            )}
            {show && (<MobileNavbar className="lg:hidden md:hidden flex top-0 fixed" setShow={setShow} show={show} />)}


        </div>


    )
}
export default Navbar;