import desk from "/src/assets/Images/amico.svg";
import { useEffect, useState } from "react";
import {
    AiOutlineMail,
    AiOutlineEye,
    AiOutlineEyeInvisible,
} from "react-icons/ai";
import { Link } from "react-router-dom";


const SignIn = () => {
    const [userDetails, setUserDetails] = useState({})
    const [showPassword, setshowPassword] = useState(false);


    useEffect(() => {

        const user = localStorage.getItem("register")
        setUserDetails(JSON.parse(user))
    }, [])

    return (
        <section className="">
            <div className=" lg:flex  md:flex  md:flex-col flex flex-col container mx-auto w-[85%] lg:gap-[120px]  gap-4 pt-[110px]">
                <div className="">
                    <img src={desk} />
                </div>
                <div className="pt-3">
                    <div
                        style={{ boxShadow: "5px 10px 20px 0px rgba(0, 0, 0, 0.25)" }}
                        className="  lg:w-[500px] sm:flex-1  bg-[#f3f3f3] sm:mb-0 rounded-3xl px-10 sm:px-7 md:px-12 py-8 flex flex-col gap-5"
                    >
                        <h2 className="text-3xl text-[brown] font-lobster text-center">
                            KodeCamp <span className="text-[blue]">Ecommerce</span>
                        </h2>
                        <h4 className="font-plus-jakarta-sans text-2xl font-semibold text-center">
                            Sign in  Account
                        </h4>
                        <p className="font-georgia text-sm  text-center">
                            Shop online and be part of the movement
                        </p>
                        <form action="" className="flex flex-col gap-6">



                            <label
                                className="font-medium text-xl font-plus-jakarta-sans"
                                htmlFor="email"
                            >
                                Email
                            </label>
                            <div className="relative">
                                <input
                                    name="email"
                                    type="email"
                                    placeholder="example@gmail.com"
                                    className="w-full border bg-transparent  rounded-md outline-none p-2.5 leading-none font-medium text-lg placeholder:text-[#C8C8DC]"
                                // {...register('email')}
                                />
                                <AiOutlineMail className="absolute text-lg right-4 top-3.5" />
                            </div>
                            {/* <p className='text-red-500'>{errors.email?.message}</p> */}

                            <div>
                                <label
                                    className="font-medium text-xl font-plus-jakarta-sans"
                                    htmlFor="password"
                                >
                                    Password
                                </label>
                                <div className="relative">
                                    <input
                                        name="password"
                                        type={showPassword ? "text" : "password"}
                                        placeholder="***********"
                                    // className={`w-full border ${errors.password ? 'border-red-500' : 'border-[#0A0A29]'} bg-transparent mt-2 rounded-md outline-none p-2.5 leading-none font-medium text-lg placeholder:text-[#C8C8DC]`}
                                    // {...register('password')}
                                    />
                                    {showPassword ? (
                                        <AiOutlineEyeInvisible
                                            onClick={() => setshowPassword(false)}
                                            className="absolute text-lg right-4 top-3.5"
                                        />
                                    ) : (
                                        <AiOutlineEye
                                            onClick={() => setshowPassword(true)}
                                            className="absolute text-lg right-4 top-3.5"
                                        />
                                    )}
                                </div>
                                {/* <p className='text-red-500'>{errors.password?.message}</p> */}
                            </div>



                            <button
                                type="submmit"
                                onClick={""}
                                className="bg-[#3333FF] text-[#F0F0FF] rounded-lg px-5 py-2 text-xl font-semibold"
                            >
                                Sign in
                            </button>

                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SignIn
