import React from 'react'

function Contact() {
  return (
    <div className="hero min-h-screen bg-base-200" name='contact'>
        <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
                <h1 className="text-5xl font-bold">Don't hesitate - contact me now and let's get started</h1>
                <p className="py-6"> If you would like to contact me via email, you can send me a message at patelshivam.0212@gmail.com. I would be happy to hear from you and will do my best to respond as soon as possible. Alternatively, you can also reach out to me on my social media accounts or through any other means of communication that you have access to. I look forward to hearing from you soon</p>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div className="card-body">
                    <form action='https://getform.io/f/cfa3ba64-ef64-4fd5-8fd7-d05ab95f5f03' method='POST'>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" name='email' className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Message</span>
                            </label>
                            <textarea rows={10} placeholder="message" name='message' className="input input-bordered"></textarea>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>    
  )
}

export default Contact
