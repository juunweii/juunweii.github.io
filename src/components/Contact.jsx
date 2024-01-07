import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/b7d79a3c-cba9-49f6-857d-cbb0e6d9b2fd" className='flex flex-col max-w-[800px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-[#fbf851]'>Contact</p>
                <p className='py-4'>Submit the form below or shoot me an email - waltonhung0518@gmail.com</p>
            </div>
            <input className='bg-[#f5eaaa] p-2' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#f5eaaa]' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#f5eaaa] p-2' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-[#text-[#403736]] border-2 hover:bg-[#f5eaaa] hover:border-[#f5eaaa] px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
        </form>
    </div>
  )
}

export default Contact