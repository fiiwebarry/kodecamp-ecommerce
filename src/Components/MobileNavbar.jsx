import { Link } from "react-router-dom"
import { GiHamburgerMenu } from "react-icons/gi"

const MobileNavbar = () => {
    return (
        <div className=" top-[0px] fixed w-[200px] h-[150px] lg:hidden md:hidden bg-[blue] z-50">
            <div className="">


                <div className="flex gap-4">
                    <div className="flex  flex-col gap-4 p-3">
                        <p className="mt-2 font-medium">Log in</p>
                        <Link to="/signUp">
                            <button className="bg-[blue] rounded text-[18px] text-[#FFFF] p-2">Sign up</button>
                        </Link>
                    </div>

                </div>



            </div>


        </div>
    )
}

export default MobileNavbar
