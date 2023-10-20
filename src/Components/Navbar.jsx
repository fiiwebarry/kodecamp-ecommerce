/* eslint-disable react/prop-types */
import Cart from "./Cart";
import { TiShoppingCart } from "react-icons/ti"

const Navbar = ({ addItem, setAddItem }) => {

    return (
        <div className="p-4 shadow-lg  mb-[20px]  ">
            <div className="container mx-auto w-[90%] flex justify-between">
                <h1 className="text-blue-500 font-semibold text-3xl font-poppins">GunFun</h1>
                <div className="text-[40px]">
                    <TiShoppingCart />
                    <p>{addItem.length}</p>
                </div>


            </div>
            <Cart addItem={addItem} setAddItem={setAddItem} />

        </div>


    )
}
export default Navbar;