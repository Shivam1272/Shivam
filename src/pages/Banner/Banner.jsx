import React from 'react'
import Lottie from 'lottie-react'
import webDevAnimation from '../../assets/Banner/animation.json'
import Typewriter from 'typewriter-effect'


function Banner() {
  return (
    <div className="hero bg-base-200" name='banner'>
        <div className="hero-content flex-col lg:flex-row">
            <div className='lg:w-full'>
                <Lottie animationData={webDevAnimation} loop={true}></Lottie>
            </div>
            <div>
                <h1 className="text-5xl font-bold text-secondary flex justify-center items-center">
                    <Typewriter options={{
                        strings:["I am Shivam Patel", "A Full Stack Developer"],
                        autoStart: true,
                        loop: true
                    }} />
                    </h1>
                <p className="py-6 lg:text-lg text-sm text-center" >
                    Hello, my name is Shivam Patel and I am a full stack web developer. I have a strong passion for creating visually appealing and user-friendly websites and applications. I have a strong understanding of HTML, CSS, and JavaScript as well as experience with popular frameworks such as React and Next. I am constantly learning and staying up-to-date with the latest technology to bring the best solutions to my clients. I am a hardworking and dedicated professional who is always looking for new challenges and opportunities to showcase my skills.
                </p>
            </div>
        </div>
    </div>
  )
}

export default Banner
