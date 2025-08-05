import { Link } from "react-router-dom";

const Header = () => {
  return (
    <section className="relative w-full h-[300px] md:h-[350px]">
      <img
        src="./menu/bread_banner-scaled.jpg"
        alt="Bread on a wooden table - Menu banner"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 flex flex-col justify-center items-start px-6 md:px-16">
        <h1 className="text-3xl md:text-6xl font-bold mb-2">Contacts</h1>
        <nav className="text-xl">
          <Link to="/" className="hover:underline hover:text-[#E9004B] transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-[#E9004B] font-medium">Contacts</span>
        </nav>
      </div>
    </section>
  );
};

export default Header;
