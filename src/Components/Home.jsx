import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Resume from "../../public/SanchitThapliyal_Resume.pdf"
import { MdOutlineFileDownload } from "react-icons/md";
import { ReactTyped, } from "react-typed";
import profile from "../../public/profile.png"

const Home = () => {
    return (
        <>
            <div name='Home' className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-20'>
                <div className='flex flex-col md:flex-row'>
                    <div className='md:w-1/2 mt-12 md:mt-24 space-y-1 order-2 md:order-1'>
                        <span>Welcome In My Feed</span>
                        <div className='flex space-x-2 text-2xl md:text-4xl'>
                            <h1>Hello, I'm a</h1>
                            {/* <span className='text-red-700 font-bold '>Developer</span> */}
                            <ReactTyped
                                className='text-red-700 font-bold'
                                strings={["Developer", "Programmer", " Coder"]}
                                typeSpeed={40}
                                loop={true}
                                backSpeed={50}
                            />
                        </div>
                        <br />
                        <p className='text-sm md:text-md text-justify'>
                            I'm excited to share my journey as a web developer. I specialize in creating, engaging and responsive websites
                            that provide seamless user experiences. With a strong focus on clean code and innovative design,
                            I’m dedicated to bringing your ideas to life. Let’s collaborate and make something amazing together!</p>
                        <br />
                        {/* Social media */}
                        <div className='flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0'>
                            <div className='space-y-2'>
                                <p className='font-bold '>Available on</p>
                                <ul className='flex space-x-5'>
                                    <a href={`https://www.linkedin.com/in/sanchit-thapliyal-4bb16a249/`} target={'_blank'}>
                                        <li><FaLinkedin className='text-2xl  cursor-pointer hover:scale-110 duration-200' /></li>
                                    </a>
                                    <a href="https://github.com/sanchittg" target='_blank'>
                                        <li><FaGithub className='text-2xl cursor-pointer hover:scale-110 duration-200' /></li>
                                    </a>
                                </ul>
                            </div>
                            {/* <div className='space-y-2 bg-black text-white flex items-center  rounded hover:bg-red-700'>
                                <a href={Resume} download className=" px-4 py-2  " >Resume </a>
                                <span className='px-1 pb-1'><MdOutlineFileDownload className=' text-3xl' /></span>
                            </div> */}
                        </div>

                    </div>
                    <div className='md:w-1/2 mt-8 md:ml-48 md:mt-20 order-1'>
                        <img src={profile} height={450} width={450} alt="profile" className='rounded-full ' />
                        {
                            // can be used instead of using height and width h-[400px] w-[400px] lg:h-[450px] lg:w-[450px]
                        }

                    </div>
                </div>
            </div>

        </>
    )
}

export default Home