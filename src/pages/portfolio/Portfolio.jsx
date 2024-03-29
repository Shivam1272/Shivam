import React from 'react'
import Project from './Project'
import rickmorty from '../../assets/project/rickmorty.png'
import netflix from '../../assets/project/netflix.png'
import instagram  from '../../assets/project/instagram.png'

function Portfolio() {
    const projects =[
        {
            id:1,
            title:"Ricy&Morty",
            projectUrl:rickmorty,
            desc:"A web application based on the popular animated TV series Rick and Morty",
            codeUrl:"https://github.com/Shivam1272/rick-morty",
            demoUrl:"https://shivampatel-rickandmorty.netlify.app/"
        },
        {
            id:2,
            title:"Social Media[Instagram Clone]",
            projectUrl:instagram,
            desc:"It is a social media web app build using Next.js & firebase",
            codeUrl:"https://github.com/Shivam1272/instagram-2.0",
            demoUrl:""
        },
        {
            id:3,
            title:"Entertaining[Netflix Clone]",
            projectUrl:netflix,
            desc:"It is a Entertaining site build using React.js & The MovieDB for Movie Data",
            codeUrl:"https://github.com/Shivam1272/netflix-clone",
            demoUrl:"https://shivam-netflixclone.netlify.app"
        },
        // {
        //     id:4,
        //     title:"Entertaining[Netflix Clone]",
        //     projectUrl:netflix,
        //     desc:"It is a Entertaining site build using React.js & The MovieDB for Movie Data",
        //     codeUrl:"https://github.com/Shivam1272/netflix-clone",
        //     demoUrl:"",
        //     demoUrl:""
        // },
        // {
        //     id:5,
        //     title:"Entertaining[Netflix Clone]",
        //     projectUrl:netflix,
        //     desc:"It is a Entertaining site build using React.js & The MovieDB for Movie Data",
        //     codeUrl:"https://github.com/Shivam1272/netflix-clone",
        //     demoUrl:""
        // },
    ]
  return (
    <div className='m-5 flex flex-col justify-center items-center' name='portfolio'>
        <h1 className='text-lg lg:text-3xl font-bold text-secondary text-center py-10'>My Project</h1>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 md:grid-cols-1 py-10 justify-center items-center'>
            {
                projects.map((project) => (
                    <Project key={project.id} project={project}/>
                ))
            }
        </div>
    </div>
  )
}

export default Portfolio
