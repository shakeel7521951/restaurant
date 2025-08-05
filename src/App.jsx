import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import "./App.css";
import Navbar from "./components/common/Navbar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Contact from "../src/pages/Contact";
import "./App.css"
import Menu from "./pages/Menu";
import Footer from "./components/common/Footer";
import Login from "./components/common/Login";
import Sign_Up from "./components/common/Sign_Up";
import Reservation from "./components/common/Reservation";
import Our_Business from "./components/common/Our_Business";
import Faq from "./components/common/Faq";
import Not_Found from "./components/common/Not_Found";
import Blogs from "./pages/Blogs";
import BlogDetail from "./Blogs/BlogDetail";
import AddToCart from "./pages/AddToCart";


const MainFunction = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    element: <MainFunction />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/contact", element: <Contact /> },
      { path: "/menu", element: <Menu /> },
      { path: "/login", element: <Login /> },
      { path: "/signup", element: <Sign_Up /> },
      { path: "/reservation", element: <Reservation /> },
      { path: "/ourbusiness", element: <Our_Business /> },
      { path: "/faq", element: <Faq /> },
      { path: "/notfound", element: <Not_Found /> }
      { path: "/blogs", element: <Blogs /> },
      { path: "/blogDetail/:id", element: <BlogDetail /> },
      { path: "/cart", element: <AddToCart /> },
    ],

  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
