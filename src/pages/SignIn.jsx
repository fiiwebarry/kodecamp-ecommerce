
import desk from "/src/assets/Images/amico.svg";
import { useEffect, useState } from "react";
import { AiOutlineMail, AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux"
import { authActions } from "/src/features/AuthSlice.js"


const SignIn = () => {
    const dispatch = useDispatch()
    const [userDetails, setUserDetails] = useState({})
    const [showPassword, setshowPassword] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleFormSubmit = (event) => {
        event.preventDefault();
        // Access user input from the form
        const formData = new FormData(event.target);
        const userInput = {
            email: formData.get('email'),
            password: formData.get('password'),
        };
        // Compare user input with local storage data
        if (
            userDetails &&
            userInput.email === userDetails.email &&
            userInput.password === userDetails.password
        ) {
            // Successful login, navigate to the dashboard or another page
            dispatch(authActions.login())
        } else {
            // Display an error message for unsuccessful login
            setErrorMessage('Invalid email or password');
        }
    };


    useEffect(() => {

        const user = localStorage.getItem("register")
        setUserDetails(JSON.parse(user))
    }, [])

    return (
        <section className="w-full lg:pt-[60px]">
            <div className=" lg:px-[100px] lg:flex lg:flex-row md:flex  md:flex-col flex flex-col lg:mx-auto lg:justify-between  gap-4 pt-[110px]">
                <div className="lg:w-[800px]">

                    <img className="w-[700px]" src={desk} />
                </div>
                <div className=" lg:w-[700px] pt-3">
                    <div
                        style={{ boxShadow: "5px 10px 20px 0px rgba(0, 0, 0, 0.25)" }}
                        className="  lg:w-[600px] sm:flex-1  bg-[#f3f3f3] sm:mb-0 rounded-3xl px-10 sm:px-7 md:px-12 py-8 flex flex-col gap-5"
                    >
                        <h2 className="text-3xl text-[brown] text-[24px] font-semibold font-lobster text-center">
                            GrittyBee <span className="text-[blue] font-semibold text-[24px]">Shopping Mall</span>
                        </h2>
                        <p className="font-georgia text-[20px] font-semibold text-center">
                            Shop online
                        </p>
                        <form action="" onSubmit={handleFormSubmit} className="flex flex-col gap-6">
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
                                        className="w-full border  bg-transparent mt-2 rounded-md outline-none p-2.5 leading-none font-medium text-lg placeholder:text-[#C8C8DC]"

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
                                {errorMessage && <p className="text-red-500">{errorMessage}</p>}
                            </div>
                            <button
                                type="submit"

                                className="bg-[#3333FF] text-[#F0F0FF] rounded-lg px-5 py-2 text-xl font-semibold"
                            >
                                Sign in
                            </button>

                            <div className="flex justify-center gap-3">
                                <p className="text-[20px]">Don't have an account</p>
                                <Link to="/signUp">
                                    <p className=" text-[brown] text-[20px] font-bold flex justify-center">Register</p></Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SignIn
