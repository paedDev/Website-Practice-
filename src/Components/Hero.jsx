import React from 'react'

function Hero() {
  return (
    <>
        <div className='bg-gradient-to-r from-white to-gray-300 relative '>/

           
            {/* left circle decoration  */}
            <div className='absolute top-0 left-0 transform -translate-y-20 -translate-x-32'>
                  <div className='bg-gradient-to-br from-red-100 to-red-300 h-64 w-64 absolute rounded-full top-0 ml-10 opacity-20 '></div>
                    <div className='bg-gradient-to-br from-teal-100 to-teal-300 h-64 w-64 absolute rounded-full top-0 ml-40 opacity-20'></div>
                    <div className='bg-gradient-to-br from-purple-100 to-purple-300 h-64 w-64 absolute rounded-full top-0 mt-14 ml-24 opacity-20'></div>
            </div>
              <div className='absolute top-0 right-0 mr-64 transform -translate-x-64 translate-y-64'>
                  <div className='bg-gradient-to-br from-red-100 to-red-300 h-64 w-64 absolute rounded-full top-0 ml-10 opacity-20 hidden lg:block'></div>
                    <div className='bg-gradient-to-br from-teal-100 to-teal-300 h-64 w-64 absolute rounded-full top-0 ml-40 opacity-20 hidden lg:block'></div>
                    <div className='bg-gradient-to-br from-purple-100 to-purple-300 h-64 w-64 absolute rounded-full top-0 mt-14 ml-24 opacity-20 hidden lg:block'></div>
            </div>

            <div className='absolute bottom-0 h-64 bg-purple-600 inset-x-0'>

            </div>
          

            <div className='container mx-auto px-6 lg:px-0 text-center py-24 relative'>

            {/* heading */}
            <h1 className='mb-4 font-extrabold text-5xl lg:text-6xl p-3'>
                <span className='bg-gradient-to-r from-teal-400 to-teal-500 bg-clip-text text-transparent'> Unnie </span>
                <span className='bg-gradient-to-r from-teal-400 to-purple-500 bg-clip-text text-transparent'>Tailwind</span>
            </h1>


            {/* paragraph */}
            <p className='mb-8 text-gray-700 lg:text-2xl text-lg'>Make good looking desings quickly. All without a sing line of custom CSS. </p>

            <a href="#" className='lg:mb-32 mb-16 inline-block py-3  px-12 text-purple-100 font-bold shadow-xl rounded bg-gradient-to-br from-purple-400 to-purple-700 tracking-wide hover:to-purple-500 hover:shadow-2xl transition duration-500'>Pre-order available - Get the Course</a>

        
            <div className='relative'>
                 <img src="https://i.imgur.com/wysbBMS.png" alt="Teaser Image"className='rounded-lg shadow-2xl border-4 border-purple-400' />

                  <div className='lg:absolute top-0 right-0 lg:trasform lg:translate-x-4 lg:-translate-y-4 bg-yellow-50 border-t-2 border-yellow-500 p-3 text-sm text-left shadow-lg text-yellow-600 py-4 px-8 mt-4 lg:mt-0'>
                    <p className=''><strong>We'll create BeginnerTailwind.com</strong><span className='opacity-50'>(it's the site you're on now)</span></p>
                    <p> We'll do it all without a single line of custom CSS!</p>

                  </div>
            </div>
            
            </div>
        </div>
    
    </>
  )
}

export default Hero