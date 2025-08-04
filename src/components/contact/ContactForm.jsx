import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

export default function ContactForm() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Contact Details */}
          <div>
            <h2 className="text-sx font-semibold mb-2 text-[#E9004B]">
              How Can We Help?
            </h2>
            <h2 className="text-3xl font-bold mb-6 w-80 text-black ">
              Have Questions? Get In touch!
            </h2>
            <p className="text-sx text-gray-700 mb-8">
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Mauris nullam the quam dolor ready to use nunc semper.
            </p>
            <div className="space-y-6">
              {/* Location */}
              <div className="flex items-start">
                <FaMapMarkerAlt className="h-5 w-5 text-[#E9004B] mt-1 mr-4 flex-shrink-0" />
                <div>
                  <p className="text-gray-800 text-xl w-90 ">4 apt. Flawing Street. The Grand Avenue
                    Liverpool, UK 33342</p>
                </div>
              </div>
              {/* Phone */}
              <div className="flex items-start">
                <FaPhoneAlt className="h-5 w-5 text-[#E9004B] mt-1 mr-4 flex-shrink-0" />
                <div>
                  <p className="text-gray-800 text-xl">+91 9876543210</p>
                </div>
              </div>
              {/* Email */}
              <div className="flex items-start">
                <FaEnvelope className="h-5 w-5 text-[#E9004B] mt-1 mr-4 flex-shrink-0" />
                <div>
                  <p className="text-gray-800 text-xl">www.radiustheme.com</p>
                </div>
              </div>
            </div>

            {/* Social Icons */}
            <div className="mt-8 flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full flex items-center justify-center border border-[#E9004B] transition-colors"
                aria-label="Facebook"
              >
                <FaFacebookF className="h-5 w-5 text-[#1877F2]" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full flex items-center justify-center border border-[#E9004B] transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram className="h-5 w-5 text-[#E4405F]" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full  flex items-center justify-center border border-[#E9004B] transition-colors"
                aria-label="Twitter"
              >
                <FaTwitter className="h-5 w-5 text-[#1DA1F2]" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full flex items-center justify-center border border-[#E9004B] transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn className="h-5 w-5 	text-[#0A66C2]" />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="shadow-sm	border border-gray-200 p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-6">Contact Form</h3>
            <p className="text-sx text-gray-800 mb-8">
               Lorem ipsum dolor sit amet consectetur adipiscing Mauris nullam the integer nunc semper nulla faucibus vulputate.

            </p>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  placeholder="Full Name"
                />
              </div>
              <div className="flex gap-5">
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-65 px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  placeholder="Email Address"
                />
              </div>
              <div>
  <label htmlFor="tel" className="block text-sm font-medium mb-1">
  </label>
  <input
    type="tel"
    id="tel"
    className="w-65 px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-amber-500"
    placeholder="Phone Number"
  />
</div>

              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                </label>
                <textarea
                  id="message"
                  className="w-full px-4 py-3 h-32 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  placeholder="Message Here..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-amber-500 hover:bg-amber-600 text-black font-bold py-3 px-6 rounded-lg transition-colors"
              >
                Submit Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
