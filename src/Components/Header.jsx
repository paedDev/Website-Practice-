import React from 'react'

function Header() {
  return (
    <>
        <div className='text-gray-500 bg-gradient-to-r from-white to-gray-300'>

            {/* circle for design */}
            
            
            <div className='container mx-auto flex justify-between px-6 lg:px-0 py-6'>
             {/* left header */}
                <div className='space-x-4 flex items-center'>
                    <a href="#" className='font-bold text-2xl text-gray-600'>Beginner Tailwind</a>
                    <a href="#" className='hidden lg:inline-block hover:text-gray-900' >About</a>
                    <a href="#" className='hidden lg:inline-block hover:text-gray-900' >What You'll Learn</a> 
                    <a href="#" className='hidden lg:inline-block hover:text-gray-900' >Pricing</a>
                    <a href="#" className='hidden lg:inline-block hover:text-gray-900' >FAQ</a>
                </div>
             {/* right header */}
                <div className='space-x-4 flex items-center'>
                    <a href="#"className='hover:text-gray-900' >Login</a>
                    <a href="#"className='hidden lg:inline-block p-3 bg-purple-400 text-purple-200 rounded-lg shadow hover:bg-purple-300 hover:text-purple-500 hover:shadow-xl transition duration-500'>Get the Course</a>
                </div>
            </div>
        </div>
    
    </>
  )
}

export default Header