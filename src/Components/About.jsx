import React from 'react'
import { SiMongodb } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMysql } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
const About = () => {
    return (
        <>
            <div name="About" className='bg-light-pink '>
                <div className='max-w-screen-2xl container mx-auto px-4 py-5 md:p-16 '>
                    <h1 className='text-5xl font-bold mb-10 text-center'>My Journey</h1>
                    <p>Hello I’m Sanchit, a dedicated Web Developer with a passion for developing user friendly websites. Feel free to explore my skills and education to learn more about what drives
                        my work!</p>
                    <br />
                    <div className='flex flex-col md:flex-row md:items-center my-7'>
                        <h1 className=' text-green-600 font-semibold text-2xl my-3 mr-1'>Education</h1>
                        <div className=' md:flex bg-white p-1 '>
                            <div className='md:w-1/3 mx-3 mb-3 '>
                                <h1 className='font-bold md:mb-3'>Bachelor of Computer Application </h1>
                                <p className='text-sm'>Swami Rama Himalayan University, Dehradun, Uttarakhand <br /> | 2022 – 2025 | </p>
                            </div>

                            <div className='md:w-1/3 mx-3 mb-3'>
                                <h1 className='font-bold md:mb-3'>Intermediate  </h1>
                                <p className='text-sm'>DSB International Public School, Dehradun, Uttarakhand <br /> | 2021-2022 |  </p>
                            </div>

                            <div className='md:w-1/3 mx-3 mb-3'>
                                <h1 className='font-bold md:mb-3'>High School  </h1>
                                <p className='text-sm'>DSB International Public School, Dehradun, Uttarakhand  <br /> | 2019-2020 | </p>
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col md:flex-row md:items-center md:my-10'>
                        <h1 className=' text-green-600 font-semibold text-2xl my-3 md:mr-16'>Skills</h1>
                        <div className=' flex bg-white p-1 w-full  justify-center md:justify-normal flex-wrap'>


                            <div className=' flex flex-col items-center h-20 w-20 mr-10 md:mr-20  mt-3  hover:scale-110 duration-200'>
                                <SiMongodb className='text-7xl' />
                                <span>MongoDB</span>
                            </div>
                            <div className=' flex flex-col items-center h-20 w-20 mr-10 md:mr-20  mt-3  hover:scale-110 duration-200'>
                                <FaReact className='text-7xl' />
                                <span>React.js</span>
                            </div>
                            <div className=' flex flex-col items-center h-20 w-20 mr-10 md:mr-20  mt-3  hover:scale-110 duration-200' >
                                <FaNode className='text-7xl' />
                                <span>Node.js</span>
                            </div>
                            <div className=' flex flex-col items-center h-20 w-20 mr-10 md:md:mr-20  mt-3  hover:scale-110 duration-200'>
                                <RiTailwindCssFill className='text-7xl' />
                                <span>Tailwind</span>
                            </div>

                            <div className=' flex flex-col items-center h-20 w-20 mr-10 md:md:mr-20  mt-3  hover:scale-110 duration-200'>
                                <FaBootstrap className='text-7xl' />
                                <span>Bootstrap</span>
                            </div>
                            <div className=' flex flex-col items-center h-20 w-20 mr-10 md:md:mr-20  mt-3  hover:scale-110 duration-200'>
                                <SiRedux className='text-7xl' />
                                <span>Redux</span>
                            </div>
                            <div className=' flex flex-col items-center h-20 w-20 mr-10 md:mr-20  mt-3  hover:scale-110 duration-200'>
                                <SiMysql className='text-7xl' />
                                <span></span>
                            </div>
                            <div className=' flex flex-col items-center h-20 w-20  mr-10 md:mr-20  mt-3  hover:scale-110 duration-200'>
                                <FaGithub className='text-7xl' />
                                <span>Git</span>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </>

    )
}

export default About