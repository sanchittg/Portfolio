import React from 'react'
import dashboard from "../../public/dashboard.jpg"
import bewakoof from "../../public/Bewakoof.png"
import calculator from "../../public/calculator2.jpg"
import tictactoe from "../../public/tictactoe.jpg"
import landing from "../../public/landingpage.jpg"
import gif from "../../public/GifGenerator.jpg"
import tour from "../../public/tour.jpg"
const Projects = () => {
    const cards = [
        {
            id: 1,
            image: gif,
            title: "GIF Generator",
            description: "Built a GIF generator using an API to fetch random and custom GIFs. Developed with React.js to practice API integration and dynamic content rendering.",
            techonolgy: "React.js, CSS"
        },
        {
            id: 2,
            image: tour,
            title: "Hidden Horizons",
            description: " Developed a travel website showcasing hidden destinations in India to promote tourism. Built with React.js, CSS focusing on user experience and informative content.",
            techonolgy: "React.js, CSS"
        },
        {
            id: 3,
            image: calculator,
            title: "Custom Calculator",
            description: "Built a functional calculator using JavaScript to practice logic and event handling.It performs basic arithmetic operations with a clean, user- friendly interface.",
            techonolgy: "HTML ,CSS, JavaScript"
        },
        {
            id: 4,
            image: tictactoe,
            title: "Tic Tac Toe Game",
            description: "Developed a Tic Tac Toe game using JavaScript to enhance my skills in game logic and DOM manipulation. It features a simple interface with two-player functionality.",
            techonolgy: "HTML ,CSS, JavaScript"


        },
        {
            id: 5,
            image: landing,
            title: "Practice website",
            description: "Created a responsive website as a practice project . Focused on layout design, styling, and enhancing user experience.",
            techonolgy: "HTML, CSS, Bootstrap"
        },
        {
            id: 6,
            image: bewakoof,
            title: "Bewakoof Clone",
            description: "Clone of Bewakoof.com, built as a learning project to improve my skills. Inspired by the original, but entirely coded by me.",
            techonolgy: "HTML , CSS , Bootstrap"
        },
    ]
    return (
        <>
            <div name="Portfolio" className=' max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10'>
                <h1 className='text-5xl font-bold mb-10 text-center'>My Projects</h1>
                <div className='grid  sm:grid-cols-2 sm:jjustify-items-center md:grid-cols-3 gap-4 my-5'>
                    {
                        cards.map(({ id, image, description, techonolgy, title }) => {
                            return (<div key={id} className='w-[300px]  rounded-xl shadow-lg border-4   cursor-pointer hover:scale-105 duration-300'>
                                <img src={image} className='w-[300px] h-[150px] border rounded-lg ' alt="" />
                                <div>
                                    <div className='font-bold text-2xl my-1 px-2 '>
                                        <p>{title}</p>
                                    </div >
                                    <div className='p-2 text-gray-700 text-xs'>
                                        <p>{description}</p>
                                    </div >
                                    <div className='px-2 '>
                                        <p>{techonolgy}</p>
                                    </div>
                                    <div className='space-x-4 px-2 py-4'>
                                        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold px-2 py-2 rounded'>watch</button>
                                        <button className='bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded'>Source Code</button>
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