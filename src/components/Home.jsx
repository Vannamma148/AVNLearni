import React from 'react'

export default function Home() {
    return (
        <>
            <main>
                <section className='h-120 bg-cover bg-center my-5 bg-white flex flex-1 items-center justify-center'>
                    <div className="max-w-[1280px] mx-auto  text-center px-4 py-4 w-[50vw]">
                        {/* <button className='bg-indigo-600 text-white rounded-full hover:bg-white hover:text-indigo-600 shado px-4 py-2'>Welcome To AVN</button> */}
                        <h1 className="text-5xl font-bold my-4">Welcome To AVN<sup className='text-indigo-600 text-3xl font-semibold'>Learni</sup></h1>
                        <p className="text-2xl leading-8">
                            Maizzle is a framework that helps you quickly build HTML emails with
                            Tailwind CSS and advanced email optimizations.
                        </p>
                        {/* <input
                            type="search"
                            placeholder="Search..."
                            className="w-full max-w-sm px-4 py-2 border-1 rounded-xl border-gray-300  focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200 my-4 mx-4"
                        /> */}
                         <button className='bg-indigo-600 p-4 text-white rounded-full hover:bg-white hover:text-indigo-600 shadow my-5'>
                    Get In Touch
                </button>
                    </div>
                </section>
            </main>
        </>
    )
}
