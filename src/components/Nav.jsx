import React from 'react'

export default function Nav() {
    return (
        <>
            <header className='flex justify-around items-center h-20 bg-white/75 shadow top-0 sticky z-10'>
                <div className="logo ">
                    <h3 className="text-3xl font-bold">AVN<span className='text-indigo-600 text-2xl font-semibold'><sup>Learni</sup></span></h3>
                </div>
                <div className="flex  gap-10">
                    <a href="#" className="text-xl hover:text-indigo-600">Home</a>
                    <a href="#" className="text-xl hover:text-indigo-600">About</a>
                    <a href="#" className="text-xl hover:text-indigo-600">Products</a>
                    <a href="#" className="text-xl hover:text-indigo-600">Contact Us</a>
                </div>
                <button className='bg-indigo-600 p-3 text-white rounded-full hover:bg-white hover:text-indigo-600 shadow'>
                    Get In Touch
                </button>
            </header>

        </>
    )
}
