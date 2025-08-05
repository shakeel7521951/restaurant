import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import "./App.css";
import Footer from "./components/common/Footer";
import Navbar from "./components/common/Navbar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import "./App.css"
import Menu from "./pages/Menu";
import About from "./pages/About";
import Team from "./pages/Team";


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
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/menu", element: <Menu /> },
      { path: "/team", element: <Team /> },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
