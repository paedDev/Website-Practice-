import React from 'react'

function Faq() {
    return (
        <>
            <div className='bg-gray-600 py-24'>
                <div className='container mx-auto p-6 lg:p-0'>
                    <div>
                        <h1 className='text-center text-4xl text-gray-400 mb-16'>Frequently Asked Questions</h1>

                        {/* start of making 2 grid cards */}
                        <div className='lg:grid grid-cols-2 gap-5 space-y-4 lg:space-y-0'>
                            <div className='text-gray-400 rounded-xl border border-gray-400 p-10 space-y-4'>
                                <h3 className='text-white '>Do I need to know CSS?</h3>
                                <p>This course is aimed at people that have some CSS knowledge and want to learn Tailwind. I do talk through CSS concepts and why we're using certain classes all throughout the course so you don't need to be a CSS expert.</p>
                            </div>
                            <div className='text-gray-400 rounded-xl border border-gray-400 p-10 space-y-4'>
                                <h3 className='text-white '>Can I use the code in my own projects?</h3>
                                <p>Definitely! All of the code in this course is yours to use in your sites, apps, projects, whatever.</p>
                            </div>
                            <div className='text-gray-400 rounded-xl border border-gray-400 p-10 space-y-4'>
                                <h3 className='text-white '>What if I don't like it?</h3>
                                <p>I offer a <strong className='text-blue-500'>lifetime refund policy</strong>. If you ever feel like you didn't gain value from this course, then you can request a refund from <a href=" " className='hover:underline text-blue-300'>chris.sev@hey.com.</a></p>
                            </div>
                            <div className='text-gray-400 rounded-xl border border-gray-400 p-10 space-y-4'>
                                <h3 className='text-white '>How do I login and view the course?</h3>
                                <p>You can login at <strong className='text-blue-500'>Gumroad.</strong> Use the login button in the top right.</p>
                            </div>
                            <div className='text-gray-400 rounded-xl border border-gray-400 p-10 space-y-4'>
                                <h3 className='text-white '>Is there a student discount?</h3>
                                <p>Yup! <strong className='text-teal-400'>50% off!</strong>  Email me at <a href=" " className='hover:underline text-blue-300'>chris.sev@hey.com.</a> with your student id and I'll send you a discount code.</p>
                            </div>
                            <div className='text-gray-400 rounded-xl border border-gray-400 p-10 space-y-4'>
                                <h3 className='text-white '>I have more questions!</h3>
                                <p>Drop me an email at <a href=" " className='hover:underline text-blue-300'>chris.sev@hey.com.</a> Let's chat.</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Faq