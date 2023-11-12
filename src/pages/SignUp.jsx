import desk from "/src/assets/Images/amico.svg";
import { BiArrowBack } from "react-icons/bi"
import { useForm } from "react-hook-form";
import {
    AiOutlineMail,
    AiOutlineEye,
    AiOutlineEyeInvisible,
} from "react-icons/ai";
import * as yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const SignUp = () => {
    const Navigate = useNavigate()
    const [showPassword, setshowPassword] = useState(false);


    const schema = yup.object().shape({
        email: yup.string().email('Invalid email').required('Email is required'),
        password: yup.string().required('Password is required').min(8),
        surname: yup.string().required('surname is required'),
        firstName: yup.string().required('firstName is required'),
        confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match').required('Confirm Password is required'),
    });

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const onsubmit = (data) => {
        localStorage.setItem("register", JSON.stringify(data))
        Navigate("/signIn")
    };
    return (
        <section className="">
            <div className=" lg:flex lg:flex-row  lg:container mx-auto lg:w-[85%]    lg:gap-[140px]  md:flex md:flex-col md:gap-[50px] flex flex-col">
                <div className="lg:pt-[140px] pt-9">
                    <Link to="/">
                        <div className="flex mb-[20px]">
                            <BiArrowBack className="mt-1 text-[20px]" />
                            <p className="mb-[20px] font-medium">Go Back</p>
                        </div></Link>

                    <div><img className="lg:w-[470px]" src={desk} /></div>
                </div>
                <div className="pt-11">
                    <div
                        style={{ boxShadow: "5px 10px 20px 0px rgba(0, 0, 0, 0.25)" }}
                        className=" md:w-[500px] lg:w-[500px] sm:flex-1  bg-[#f3f3f3] sm:mb-0 rounded-3xl px-10 sm:px-7 md:px-12 py-8 flex flex-col gap-5"
                    >

                        <h4 className="font-plus-jakarta-sans text-2xl font-semibold text-center">
                            Create an Account
                        </h4>
                        <p className="font-georgia text-sm  text-center">
                            Shop online and be part of the movement
                        </p>
                        <form action="" className="flex flex-col gap-2" onSubmit={handleSubmit(onsubmit)}>
                            <div>
                                <label
                                    className="font-medium text-xl font-plus-jakarta-sans"
                                    htmlFor="surname"
                                >
                                    Surname
                                </label>
                                <div className="relative">
                                    <input
                                        name="surname"
                                        type="name"
                                        placeholder="fiiwe"
                                        className={`w-full border ${errors.surname ? 'border-red-500' : 'border-[#0A0A29]'} bg-transparent mt-2 rounded-md outline-none p-2.5 leading-none font-medium text-lg placeholder:text-[#C8C8DC]`}
                                        {...register('surname')}
                                    />

                                </div>
                                <p className='text-red-500'>{errors.surname?.message}</p>
                            </div>
                            <div>
                                <label
                                    className="font-medium text-xl font-plus-jakarta-sans"
                                    htmlFor="firstName"
                                >
                                    First Name
                                </label>
                                <div className="relative">
                                    <input
                                        name="firstName"
                                        type="name"
                                        placeholder="fiiwebarry"
                                        className={`w-full border ${errors.firstName ? 'border-red-500' : 'border-[#0A0A29]'} bg-transparent mt-2 rounded-md outline-none p-2.5 leading-none font-medium text-lg placeholder:text-[#C8C8DC]`}
                                        {...register('firstName')}
                                    />

                                </div>
                                <p className='text-red-500'>{errors.firstName?.message}</p>
                            </div>
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
                                    className={`w-full border ${errors.email ? 'border-red-500' : 'border-[#0A0A29]'} bg-transparent mt-2 rounded-md outline-none p-2.5 leading-none font-medium text-lg placeholder:text-[#C8C8DC]`}
                                    {...register('email')}
                                />
                                <AiOutlineMail className="absolute text-lg right-4 top-3.5" />
                            </div>
                            <p className='text-red-500'>{errors.email?.message}</p>

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
                                        className={`w-full border ${errors.password ? 'border-red-500' : 'border-[#0A0A29]'} bg-transparent mt-2 rounded-md outline-none p-2.5 leading-none font-medium text-lg placeholder:text-[#C8C8DC]`}
                                        {...register('password')}
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
                                <p className='text-red-500'>{errors.password?.message}</p>
                            </div>
                            <div>
                                <label
                                    className="font-medium text-xl font-plus-jakarta-sans"
                                    htmlFor="password"
                                >
                                    {" "}
                                    Confirm Password
                                </label>
                                <div className="relative">
                                    <input
                                        name="password"
                                        type={showPassword ? "text" : "password"}
                                        placeholder="***********"
                                        className="w-full border bg-transparent mt-2 rounded-md outline-none p-2.5 leading-none font-medium text-lg placeholder:text-[#C8C8DC]"
                                        {...register('confirmPassword')}
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
                                <p className='text-red-500'>{errors.confirmPassword?.message}</p>
                            </div>



                            <button
                                type="submit"
                                onClick={handleSubmit(onsubmit)}
                                className="bg-[#3333FF] text-[#F0F0FF] rounded-lg px-5 py-2 text-xl font-semibold"
                            >
                                Sign Up
                            </button>
                            <p className="text-xl font-plus-jakarta-sans font-semibold text-center">
                                Have an account?
                                <Link className="text-primary pl-2" to="/signIn">
                                    Log in
                                </Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SignUp;
