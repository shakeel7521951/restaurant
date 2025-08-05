import { Link } from "react-router-dom";
export default function Our_Business() {
  const sections = [
    {
      image: '/business/b1.jpg',
      title: 'Make a Food Business',
      text: 'Massa a of est sit commodo convallis auctor as aliquet ready ready works any as more sem. Massa a of est sit commodo any convallis. Massa a of est commodo convallis auctor as aliquet ready to ready works any more sem. Massa a of est sit commodo any convallis.Massa a of est commodo convallis auctor as ready works any more sem.',
      texttwo: 'Massa a of est sit commodo convallis auctor as aliquet ready to ready that works any more sem. Massa a of est sit commodo any convallis.Massa of est commodo convallis the dummy auctor.',
      button: 'Make a Deal',
    },
    {
      image: '/business/b2.jpg',
      title: 'Make a Food Business',
      text: 'Massa a of est sit commodo convallis auctor as aliquet ready ready works any as more sem. Massa a of est sit commodo any convallis. Massa a of est commodo convallis auctor as aliquet ready to ready works any more sem. Massa a of est sit commodo any convallis.Massa a of est commodo convallis auctor as ready works any more sem.',
      texttwo: 'Massa a of est sit commodo convallis auctor as aliquet ready to ready that works any more sem. Massa a of est sit commodo any convallis.Massa of est commodo convallis the dummy auctor.',
      button: 'See All Products',
    },
    {
      image: '/business/b3.jpg',
      title: 'Make a Food Business',
      text: 'Massa a of est sit commodo convallis auctor as aliquet ready ready works any as more sem. Massa a of est sit commodo any convallis. Massa a of est commodo convallis auctor as aliquet ready to ready works any more sem. Massa a of est sit commodo any convallis.Massa a of est commodo convallis auctor as ready works any more sem.',
      texttwo: 'Massa a of est sit commodo convallis auctor as aliquet ready to ready that works any more sem. Massa a of est sit commodo any convallis.Massa of est commodo convallis the dummy auctor.',
      button: 'See Product List',
    },
    {
      image: '/business/b4.jpg',
      title: 'Make a Food Business',
      text: 'Massa a of est sit commodo convallis auctor as aliquet ready ready works any as more sem. Massa a of est sit commodo any convallis. Massa a of est commodo convallis auctor as aliquet ready to ready works any more sem. Massa a of est sit commodo any convallis.Massa a of est commodo convallis auctor as ready works any more sem.',
      texttwo: 'Massa a of est sit commodo convallis auctor as aliquet ready to ready that works any more sem. Massa a of est sit commodo any convallis.Massa of est commodo convallis the dummy auctor.',
      button: 'Place Order',
    },
  ];

  return (
<div className="bg-[#FDFDFD]">
{/* Hero section */}
         <section className="relative w-full h-[300px] md:h-[350px]">
              <img
                src="./menu/bread_banner-scaled.jpg"
                alt="Bread on a wooden table - Menu banner"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex flex-col justify-center items-start px-6 md:px-16">
                <h1 className="text-3xl md:text-6xl font-bold mb-2">Our Bussinesses</h1>
                <nav className="text-xl">
                  <Link to="/" className="hover:underline hover:text-[#E9004B] transition-colors">Home</Link>
                  <span className="mx-2">/</span>
                  <span className="text-[#E9004B] font-medium">Our Bussinesses</span>
                </nav>
              </div>
            </section>

{/* Cards section */}
 <div className="grid grid-cols-1 gap-6 p-6 max-w-7xl mx-auto mt-20 mb-20">
      {sections.map((section, index) => (
        <div
          key={index}
          className={`bg-white p-3 rounded-2xl shadow-md border border-gray-200 flex flex-col md:flex-row ${
            index % 2 !== 0 ? 'md:flex-row-reverse' : ''
          } items-center overflow-hidden`}
        >
          <div className="md:w-1/2 w-full h-full">
            <img
              src={section.image}
              alt={section.title}
              className="w-full h-full object-cover rounded-tl-4xl rounded-br-4xl rounded-bl-4xl"
            />
          </div>
          <div className="md:w-1/2 w-full h-full p-6 flex flex-col justify-center text-center md:text-left">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              {section.title}
            </h2>
            <p className="text-gray-600 text-base leading-relaxed mb-4">
              {section.text}
            </p>
            <p className="text-gray-600 text-base leading-relaxed mb-6">
              {section.texttwo}
            </p>
            <button className="self-center md:self-start px-6 py-3 text-sm font-medium text-[#E9004B] border border-pink-400 rounded-full hover:bg-[#c2003f] hover:text-white transition transform animate-scaleIn">
  {section.button}
</button>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
}
