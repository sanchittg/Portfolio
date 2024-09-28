import React from 'react'

const Contact = () => {
    return (
        <>
            <div name="Contact" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-16'>
                <h1 className='text-5xl font-bold mb-10 text-center'>Contact Me</h1>
                <span className='text-center'>Please fill out the form to contact me</span>
                <div className='flex flex-col items-center justify-center mt-5'>
                    <form action="https://getform.io/f/aejykvob" method='POST' className='bg-slate-200 w-96 px-6 py-4 rounded-xl'>
                        <h1 className='text-xl font-semibold  mb-4'>Send your Message</h1>
                        <div className='flex flex-col mb-4'>
                            <label className='block text-gray-700'>FullName</label>
                            <input required type="text" id='name' name='name' placeholder='Enter your full name' className='rounded-lg shadow  border py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline' />
                        </div>
                        <div className='flex flex-col mb-4'>
                            <label className='block text-gray-700'>Email Address</label>
                            <input required type="text" id='name' name='email' placeholder='Email Address' className='rounded-lg shadow  border py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline' />
                        </div>
                        <div className='flex flex-col mb-4'>
                            <label className='block text-gray-700'>Message</label>
                            <textarea required type="text" id='name' name='message' placeholder='message' className='rounded-lg shadow  border py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline' />
                        </div>
                        <button type='submit' className='bg-black text-white rounded-xl px-3 py-2 hover:bg-slate-700 duration-300'>Send</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Contact