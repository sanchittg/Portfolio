import React from 'react'

import bewakoof from "../../public/Bewakoof.png"
import dashboard from "../../public/Dashboard.png"
import tictactoe from "../../public/tictactoe.jpg"
import remake from "../../public/remake.png"
import gif from "../../public/GifGenerator.jpg"
import tour from "../../public/tour.jpg"
const Projects = () => {
    const cards = [
        {
            id: 1,
            image: bewakoof,
            title: "Bewakoof Website Clone",
            description: "Clone of Bewakoof.com, built as a learning project to improve my skills. Inspired by the original, but entirely coded by me.",
            techonolgy: "HTML , CSS , Bootstrap ,JavaScript",
            watch: "https://grand-bubblegum-491523.netlify.app/",
            sourceCode: "https://github.com/sanchittg/Bewakoof_Website_Clone"
        },
        {
            id: 2,
            image: dashboard,
            title: "Responsive Admin Dashboard",
            description: "Admin dashboard built using Bootstrap, featuring graphs and pie charts with a responsive layout for a clean and functional design.",
            techonolgy: "HTML ,Bootstrap, JavaScript",
            watch: "https://heroic-naiad-e4f615.netlify.app/",
            sourceCode: "https://github.com/sanchittg/AdmindDashboard"
        },
        {
            id: 3,
            image: tictactoe,
            title: "Tic Tac Toe Game",
            description: "Developed a Tic Tac Toe game using JavaScript to enhance my skills in game logic and DOM manipulation. It features a simple interface with two-player functionality.",
            techonolgy: "HTML ,CSS, JavaScript",
            watch: "https://snazzy-cajeta-c0b935.netlify.app/",
            sourceCode: "https://github.com/sanchittg/TicTacToe"
        },
        {
            id: 4,
            image: remake,
            title: "Personalized Website Design",
            description: "Created a responsive website as a practice project . Focused on layout design, styling, and enhancing user experience.",
            techonolgy: "HTML, CSS, Bootstrap",
            watch: "https://rainbow-queijadas-913d6a.netlify.app/",
            sourceCode: "https://github.com/sanchittg/Remake"
        },
        {
            id: 5,
            image: gif,
            title: "GIF Generator",
            description: "Built a GIF generator using an API to fetch random and custom GIFs. Developed with React.js to practice API integration and dynamic content rendering.",
            techonolgy: "React.js, CSS",
            watch: "#",
            sourceCode: "https://github.com/sanchittg/GifGenerator"
        },
        {
            id: 6,
            image: tour,
            title: "Hidden Horizons",
            description: " Developed a travel website showcasing hidden destinations in India to promote tourism. Built with React.js, CSS focusing on user experience and informative content.",
            techonolgy: "React.js, CSS",
            watch: "#",
            sourceCode: "https://github.com/sanchittg/Hidden_Gems_Tourism_Platform"
        },



    ]
    return (
        <>

            <div name="Portfolio" className=' max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10'>
                <h1 className='text-5xl font-bold mb-10 text-center'>My Projects</h1>
                <div className='grid  sm:grid-cols-2 sm:jjustify-items-center md:grid-cols-3 gap-4 my-5'>
                    {
                        cards.map(({ id, image, description, title, watch, sourceCode }) => {
                            return (<div key={id} className='w-[300px]  rounded-xl shadow-lg border-4   cursor-pointer hover:scale-105 duration-300'>
                                <img src={image} className='w-[300px] h-[150px] border rounded-lg ' alt="" />
                                <div>
                                    <div className='font-bold text-2xl my-1 px-2 '>
                                        <p>{title}</p>
                                    </div >
                                    <div className='p-2 text-gray-700 text-xs'>
                                        <p>{description}</p>
                                    </div >
                                    {/* <div className='px-2 '>
                                        <p>{techonolgy}</p>
                                    </div>
                                    */}
                                    <div className='space-x-4 px-2 py-4'>
                                        {watch !== "#" ?
                                            <a href={watch} target='_blank'>
                                                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold px-2 py-2 rounded'>watch</button>
                                            </a> : ""
                                        }
                                        <a href={sourceCode} target='_blank'>
                                            <button className='bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded'>Source Code</button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            );
                        })
                    }
                </div>
            </div>

        </>
    )
}

export default Projects