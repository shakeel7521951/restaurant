import { SlBasket } from "react-icons/sl";
import { useNavigate } from "react-router-dom";
import dealsData from "../../pages/SuperArray"


const SuperDeals = () => {
  const navigate = useNavigate();
  const MovetoSuperD=(deal)=>{
    navigate("/superdetailpage",{state:deal});

  }
  return (
    <section className="container mx-auto    my-12 px-4 md:px-0">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">
        Super Delicious Deals
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-center">
        {dealsData.map((deal) => (
          <article
            key={deal.id}
            className="max-w-sm mx-auto bg-white border border-gray-200 rounded-2xl shadow-lg overflow-hidden group"
          >
            <div className="overflow-hidden cursor-pointer relative"
            onClick={()=>MovetoSuperD(deal)}
            >
              <img
                src={deal.image}
                alt={`${deal.title} - ${deal.category}`}
                className="w-full h-48 object-cover transform transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute bottom-3 left-3 bg-[#E9004B] text-white text-sm font-semibold px-3 py-1 rounded-full shadow-md">
                {deal.discount}
              </div>
            </div>

            <div className="p-5">
              <h2 className="text-xl font-bold mb-1">{deal.title}</h2>
              <p className="text-gray-500 mb-2">{deal.category}</p>
              <h3 className="text-lg font-semibold text-[#E9004B] mb-4">
                {deal.price}
              </h3>

              <button className="flex items-center gap-2 px-4 py-2 border-2 border-[#E9004B] rounded-full text-[#E9004B] hover:bg-[#E9004B] hover:text-white transition-all duration-200">
                <SlBasket className="text-lg" />
                View Options
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default SuperDeals;
