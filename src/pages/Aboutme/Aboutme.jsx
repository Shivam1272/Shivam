import React from 'react'
import myphoto from '../../assets/aboutme/dev2.jpg'
function Aboutme() {
  return (
    <div className="hero  bg-base-200" name='aboutme'>
        About Me
        <div className="hero-content flex-col lg:flex-row">
            <div className='w-[300px] lg:w-full'>
                <img className='rounded-full' src={myphoto} alt='Dev Profile Pic'/>
            </div>
            <div>
                <h1 className="text-5xl font-bold text-secondary flex justify-center items-center">
                    </h1>
                <p className="py-6 lg:text-lg text-sm text-left" >
                    Hi! My name is Shivam Patel and I am a web developer with a passion for building intuitive and visually appealing websites. I have a strong foundation in HTML, CSS, and JavaScript, and am experienced in using modern web development frameworks such as React and Next.
                    <br/>
                    In my previous work experience, I have had the opportunity to collaborate with cross-functional teams to design and develop websites for a variety of clients. I am skilled in the full web development life cycle, from gathering requirements and designing wireframes, to writing clean and efficient code, to testing and deploying the final product.
                    <br/>

                    I am constantly seeking to improve my skills and stay up to date with the latest web development technologies and trends. In my free time, I enjoy participating in online coding challenges and tinkering with personal projects to expand my knowledge and capabilities.
                    <br/>

                    I am excited to use my skills and experience to create impactful and user-friendly websites that help businesses and organizations achieve their goals.
                </p>
            </div>
        </div>
    </div>
  )
}

export default Aboutme
