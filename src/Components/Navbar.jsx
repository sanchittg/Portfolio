import React, { useState } from 'react'
import profile from "../../public/profile.png"
import { AiOutlineMenu } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import { Link } from 'react-scroll';
import Resume from "../../public/SanchitThapliyal_Resume.pdf"
const Navbar = () => {
    const [menu, setMenu] = useState(true);
    const navItem = [
        {
            id: 1,
            text: "Home"
        },
        {
            id: 2,
            text: "About"
        },
        {
            id: 3,
            text: "Portfolio"
        },

        {
            id: 4,
            text: "Contact"
        }
    ]
    return (
        <>
            <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 shadow h-16 bg-white fixed top-0 left-0'>
                {/*remove fixed and use this down h-[calc(100vh-4rem)] */}

                <div className='flex items-center justify-between h-16'>
                    <div className='flex space-x-2'>
                        <img src={profile} alt="profile" className='h-12 w-12 rounded-full' />
                        <h1 className='font-semibold text-xl'>Sanchit
                            <p className='text-sm'>Web developer</p>
                        </h1>
                    </div>
                    {/* desktop navbar */}
                    <div>
                        <ul className='hidden md:flex space-x-8 '>
                            {
                                navItem.map(({ index, text }) => {
                                    return <li className='hover:scale-105 duration-200 cursor-pointer' key={index}>
                                        <Link to={text} smooth={true} duration={500} offset={-70} activeClass='active'>{text}</Link>
                                    </li>
                                })
                            }
                        </ul>
                        <div onClick={() => setMenu(!menu)} className='md:hidden'>
                            {
                                menu ? <AiOutlineMenu size={24} /> : <RxCross2 size={24} />
                                // <AiOutlineMenu />
                                //<RxCross2 />
                            }
                        </div>
                    </div>
                </div>
                {/* mobie navbar */}
                <div className='bg-white' >
                    <ul className={menu ? 'hidden' : 'md:hidden h-screen flex flex-col items-center justify-center space-y-4'}  >
                        {
                            navItem.map(({ index, text }) => {
                                return <li className='hover:scale-105 font-semibold' key={index} ><Link onClick={() => setMenu(!menu)} to={text} smooth={true} duration={500} offset={-70} activeClass='active'>{text}</Link></li>
                            })

                        }
                        <li>
                            <a href={Resume} // Update with the actual path to your CV 
                                download
                                className="inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                            > Download CV </a>
                        </li>

                    </ul>

                </div>
            </div >
        </>
    )
}

export default Navbar