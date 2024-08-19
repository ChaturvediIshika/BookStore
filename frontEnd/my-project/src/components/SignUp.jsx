import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"

const SignUp = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
    
      const onSubmit = (data) => console.log(data);

  return (
    <div>
      <div id="my_modal_3" className=" flex justify-center items-center h-screen">
        <div className="border-[2px] shadow-md p-5 rounded-md">
            <form onSubmit={handleSubmit(onSubmit)} method="div">            
            <h3 className="font-bold text-lg">SignUp</h3>
            <div className='mt-4 space-y-2'>
                <span>Name</span>
                <br/>
                <input type="text" placeholder='Enter your name' className='w-80 px-3 py-1 border rounded-md outline-none'
                 {...register("name", { required: true })} />
                <br/>
                {errors.name && <span className='text-sm text-red-500'>This field is required</span>}
            </div>
            <div className='mt-4 space-y-2'>
                <span>Email</span>
                <br/>
                <input type="email" placeholder='Enter your email' className='w-80 px-3 py-1 border rounded-md outline-none'
                {...register("email", { required: true })} />
                <br/>
                {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
            </div>
            <div className='mt-4 space-y-2'>
                <span>Password</span>
                <br/>
                <input type="password" placeholder='Enter your password' className='w-80 px-3 py-1 border rounded-md outline-none' 
                {...register("password", { required: true })} />
                <br/>
                {errors.password && <span className='text-sm text-red-500'>This field is required</span>}
            </div>

            <div className='flex justify-around mt-4 cursor-pointer'>
                <button className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200'>SignUp</button>
                <p>Already registered? <Link to='/'><span className='underline text-blue-500'>LogIn</span></Link></p>
            </div>
        </form>
        </div>
        </div>
    </div>
  )
}

export default SignUp
