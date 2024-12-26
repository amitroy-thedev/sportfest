import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { IoMdClose } from 'react-icons/io';

function Login() {
    const { register,
        handleSubmit,
        formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
        // Perform login logic here
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
                <div className="relative card w-96 bg-white dark:bg-gray-800 shadow-xl p-6 rounded-lg">
                    {/* Close Button */}
                    <Link to={'/'}>
                        <button
                            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-white"
                        >
                            <IoMdClose size={20} />
                        </button>
                    </Link>
                    <div className="mb-4 text-center">
                        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
                            Log<span className='text-violet-600 dark:text-violet-400'>in</span>
                        </h2>
                    </div>
                    <div className="space-y-4">
                        {/* Email Field */}
                        <label className="input input-bordered flex items-center gap-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="h-4 w-4 opacity-70 dark:text-gray-300">
                                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                            </svg>
                            <input {...register("email", { required: true })} type="text" className="grow focus:outline-none dark:bg-gray-700 dark:text-white" placeholder="Email" />
                        </label>
                        {errors.email && <span className='text-red-600'>This field is required!</span>}

                        {/* Password Field */}
                        <label className="input input-bordered flex items-center gap-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="h-4 w-4 opacity-70 dark:text-gray-300">
                                <path
                                    fillRule="evenodd"
                                    d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                                    clipRule="evenodd" />
                            </svg>
                            <input {...register("password", { required: true })} type="password" className="grow focus:outline-none dark:bg-gray-700 dark:text-white" placeholder="Password" />
                        </label>
                        {errors.password && <span className='text-red-600'>This field is required!</span>}
                    </div>
                    <div className='flex justify-between'>
                        <button className="bg-violet-600 text-white btn btn-primary mt-6 px-3 py-2 hover:bg-violet-700 duration-500 rounded-md">
                            Login
                        </button>
                        <p className='mt-6 gap-2'>
                            Do not have account?
                            <Link to={'/signup'}>
                                <span className='text-violet-600 dark:text-violet-400 underline cursor-pointer'>signup</span>
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </form>
    );
}

export default Login;