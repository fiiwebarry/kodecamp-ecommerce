/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"
import { AiFillCloseSquare } from "react-icons/ai"


const MobileNavbar = ({ setShow, show }) => {
    return (
        <div className=" top-[0px] fixed w-[200px] h-[150px] lg:hidden md:hidden bg-[blue] z-50">
            <div className="">

                < AiFillCloseSquare className="flex ml-[150px] mt-2 text-[30px]" onClick={() => setShow(!show)} />
                <div className="flex gap-4">
                    <div className="flex  flex-col gap-4 p-2">
                        <Link to="/signIn"><p className="mt-2 font-medium text-[20px] ">Log in</p></Link>
                        <Link to="/signUp">
                            <button className="bg-[#ffff] rounded text-[18px] text-[black] p-2 mb-5">Sign up</button>
                        </Link>
                    </div>

                </div>



            </div>


        </div>
    )
}

export default MobileNavbar
