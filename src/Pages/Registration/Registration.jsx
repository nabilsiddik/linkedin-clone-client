import React from 'react'
import logo from '../../assets/images/logo/linkedin.png'
import { Link } from 'react-router-dom'
import { FcGoogle } from "react-icons/fc";


const Registration = () => {
    return (
        <div id='registration_page' className='min-h-screen flex items-center justify-center'>
            <div className='bg-white p-10 rounded-lg w-11/12 md:w-8/12 lg:w-6/12 xl:w-4/12 mx-auto'>
                <div className="flex justify-center mb-5">
                    <div className='flex items-center gap-2'>
                        <h3 className='font-bold text-3xl text-[#0a66c2]'>Linked</h3>
                        <img className='w-[40px]' src={logo} alt="" />
                    </div>
                </div>
                <h2 className='font-bold text-3xl text-center'>Make the most of your professional life</h2>

                <form className='mt-7'>
                    <div className="input-group flex items-center gap-4">
                        <input type="text" className='input input-bordered mb-4 w-full' placeholder='First Name' />

                        <input type="text" className='input input-bordered mb-4 w-full' placeholder='Last Name' />
                    </div>

                    <input type="email" className='input input-bordered mb-4 w-full' placeholder='Email' />

                    <div className="input-group flex items-center gap-4">
                        <input type="password" className='input input-bordered w-full' placeholder='Password' />

                        <input type="password" className='input input-bordered w-full' placeholder='Confirm Password' />
                    </div>


                    <input type="number" className='input input-bordered w-full mt-4' placeholder='Phone' />

                    <div className="input-group flex items-center gap-4 mt-4">
                        <select className='select select-bordered'>
                            <option value="male">Male</option>
                            <option value="female">
                                Female
                            </option>
                            <option value="others">Others</option>
                        </select>

                        <input type="date" className='input input-bordered w-full' placeholder='Last Name' />
                    </div>

                    <p className='mt-5 text-center'>By clicking Agree & Join or Continue, you agree to the LinkedIn <Link to={'https://www.linkedin.com/legal/user-agreement?trk=registration-frontend_join-form-user-agreement'} className='text-[#0a66c2] font-bold'>User Agreement</Link>, <Link to={'https://www.linkedin.com/legal/privacy-policy?trk=registration-frontend_join-form-privacy-policy'} className='text-[#0a66c2] font-bold'>Privacy Policy</Link>, and <Link to={'https://www.linkedin.com/legal/cookie-policy?trk=registration-frontend_join-form-cookie-policy'} className='text-[#0a66c2] font-bold'>Cookie Policy</Link>.</p>

                    <input type="submit" value={'Agree & Join'} className='bg-[#0a66c2] hover:bg-[#004182] text-white font-bold w-full mt-10 rounded-full py-3 px-3 text-lg cursor-pointer' />
                </form>

                <div>
                    <p className='text-center my-5'>or</p>
                    <button className='btn w-full rounded-full border border-black py-6 text-lg flex items-center gap-2'>
                        <span>Signup With Google</span>
                        <span className='mt-1'><FcGoogle /> </span>
                    </button>
                    <p className='mt-5 text-center text-xl'>Already on LinkedIn? <Link to={'/login'} className='text-[#0a66c2] font-bold'>Sign in</Link></p>
                </div>
            </div>
        </div>
    )
}

export default Registration
