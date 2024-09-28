import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
const Footer = () => {
    return (
        <>
            <hr />
            <footer>
                <div className='max-w-screen-2xl container mx-auto px-4  md:p-20'>
                    <div className='flex  flex-col items-center justify-center'>
                        <div className='flex space-x-4 my-2 '>
                            <FaLinkedin size={24} />
                            <FaGithub size={24} />
                        </div>
                        <div className='mt-5 border-t border-gray-700 pt-8 flex flex-col items-center'>
                            <p className='text-sm'> @2024 Sanchit . All rights reserved</p>
                        </div>
                    </div>
                </div>
            </footer>
        </>

    )
}

export default Footer