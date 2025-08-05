import React from 'react';

const ContactMap = () => {
  return (
    <div className="relative w-full aspect-video md:h-96 overflow-hidden mx-auto max-w-8xl px-4 sm:px-6 lg:px-8 mb-20">
      <iframe
        className="w-full h-full border-0 rounded-2xl"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2658.7348798801772!2d16.35163787672688!3d48.211722345995994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476d07956d1df595%3A0x6463d8612555dd77!2sWickenburggasse%201%2C%201080%20Wien!5e0!3m2!1sen!2sat!4v1750836942491!5m2!1sen!2sat"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map"
      ></iframe>
    </div>
  );
};

export default ContactMap;
