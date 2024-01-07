import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen'>
        {/* Container */}
        <div className='max-w-[1200px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p>Hi, my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#fffcfa]'>Chun-Wei Hung</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#272343]'>I'm a Full Stack Developer.</h2>
            <p className='py-4 max-w-[700px]'>I'm currently studying in Carnegie Mellon University.</p>
            <div>
                <button className='text-[#F6EBE4] group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#e6d67e] hover:border-[#e6d67e]'>
                <Link to='work' smooth={true} duration={500}>
                    View Work
                </Link>
                    <span className='group-hover:rotate-90 duration-300'>
                        <HiArrowNarrowRight className='ml-3'/>
                    </span>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Home