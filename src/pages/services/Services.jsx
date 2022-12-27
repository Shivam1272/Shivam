import React from 'react'
import Service from './Service'
import SEO from '../../assets/Services/SEO.json'
import App from '../../assets/Services/app.json'
import ECommmerce from '../../assets/Services/ecommerce.json'
import FrontEnd from '../../assets/Services/frontend.json'
import Maintaince from '../../assets/Services/maintaince.json'
import webDevleopment from '../../assets/Services/webDevleopment.json'


function Services() {
    const services = [
            {id:1,
            serviceName:"Website design and development: A web developer can create a visually appealing and functional website from scratch, using a variety of programming languages and tools.",
            animation:webDevleopment,},
            {id:2,
            serviceName:"User experience design: A web developer can help to create a seamless and intuitive user experience for visitors to a website, through careful planning and testing.",
            animation:FrontEnd,},
            {id:3,
            serviceName:"Search engine optimization: A web developer can optimize a website for search engines, ensuring that it ranks highly in search results and is easily found by potential customers.",
            animation:SEO,},
            {id:4,
            serviceName:"E-commerce integration: A web developer can help to set up and maintain an online store, including payment gateways, shipping options, and inventory management.",
            animation:ECommmerce,},
           { id:5,
            serviceName:"Website maintenance and updates: A web developer can help to keep a website up-to-date, fixing any issues and adding new features as needed.",
            animation:Maintaince,},
           { id:6,
            serviceName:"Mobile optimization: A web developer can ensure that a website is fully functional and easy to use on mobile devices, including smartphones and tablets.",
            animation:App,}
    ]
  return (
    <div className='m-5 flex flex-col justify-center items-center' name='services'>
        <h1 className='text-lg lg:text-3xl font-bold text-secondary text-center py-10'>My Services</h1>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 md:grid-cols-2 py-10 justify-center items-center'>
            {
                services.map((service) => (
                    <Service key={service.id} service={service}/>
                ))
            }
        </div>
    </div>
  )
}

export default Services