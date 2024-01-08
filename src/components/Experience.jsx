import React from 'react';
import { BsFillCircleFill } from 'react-icons/bs';
import { CiCalendar } from "react-icons/ci";
import { SlBriefcase } from "react-icons/sl";
import { PiGraduationCap } from "react-icons/pi";




const Experience = () => {
  return (
    <div name='experience' className='w-full min-h-screen flex flex-col items-center py-4'>
      <div className='max-w-[1200px] mx-auto px-8'>
        <div className='text-center mt-12'>
            <h2 className='text-center text-4xl font-bold inline border-b-4 border-[#fbf851]'>Experience</h2>
            <p className='text-xl text-center mt-2'>My personal journey</p>
        </div>
        

        <div className='flex flex-col md:flex-row md:justify-center mt-8'>
          {/* Education Column */}
          <div className='flex-1'>
          <h3 className='ml-12 pl-12 text-2xl font-bold mb-4'><PiGraduationCap className='inline mr-2'/>Education</h3>

            <div className='mb-9'>
              <h3 className='text-2xl font-bold'>Master of Information Systems Management</h3>
              <p className='text-base'>Carnegie Mellon University</p>
              <p className='text-base'>Pittsburgh, PA</p>
              <p className='text-base'><CiCalendar className='inline mr-2' />Aug 2022 - Dec 2023</p>
            </div>
            
            <div className='mb-5'>
              <h3 className='text-2xl font-bold'>BBA in Information Management</h3>
              <p className='text-base'>National Chung Cheng University</p>
              <p className='text-base'>Taiwan</p>
              <p className='text-base'><CiCalendar className='inline mr-2' />Sep 2017 - Jun 2021</p>
            </div>
          </div>

          {/* Timeline Column */}
          <div className='md:w-16 md:flex-none my-10 hidden md:flex md:flex-col md:items-center md:relative'>
            <div className='absolute w-0.5 bg-blue-500 h-full'></div>
            {/* Position the circles on the timeline */}
            <BsFillCircleFill className='text-blue-500 relative mb-5' style={{ top: '0.95rem' }} />
            <BsFillCircleFill className='text-blue-500 relative mb-5' style={{ top: '2.25rem' }} />
            <BsFillCircleFill className='text-blue-500 relative mb-5' style={{ top: '7.15rem' }} />
            <BsFillCircleFill className='text-blue-500 relative mb-5' style={{ top: '8.15rem' }} />
            <BsFillCircleFill className='text-blue-500 relative mb-5' style={{ top: '13.85rem' }} />
            <BsFillCircleFill className='text-blue-500 relative mb-5' style={{ top: '19.15rem' }} />
            {/* ... Other Dots ... */}
          </div>

          {/* Work Column */}
          <div className='flex-1'>
            {/* Work Title */}
            <h3 className='ml-12 pl-12 text-2xl font-bold mb-4'><SlBriefcase className='inline mr-2'/>Work</h3>

            <div className='md:mt-8 md:pt-10 md:mb-12 pb-4'>
              <h3 className='text-2xl font-bold'>Software Engineer Intern</h3>
              <p className='text-base'>Teamcal.Ai</p>
              <p className='text-base'>Mountain View, CA</p>
              <p className='text-base'><CiCalendar className='inline mr-2' />May 2023 - Aug 2023</p>
            </div>
            
            <div className='mb-5'>
              <h3 className='text-2xl font-bold'>Technical Support Specialist</h3>
              <p className='text-base'>Office of Information Technology, National Chung Cheng University</p>
              <p className='text-base'>Taiwan</p>
              <p className='text-base'><CiCalendar className='inline mr-2' />Nov 2019 - Jun 2021</p>
            </div>

            <div className='mb-5'>
              <h3 className='text-2xl font-bold'>Teaching Assistant, Electronic Commerce</h3>
              <p className='text-base'>National Chung Cheng University</p>
              <p className='text-base'>Taiwan</p>
              <p className='text-base'><CiCalendar className='inline mr-2' />Sep 2020 - Jun 2021</p>
            </div>

            <div className='mb-5'>
              <h3 className='text-2xl font-bold'>Frontend Deveopler Intern</h3>
              <p className='text-base'>Gowint Technology</p>
              <p className='text-base'>Taiwan</p>
              <p className='text-base'><CiCalendar className='inline mr-2' />Jul 2019 - Aug 2019</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
