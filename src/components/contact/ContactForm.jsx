import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

const contactDetails = [
  {
    icon: <FaMapMarkerAlt className="h-5 w-5 text-[#E9004B] mt-1 mr-4 flex-shrink-0" />,
    text: "4 apt. Flawing Street. The Grand Avenue, Liverpool, UK 33342",
  },
  {
    icon: <FaPhoneAlt className="h-5 w-5 text-[#E9004B] mt-1 mr-4 flex-shrink-0" />,
    text: "+91 9876543210",
  },
  {
    icon: <FaEnvelope className="h-5 w-5 text-[#E9004B] mt-1 mr-4 flex-shrink-0" />,
    text: "www.radiustheme.com",
  },
];

const socialLinks = [
  {
    icon: <FaFacebookF className="h-5 w-5 text-[#1877F2]" />,
    href: "#",
    label: "Facebook",
  },
  {
    icon: <FaInstagram className="h-5 w-5 text-[#E4405F]" />,
    href: "#",
    label: "Instagram",
  },
  {
    icon: <FaTwitter className="h-5 w-5 text-[#1DA1F2]" />,
    href: "#",
    label: "Twitter",
  },
  {
    icon: <FaLinkedinIn className="h-5 w-5 text-[#0A66C2]" />,
    href: "#",
    label: "LinkedIn",
  },
];

export default function ContactForm() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start ">
          {/* Contact Details */}
          <div className="sm:p-5 sm:py-15">
            <h2 className="text-sm font-semibold mb-2 text-[#E9004B]">
              How Can We Help?
            </h2>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-black">
              Have Questions? Get In touch!
            </h2>
            <p className="text-sx text-gray-700 mb-8">
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Mauris nullam the quam dolor ready to use nunc semper.
            </p>

            <div className="space-y-6">
              {contactDetails.map((item, index) => (
                <div className="flex items-start" key={index}>
                  {item.icon}
                  <p className="text-gray-800 text-base ">{item.text}</p>
                </div>
              ))}
            </div>

            {/* Social Icons */}
            <div className="mt-8 flex flex-wrap gap-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="group w-10 h-10 rounded-full flex items-center justify-center border border-[#E9004B] transition-transform duration-300 hover:translate-x-1"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="shadow-sm border border-gray-200 p-6 md:p-8 rounded-xl">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">Contact Form</h3>
            <p className="text-sm text-gray-800 mb-8">
              Lorem ipsum dolor sit amet consectetur adipiscing Mauris nullam the integer nunc semper nulla faucibus vulputate.
            </p>
            <form className="space-y-6">
              <input
                type="text"
                id="name"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
                placeholder="Full Name"
              />

              <div className="flex flex-col md:flex-row md:gap-4">
                <input
                  type="email"
                  id="email"
                  className="w-full md:w-1/2 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400 mb-4 md:mb-0"
                  placeholder="Email Address"
                />
                <input
                  type="tel"
                  id="tel"
                  className="w-full md:w-1/2 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
                  placeholder="Phone Number"
                />
              </div>

              <textarea
                id="message"
                className="w-full px-4 py-3 h-32 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
                placeholder="Message Here..."
              ></textarea>

              <button
                type="submit"
                className="w-full text-lg bg-[#E9004B] hover:bg-[#c2003f] text-white font-bold py-4 px-5 rounded-lg transition-colors"
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
