import React from 'react'

function AboutMe() {
    return (
        <>
            <div className='bg-gray-300 lg:py-20'>
                <div className='container mx-auto p-6 lg:p-0  '>
                    <h2 className='text-4xl lg:text-6xl lg:text-center text-teal-900 font-bold lg:mb-12 mb-4'>A Tailwind Video I've Done</h2>

                    <p className='lg:text-xl leading-loose text-gray-900  mb-12 '>Hey there! My name is <a href="https://www.facebook.com/jannoel.paed/" className='hover:underline text-blue-500 '>Jan Noel S. Paed </a>and I founded a web dev tutorial site <a href="https://www.digitalocean.com/community" className='hover:underline text-blue-500'>Scotch.io.</a> We were able to grow to 4M monthly pageviews and $300,000 yearly revenue. Scotch.io was acquired by <a href="https://www.digitalocean.com/" className='hover:underline text-blue-500'>DigitalOcean</a>  in November 2019. Nowadays I'm in search of the best ways to develop and design a business. Hope you enjoy this course and my other one <a href="chrome-extension://fheoggkfdfchfphceeifdbepaooicaho/html/site_status_block_page.html" className='hover:underline text-blue-500'>MakeReactApps.com.</a></p>

                    <div className='lg:flex lg:space-x-8 text-left space-y-8 lg:space-y-0'>
                        {/* left video */}
                        <div className='border border-gray-700 lg:w-1/2 rounded bg-white shadow-xl '>
                            <p className='p-8 text-gray-700 text-lg'>
                                I did a Build Your 1st Tailwind Site for Traversy Media on YouTube also.
                            </p>
                            <iframe className="w-full rounded-b" height="315" src="https://www.youtube.com/embed/wEM5NdJ-8HY?si=yyVUaZ8vfvr4PnOx" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

                        </div>
                        {/* right video */}
                        <div className='flex-1 border border-gray-700 lg:w-1/2 rounded bg-white shadow-xl '>
                            <p className='p-8 text-gray-700 text-lg '>
                                This is a match up between Grizzlies and Warriors
                            </p>
                            <iframe className="w-full rounded-b" height="315" src="https://www.youtube.com/embed/sAHEhFh35vE?si=K_AInWBAHKV0WKAx" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutMe