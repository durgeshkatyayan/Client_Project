import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/Alabay Assets/Alabay Assets/1.png'
const TopSection = () => {
    return (
        <div>
            <div className='top-section-body grid md:grid-cols-2 gap-2 sm:px-12 overflow-visible relative'>

                <div className="sm:mt-10 z-50 md:ps-10">
                    {/* <img src={logo} alt="" className="w-full h-full object-fill" /> */}
                </div>
                <div className='md:px-5 px-3  sm:py-5 sm:mt-10 text-right'>
                    <h1 className='text-2xl sm:text-5xl lg:text-6xl   text-orange-500 font-bold md:font-extrabold '>History of</h1>
                    <h2 className='text-3xl sm:text-7xl font-extrabold text-white mt-5 lg:text-8xl '>ALABAY</h2>
                    <pre className='sm:pt-5'>The Central Asian Shepherd Dog,</pre>
                    <pre>also known as Alabay, has been a</pre>
                    <pre>guardian of livestock and property</pre>
                    <pre>for centuries. Originating from</pre>
                    <pre>Central Asia, these dogs are</pre>
                    <pre>renowned for their courage,</pre>
                    <pre>strength, and loyalty.</pre>
                </div>

            </div>
            <div className=' '>
                <div className='flex items-center gap-5 justify-center'>
                    <Link className='font-semibold'>All</Link>
                    <Link className='font-semibold'>PHOTO</Link>
                    <Link className='font-semibold'>VIDEOS</Link>
                </div>
            </div>

            <div className="sm:mt-10  z-50 md:ps-10 lg:ps-48 absolute sm:top-20 top-2 logo">
                <img src={logo} alt="" className="lg:w-[34rem] sm:w-[24rem] object-contain w-48" />
            </div>

        </div>
    )
}

export default TopSection