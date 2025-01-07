import React from 'react'

function Overview() {
    return (
        <>
            <div className='bg-purple-600 lg:pt-12 pb-24 relative'>
                {/* graybar */}
                <div className='absolute bottom-0 h-64 bg-gray-300 inset-x-0'>

                </div>
                <div className="container mx-auto px-6 lg:px-0 relative">
                    <h2 className='mb-10 font-bold text-purple-100 lg:text-6xl text-4xl'>Writing CSS is tough stuff!</h2>
                    {/* left col */}
                    <div className='lg:flex lg:space-x-16 space-y-8 lg:space-y-0'>
                        <div className='bg-white lg:w-2/3 lg:p-16 p-8 space-y-8 rounded shadow-2xl text-gray-700 text-lg leading-loose '>
                            <p>Tailwind makes writing CSS easier and lets us customize our designs faster than any other CSS framework. If you want a CSS framework that has pre-built components, then Tailwind may not be for you. If you want a CSS framework that lets you design quickly and customize your site, then <strong className='text-teal-400 font-bold'>Tailwind is gonna be a lot of fun.</strong></p>
                            <p>After using Bulma to build <a href="https://scotch.io" className='text-blue-500 hover:underline '>Scotch.io</a> , my CSS files became littered with my own <code className='text-sm inline-block px-1 rounded bg-gray-200 text-teal-700 font-mono'>!important</code>classes to override the framework's styles. Tailwind doesn't have the <code className='text-sm inline-block px-1 rounded bg-gray-200 text-teal-700 font-mono'>!important</code>problem since all our elements are designed on the fly.</p>
                            <span className='font-bold text-gray-900'>Important Note:</span> Tailwind lets us design quickly, but this doesn't mean that you don't need CSS knowledge however. To use Tailwind, you need to have a good understanding of CSS properties. In this course, <span className='font-bold text-gray-900'>we will learn Tailwind and we'll also learn CSS concepts </span>to create good looking designs. <span className='font-bold text-gray-900'>Tailwind is the ultimate CSS shorthand </span>, but we still need to learn the CSS, which we'll do in this course.

                            <p className='text-2xl italic relative text-purple-900'><span className='absolute text-purple-300 text-7xl top-0 left-0 transform -translate-x-8 -translate-y-6'>"</span>This isn't just a Tailwind course. This is also a "learn how to design with CSS" course.</p>

                            <p>The hardest things about learning Tailwind is memorizing the classes and also knowing which classes go well together. We'll be writing a lot of Tailwind in this course so that the repetition will help us commit Tailwind classes to memory.</p>
                        </div>
                        {/* right col */}
                        <div className='flex-1 text-lg italic space-y-4 '>
                            <div className='p-10 rounded-lg bg-purple-800 text-purple-200'>What classes should I use?</div>
                            <div className='p-10 rounded-lg bg-purple-800 text-purple-200'>How do I make things look good?</div>
                            <div className='p-10 rounded-lg bg-purple-800 text-purple-200'>My design looks basic?</div>
                            <div className='p-10 rounded-lg bg-purple-800 text-purple-200'>How do I do responsive?</div>
                            <div className='p-10 rounded-lg bg-purple-800 text-purple-200'>Why does my typography look so bad?</div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Overview