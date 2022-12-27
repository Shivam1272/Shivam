import React from 'react'

function Project({project}) {
  const {title, projectUrl, desc, codeUrl, demoUrl} = project
  return (
    <div className="card w-96 h-96 bg-base-100 shadow-xl">
        <figure><img className=' w-full p-8 m-4' src={projectUrl} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">
            {title}
          </h2>
          <p>{desc}</p>
          <div className="card-actions justify-end primary">
            {demoUrl &&
              <button>
                <a href='#'>Demo</a>
              </button>
            }
            <button className='btn btn-primary'>
              <a href={codeUrl} target='_blank'>Code</a>
            </button>
          </div>
        </div>
    </div>
  )
}

export default Project
