import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/Alabay Assets/Alabay Assets/1.png'
import shadow from '../assets/Alabay Assets/Alabay Assets/shadow.png'
import { FaArrowRight } from "react-icons/fa";
import { useRef } from 'react';

import groupDog from '../assets/Alabay Assets/Alabay Assets/group.png'
import ss from '../assets/Alabay Assets/Alabay Assets/ss.png'
const TopSection = () => {
    const [active, setActive] = useState(0);
    const linkRefs = useRef([]);
    const scrollContainerRef = useRef(null);

    const handleScroll = (index) => {
        setActive(index);
        linkRefs.current[index].scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
    };

    const links = ['All', 'PHOTO', 'VIDEOS'];

    const nextPrev = () => {
        if (scrollContainerRef.current) {

            // Scrolls the width of one section (the first child, which is 'min-w-full')
            const scrollAmount = scrollContainerRef.current.offsetWidth;
            scrollContainerRef.current.scrollBy({
                left: scrollAmount,
                behavior: 'smooth',
            });
        }
    };
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

            <div className="sm:mt-10 z-50 md:ps-10 lg:ps-42 absolute sm:top-16 top-2 logo">
                <img src={logo} alt="" className="lg:w-[34rem] sm:w-[24rem] object-contain w-48" />
            </div>

            <div className="sm:mt-10 md:ps-10 lg:ps-42 absolute sm:top-[72vh] top-2 hidden sm:block logo">
                <img src={shadow} alt="" className="lg:w-[34rem] sm:w-[24rem] object-contain w-48 opacity-25" />
            </div>

            <div className=''>

                <div className='flex items-center gap-5 justify-center overflow-x-auto'>
                    {links.map((link, index) => (
                        <Link
                            key={index}
                            className={`font-bold cursor-pointer ${active === index ? 'text-yellow-500 underline' : ''}`}
                            onClick={() => handleScroll(index)}
                            ref={(el) => (linkRefs.current[index] = el)}
                        >
                            {link}
                        </Link>
                    ))}
                </div>

                <div className='relative px-2 py-2 bg-[rgba(255,252,252,0.61)]'>

                    <div className='flex justify-start overflow-x-auto gap-5 scrollbar-hide' ref={scrollContainerRef}>
                        <div className='min-w-full ps-5'>
                            <div className='grid grid-flow-col auto-cols-[16rem] sm:auto-cols-[21rem] gap-5 md:gap-10 px-5 my-2'>
                                <div className='h-48 sm:w-[21rem] w-[16rem] border rounded-md bg-gray-600'></div>
                                <div className='h-48 sm:w-[21rem] w-[16rem] border rounded-md bg-gray-600'></div>
                                <div className='h-48 sm:w-[21rem] w-[16rem] border rounded-md bg-gray-600'></div>
                            </div>
                        </div>

                        <div className='min-w-full  ps-5'>
                            <div className='grid grid-flow-col auto-cols-[16rem] sm:auto-cols-[21rem] gap-5 md:gap-10 px-5 my-2'>
                                <div className='h-48 sm:w-[21rem] w-[16rem] border rounded-md bg-gray-600'></div>
                                <div className='h-48 sm:w-[21rem] w-[16rem] border rounded-md bg-gray-600'></div>
                                <div className='h-48 sm:w-[21rem] w-[16rem] border rounded-md bg-gray-600'></div>
                            </div>
                        </div>

                        <div className='min-w-full  ps-5'>
                            <div className='grid grid-flow-col auto-cols-[16rem] sm:auto-cols-[21rem] gap-5 md:gap-10 px-5 my-2'>
                                <div className='h-48 sm:w-[21rem] w-[16rem] border rounded-md bg-gray-600'></div>
                                <div className='h-48 sm:w-[21rem] w-[16rem] border rounded-md bg-gray-600'></div>
                                <div className='h-48 sm:w-[21rem] w-[16rem] border rounded-md bg-gray-600'></div>
                            </div>
                        </div>
                    </div>

                    <div className='bg-white project full text-center pt-12 sm:pt-20 pb-8'>
                        <h1 className='sm:text-7xl text-3xl font-extrabold'>PROJECT VISION</h1>
                    </div>

                    <div onClick={nextPrev} className='md:h-16 md:w-12 h-10 w-8 bg-black flex items-center justify-center rounded-md overflow-hidden absolute md:right-5 right-2 top-24  md:top-16 '>
                        <FaArrowRight className='text-white md:text-xl font-bold' />
                    </div>
                </div>
            </div>

            <div className='second absolute sm:mt-12'>
                <img src={ss} alt="" className='absolute  lg:top-[67vh] top-72 md:top-48 w-[80%] text-center opacity-20' />
                <div className='absolute  bottom-48 xxx'>
                    <p className='text-center sm:text-2xl '>Our mission is to honor the heritage of the Alabay by creating a <br /> vibrant, loyal, and powerful community. Just as the Alabay protects its <br />flock, we aim to build a pack that stands strong together.</p>
                </div>
            </div>
            <div className='full flex items-center justify-center'>
                <img src={groupDog} alt="" className='absolute sm:top-[65rem] top-[65rem] w-[80%] text-center' />
            </div>

        </div>
    )
}

export default TopSection