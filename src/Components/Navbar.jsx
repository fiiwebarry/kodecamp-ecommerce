
import { TiShoppingCart } from "react-icons/ti"

const Navbar = () => {

    return (
        <div className="p-4 shadow-lg  mb-[20px]  ">
            <div className="container mx-auto w-[90%] flex justify-between">
                <h1 className="text-blue-500 font-semibold text-3xl font-poppins">GunFun</h1>
                <div className="text-[40px]">
                    <TiShoppingCart />
                </div>


            </div>

        </div>


    )
}
export default Navbar;