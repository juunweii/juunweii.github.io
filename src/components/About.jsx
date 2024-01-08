import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1200px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-[#fbf851]'>About</p>
                </div>
                <div></div>
                </div>
                <div className='max-w-[1200px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-right text-4xl font-bold'>
                        <p>Hi, I'm Walton.</p>
                        <p>Thanks for stopping by! </p>
                        <p>Let's explore the possibilities of technology together.</p>
                    </div>
                    <div className='text-xl'>
                        <p>
                            I am passionate about technology and its power to transform and improve lives. During my time at <span className='text-[#C41230]'>Carnegie Mellon University</span>, I honed my skills in <span className='bg-yellow-200'>full-stack development</span> and <span className='bg-yellow-200'>DevOps</span>, culminating in a Master's degree in Information Systems Management. 
                        </p>
                        <p>
                            My technical journey included a summer internship at <span className='text-[#C41230]'>Teamcal.Ai </span>in Mountain View, where I specialized in Full-Stack Development. This experience not only deepened my technical expertise but also strengthened my <span className='bg-yellow-200'>problem-solving</span>and <span className='bg-yellow-200'>collaborative abilities</span>.
                        </p>
                        <p>
                            I thrive in environments where I can <span className='bg-yellow-200'>innovate</span>and <span className='bg-yellow-200'>tackle complex challenges</span>. My goal is to join a forward-thinking team where I can contribute to impactful projects and continue growing as a full-stack developer. Take a look around to see some of the projects I've worked on and what I can bring to your team!
                        </p>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default About