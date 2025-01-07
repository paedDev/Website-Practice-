import React from 'react'

function Components() {
    return (
        <>
            <div className='py-40 pt-24 bg-gray-200'>
                <div className='container p-6 mx-auto lg:p-0'>
                    <div className='mb-10 space-y-2 text-center'>
                        <h1 className='text-4xl font-semibold text-gray-600 lg:text-5xl'>What we'll build in this course</h1>
                        <h3 className="text-gray-500 lg:text-xl">These components are things you'll have to create in every project.</h3>
                    </div>

                    {/* grid start for the buttons or componentts */}
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5'>
                        <div className='flex bg-gray-100 rounded shadow-md'>
                            <div className='flex items-center justify-center w-1/3 text-3xl bg-red-500 rounded-l-md '>🥰</div>
                            <div className='p-4 text-xl'>Buttons</div>
                        </div>
                        <div className='flex bg-gray-100 rounded shadow-md'>
                            <span className='flex items-center justify-center w-1/3 text-3xl bg-blue-500 rounded-l-md '>🥰</span>
                            <h2 className='p-4 text-xl'>Cards</h2>
                        </div>
                        <div className='flex bg-gray-100 rounded shadow-md'>
                            <span className='flex items-center justify-center w-1/3 text-3xl bg-green-500 rounded-l-md '>🥰</span>
                            <h2 className='p-4 text-xl'>Form</h2>
                        </div>
                        <div className='flex bg-gray-100 rounded shadow-md'>
                            <span className='flex items-center justify-center w-1/3 text-3xl bg-orange-500 rounded-l-md '>🥰</span>
                            <h2 className='p-4 text-xl'>Header</h2>
                        </div>
                        <div className='flex bg-gray-100 rounded shadow-md'>
                            <div className='flex items-center justify-center w-1/3 text-3xl bg-orange-500 rounded-l-md '>🥰</div>
                            <div className='p-4 text-xl'>Navigation</div>
                        </div>
                        <div className='flex bg-gray-100 rounded shadow-md'>
                            <span className='flex items-center justify-center w-1/3 text-3xl bg-purple-500 rounded-l-md '>🥰</span>
                            <h2 className='p-4 text-xl'>Hero</h2>
                        </div>
                        <div className='flex bg-gray-100 rounded shadow-md'>
                            <span className='flex items-center justify-center w-1/3 text-3xl bg-violet-500 rounded-l-md '>🥰</span>
                            <h2 className='p-4 text-xl'>Grids</h2>
                        </div>
                        <div className='flex bg-gray-100 rounded shadow-md'>
                            <span className='flex items-center justify-center w-1/3 text-3xl bg-teal-500 rounded-l-md '>🥰</span>
                            <h2 className='p-4 text-xl'>Newsletter</h2>
                        </div>
                        <div className='flex bg-gray-100 rounded shadow-md'>
                            <div className='flex items-center justify-center w-1/3 text-3xl bg-cyan-500 rounded-l-md '>🥰</div>
                            <div className='p-4 text-xl'>
                                Pricing Section</div>
                        </div>
                        <div className='flex bg-gray-100 rounded shadow-md'>
                            <span className='flex items-center justify-center w-1/3 text-3xl bg-green-500 rounded-l-md '>🥰</span>
                            <h2 className='p-4 text-xl'>
                                FAQ Section</h2>
                        </div>
                        <div className='flex bg-gray-100 rounded shadow-md'>
                            <span className='flex items-center justify-center w-1/3 text-3xl bg-blue-500 rounded-l-md '>🥰</span>
                            <h2 className='p-4 text-xl'>
                                Parcel.js Setup</h2>
                        </div>
                        <div className='flex bg-gray-100 rounded shadow-md'>
                            <span className='flex items-center justify-center w-1/3 text-3xl bg-orange-500 rounded-l-md '>🥰</span>
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