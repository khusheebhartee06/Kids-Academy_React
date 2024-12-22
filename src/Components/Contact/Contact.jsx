import React from 'react';
import BannerForAll from '../BannerForAll';
import ContactForm from './ContactForm.jsx';
import ContactMap from './ContactMap.jsx';
import './Contact.css'

function Contact() {
    return (
        <React.Fragment>
            <BannerForAll props={{ heading: "Our Contact Info", val: 'Contact Us' }} />
            <ContactForm />
            <ContactMap />
        </React.Fragment>
    )
}

export default Contact;