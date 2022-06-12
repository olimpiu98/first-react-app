import React from 'react'
import './Contact.css'


function Contact() {
    return (
        <div className='container mt-5'>
            <h3 className='text-center text-uppercase pt-4'>Contact Us</h3>
            <div className='mx-auto contact-form-container shadow-lg mt-5 p-4 rounded fs-6 lh-2 text-muted'>
                <form className="was-validated">
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="email" placeholder="name@example.com" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="phone" className="form-label">Contact number</label>
                        <input type="number" className="form-control" id="phone" placeholder="0745111000" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="Textarea" className="form-label">Textarea</label>
                        <textarea className="form-control" id="Textarea" placeholder="Required text" required></textarea>
                    </div>
                    <div className="mb-3 d-grid">
                        <button className="btn btn-primary" type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact