import React from 'react'
import logo from '../../assets/images/logo/linkedin.png'
import { Link } from 'react-router-dom'
import { FcGoogle } from "react-icons/fc";

const Login = () => {
    return (
        <div id='registration_page' className='min-h-screen flex items-center justify-center'>
            <div className='bg-white p-10 rounded-lg w-11/12 md:w-8/12 lg:w-6/12 xl:w-4/12 mx-auto'>
                <div className="flex justify-center mb-5">
                    <div className='flex items-center gap-2'>
                        <h3 className='font-bold text-3xl text-[#0a66c2]'>Linked</h3>
                        <img className='w-[40px]' src={logo} alt="" />
                    </div>
                </div>
                <h2 className='font-bold text-3xl text-center'>Login with your credentials</h2>

                {/* login form  */}
                <form className='mt-7'>
                    <input type="email" className='input input-bordered mb-4 w-full' placeholder='Email' />
                    <input type="password" className='input input-bordered w-full' placeholder='Password' />
                    <input type="submit" value={'Login'} className='bg-[#0a66c2] hover:bg-[#004182] text-white font-bold w-full mt-10 rounded-full py-3 px-3 text-lg cursor-pointer' />
                </form>

                <div>
                    <p className='text-center my-5'>or</p>
                    <button className='btn w-full rounded-full border border-black py-6 text-lg flex items-center gap-2'>
                        <span>Login With Google</span>
                        <span className='mt-1'><FcGoogle /> </span>
                    </button>
                    <p className='mt-5 text-center text-xl'>Don't have an account? <Link to={'/registration'} className='text-[#0a66c2] font-bold'>Register Now</Link></p>
                </div>
            </div>
        </div>
    )
}

export default Login
