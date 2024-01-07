import React from 'react'

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import AWS from '../assets/aws.png';
import Python from '../assets/Python.png';
import Java from '../assets/java.png';
import PHP from '../assets/php.png';
import GCP from '../assets/gcp.png';

const Skills = () => {
  return (
    <div name='skills'>
        {/* Container */}
        <div className='max-w-[1200px] mx-auto p-4 flex flex-col justify-center w-full h-full'> 
            <div> 
                <p className='text-4xl font-bold inline border-b-4 border-[#fbf851]'>Skills</p>
                <p className='py-4'>These are the technologies I've worked with</p>
            </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
            <div className='shadow-md shadow-[#040c1635] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
                <p>HTML</p>
            </div>
            <div className='shadow-md shadow-[#040c1635] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={CSS} alt="HTML icon" />
                <p>CSS</p>
            </div>
            <div className='shadow-md shadow-[#040c1635] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={JavaScript} alt="HTML icon" />
                <p>JAVASCRIPT</p>
            </div>
            <div className='shadow-md shadow-[#040c1635] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={PHP} alt="HTML icon" />
                <p>PHP</p>
            </div>
            <div className='shadow-md shadow-[#040c1635] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={Python} alt="HTML icon" />
                <p>PYTHON</p>
            </div>
            <div className='shadow-md shadow-[#040c1635] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={Java} alt="HTML icon" />
                <p>JAVA</p>
            </div>
            <div className='shadow-md shadow-[#040c1635] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={AWS} alt="HTML icon" />
                <p>AWS</p>
            </div>
            <div className='shadow-md shadow-[#040c1635] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={GCP} alt="HTML icon" />
                <p>GCP</p>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Skills