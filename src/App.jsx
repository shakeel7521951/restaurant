import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import "./App.css";
import Footer from "./components/common/Footer";
import Navbar from "./components/common/Navbar";
import Home from "./pages/Home";
import Contact from "../src/pages/Contact";
import "./App.css"
import Menu from "./pages/Menu";
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
      { path: "/blogs", element: <Blogs /> },
      { path: "/blogDetail/:id", element: <BlogDetail /> },
      { path: "/cart", element:<AddToCart/>  },
    ],

  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
