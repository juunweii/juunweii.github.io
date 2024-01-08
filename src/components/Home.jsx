import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen'>
        {/* Container */}
        <div className='max-w-[1200px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-xl'>Hi, my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#fffcfa]'>Chun-Wei Hung</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#272343]'>I'm a Full Stack Developer.</h2>
            <div className='text-xl max-w-[1000px] flex items-center'>
                <p className='flex-1'>Proud Alum of <span className='text-[#C41230] font-bold'>Carnegie Mellon University</span>.</p>
            </div>

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