
import React from 'react'

function WhatYoullLearn() {
    return (
        <>
            <div className='bg-gray-300 py-24 text-gray-700'>
                <div className="container mx-auto p-6 lg:p-0">
                    <div className='relative'>
                        <h1 className='text-center font-bold lg:text-7xl text-4xl text-gray-800 lg:mb-24 mb-12 p-5 '>What you'll learn in this course</h1>
                        <div className='absolute w-1/3 h-2 bg-gradient-to-r from-blue-400 to-purple-400 top-0 left-0 rounded-xl transfomr -translate-y-4'>

                        </div>
                        <div className='absolute w-1/3 h-2 bg-gradient-to-r from-purple-400 to-blue-400 rounded-xl bottom-0 right-0 transfomr translate-y-4'>

                        </div>
                    </div>



                    {/* grid */}


                    <div className='lg:grid grid-cols-6 gap-10 space-y-4 lg:space-y-0'>

                        <div className='col-span-2 border border-gray-700 rounded shadow-xl'>
                            <div className='flex justify-between relative border-b border-gray-700 p-4  bg-gray-800'>
                                <h3 className='font-bold text-lg text-gray-400'>How to use Tailwind classes</h3>
                                <div className='flex space-x-4 items-center'>
                                    <div className='w-3 h-3 bg-red-500 rounded-full'></div>
                                    <div className='w-3 h-3 bg-yellow-500 rounded-full'></div>
                                    <div className='w-3 h-3 bg-green-500 rounded-full'></div>
                                </div>

                            </div>
                            <p className='p-4'>We'll dive into the most important Tailwind classes and use them a TON. There are a lot of useful classes like spacing, backgrounds, borders, shadows, and typography. We'll type the Tailwind classes many times over to ensure that repeitition is our greatest learning tool.
                            </p>


                        </div>
                        <div className='col-span-2 border border-gray-700 rounded shadow-xl'>
                            <div className='relative flex justify-between border-b border-gray-700 p-4 bg-gray-800 '>
                                <h3 className='font-bold text-lg text-gray-400'>Make good looking designs</h3>
                                <div className='flex space-x-4 items-center'>
                                    <div className='rounded-full bg-red-500 w-3 h-3 '></div>
                                    <div className='rounded-full bg-yellow-500 w-3 h-3 '></div>
                                    <div className='rounded-full bg-green-500 w-3 h-3 '></div>
                                </div>

                            </div>

                            <p className='p-4'>There's a certain process to designing with Tailwind that we'll take to make our designs look good. Some easy to remember rules are all it takes to get a good design. We'll also talk about ideas and action items to take a good design and make it great.
                            </p>
                        </div>
                        <div className='col-span-2 border border-gray-700 rounded shadow-xl'>
                            <div className=' flex justify-between border-b border-gray-700 p-4 bg-gray-800 '>
                                <h3 className=' font-bold  shadow-xl text-lg text-gray-400'>Why Tailwind is different/better</h3>
                                <div className='flex items-center space-x-4'>
                                    <div className='h-3 w-3 bg-red-500 rounded-full'></div>
                                    <div className='h-3 w-3 bg-yellow-500 rounded-full'></div>
                                    <div className='h-3 w-3 bg-green-500 rounded-full'></div>
                                </div>

                            </div>
                            <p className='p-4'>To be completely honest, I didn't like Tailwind at first. It felt like inline styles to me (and maybe still does). After using it more and more though, I've come to absolutely love it. I dread jumping into a project without Tailwind now.
                            </p>
                        </div>
                        <div className='border border-gray-700 rounded col-span-3 shadow-xl'>
                            <div className='border-b border-gray-700 p-4 font-bold text-lg bg-gray-800 flex justify-between'>
                                <h3 className=' text-gray-400'>How to build this site (site-ception!)</h3>
                                <div className='flex items-center space-x-4'>
                                    <div className='rounded-full h-3 w-3 bg-red-500'></div>
                                    <div className='rounded-full h-3 w-3 bg-yellow-500'></div>
                                    <div className='rounded-full h-3 w-3 bg-green-500'></div>
                                </div>
                            </div>
                            <p className='p-4'>The site you're on (BeginnerTailwind.com) is built with Tailwind and has 0 custom css.  </p>
                            <p className='p-4' >You can take all of the code from this site and use it for your own land bg-gray-800 text-gray-400ing pages or sites! All the code is available to you with course purchase.  </p>

                        </div>
                        <div className='border border-gray-700 rounded col-span-3 shadow-xl'>
                            <div className='border-b border-gray-700 p-4 font-bold text-lg bg-gray-800 flex justify-between'>
                                <h3 className=' text-gray-400 flex'>A fun and methodical design process</h3>
                                <div className='flex space-x-4 items-center'>
                                    <div className='rounded-full w-3 h-3 bg-red-500'></div>
                                    <div className='rounded-full w-3 h-3 bg-yellow-500'></div>
                                    <div className='rounded-full w-3 h-3 bg-green-500'></div>
                                </div>

                            </div>

                            <p className='p-4'>I struggle with making things look good and don't consider myself a designer. What I try to do is have a formula for making things look good. I focus on design in this order: spacing, box properties, typography, fun element to pop. We'll talk about this all throughout the course.
                            </p>
                        </div>
                    </div>


                </div>


            </div>


        </>
    )
}

export default WhatYoullLearn;