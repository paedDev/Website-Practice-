import React from 'react'

function Pricing() {
    return (
        <>
            <div className='relative bg-blue-500'>
                {/* for gray box on top of the pricing */}
                <div className="absolute inset-x-0 h-32 bg-gray-200 "></div>

                {/* start of the content */}
                <div className='container flex flex-col lg:flex-row items-center p-6 pt-16 pb-24 mx-auto lg:space-x-8 lg:pb-10 '>
                    <div className='lg:w-1/3 space-y-2 text-2xl lg:text-right text-white order-2 lg:order-1 mb-12 lg:mb-0 text-center '>
                        <h3><span className='font-bold'>75 videos</span> at a smooth pace</h3>
                        <h3><span className='font-bold'>9.25 hours</span> of learning + building</h3>
                        <h3><span className='font-bold'>Source code</span> and CodePens</h3>
                    </div>
                    {/* pricing box */}
                    <div className='relative w-full lg:w-1/3 p-8 text-center text-gray-800 transition duration-500 transform bg-white border-8 border-purple-700 rounded shadow-2xl hover:scale-110 order-1 lg:order-2 mb-12 lg:mb-0'>
                        {/* show off the arrow thingy */}
                        <div className='absolute inset-x-0 top-0 flex items-end justify-center space-x-8 transform -translate-y-full'>
                            <div className='w-2 h-16 mb-12 origin-bottom-left transform -rotate-45 bg-red-400 rounded-xl'></div>
                            <div className='w-2 h-24 mb-12 bg-yellow-400 rounded-xl'></div>
                            <div className='w-2 h-16 mb-12 origin-bottom-right transform rotate-45 bg-green-400 rounded-xl'></div>
                        </div>

                        <h4 className='mb-6 text-xl text-gray-800'>Start Tailwind <span className='italic'>-ing!</span></h4>
                        <div className='mb-10 text-6xl font-bold'> <span className='text-gray-400'>$</span>47</div>
                        <a href="" className='block px-12 py-4 font-bold text-white bg-black rounded-md hover:bg-gray-500 hover:text-gray-900'>Buy the Course</a>


                    </div>
                    <div className='order-3 lg:w-1/3 space-y-2 text-2xl lg:text-left text-white text-center'>
                        <h3>Use the code in  <strong className='font-bold'>your projects</strong></h3>
                        <h3>Access to  <strong className='font-bold'>Discord</strong> for suppor</h3>
                        <h3> <strong className='font-bold'>Lifetime</strong> refund guarantee</h3>
                    </div>


                </div>
            </div >



        </>
    )
}

export default Pricing