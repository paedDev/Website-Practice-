import React from 'react'

function Components() {
    return (
        <>
            <div className='bg-gray-200 pt-24 py-64'>
                <div className='container mx-auto p-6 lg:p-0'>
                    <div className='text-center space-y-2 mb-10'>
                        <h1 className='lg:text-5xl text-4xl font-semibold text-gray-600'>What we'll build in this course</h1>
                        <h3 className="lg:text-xl text-gray-500">These components are things you'll have to create in every project.</h3>
                    </div>

                    {/* grid start for the buttons or componentts */}
                    <div className='lg:grid grid-cols-4 gap-5 space-y-6 lg:space-y-0'>
                        <div className='flex bg-gray-100 rounded shadow-md'>
                            <div className='w-1/3 flex items-center justify-center bg-red-500 text-3xl rounded-l-md  '>🥰</div>
                            <div className='p-4 text-xl'>Buttons</div>
                        </div>
                        <div className='flex bg-gray-100 rounded shadow-md'>
                            <span className='w-1/3 flex items-center justify-center bg-blue-500 text-3xl rounded-l-md '>🥰</span>
                            <h2 className='p-4 text-xl'>Cards</h2>
                        </div>
                        <div className='flex bg-gray-100 rounded shadow-md'>
                            <span className='w-1/3 flex items-center justify-center bg-green-500 text-3xl rounded-l-md '>🥰</span>
                            <h2 className='p-4 text-xl'>Form</h2>
                        </div>
                        <div className='flex bg-gray-100 rounded shadow-md'>
                            <span className='w-1/3 flex items-center justify-center bg-orange-500 text-3xl rounded-l-md '>🥰</span>
                            <h2 className='p-4 text-xl'>Header</h2>
                        </div>
                        <div className='flex bg-gray-100 rounded shadow-md'>
                            <div className='w-1/3 flex items-center justify-center bg-orange-500 text-3xl rounded-l-md  '>🥰</div>
                            <div className='p-4 text-xl'>Navigation</div>
                        </div>
                        <div className='flex bg-gray-100 rounded shadow-md'>
                            <span className='w-1/3 flex items-center justify-center bg-purple-500 text-3xl rounded-l-md '>🥰</span>
                            <h2 className='p-4 text-xl'>Hero</h2>
                        </div>
                        <div className='flex bg-gray-100 rounded shadow-md'>
                            <span className='w-1/3 flex items-center justify-center bg-violet-500 text-3xl rounded-l-md '>🥰</span>
                            <h2 className='p-4 text-xl'>Grids</h2>
                        </div>
                        <div className='flex bg-gray-100 rounded shadow-md'>
                            <span className='w-1/3 flex items-center justify-center bg-teal-500 text-3xl rounded-l-md '>🥰</span>
                            <h2 className='p-4 text-xl'>Newsletter</h2>
                        </div>
                        <div className='flex bg-gray-100 rounded shadow-md'>
                            <div className='w-1/3 flex items-center justify-center bg-cyan-500 text-3xl rounded-l-md  '>🥰</div>
                            <div className='p-4 text-xl'>
                                Pricing Section</div>
                        </div>
                        <div className='flex bg-gray-100 rounded shadow-md'>
                            <span className='w-1/3 flex items-center justify-center bg-green-500 text-3xl rounded-l-md '>🥰</span>
                            <h2 className='p-4 text-xl'>
                                FAQ Section</h2>
                        </div>
                        <div className='flex bg-gray-100 rounded shadow-md'>
                            <span className='w-1/3 flex items-center justify-center bg-blue-500 text-3xl rounded-l-md '>🥰</span>
                            <h2 className='p-4 text-xl'>
                                Parcel.js Setup</h2>
                        </div>
                        <div className='flex bg-gray-100 rounded shadow-md'>
                            <span className='w-1/3 flex items-center justify-center bg-orange-500 text-3xl rounded-l-md '>🥰</span>
                            <h2 className='p-4 text-xl'>
                                Responsive</h2>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}

export default Components