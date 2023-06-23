import React from "react";
import {FcGoogle} from "react-icons/fc";
import {FaApple} from "react-icons/fa";
import {Link} from "react-router-dom";

const Signin = () => {
    return(
        <div className="Signin"> 
            <span className=" md:hidden py-10 px-6   text-black  text-center font-lato font-bold text-4xl  tracking-wider">
                 Board.
                </span>
            <div className="flex h-screen ">
                <div className="hidden md:flex md:w-1/3 bg-black items-center justify-center text-white text-4xl">
                <span className=" font-montserrat font-bold text-6xl leading-88 tracking-normal">
                    Board.
                </span>
                </div>
               
                <div className="flex-1 bg-slate-100 flex items-center justify-center">
                    <div className="container  mx-4 max-w-xs bg-inherit rounded-md p-2">
                        <span className=" font-montserrat font-bold text-3xl leading-88 tracking-normal">
                            Sign In
                        </span>
                        <p className="text-black  font-lato text-xs leading-5 mb-1">Sign in to your account</p>
                        <div className="flex items-end space-x-8 mb-2 ">
                        <button className="container h-fit flex w-auto justify-start bg-white rounded-md p-2 ">
                            <FcGoogle size={20} />
                            <p className="text-slate-400  font-lato text-xs leading-5">Sign in with Google</p>
                        </button>
                        <button className="container h-fit flex w-auto justify-start bg-white rounded-md p-2 ">
                            <FaApple size={20}/>
                            <p className="text-slate-400  font-lato text-xs leading-5 ">Sign in with Apple</p>
                        </button>
                        
                        </div>
                        
                        
                        <div className="container bg-white rounded-md p-3">
                        <form >
                        <div className="mb-4">
                        <label htmlFor="email" className="font-semibold font-lato text-xs leading-3">Email Address</label>
                        <input type="email" id="email" className="w-full h-8 px-3 text-sm font-medium rounded-lg border bg-slate-100 " />
                        </div>
                        <div >
                        <label htmlFor="password" className="font-semibold font-lato text-xs leading-3">Password</label>
                        <input type="password" id="password" className="w-full h-8 px-3 text-sm font-medium rounded-lg border bg-slate-100" />
                        </div>
                        <a href="www.abc.com" target="_blank" className=" text-blue-500 text-xs font-lato hover:text-blue-950 ">Forgot Password?</a>
                        <br />
                        <br />
                        <Link to="/Dashboard"><button type="submit" className="w-full h-8 bg-black hover:bg-white text-white hover:text-black font-medium  rounded-lg">Sign In</button></Link> 
                        </form>
                        
                        <p className="mt-7 text-slate-400 text-xs font-lato text-center ">Don't have an account? <a href="abc.com" className="text-blue-500 text-xs font-lato hover:text-blue-950">Register here.</a></p>
                        
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Signin;